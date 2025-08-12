import { fireEvent } from "@testing-library/dom";
import { z } from "zod";
import "../../src/web-components/wavelength-form";

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

    const form = el.shadowRoot!.querySelector("form")!;
    fireEvent.submit(form);
    expect(valid).toHaveBeenCalledWith({ value: { name: "A" }, issues: [] });
  });

  test("emits invalid event on failed submission", () => {
    document.body.innerHTML = `<wavelength-form></wavelength-form>`;
    const el = document.querySelector("wavelength-form") as any;
    el.schema = z.object({ name: z.string().min(1) });

    const invalid = jest.fn();
    el.addEventListener("form-invalid", (e: Event) => invalid((e as CustomEvent).detail));

    const form = el.shadowRoot!.querySelector("form")!;
    fireEvent.submit(form);
    expect(invalid).toHaveBeenCalled();
    expect(invalid.mock.calls[0][0].issues.length).toBeGreaterThan(0);
  });
});
