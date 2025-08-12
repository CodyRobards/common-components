import { ZodObject, ZodRawShape, ZodSchema } from "zod";

import { ValidationResult } from "../types/validationResult";

/**
 * Generic Validator that wraps any Zod schema of an object type T.
 */
export class Validator<T extends object> {
  constructor(private readonly schema: ZodSchema<T>) {}

  /**
   * Validate the entire object payload.
   */
  validate(payload: unknown): ValidationResult<T> {
    const parsed = this.schema.safeParse(payload);
    if (parsed.success) {
      return { isValid: true, value: parsed.data };
    }
    return { isValid: false, issues: parsed.error.issues };
  }

  /**
   * Validate only the fields present in `payload`.
   * Returns success if all provided keys pass their individual checks.
   */
  validatePartial(payload: Partial<T>): ValidationResult<Partial<T>> {
    if (!(this.schema instanceof ZodObject)) {
      throw new Error("Partial validation requires a ZodObject schema");
    }

    // Create a version with every key optional
    const partialSchema = (this.schema as ZodObject<ZodRawShape>).strict().partial();

    const parsed = partialSchema.safeParse(payload);
    if (parsed.success) {
      return { isValid: true, value: parsed.data as Partial<T> };
    } else {
      return { isValid: false, issues: parsed.error.issues };
    }
  }

  /**
   * Validate a single property by key and value.
   * Requires the schema to be a ZodObject.
   */
  validateProperty<K extends keyof T>(key: K, value: unknown): ValidationResult<Partial<T>> {
    return this.validatePartial({ [key]: value } as Partial<T>);
  }
}
