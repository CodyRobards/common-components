import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { z } from "zod";

import WavelengthForm from "../src/components/forms/WavelengthForm";
import "../src/web-components/wavelength-form";
import "../src/web-components/wavelength-input";

// This test focuses on the React wrapper receiving the correct
// detail payloads from the custom events.
describe("WavelengthForm (React Wrapper)", () => {
  test("callbacks receive value and issues", () => {
    const onChange = jest.fn();
    const onValid = jest.fn();
    const onInvalid = jest.fn();

    const schema = z.object({ name: z.string() });

    render(<WavelengthForm schema={schema} onChange={onChange} onValid={onValid} onInvalid={onInvalid} />);

    const host = document.querySelector("wavelength-form")!;

    host.dispatchEvent(
      new CustomEvent("form-change", {
        detail: { value: { name: "Hello" }, issues: [] },
      }),
    );
    expect(onChange).toHaveBeenCalledWith({ name: "Hello" }, []);

    const issues = [{ message: "Required", path: ["name"], code: "custom" } as any];
    host.dispatchEvent(
      new CustomEvent("form-invalid", {
        detail: { value: {}, issues },
      }),
    );
    expect(onInvalid).toHaveBeenCalledWith({}, issues);

    host.dispatchEvent(
      new CustomEvent("form-valid", {
        detail: { value: { name: "Hello" }, issues: [] },
      }),
    );
    expect(onValid).toHaveBeenCalledWith({ name: "Hello" }, []);
  });

  test("forwards submit props", async () => {
    const schema = z.object({ name: z.string() });
    render(<WavelengthForm schema={schema} submitLabel="Go" submitButtonProps={{ variant: "contained", colorOne: "red" }} />);

    const host = document.querySelector("wavelength-form") as any;
    // wait for effects
    await new Promise((r) => setTimeout(r, 0));

    const button = host.shadowRoot.querySelector("wavelength-button");
    expect(button).toHaveAttribute("variant", "contained");
    expect(button).toHaveAttribute("color-one", "red");
    expect(button.textContent).toContain("Go");
  });

  test("propagates container background to inputs", async () => {
    const schema = z.object({ name: z.string() });
    const color = "rgb(1, 2, 3)";
    const { container } = render(
      <div style={{ backgroundColor: color }}>
        <WavelengthForm schema={schema} />
      </div>,
    );

    await new Promise((r) => setTimeout(r, 0));

    const host = container.querySelector("wavelength-form") as any;
    const input = host.shadowRoot.querySelector("wavelength-input") as any;
    const label = input.shadowRoot.getElementById("floating-label") as HTMLElement;

    expect(label.style.getPropertyValue("--wavelength-container-background")).toBe(color);
  });

  test("applies idPrefix to generated inputs", async () => {
    const schema = z.object({ agree: z.boolean(), name: z.string() });
    render(<WavelengthForm schema={schema} idPrefix="test" />);

    await new Promise((r) => setTimeout(r, 0));

    const host = document.querySelector("wavelength-form")!;
    const checkbox = host.shadowRoot!.querySelector("input[type='checkbox']")! as HTMLInputElement;
    const label = host.shadowRoot!.querySelector("label")! as HTMLLabelElement;
    const text = host.shadowRoot!.querySelector("wavelength-input")!;

    expect(checkbox.id).toBe("test-agree");
    expect(label.htmlFor).toBe("test-agree");
    expect(text.getAttribute("id")).toBe("test-name");
  });

  test("renders title with alignment", async () => {
    const schema = z.object({ name: z.string() });
    render(<WavelengthForm schema={schema} title="My Form" titleAlign="center" />);

    await new Promise((r) => setTimeout(r, 0));

    const host = document.querySelector("wavelength-form")!;
    const heading = host.shadowRoot!.querySelector("h2") as HTMLElement;
    expect(heading).toBeInTheDocument();
    expect(heading.textContent).toBe("My Form");
    expect(heading.style.textAlign).toBe("center");
  });

  test("uses placeholder from schema and mirrors label", async () => {
    const schema = z.object({ name: z.string().describe("Your name") });
    render(<WavelengthForm schema={schema} />);

    await new Promise((r) => setTimeout(r, 0));

    const host = document.querySelector("wavelength-form")!;
    const input = host.shadowRoot!.querySelector("wavelength-input")!;
    expect(input).toHaveAttribute("placeholder", "Your name");
    expect(input).toHaveAttribute("label", "Your name");
  });

  test("placeholders prop overrides schema", async () => {
    const schema = z.object({ name: z.string().describe("Schema") });
    render(<WavelengthForm schema={schema} placeholders={{ name: "Override" }} />);

    await new Promise((r) => setTimeout(r, 0));

    const host = document.querySelector("wavelength-form")!;
    const input = host.shadowRoot!.querySelector("wavelength-input")!;
    expect(input).toHaveAttribute("placeholder", "Override");
    expect(input).toHaveAttribute("label", "Override");
  });
});
