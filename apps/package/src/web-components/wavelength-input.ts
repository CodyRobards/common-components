const template = document.createElement("template");
template.innerHTML = `
<style>  
  :host {  
    display: inline-block;  
    font-family: sans-serif;  
    --wavelength-container-background: #f8f8f8;  
    --wavelength-label-background: #ffffff;  
  }  

  .field-wrapper {  
    position: relative;  
  }  

  .floating-label {  
    position: absolute;  
    top: -0.325rem;  
    left: 12px;  
    font-size: 0.75rem;  
    line-height: 1;  
    color: var(--wavelength-label-color, #666666);  
    padding: 0 4px;  
    z-index: 1;  
    pointer-events: none;  
    user-select: none;  
  }  

  .floating-label::before,  
  .floating-label::after {  
    content: '';  
    position: absolute;  
    left: 0;  
    width: 100%;  
    z-index: -1;  
  }  

  .floating-label::before {  
    top: 0;  
    height: 50%;  
    background: var(--wavelength-container-background, white);  
  }  

  .floating-label::after {  
    bottom: 0;  
    height: 50%;  
    background: var(--wavelength-label-background, #ffffff);  
  }  

  :host([disabled]) .floating-label::before {  
    opacity: 0;  
  }  

  input {  
    font-size: 16px;  
    padding: 16.5px 14px;  
    border: 1px solid var(--wavelength-border-color, #cccccc);  
    border-radius: 8px;  
    width: 100%;  
    box-sizing: border-box;  
    background-color: var(--wavelength-background, #ffffff);  
    transition: border-color 0.2s ease;  
    overflow: auto;  
    font-family: inherit;  
  }  

  input:focus {  
    outline: none;  
  }  

  input:disabled {  
    opacity: 0.5;  
    cursor: not-allowed;  
  }  

  :host([disabled]) .floating-label::after {  
    opacity: 0;  
    cursor: not-allowed;  
  }  

  input::placeholder {  
    color: #999999;  
  }  

  .helper-message {  
    margin-top: 4px;  
    font-size: 0.75rem;  
    max-width: 100%;  
    word-wrap: break-word;  
    white-space: normal;  
    overflow-wrap: break-word;  
    color: #000000;
    padding-left: 14px;
    margin-left: 2px;
    user-select: none;  
  }

  .required-marker {
    color: red;
    font-weight: lighter;
    font-size: 0.75rem;  
  }
  
  .clear-button {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.25 rem;
    color: #666666;
    cursor: pointer;
    opacity: 0.5;
    user-select: none;
    transition: opacity 0.2s ease;
    z-index: 2;
    display: none;
    line-height: 1;
    padding: 0 4px;
  }

  .clear-button:hover {
    opacity: 1;
  }

  :host([disabled]) .clear-button {
    display: none;
  }
 
</style>
<div class="field-wrapper">
  <label class="floating-label" id="floating-label"></label>
  <div class="input-wrapper"></div>
  <div class="clear-button" id="clear-button" title="Clear input">✕</div>
</div>
<div class="helper-message" id="helper"></div>
`;

export class WavelengthInput extends HTMLElement {
  private inputEl: HTMLInputElement;
  private labelEl: HTMLLabelElement;
  private helperEl: HTMLDivElement;
  private clearButtonEl: HTMLDivElement;
  private placeholderStyleEl = document.createElement("style");
  private isFocused = false;
  private hasBlurred = false;
  private validationType: "none" | "always" | "onBlur" | "manual" = "none";
  private forceError = false;
  private _bgObserver: MutationObserver | null = null;
  private _debounceValidate: () => void = () => {};
  private _debounceTimeout: number | null = null;
  private _lastErrorMessage = "";
  private internals: ElementInternals;
  static formAssociated = true;

  static get observedAttributes() {
    return [
      "id",
      "name",
      "placeholder",
      "value",
      "clearable",
      "input-type",
      "disabled",
      "width",
      "height",
      "padding",
      "border-radius",
      "background-color",
      "label-color",
      "placeholder-color",
      "text-color",
      "border-color",
      "focus-color",
      "helper-color",
      "regex",
      "helper-message",
      "error-message",
      "min-length-message",
      "max-length-message",
      "validation-type",
      "min-length",
      "max-length",
      "required",
      "force-error",
      "label",
    ];
  }

  constructor() {
    super();
    this.internals = this.attachInternals();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(template.content.cloneNode(true));
    this.inputEl = document.createElement("input");
    this.labelEl = shadow.getElementById("floating-label") as HTMLLabelElement;
    this.helperEl = shadow.getElementById("helper") as HTMLDivElement;
    this.clearButtonEl = shadow.getElementById("clear-button") as HTMLDivElement;
    this.clearButtonEl.addEventListener("click", this._onClearClick);

    shadow.querySelector(".input-wrapper")!.appendChild(this.inputEl);
    shadow.appendChild(this.placeholderStyleEl);
  }

  connectedCallback() {
    ["placeholder", "value", "input-type", "disabled", "id", "name"].forEach(this._upgradeProperty.bind(this));
    this.validationType = (this.getAttribute("validation-type") as typeof this.validationType) || "none";

    this.inputEl.id = this.getAttribute("id") || "";
    this.inputEl.name = this.getAttribute("name") || "";

    this._applyAttributes();
    this._setupDebouncedValidation();

    const maxLengthAttr = this.getAttribute("max-length");
    const value = this.inputEl?.value?.trim?.() || "";

    this.inputEl.addEventListener("input", this._onInput);
    this.inputEl.addEventListener("blur", this._onBlur);
    this.inputEl.addEventListener("focus", this._onFocus);

    if (this.hasAttribute("force-error")) {
      this._validate(true);
    }

    if (this.validationType !== "none" && maxLengthAttr && value.length > parseInt(maxLengthAttr, 10)) {
      this._validate(true);
    }

    this._startBackgroundObserver();
    this._toggleClearButton();

    (this as any).validate = (bypass = false) => this._validate(bypass);
  }

  disconnectedCallback() {
    this.inputEl.removeEventListener("input", this._onInput);
    this.inputEl.removeEventListener("blur", this._onBlur);
    this.inputEl.removeEventListener("focus", this._onFocus);
    this._stopBackgroundObserver();
  }

  private _startBackgroundObserver() {
    this._stopBackgroundObserver();

    this._bgObserver = new MutationObserver(() => {
      requestAnimationFrame(() => this._applyColors());
    });

    let ancestor: HTMLElement | null = this.parentElement;
    while (ancestor && ancestor !== document.body) {
      this._bgObserver.observe(ancestor, {
        attributes: true,
        attributeFilter: ["class", "style"],
      });
      ancestor = ancestor.parentElement;
    }

    this._bgObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ["class", "style"],
    });
  }
  private _stopBackgroundObserver() {
    if (this._bgObserver) {
      this._bgObserver.disconnect();
      this._bgObserver = null;
    }
  }

  private _setupDebouncedValidation() {
    this._debounceValidate = () => {
      if (this._debounceTimeout !== null) {
        clearTimeout(this._debounceTimeout);
      }
      this._debounceTimeout = window.setTimeout(() => this._validate(), 200);
    };
  }
  private _onInput = () => {
    this.setAttribute("value", this.inputEl.value);
    this.internals.setFormValue(this.inputEl.value);
    this.dispatchEvent(
      new CustomEvent("inputChange", {
        bubbles: true,
        detail: { value: this.inputEl.value },
      }),
    );
    this._toggleClearButton();
    if (this.validationType === "always") this._debounceValidate();
  };
  private _onFocus = () => {
    this.isFocused = true;
    if (this._validate()) {
      this.inputEl.style.borderColor = this.getAttribute("focus-color") || "#5e9ed6";
    }
    this.inputEl.setAttribute("aria-required", this.required.toString());
  };

  private _onBlur = () => {
    this.isFocused = false;

    if (this.validationType !== "manual") {
      this.hasBlurred = true;
    }

    const shouldValidate = this.validationType === "onBlur" || this.validationType === "always";

    if (shouldValidate) {
      const isValid = this._validate();
      if (isValid) {
        this.inputEl.style.borderColor = this.getAttribute("border-color") || "#cccccc";
      }
    } else {
      this.inputEl.style.borderColor = this.getAttribute("border-color") || "#cccccc";
    }
  };

  private _validate(bypassTypeCheck = false): boolean {
    const regexAttr = this.getAttribute("regex");
    const errorMessage = this.getAttribute("error-message");
    const minLengthMessage = this.getAttribute("min-length-message");
    const maxLengthMessage = this.getAttribute("max-length-message");
    const helperMessage = this.getAttribute("helper-message");
    const value = this.inputEl.value.trim();
    const validationType = this.getAttribute("validation-type") as "none" | "always" | "onBlur" | "manual" | null;
    const isRequired = this.required;
    const isEmpty = value === "";
    const minLengthAttr = this.getAttribute("min-length");
    const maxLengthAttr = this.getAttribute("max-length");

    const force = this.forceError || this.hasAttribute("force-error");

    // Early exit if validation is off and not being overridden
    if (!bypassTypeCheck && (validationType === "manual" || validationType === "none") && !force) {
      return true;
    }

    const shouldValidate = bypassTypeCheck || validationType === "always" || (validationType === "onBlur" && this.hasBlurred);
    const errors = new Set<string>();

    if (force) {
      if (errorMessage) {
        errors.add(errorMessage);
      }
      errors.add("This field is required.");
    }

    if (!force) {
      if (isRequired && isEmpty && shouldValidate) {
        if (errorMessage) {
          errors.add(errorMessage);
        }
        errors.add("This field is required.");
      }

      if (regexAttr && !isEmpty && shouldValidate) {
        try {
          const regex = new RegExp(regexAttr);
          if (!regex.test(value)) {
            errors.add(errorMessage ?? "Input does not match the required pattern.");
          }
        } catch (e) {
          console.warn(`[WavelengthInput] Invalid regex pattern: "${regexAttr}"`, e);
          errors.add("Invalid regex pattern.");
        }
      }

      const min = parseInt(minLengthAttr ?? "", 10);
      if (!isNaN(min) && value.length < min && shouldValidate) {
        errors.add(minLengthMessage ?? `MINIMUM length is ${min} characters.`);
      }

      const max = parseInt(maxLengthAttr ?? "", 10);
      if (!isNaN(max) && value.length > max && shouldValidate) {
        errors.add(maxLengthMessage ?? `MAXIMUM length is ${max} characters.`);
      }
    }

    if (errors.size > 0) {
      const message = Array.from(errors).join("\n");
      if (message !== this._lastErrorMessage) {
        this._showError(message);
      }
      return false;
    }

    this._clearError(helperMessage || "");
    return true;
  }

  private _showError(message: string) {
    const htmlMessage = message.replace(/\n/g, "<br>");
    this.helperEl.innerHTML = htmlMessage;
    this.helperEl.classList.add("error");
    this.inputEl.style.borderColor = "red";
    this.helperEl.style.color = "red";
    this.inputEl.setAttribute("aria-invalid", "true");
    this.setAttribute("data-error", "true");
    this._lastErrorMessage = message;
  }

  private _clearError(helperText: string) {
    const borderColor = this.isFocused ? this.getAttribute("focus-color") || "#5e9ed6" : this.getAttribute("border-color") || "#cccccc";
    const helperColor = this.getAttribute("helper-color") || "#000000";

    this.helperEl.textContent = helperText;
    this.helperEl.classList.remove("error");
    this.helperEl.style.color = helperColor;
    this.inputEl.style.borderColor = borderColor;
    this.inputEl.setAttribute("aria-invalid", "false");
    this.removeAttribute("data-error");
    this._applyValidationHint();
    this._lastErrorMessage = "";
  }

  private _applyAttributes() {
    this._applyContent();
    this._applyLayout();
    this._applyColors();
    this._applyValidationHint();
    this._applyAccessibility();

    if (this.hasAttribute("force-error")) {
      this._validate(true);
    }
  }

  private _updateRequiredMarker() {
    const markerEl = this.labelEl.querySelector(".required-marker") as HTMLElement;
    const isRequired = this.required;

    if (markerEl) {
      markerEl.textContent = isRequired ? "*" : "";
    }
  }

  private _onClearClick = () => {
    if (this.disabled) return;
    this.inputEl.value = "";
    this.setAttribute("value", "");
    this._toggleClearButton();
    this._validate();
    this.dispatchEvent(
      new CustomEvent("inputChange", {
        bubbles: true,
        detail: { value: "" },
      }),
    );
  };

  private _toggleClearButton() {
    const isClearable = this.hasAttribute("clearable");
    const hasValue = !!this.inputEl.value;

    if (isClearable && !this.disabled && hasValue) {
      this.clearButtonEl.style.display = "block";
    } else {
      this.clearButtonEl.style.display = "none";
    }
  }

  private _applyContent() {
    const label = this.getAttribute("label");
    const minLength = this.getAttribute("min-length");
    const maxLength = this.getAttribute("max-length");

    if (minLength) this.inputEl.minLength = Number(minLength);
    if (maxLength) this.inputEl.maxLength = Number(maxLength);

    this.inputEl.placeholder = this.getAttribute("placeholder") || "";
    this.inputEl.value = this.getAttribute("value") || "";
    this.inputEl.type = this.getAttribute("input-type") || "text";
    this.inputEl.disabled = this.disabled;

    this.labelEl.innerHTML = `
      <span class="label-text">${label || ""}</span>
      <span class="required-marker" style="color: red;" aria-hidden="true"></span>
    `;
    this.labelEl.style.display = label ? "block" : "none";

    this._updateRequiredMarker();
  }

  private _applyLayout() {
    const width = this.getAttribute("width") || "320px";
    const rawPadding = this.getAttribute("padding") || "16.5px 14px";

    const paddingParts = rawPadding.trim().split(/\s+/);

    let leftPaddingPx: number;
    switch (paddingParts.length) {
      case 1: // padding: all
        leftPaddingPx = parseInt(paddingParts[0], 10);
        break;
      case 2: // padding: top/bottom left/right
        leftPaddingPx = parseInt(paddingParts[1], 10);
        break;
      case 3: // padding: top left/right bottom
        leftPaddingPx = parseInt(paddingParts[1], 10);
        break;
      case 4: // padding: top right bottom left
        leftPaddingPx = parseInt(paddingParts[3], 10);
        break;
      default:
        leftPaddingPx = 14;
    }

    const parsedWidth = parseInt(width, 10);
    const helperWidth = `${parsedWidth - leftPaddingPx}px`;

    this.inputEl.style.width = width;
    this.inputEl.style.padding = rawPadding;
    this.inputEl.style.height = this.getAttribute("height") || "";
    this.inputEl.style.borderRadius = this.getAttribute("border-radius") || "8px";

    this.helperEl.style.width = helperWidth;
    this.helperEl.style.paddingLeft = `${leftPaddingPx}px`;
  }

  private _applyColors() {
    const InputBg = this.getAttribute("background-color") || "#ffffff";
    const border = this.getAttribute("border-color");
    const text = this.getAttribute("text-color") || "#000000";
    const placeholder = this.getAttribute("placeholder-color");
    const labelColor = this.getAttribute("label-color");
    const helperColor = this.getAttribute("helper-color") || "#000000";

    if (!this.helperEl.classList.contains("error")) {
      this.helperEl.style.color = helperColor;
    }

    let containerBg = "#f8f8f8";
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let el: HTMLElement | null = this;

    while (el && el !== document.body) {
      const bg = getComputedStyle(el).backgroundColor;
      if (bg && bg !== "transparent" && !bg.includes("rgba(0, 0, 0, 0)")) {
        containerBg = bg;
        break;
      }
      el = el.parentElement;
    }

    this.inputEl.style.backgroundColor = InputBg;
    this.labelEl.style.setProperty("--wavelength-label-background", InputBg);
    this.labelEl.style.setProperty("--wavelength-container-background", containerBg);
    this.labelEl.style.setProperty("--wavelength-label-color", labelColor || "#666666");

    if (border) this.inputEl.style.borderColor = border;
    if (text) this.inputEl.style.color = text;
    if (placeholder) {
      this.placeholderStyleEl.textContent = `
        input::placeholder {
          color: ${placeholder};
          user-select: none;
        }
      `;
    }
  }

  private _applyValidationHint() {
    const helper = this.getAttribute("helper-message") || "";
    const helperColor = this.getAttribute("helper-color") || "#000000";
    const hasError = this.hasAttribute("data-error");

    if (!hasError) {
      this.helperEl.textContent = helper;
      this.helperEl.style.color = helperColor;
    }
  }

  private _applyAccessibility() {
    this.inputEl.setAttribute("aria-describedby", "helper");
    this.inputEl.setAttribute("aria-labelledby", "floating-label");
    this.inputEl.setAttribute("aria-required", this.required.toString());
  }
  private _upgradeProperty(prop: string) {
    if (Object.prototype.hasOwnProperty.call(this, prop)) {
      const value = (this as any)[prop];
      delete (this as any)[prop];
      (this as any)[prop] = value;
    }
  }

  attributeChangedCallback(name: string, _oldValue: string | null, newValue: string | null) {
    const validTypes = ["none", "always", "onBlur", "manual"];

    switch (name) {
      case "id":
        this.inputEl.id = newValue || "";
        break;
      case "name":
        this.inputEl.name = newValue || "";
        break;
      case "label":
        this._applyContent();
        break;
      case "helper-message":
        this._applyValidationHint();
        break;
      case "error-message":
      case "force-error":
        this._applyAttributes();
        if (!this.hasAttribute("error-message") && !this.hasAttribute("force-error")) {
          this._clearError(this.getAttribute("helper-message") || "");
        }
        break;
      case "validation-type":
        this.validationType = validTypes.includes(newValue as string) ? (newValue as typeof this.validationType) : "none";
        break;
      case "value":
        this.inputEl.value = newValue || "";
        break;
      case "clearable":
        this._toggleClearButton();
        break;
      case "required":
        this._updateRequiredMarker();
        break;
      default:
        this._applyAttributes();
        break;
    }
  }

  get id() {
    return this.getAttribute("id") ?? "";
  }
  set id(val: string) {
    if (val !== null && val !== undefined) {
      this.setAttribute("id", val);
    } else {
      this.removeAttribute("id");
    }
  }
  get name() {
    return this.getAttribute("name") ?? "";
  }
  set name(val: string) {
    if (val !== null && val !== undefined) {
      this.setAttribute("name", val);
    } else {
      this.removeAttribute("name");
    }
  }
  get value() {
    return this.inputEl.value;
  }
  set value(val: string) {
    this.setAttribute("value", val);
  }
  get placeholder() {
    return this.getAttribute("placeholder") ?? "";
  }
  set placeholder(val: string) {
    this.setAttribute("placeholder", val);
  }
  get required() {
    return this.hasAttribute("required");
  }
  set required(val: boolean) {
    val ? this.setAttribute("required", "") : this.removeAttribute("required");
  }
  get disabled() {
    return this.hasAttribute("disabled");
  }
  set disabled(val: boolean) {
    val ? this.setAttribute("disabled", "") : this.removeAttribute("disabled");
  }
  get clearable() {
    return this.hasAttribute("clearable");
  }
  set clearable(val: boolean) {
    val ? this.setAttribute("clearable", "") : this.removeAttribute("clearable");
  }
}

if (!customElements.get("wavelength-input")) {
  customElements.define("wavelength-input", WavelengthInput);
}
