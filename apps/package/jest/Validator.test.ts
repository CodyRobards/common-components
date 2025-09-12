import { z } from "zod";
import { Validator } from "../src/form/validator";

describe("Validator", () => {
  const schema = z.object({
    name: z.string().min(1),
    age: z.number().int(),
  });
  const validator = new Validator(schema);

  test("validate returns parsed value for valid payload", () => {
    const res = validator.validate({ name: "Alice", age: 30 });
    expect(res).toEqual({ isValid: true, value: { name: "Alice", age: 30 } });
  });

  test("validate reports issues for invalid payload", () => {
    const res = validator.validate({ name: "", age: "x" } as any);
    expect(res.isValid).toBe(false);
    if (!res.isValid) {
      expect(res.issues.length).toBeGreaterThan(0);
    }
  });

  test("validatePartial validates only provided keys", () => {
    const good = validator.validatePartial({ age: 40 });
    expect(good).toEqual({ isValid: true, value: { age: 40 } });

    const bad = validator.validatePartial({ age: "x" } as any);
    expect(bad.isValid).toBe(false);
    if (!bad.isValid) {
      expect(bad.issues[0].path).toEqual(["age"]);
    }
  });

  test("validateProperty validates a single field", () => {
    expect(validator.validateProperty("age", 21)).toEqual({
      isValid: true,
      value: { age: 21 },
    });

    const res = validator.validateProperty("age", "bad" as any);
    expect(res.isValid).toBe(false);
    if (!res.isValid) {
      expect(res.issues[0].path).toEqual(["age"]);
    }
  });
});
