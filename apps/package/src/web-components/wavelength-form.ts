import { ZodObject, ZodRawShape } from "zod";
import { zodToTextFields } from "../form/zodToFields";
import { FieldDef, FormValue } from "../types/fields";
import { Validator } from "../form/Validator"; // file 4 will re-export your existing Validator

type Shape = ZodRawShape;

export class WavelengthForm<T extends object> extends HTMLElement {
  private _schema?: ZodObject<Shape>;
  private _validator?: Validator<T>;
  private _shadow: ShadowRoot;
  private _fields: FieldDef[] = [];
  private _value: FormValue = {};
  private _errors: Record<string, string> = {};

  static get observedAttributes() {
    // schema is a property, not an attribute
    return [];
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
    this._fields = s ? zodToTextFields(s) : [];
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

  /**
   * Imperative validation without submitting.
   * Returns true if the current form values are valid.
   */
  public validate(): boolean {
    return this.validateAll();
  }

  connectedCallback() {
    this.render();
  }

  // --- Internal helpers ---

  private collectValues(): FormValue {
    const next: FormValue = {};
    for (const f of this._fields) {
      const el = this.queryFieldEl(f.name);
      if (!el) continue;
      // wavelength-input exposes .value as string
      const val = (el as any).value ?? "";
      next[f.name] = val;
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
      el.setAttribute("error-message", message);
      el.setAttribute("force-error", "");
      this._errors[name] = message;
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
      const issue = res.issues?.find((i) => (i.path?.[0] as string) === name);
      this.setFieldError(name, issue?.message || "Invalid value");
    }
  }

  private validateAll(): boolean {
    if (!this._validator) return true;
    const values = this.collectValues();

    // clear all first
    for (const f of this._fields) this.setFieldError(f.name, undefined);

    const res = this._validator.validate(values as unknown);
    if (res.isValid) return true;

    res.issues?.forEach((issue) => {
      const field = (issue.path?.[0] as string) || "";
      if (field) this.setFieldError(field, issue.message);
    });
    return false;
  }

  // --- Event handlers ---

  private onInputChange = (name: string, rawValue: unknown) => {
    this._value = { ...this._value, [name]: rawValue };
    this.dispatchEvent(new CustomEvent("form-change", { detail: { ...this._value } }));
  };

  private onBlur = (name: string) => {
    const el = this.queryFieldEl(name);
    const value = (el as any)?.value ?? "";
    this.validateField(name, value);
  };

  private onSubmit = (e: Event) => {
    e.preventDefault();
    const ok = this.validateAll();
    if (ok) {
      const data = this.collectValues();
      this.dispatchEvent(new CustomEvent("form-valid", { detail: data }));
    } else {
      this.dispatchEvent(new CustomEvent("form-invalid", { detail: { errors: { ...this._errors } } }));
    }
  };

  // --- Rendering ---

  private render() {
    // minimal styling — keep it simple for MVP
    const css = /*css*/ `
      :host { display: block; font: 14px/1.4 system-ui, sans-serif; }
      form { display: grid; gap: 12px; }
      .row { display: grid; gap: 6px; }
      .actions { margin-top: 8px; }
      button { padding: 10px 14px; border: 0; border-radius: 6px; cursor: pointer; }
    `;

    const form = document.createElement("form");
    form.noValidate = true;
    form.addEventListener("submit", this.onSubmit);

    // one wavelength-input per string field
    for (const f of this._fields) {
      const row = document.createElement("div");
      row.className = "row";

      const input = document.createElement("wavelength-input") as HTMLElement & {
        value: string;
        setAttribute: (k: string, v?: string) => void;
        removeAttribute: (k: string) => void;
      };

      input.setAttribute("data-name", f.name);
      input.setAttribute("name", f.name);
      input.setAttribute("label", f.label);
      input.setAttribute("validation-type", "manual"); // form drives error visuals
      if (this._value[f.name] !== null) {
        input.value = String(this._value[f.name] ?? "");
      }

      // bridge events
      input.addEventListener("inputChange", ((e: Event) => {
        const detail = (e as CustomEvent).detail ?? {};
        this.onInputChange(f.name, detail.value ?? "");
      }) as EventListener);

      input.addEventListener("blur", (() => this.onBlur(f.name)) as EventListener);

      row.appendChild(input);
      form.appendChild(row);
    }

    // basic submit button
    const actions = document.createElement("div");
    actions.className = "actions";
    const submit = document.createElement("button");
    submit.type = "submit";
    submit.textContent = "Submit";
    actions.appendChild(submit);
    form.appendChild(actions);

    // mount
    this._shadow.innerHTML = `<style>${css}</style>`;
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
