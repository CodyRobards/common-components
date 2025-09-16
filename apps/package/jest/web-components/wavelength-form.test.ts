import { fireEvent } from "@testing-library/dom";
import { z } from "zod";
import "../../src/web-components/wavelength-form";
import "../../src/web-components/wavelength-input";
import "../../src/web-components/wavelength-button";

describe("wavelength-form web component", () => {
  afterEach(() => {
    document.body.innerHTML = "";
  });

  test("formats camelCase keys into spaced labels", () => {
    document.body.innerHTML = `<wavelength-form></wavelength-form>`;
    const el = document.querySelector("wavelength-form") as any;
    el.schema = z.object({
      firstName: z.string(),
      middleName: z.string(),
      lastName: z.string(),
    });

    const inputs = el.shadowRoot!.querySelectorAll("wavelength-input");
    const labels = Array.from(inputs).map((i) => (i as HTMLElement).getAttribute("label"));
    const placeholders = Array.from(inputs).map((i) => (i as HTMLElement).getAttribute("placeholder"));
    expect(labels).toEqual(["First Name", "Middle Name", "Last Name"]);
    expect(placeholders).toEqual(["First Name", "Middle Name", "Last Name"]);
  });

  test("emits change and valid events", () => {
    document.body.innerHTML = `<wavelength-form></wavelength-form>`;
    const el = document.querySelector("wavelength-form") as any;
    el.schema = z.object({ name: z.string() });

    const change = jest.fn();
    const valid = jest.fn();
    el.addEventListener("form-change", (e: Event) => change((e as CustomEvent).detail));
    el.addEventListener("form-valid", (e: Event) => valid((e as CustomEvent).detail));

    el.rightButton = { label: "Submit", buttonProps: { type: "submit" } };

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

    el.rightButton = { label: "Submit", buttonProps: { type: "submit" } };
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

    el.rightButton = { label: "Submit", buttonProps: { type: "submit" } };
    const button = el.shadowRoot!.querySelector("wavelength-button")!;
    fireEvent.click(button);

    const input = el.shadowRoot!.querySelector("wavelength-input") as any;
    expect(input.getAttribute("error-message")).toBe("Too short\nMust include capital");

    const helper = input.shadowRoot!.getElementById("helper")!;
    expect(helper.innerHTML).toContain("Too short<br>Must include capital");
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

  test("rightButton label controls button text", () => {
    document.body.innerHTML = `<wavelength-form></wavelength-form>`;
    const el = document.querySelector("wavelength-form") as any;
    el.rightButton = { label: "Go" };
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
    expect(checkbox.name).toBe("form-agree");
    expect(label.htmlFor).toBe("form-agree");
    expect(text.getAttribute("id")).toBe("form-name");
    expect(text.getAttribute("name")).toBe("form-name");
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

  test("applies inputProps to all inputs", () => {
    document.body.innerHTML = `<wavelength-form></wavelength-form>`;
    const el = document.querySelector("wavelength-form") as any;
    el.schema = z.object({ a: z.string(), b: z.string() });
    el.inputProps = { width: "120px", "data-test": "shared" };

    const inputs = el.shadowRoot!.querySelectorAll("wavelength-input");
    inputs.forEach((input) => {
      expect((input as HTMLElement).getAttribute("width")).toBe("120px");
      expect((input as HTMLElement).getAttribute("data-test")).toBe("shared");
    });
  });

  test("defaults to single column when layout omitted", () => {
    document.body.innerHTML = `<wavelength-form></wavelength-form>`;
    const el = document.querySelector("wavelength-form") as any;
    el.schema = z.object({ a: z.string(), b: z.string() });

    const rows = el.shadowRoot!.querySelectorAll(".field-row");
    expect(rows.length).toBe(2);
    expect(Array.from(rows).every((r) => (r as HTMLElement).children.length === 1)).toBe(true);
  });

  test("renders default form width", () => {
    document.body.innerHTML = `<wavelength-form></wavelength-form>`;
    const el = document.querySelector("wavelength-form") as any;
    const form = el.shadowRoot!.querySelector("form") as HTMLFormElement;
    expect(form.style.width).toBe("300px");
  });

  test("applies formWidth style", () => {
    document.body.innerHTML = `<wavelength-form></wavelength-form>`;
    const el = document.querySelector("wavelength-form") as any;
    el.formWidth = "400px";
    el.schema = z.object({ a: z.string() });

    const form = el.shadowRoot!.querySelector("form") as HTMLFormElement;
    expect(form.style.width).toBe("400px");
  });

  test("applies title-color style to heading", () => {
    document.body.innerHTML = `<wavelength-form title="My Form" title-color="blue"></wavelength-form>`;
    const el = document.querySelector("wavelength-form") as any;
    const heading = el.shadowRoot!.querySelector("h2") as HTMLElement;
    expect(heading).not.toBeNull();
    expect(heading.style.color).toBe("blue");
  });

  test("title heading is not selectable", () => {
    document.body.innerHTML = `<wavelength-form title="Example"></wavelength-form>`;
    const el = document.querySelector("wavelength-form") as any;
    const heading = el.shadowRoot!.querySelector("h2") as HTMLElement;
    expect(heading).not.toBeNull();
    expect(heading.style.userSelect).toBe("none");
  });

  test("can hide submit button", () => {
    document.body.innerHTML = `<wavelength-form></wavelength-form>`;
    const el = document.querySelector("wavelength-form") as any;
    el.schema = z.object({ name: z.string() });
    const button = el.shadowRoot!.querySelector("wavelength-button");
    expect(button).toBeNull();
  });

  test("emits form-left when left button clicked", () => {
    document.body.innerHTML = `<wavelength-form></wavelength-form>`;
    const el = document.querySelector("wavelength-form") as any;
    el.leftButton = { label: "Back" };
    el.schema = z.object({ name: z.string() });

    const handler = jest.fn();
    el.addEventListener("form-left", handler);
    const back = el.shadowRoot!.querySelector("wavelength-button")!;
    fireEvent.click(back);
    expect(handler).toHaveBeenCalled();
  });

  test("requests submit when submit-type button clicked", () => {
    document.body.innerHTML = `<wavelength-form></wavelength-form>`;
    const el = document.querySelector("wavelength-form") as any;
    el.rightButton = { label: "Submit", buttonProps: { type: "submit" } };
    el.schema = z.object({ name: z.string() });

    const handler = jest.fn();
    el.addEventListener("form-right", handler);

    const form = el.shadowRoot!.querySelector("form") as HTMLFormElement & {
      requestSubmit: jest.Mock;
    };
    form.requestSubmit = jest.fn();

    const button = el.shadowRoot!.querySelector("wavelength-button:last-of-type")!;
    fireEvent.click(button);

    expect(form.requestSubmit).toHaveBeenCalled();
    expect(handler).toHaveBeenCalled();
  });
});
