import { ZodObject, ZodRawShape, ZodIssue } from "zod";
import { zodToFields } from "../form/zodToFields";
import { FieldDef, FormValue } from "../types/fields";
import { Validator } from "../form/Validator"; // file 4 will re-export your existing Validator
import "./wavelength-button";

type Shape = ZodRawShape;

export class WavelengthForm<T extends object> extends HTMLElement {
  private _schema?: ZodObject<Shape>;
  private _validator?: Validator<T>;
  private _shadow: ShadowRoot;
  private _fields: FieldDef[] = [];
  private _value: FormValue = {};
  private _errors: Record<string, string> = {};
  private _submitLabel = "Submit";
  private _submitButtonProps: Record<string, unknown> = {};

  static get observedAttributes() {
    // schema is a property, not an attribute
    return ["submit-label"];
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

  set submitLabel(label: string) {
    this._submitLabel = label;
    this.setAttribute("submit-label", label);
  }
  get submitLabel(): string {
    return this._submitLabel;
  }

  set submitButtonProps(v: Record<string, unknown> | undefined) {
    this._submitButtonProps = v ?? {};
    this.render();
  }
  get submitButtonProps(): Record<string, unknown> {
    return this._submitButtonProps;
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
    if (name === "submit-label") {
      this._submitLabel = value ?? "Submit";
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

    if (message !== undefined && message !== null) {
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
      this.setFieldError(name, issue?.message ?? "Invalid value");
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

    res.issues?.forEach((issue) => {
      const field = (issue.path?.[0] as string) || "";
      if (field) this.setFieldError(field, issue.message);
    });
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
      .row { display: grid; gap: 6px; }
      .actions { margin-top: 8px; }
    `;

    const form = document.createElement("form");
    form.noValidate = true;
    form.addEventListener("submit", this.onSubmit);

    // create an element per schema field
    for (const f of this._fields) {
      const row = document.createElement("div");
      row.className = "row";

      if (f.type === "checkbox") {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "checkbox";
        input.setAttribute("data-name", f.name);
        input.name = f.name;
        if (this._value[f.name] !== undefined) {
          input.checked = Boolean(this._value[f.name]);
        }

        input.addEventListener("change", () => {
          this.onInputChange(f.name, input.checked);
        });
        input.addEventListener("blur", () => this.onBlur(f.name));

        label.appendChild(input);
        label.append(f.label);
        row.appendChild(label);
      } else {
        const input = document.createElement("wavelength-input") as HTMLElement & {
          value: string;
          setAttribute: (k: string, v?: string) => void;
          removeAttribute: (k: string) => void;
        };

        input.setAttribute("data-name", f.name);
        input.setAttribute("name", f.name);
        input.setAttribute("label", f.label);
        input.setAttribute("validation-type", "manual"); // form drives error visuals
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

        row.appendChild(input);
      }

      form.appendChild(row);
    }

    // basic submit button
    const actions = document.createElement("div");
    actions.className = "actions";
    const submit = document.createElement("wavelength-button");
    submit.textContent = this._submitLabel;
    for (const [key, val] of Object.entries(this._submitButtonProps)) {
      if (key === "className") {
        submit.className = String(val ?? "");
        continue;
      }
      if (key === "style" && typeof val === "object") {
        Object.assign((submit as HTMLElement).style, val as Record<string, any>);
        continue;
      }
      const attr = key.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
      if (typeof val === "boolean") {
        if (val) submit.setAttribute(attr, "");
      } else {
        submit.setAttribute(attr, String(val));
      }
    }
    submit.addEventListener("click", (e) => {
      e.preventDefault();
      if (typeof (form as any).requestSubmit === "function") {
        (form as any).requestSubmit();
      } else {
        form.dispatchEvent(new Event("submit", { cancelable: true }));
      }
    });
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
