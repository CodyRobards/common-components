import { z } from "zod";
import { zodToFields as zodToTextFields } from "../src/form/zodToFields";

describe("zodToTextFields", () => {
  test("maps basic types to field definitions", () => {
    const schema = z.object({
      name: z.string(),
      age: z.number(),
      subscribed: z.boolean(),
    });

    expect(zodToTextFields(schema)).toEqual([
      { name: "name", label: "Name", type: "text", required: true },
      { name: "age", label: "Age", type: "number", required: true },
      { name: "subscribed", label: "Subscribed", type: "checkbox", required: true },
    ]);
  });

  test("unwraps optional and default wrappers", () => {
    const schema = z.object({
      title: z.string().optional(),
      count: z.number().nullable().default(0),
      active: z.boolean().default(false),
    });

    expect(zodToTextFields(schema)).toEqual([
      { name: "title", label: "Title", type: "text", required: false },
      { name: "count", label: "Count", type: "number", required: false },
      { name: "active", label: "Active", type: "checkbox", required: false },
    ]);
  });

  test("extracts min and max length for strings", () => {
    const schema = z.object({
      username: z.string().min(3).max(10),
    });

    expect(zodToTextFields(schema)).toEqual([
      {
        name: "username",
        label: "Username",
        type: "text",
        required: true,
        minLength: 3,
        maxLength: 10,
      },
    ]);
  });

  test("ignores unsupported types", () => {
    const schema = z.object({
      tags: z.array(z.string()),
      profile: z.object({ nickname: z.string() }),
    });

    expect(zodToTextFields(schema)).toEqual([]);
  });
});
