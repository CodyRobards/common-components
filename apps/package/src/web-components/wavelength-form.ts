import { ZodObject, ZodRawShape, ZodIssue } from "zod";
import { zodToFields } from "../form/zodToFields";
import { FieldDef, FormValue } from "../types/fields";
import { Validator } from "../form/Validator"; // file 4 will re-export your existing Validator

type Shape = ZodRawShape;

type ButtonConfig = {
  label?: string;
  buttonProps?: Record<string, any>;
  eventName?: string;
};

export class WavelengthForm<T extends object> extends HTMLElement {
  private _schema?: ZodObject<Shape>;
  private _validator?: Validator<T>;
  private _shadow: ShadowRoot;
  private _fields: FieldDef[] = [];
  private _value: FormValue = {};
  private _errors: Record<string, string> = {};
  private _leftButton?: ButtonConfig;
  private _centerButton?: ButtonConfig;
  private _rightButton?: ButtonConfig;
  private _inputProps: Record<string, any> = {};
  private _idPrefix = "";
  private _title = "";
  private _titleAlign: string = "left";
  private _formWidth: string = "";
  private _layout?: number[];

  static get observedAttributes() {
    // schema is a property, not an attribute
    return ["id-prefix", "title", "title-align", "form-width"];
  }

  constructor() {
    super();
    this._shadow = this.attachShadow({ mode: "open" });
  }

  // --- Public API ---

  /**
   * Assign a Zod object schema to render. (required)
   */
  set schema(s: ZodObject<Shape> | undefined) {
    this._schema = s;
    this._validator = s ? new Validator<T>(s as unknown as any) : undefined;
    this._fields = s ? zodToFields(s) : [];
    // reset errors when schema changes
    this._errors = {};
    this.render();
  }
  get schema(): ZodObject<Shape> | undefined {
    return this._schema;
  }

  /**
   * Optional initial values. You can also set individual values
   * by dispatching inputChange from your inputs after mount.
   */
  set value(v: FormValue | undefined) {
    this._value = v ?? {};
    this.render();
  }
  get value(): FormValue {
    return this.collectValues();
  }

  set leftButton(v: ButtonConfig | undefined) {
    this._leftButton = v;
    this.render();
  }
  get leftButton(): ButtonConfig | undefined {
    return this._leftButton;
  }

  set centerButton(v: ButtonConfig | undefined) {
    this._centerButton = v;
    this.render();
  }
  get centerButton(): ButtonConfig | undefined {
    return this._centerButton;
  }

  set rightButton(v: ButtonConfig | undefined) {
    this._rightButton = v;
    this.render();
  }
  get rightButton(): ButtonConfig | undefined {
    return this._rightButton;
  }

  set inputProps(v: Record<string, any> | undefined) {
    this._inputProps = v ?? {};
    this.render();
  }
  get inputProps(): Record<string, any> | undefined {
    return this._inputProps;
  }

  set idPrefix(v: string | undefined) {
    this._idPrefix = v ?? "";
    this.render();
  }
  get idPrefix(): string | undefined {
    return this._idPrefix || undefined;
  }

  /** Heading text displayed above the form */
  set title(v: string) {
    this._title = v ?? "";
    if (v === "") {
      this.removeAttribute("title");
    } else {
      this.setAttribute("title", v);
    }
    this.render();
  }
  get title(): string {
    return this._title;
  }

  /** CSS text-align value applied to the heading */
  set titleAlign(v: string | undefined) {
    this._titleAlign = v ?? "left";
    this.setAttribute("title-align", this._titleAlign);
    this.render();
  }
  get titleAlign(): string {
    return this._titleAlign;
  }

  /** Width applied to the form element */
  set formWidth(v: string | undefined) {
    this._formWidth = v ?? "";
    if (v === undefined) {
      this.removeAttribute("form-width");
    } else {
      this.setAttribute("form-width", this._formWidth);
    }
    this.render();
  }
  get formWidth(): string | undefined {
    return this._formWidth || undefined;
  }

  /** Array describing how many fields appear in each row */
  set layout(v: number[] | undefined) {
    this._layout = v;
    this.render();
  }
  get layout(): number[] | undefined {
    return this._layout;
  }

  /**
   * Imperative validation without submitting.
   * Returns true if the current form values are valid.
   */
  public validate(): boolean {
    return this.validateAll().isValid;
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name: string, _old: string | null, value: string | null) {
    if (name === "id-prefix") {
      this._idPrefix = value ?? "";
      this.render();
    } else if (name === "title") {
      this._title = value ?? "";
      this.render();
    } else if (name === "title-align") {
      this._titleAlign = value ?? "left";
      this.render();
    } else if (name === "form-width") {
      this._formWidth = value ?? "";
      this.render();
    }
  }

  // --- Internal helpers ---

  private collectValues(): FormValue {
    const next: FormValue = {};
    for (const f of this._fields) {
      const el = this.queryFieldEl(f.name);
      if (!el) continue;

      if (f.type === "checkbox") {
        next[f.name] = (el as HTMLInputElement).checked;
      } else if (f.type === "number") {
        const val = (el as any).value ?? "";
        next[f.name] = val === "" ? undefined : Number(val);
      } else {
        const val = (el as any).value ?? "";
        next[f.name] = val;
      }
    }
    return next;
  }

  private queryFieldEl(name: string): HTMLElement | null {
    return this._shadow.querySelector<HTMLElement>(`[data-name="${name}"]`);
  }

  private setFieldError(name: string, message?: string) {
    const el = this.queryFieldEl(name);
    if (!el) return;

    if (message) {
      const existing = this._errors[name];
      const pieces = [...(existing ? existing.split("\n") : []), ...message.split("\n")].filter((m) => m !== "");
      const combined = Array.from(new Set(pieces)).join("\n");
      el.setAttribute("error-message", combined);
      el.setAttribute("force-error", "");
      this._errors[name] = combined;
    } else {
      el.removeAttribute("force-error");
      el.removeAttribute("error-message");
      delete this._errors[name];
    }
  }

  private validateField(name: string, value: unknown) {
    if (!this._validator) return;
    const res = this._validator.validateProperty(name as keyof T, value);
    if (res.isValid) {
      this.setFieldError(name, undefined);
    } else {
      const issues = res.issues?.filter((i) => (i.path?.[0] as string) === name) ?? [];
      const messages = issues.map((i) => i.message).join("\n");
      this.setFieldError(name, issues.length > 0 ? messages : "Invalid value");
    }
  }

  private validateAll(): { isValid: boolean; value: FormValue; issues: ZodIssue[] } {
    if (!this._validator) {
      return { isValid: true, value: this.collectValues(), issues: [] };
    }
    const values = this.collectValues();

    // clear all first
    for (const f of this._fields) this.setFieldError(f.name, undefined);

    const res = this._validator.validate(values as unknown);
    if (res.isValid) {
      return { isValid: true, value: res.value as unknown as FormValue, issues: [] };
    }

    for (const f of this._fields) {
      const issues = res.issues?.filter((i) => (i.path?.[0] as string) === f.name) ?? [];
      if (issues.length > 0) {
        const messages = issues.map((i) => i.message).join("\n");
        this.setFieldError(f.name, messages);
      }
    }
    return { isValid: false, value: values, issues: res.issues ?? [] };
  }

  // --- Event handlers ---

  private onInputChange = (name: string, rawValue: unknown) => {
    this._value = { ...this._value, [name]: rawValue };
    const res = this._validator?.validate(this._value as unknown);
    const issues = res && !res.isValid ? (res.issues ?? []) : [];
    this.dispatchEvent(
      new CustomEvent("form-change", {
        detail: { value: { ...this._value }, issues },
      }),
    );
  };

  private onBlur = (name: string) => {
    const field = this._fields.find((f) => f.name === name);
    const el = this.queryFieldEl(name);
    if (!field || !el) return;

    let value: unknown;
    if (field.type === "checkbox") {
      value = (el as HTMLInputElement).checked;
    } else if (field.type === "number") {
      const raw = (el as any).value ?? "";
      value = raw === "" ? undefined : Number(raw);
    } else {
      value = (el as any).value ?? "";
    }
    this.validateField(name, value);
  };

  private onSubmit = (e: Event) => {
    e.preventDefault();
    const res = this.validateAll();
    if (res.isValid) {
      this.dispatchEvent(new CustomEvent("form-valid", { detail: { value: res.value, issues: [] } }));
    } else {
      this.dispatchEvent(new CustomEvent("form-invalid", { detail: { value: res.value, issues: res.issues } }));
    }
  };

  // --- Rendering ---

  private render() {
    // minimal styling — keep it simple for MVP
    const css = /*css*/ `
      :host { display: block; font: 14px/1.4 system-ui, sans-serif; }
      form { display: grid; gap: 12px; }
      .field-row { display: grid; gap: 12px; }
      .row { display: grid; gap: 6px; }
      .checkbox-row { display: flex; align-items: center; gap: 6px; }
      .actions {
        margin-top: 8px;
        display: flex;
        gap: 8px;
      }
      .actions > .left,
      .actions > .center,
      .actions > .right {
        flex: 1;
        display: flex;
      }
      .actions > .left { justify-content: flex-start; }
      .actions > .center { justify-content: center; }
      .actions > .right { justify-content: flex-end; }
    `;

    const form = document.createElement("form");
    form.noValidate = true;
    form.addEventListener("submit", this.onSubmit);
    if (this._formWidth) {
      form.style.width = this._formWidth;
    }

    // determine layout rows
    const layout: number[] = this._layout && this._layout.length > 0 ? [...this._layout] : [];
    let total = layout.reduce((a, b) => a + b, 0);
    while (total < this._fields.length) {
      layout.push(1);
      total += 1;
    }

    let fieldIndex = 0;
    for (const cols of layout) {
      if (fieldIndex >= this._fields.length) break;
      const rowWrap = document.createElement("div");
      rowWrap.className = "field-row";
      rowWrap.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

      for (let i = 0; i < cols && fieldIndex < this._fields.length; i++) {
        const f = this._fields[fieldIndex++];
        const cell = document.createElement("div");
        cell.className = f.type === "checkbox" ? "row checkbox-row" : "row";
        const id = this._idPrefix ? `${this._idPrefix}-${f.name}` : f.name;

        if (f.type === "checkbox") {
          const input = document.createElement("input");
          input.type = "checkbox";
          input.id = id;
          input.setAttribute("data-name", f.name);
          input.name = f.name;
          if (this._value[f.name] !== undefined) {
            input.checked = Boolean(this._value[f.name]);
          }

          input.addEventListener("change", () => {
            this.onInputChange(f.name, input.checked);
          });
          input.addEventListener("blur", () => this.onBlur(f.name));

          const label = document.createElement("label");
          label.htmlFor = id;
          label.textContent = f.label;

          cell.appendChild(input);
          cell.appendChild(label);
        } else {
          const input = document.createElement("wavelength-input") as HTMLElement & {
            value: string;
            setAttribute: (k: string, v?: string) => void;
            removeAttribute: (k: string) => void;
          };

          if (this._inputProps) {
            for (const [key, value] of Object.entries(this._inputProps)) {
              if (value !== undefined) input.setAttribute(key, String(value));
            }
          }

          input.setAttribute("data-name", f.name);
          input.setAttribute("name", f.name);
          if (f.placeholder !== undefined) {
            input.setAttribute("placeholder", f.placeholder);
            input.setAttribute("label", f.placeholder);
          } else {
            input.setAttribute("label", f.label);
          }
          input.setAttribute("validation-type", "manual"); // form drives error visuals
          input.setAttribute("id", id);
          if (f.type === "number") {
            input.setAttribute("input-type", "number");
          }
          if (f.required) {
            input.setAttribute("required", "");
          }
          if (f.minLength !== undefined) {
            input.setAttribute("min-length", String(f.minLength));
          }
          if (f.maxLength !== undefined) {
            input.setAttribute("max-length", String(f.maxLength));
          }
          if (this._value[f.name] !== null && this._value[f.name] !== undefined) {
            input.value = String(this._value[f.name]);
          }

          // bridge events
          input.addEventListener("inputChange", ((e: Event) => {
            const detail = (e as CustomEvent).detail ?? {};
            let val: unknown = detail.value ?? "";
            if (f.type === "number") {
              val = val === "" ? "" : Number(val);
            }
            this.onInputChange(f.name, val);
          }) as EventListener);

          input.addEventListener("blur", (() => this.onBlur(f.name)) as EventListener);

          cell.appendChild(input);
        }

        rowWrap.appendChild(cell);
      }

      form.appendChild(rowWrap);
    }

    const actions = document.createElement("div");
    actions.className = "actions";

    const leftSlot = document.createElement("div");
    leftSlot.className = "left";
    const centerSlot = document.createElement("div");
    centerSlot.className = "center";
    const rightSlot = document.createElement("div");
    rightSlot.className = "right";

    const buildButton = (cfg: ButtonConfig, defaultEvent: string, defaultType: "button" | "submit") => {
      const btn = document.createElement("wavelength-button");
      const type = (cfg.buttonProps?.type as string) ?? defaultType;
      if (cfg.buttonProps) {
        for (const [key, value] of Object.entries(cfg.buttonProps)) {
          if (key === "type") continue;
          if (value !== undefined) btn.setAttribute(key, String(value));
        }
      }
      btn.setAttribute("type", type);
      if (cfg.label) btn.textContent = cfg.label;
      btn.addEventListener("click", (e) => {
        const ev = cfg.eventName ?? defaultEvent;
        if (type === "submit") {
          form.requestSubmit();
        } else {
          e.preventDefault();
        }
        this.dispatchEvent(new CustomEvent(ev));
      });
      return btn;
    };

    if (this._leftButton) {
      leftSlot.appendChild(buildButton(this._leftButton, "form-back", "button"));
    }

    if (this._centerButton) {
      centerSlot.appendChild(buildButton(this._centerButton, "form-center", "button"));
    }

    if (this._rightButton) {
      rightSlot.appendChild(buildButton(this._rightButton, "form-submit", "submit"));
    }

    if (leftSlot.children.length + centerSlot.children.length + rightSlot.children.length > 0) {
      actions.append(leftSlot, centerSlot, rightSlot);
      form.appendChild(actions);
    }

    // mount
    this._shadow.innerHTML = `<style>${css}</style>`;
    if (this._title) {
      const heading = document.createElement("h2");
      heading.textContent = this._title;
      heading.style.textAlign = this._titleAlign;
      this._shadow.appendChild(heading);
    }
    this._shadow.appendChild(form);

    // reapply existing error state if any (e.g., after re-render)
    for (const [name, msg] of Object.entries(this._errors)) {
      this.setFieldError(name, msg);
    }
  }
}

if (!customElements.get("wavelength-form")) {
  customElements.define("wavelength-form", WavelengthForm);
}
