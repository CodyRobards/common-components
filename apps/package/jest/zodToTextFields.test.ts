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
      { name: "name", label: "Name", type: "text" },
      { name: "age", label: "Age", type: "number" },
      { name: "subscribed", label: "Subscribed", type: "checkbox" },
    ]);
  });

  test("unwraps optional and default wrappers", () => {
    const schema = z.object({
      title: z.string().optional(),
      count: z.number().nullable().default(0),
      active: z.boolean().default(false),
    });

    expect(zodToTextFields(schema)).toEqual([
      { name: "title", label: "Title", type: "text" },
      { name: "count", label: "Count", type: "number" },
      { name: "active", label: "Active", type: "checkbox" },
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
