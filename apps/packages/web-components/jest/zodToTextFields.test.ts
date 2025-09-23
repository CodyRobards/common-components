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
      { name: "name", label: "Name", type: "text", required: true, placeholder: "Name" },
      { name: "age", label: "Age", type: "number", required: true, placeholder: "Age" },
      { name: "subscribed", label: "Subscribed", type: "checkbox", required: true, placeholder: "Subscribed" },
    ]);
  });

  test("unwraps optional and default wrappers", () => {
    const schema = z.object({
      title: z.string().optional(),
      count: z.number().nullable().default(0),
      active: z.boolean().default(false),
    });

    expect(zodToTextFields(schema)).toEqual([
      { name: "title", label: "Title", type: "text", required: false, placeholder: "Title" },
      { name: "count", label: "Count", type: "number", required: false, placeholder: "Count" },
      { name: "active", label: "Active", type: "checkbox", required: false, placeholder: "Active" },
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
        placeholder: "Username",
      },
    ]);
  });

  test("populates placeholders from meta or description", () => {
    const schema = z.object({
      meta: z.string().meta({ placeholder: "Meta" }),
      desc: z.string().describe("Desc"),
      none: z.string(),
    });

    expect(zodToTextFields(schema)).toEqual([
      { name: "meta", label: "Meta", type: "text", required: true, placeholder: "Meta" },
      { name: "desc", label: "Desc", type: "text", required: true, placeholder: "Desc" },
      { name: "none", label: "None", type: "text", required: true, placeholder: "None" },
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
