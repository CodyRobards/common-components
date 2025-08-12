export type FieldType = "text";

export type FieldDef = {
  name: string;
  label: string;
  type: FieldType;
};

export type FormValue = Record<string, unknown>;
