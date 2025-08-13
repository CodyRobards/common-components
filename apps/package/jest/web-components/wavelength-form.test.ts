import { fireEvent } from "@testing-library/dom";
import { z } from "zod";
import "../../src/web-components/wavelength-form";
import "../../src/web-components/wavelength-input";

describe("wavelength-form web component", () => {
  afterEach(() => {
    document.body.innerHTML = "";
  });

  test("emits change and valid events", () => {
    document.body.innerHTML = `<wavelength-form></wavelength-form>`;
    const el = document.querySelector("wavelength-form") as any;
    el.schema = z.object({ name: z.string() });

    const change = jest.fn();
    const valid = jest.fn();
    el.addEventListener("form-change", (e: Event) => change((e as CustomEvent).detail));
    el.addEventListener("form-valid", (e: Event) => valid((e as CustomEvent).detail));

    const input = el.shadowRoot!.querySelector("wavelength-input") as any;
    input.value = "A";
    fireEvent(input, new CustomEvent("inputChange", { detail: { value: "A" } }));
    expect(change).toHaveBeenCalledWith({ value: { name: "A" }, issues: [] });

    const button = el.shadowRoot!.querySelector("wavelength-button")!;
    fireEvent.click(button);
    expect(valid).toHaveBeenCalledWith({ value: { name: "A" }, issues: [] });
  });

  test("emits invalid event and shows empty error message", () => {
    document.body.innerHTML = `<wavelength-form></wavelength-form>`;
    const el = document.querySelector("wavelength-form") as any;
    el.schema = z.object({ name: z.string().min(1, { message: "" }) });

    const invalid = jest.fn();
    el.addEventListener("form-invalid", (e: Event) => invalid((e as CustomEvent).detail));

    const button = el.shadowRoot!.querySelector("wavelength-button")!;
    fireEvent.click(button);
    expect(invalid).toHaveBeenCalled();
    expect(invalid.mock.calls[0][0].issues.length).toBeGreaterThan(0);

    const input = el.shadowRoot!.querySelector("wavelength-input")!;
    expect(input.getAttribute("error-message")).toBe("");
    expect(input.hasAttribute("force-error")).toBe(true);
  });

  test("renders multiple error messages", () => {
    document.body.innerHTML = `<wavelength-form></wavelength-form>`;
    const el = document.querySelector("wavelength-form") as any;
    el.schema = z.object({
      password: z.string().min(5, { message: "Too short" }).regex(/[A-Z]/, { message: "Must include capital" }),
    });

    const button = el.shadowRoot!.querySelector("wavelength-button")!;
    fireEvent.click(button);

    const input = el.shadowRoot!.querySelector("wavelength-input") as any;
    expect(input.getAttribute("error-message")).toBe("Too short\nMust include capital");

    const helper = input.shadowRoot!.getElementById("helper")!;
    expect(helper.innerHTML).toContain("Too short<br>Must include capital");
  });

  test("submit-label attribute controls button text", () => {
    document.body.innerHTML = `<wavelength-form submit-label="Go"></wavelength-form>`;
    const el = document.querySelector("wavelength-form") as any;
    const button = el.shadowRoot!.querySelector("wavelength-button")!;
    expect(button.textContent).toBe("Go");
  });
});
