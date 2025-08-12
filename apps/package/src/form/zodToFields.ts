// src/form/zodToFields.ts
import { ZodObject, ZodRawShape, ZodTypeAny } from "zod";
import { FieldDef } from "../types/fields";

type Shape = ZodRawShape;

/**
 * Unwrap common Zod wrappers (optional/nullable/default/effects)
 * without relying on deprecated typings. We intentionally use `any`
 * to read private fields to keep compatibility across Zod versions.
 */
function unwrap(t: ZodTypeAny): ZodTypeAny {
  let cur: any = t;
  // Walk through possible wrapper keys until we reach a core type
  while (cur && cur._def && (cur._def.innerType || cur._def.type || cur._def.schema)) {
    cur = cur._def.innerType ?? cur._def.type ?? cur._def.schema;
  }
  return cur as ZodTypeAny;
}

/**
 * Robust-ish check for ZodString without relying on deprecated enums or instanceof.
 * Falls back to constructor name if typeName is unavailable.
 */
function isZodString(core: ZodTypeAny): boolean {
  const anyCore: any = core;
  const typeName = anyCore?._def?.typeName;
  if (typeof typeName === "string" && typeName === "ZodString") return true;
  const ctorName = anyCore?.constructor?.name;
  return ctorName === "ZodString";
}

/**
 * Convert a Zod object schema into a list of simple text fields (MVP: strings only).
 */
export function zodToTextFields(schema: ZodObject<Shape>): FieldDef[] {
  const fields: FieldDef[] = [];
  const shape = (schema as any).shape as Record<string, ZodTypeAny>; // tolerate Zod typing drift

  for (const [name, zt] of Object.entries(shape)) {
    const core = unwrap(zt);
    if (isZodString(core)) {
      fields.push({
        name,
        label: name.charAt(0).toUpperCase() + name.slice(1),
        type: "text",
      });
    }
  }

  return fields;
}
