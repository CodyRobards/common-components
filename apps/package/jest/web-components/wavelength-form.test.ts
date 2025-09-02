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
    expect(input.getAttribute("error-message")).toBeNull();
    expect(input.hasAttribute("force-error")).toBe(false);
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
    expect(helper.innerHTML).toContain("Too short<br>Must include capital<br>This field is required.");
  });

  test("deduplicates error messages on re-render and blur", () => {
    document.body.innerHTML = `<wavelength-form></wavelength-form>`;
    const el = document.querySelector("wavelength-form") as any;
    el.schema = z.object({ name: z.string().min(1, { message: "Required" }) });

    let input = el.shadowRoot!.querySelector("wavelength-input") as any;
    fireEvent.blur(input);
    expect(input.getAttribute("error-message")).toBe("Required");

    // Re-render the form and blur again
    el.render();
    input = el.shadowRoot!.querySelector("wavelength-input") as any;
    fireEvent.blur(input);
    fireEvent.blur(input);
    expect(input.getAttribute("error-message")).toBe("Required");
  });

  test("submit-label attribute controls button text", () => {
    document.body.innerHTML = `<wavelength-form submit-label="Go"></wavelength-form>`;
    const el = document.querySelector("wavelength-form") as any;
    const button = el.shadowRoot!.querySelector("wavelength-button")!;
    expect(button.textContent).toBe("Go");
  });

  test("generates ids and links checkbox labels", () => {
    document.body.innerHTML = `<wavelength-form></wavelength-form>`;
    const el = document.querySelector("wavelength-form") as any;
    el.idPrefix = "form";
    el.schema = z.object({ agree: z.boolean(), name: z.string() });

    const checkbox = el.shadowRoot!.querySelector("input[type='checkbox']")! as HTMLInputElement;
    const label = el.shadowRoot!.querySelector("label")! as HTMLLabelElement;
    const text = el.shadowRoot!.querySelector("wavelength-input")!;

    expect(checkbox.id).toBe("form-agree");
    expect(label.htmlFor).toBe("form-agree");
    expect(text.getAttribute("id")).toBe("form-name");
  });

  test("applies layout rows and columns", () => {
    document.body.innerHTML = `<wavelength-form></wavelength-form>`;
    const el = document.querySelector("wavelength-form") as any;
    el.layout = [2, 1];
    el.schema = z.object({ a: z.string(), b: z.string(), c: z.string() });

    const rows = el.shadowRoot!.querySelectorAll(".field-row");
    expect(rows.length).toBe(2);
    expect(rows[0].children.length).toBe(2);
    expect(rows[1].children.length).toBe(1);
    expect((rows[0] as HTMLElement).style.gridTemplateColumns).toBe("repeat(2, 1fr)");
    expect((rows[1] as HTMLElement).style.gridTemplateColumns).toBe("repeat(1, 1fr)");
  });

  test("defaults to single column when layout omitted", () => {
    document.body.innerHTML = `<wavelength-form></wavelength-form>`;
    const el = document.querySelector("wavelength-form") as any;
    el.schema = z.object({ a: z.string(), b: z.string() });

    const rows = el.shadowRoot!.querySelectorAll(".field-row");
    expect(rows.length).toBe(2);
    expect(Array.from(rows).every((r) => (r as HTMLElement).children.length === 1)).toBe(true);
  });

  test("applies formWidth style", () => {
    document.body.innerHTML = `<wavelength-form></wavelength-form>`;
    const el = document.querySelector("wavelength-form") as any;
    el.formWidth = "300px";
    el.schema = z.object({ a: z.string() });

    const form = el.shadowRoot!.querySelector("form") as HTMLFormElement;
    expect(form.style.width).toBe("300px");
  });
});
