export type FieldType = "text" | "number" | "checkbox";

export type FieldDef = {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
};

export type FormValue = Record<string, unknown>;
