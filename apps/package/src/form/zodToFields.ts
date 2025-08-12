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
 * Robust-ish check for Zod primitives without relying on deprecated enums or instanceof.
 * Falls back to constructor name if typeName is unavailable.
 */
function isZodType(core: ZodTypeAny, type: string): boolean {
  const anyCore: any = core;
  const typeName = anyCore?._def?.typeName;
  if (typeof typeName === "string" && typeName === type) return true;
  const ctorName = anyCore?.constructor?.name;
  return ctorName === type;
}

/**
 * Convert a Zod object schema into a list of basic field definitions.
 */
export function zodToFields(schema: ZodObject<Shape>): FieldDef[] {
  const fields: FieldDef[] = [];
  const shape = (schema as any).shape as Record<string, ZodTypeAny>; // tolerate Zod typing drift

  for (const [name, zt] of Object.entries(shape)) {
    const core = unwrap(zt);
    let type: FieldDef["type"] | undefined;

    if (isZodType(core, "ZodString")) type = "text";
    else if (isZodType(core, "ZodNumber")) type = "number";
    else if (isZodType(core, "ZodBoolean")) type = "checkbox";

    if (type) {
      fields.push({
        name,
        label: name.charAt(0).toUpperCase() + name.slice(1),
        type,
      });
    }
  }

  return fields;
}
