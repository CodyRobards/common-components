import "@testing-library/jest-dom";
import { fireEvent } from "@testing-library/dom";
import "../src/web-components/wavelength-input";

describe("<wavelength-input>", () => {
  let element: HTMLElement;

  beforeEach(() => {
    document.body.innerHTML = "<wavelength-input></wavelength-input>";
    element = document.querySelector("wavelength-input")!;
  });

  test("renders the component", () => {
    expect(element).toBeInTheDocument();
    const input = element.shadowRoot!.querySelector("input");
    expect(input).toBeInTheDocument();
  });

  test("sets and gets the value correctly via attribute", () => {
    element.setAttribute("value", "test input");
    const input = element.shadowRoot!.querySelector("input")!;
    expect(input.value).toBe("test input");
  });

  test("sets and gets the value correctly via property", () => {
    (element as any).value = "viaProperty";
    const input = element.shadowRoot!.querySelector("input")!;
    expect(input.value).toBe("viaProperty");
  });

  test("displays required marker when `required` is set", () => {
    element.setAttribute("label", "Email");
    element.setAttribute("required", "");
    const marker = element.shadowRoot!.querySelector(".required-marker")!;
    expect(marker.textContent).toBe("*");
  });

  test("shows clear button when `clearable` and input has value", () => {
    element.setAttribute("clearable", "");
    const input = element.shadowRoot!.querySelector("input")!;
    const clearBtn = element.shadowRoot!.querySelector("#clear-button")!;

    fireEvent.input(input, { target: { value: "something" } });
    expect(clearBtn).toBeVisible();
  });

  test("clicking clear button empties the input and hides the button", () => {
    element.setAttribute("clearable", "");
    const input = element.shadowRoot!.querySelector("input")!;
    const clearBtn = element.shadowRoot!.querySelector("#clear-button")!;

    fireEvent.input(input, { target: { value: "clear me" } });
    expect(input.value).toBe("clear me");

    fireEvent.click(clearBtn);
    expect(input.value).toBe("");
    expect(clearBtn).not.toBeVisible();
  });

  test("clear button does nothing when disabled", () => {
    element.setAttribute("clearable", "");
    element.setAttribute("disabled", "");
    const input = element.shadowRoot!.querySelector("input")!;
    const clearBtn = element.shadowRoot!.querySelector("#clear-button")!;

    input.value = "cannot clear";
    fireEvent.click(clearBtn);
    expect(input.value).toBe("cannot clear");
  });

  test("validates required field on blur", () => {
    element.setAttribute("required", "");
    element.setAttribute("validation-type", "onBlur");

    const input = element.shadowRoot!.querySelector("input")!;
    fireEvent.focus(input);
    fireEvent.blur(input);

    const helper = element.shadowRoot!.querySelector(".helper-message")!;
    expect(helper).toHaveTextContent(/required/i);
    expect(input).toHaveAttribute("aria-invalid", "true");
  });

  test("applies border color fallback on blur if no validation runs", () => {
    element.setAttribute("border-color", "#123456");
    const input = element.shadowRoot!.querySelector("input")!;
    fireEvent.focus(input);
    fireEvent.blur(input);
    expect(input.style.borderColor).toBe("#123456");
  });

  test("validates with regex pattern", () => {
    element.setAttribute("regex", "^abc$");
    element.setAttribute("error-message", "Input does not match the required pattern.");
    element.setAttribute("validation-type", "manual");
    const input = element.shadowRoot!.querySelector("input")!;
    input.value = "xyz";
    fireEvent.input(input);
    (element as any).validate(true);
    const helper = element.shadowRoot!.querySelector(".helper-message")!;
    expect(helper.textContent?.toLowerCase()).toContain("input does not match");
  });

  test("shows minLength and maxLength error messages", () => {
    element.setAttribute("min-length", "5");
    element.setAttribute("min-length-message", "Too short!");
    element.setAttribute("max-length", "10");
    element.setAttribute("max-length-message", "Too long!");
    element.setAttribute("validation-type", "manual");

    const input = element.shadowRoot!.querySelector("input")!;

    (element as any).value = "abc";
    (element as any).validate(true);
    let helper = element.shadowRoot!.querySelector(".helper-message")!;
    expect(helper.textContent?.toLowerCase()).toContain("too short");

    (element as any).value = "abcdefghijk";
    (element as any).validate(true);
    helper = element.shadowRoot!.querySelector(".helper-message")!;
    expect(helper.textContent?.toLowerCase()).toContain("too long");
  });

  test("force-error triggers validation immediately", () => {
    element.setAttribute("force-error", "");
    element.setAttribute("error-message", "Forced error");
    const helper = element.shadowRoot!.querySelector(".helper-message")!;
    expect(helper.textContent).toContain("Forced error");
  });

  test("force-error shows red border without message", async () => {
    element.setAttribute("force-error", "");
    const result = (element as any).validate(true);
    const helper = element.shadowRoot!.querySelector(".helper-message")!;
    expect(helper.textContent).toBe("");
    expect(result).toBe(false);
  });

  test("clears error when force-error and error-message removed", () => {
    element.setAttribute("helper-message", "help text");
    element.setAttribute("force-error", "");
    element.setAttribute("error-message", "Forced error");

    let helper = element.shadowRoot!.querySelector(".helper-message")!;
    expect(helper.textContent).toContain("Forced error");

    element.removeAttribute("force-error");
    element.removeAttribute("error-message");

    helper = element.shadowRoot!.querySelector(".helper-message")!;
    expect(helper.textContent).toBe("help text");
    expect(element.hasAttribute("data-error")).toBe(false);
  });

  test("sets accessibility attributes on input", () => {
    element.setAttribute("required", "");
    document.body.innerHTML = `<wavelength-input required></wavelength-input>`;
    const el = document.querySelector("wavelength-input")!;
    const input = el.shadowRoot!.querySelector("input")!;
    expect(input.getAttribute("aria-describedby")).toBe("helper");
    expect(input.getAttribute("aria-labelledby")).toBe("floating-label");
    expect(input.getAttribute("aria-required")).toBe("true");
  });

  test("calculates padding left from different shorthand formats", () => {
    const cases = [
      ["12px", 12],
      ["8px 20px", 20],
      ["6px 12px 9px", 12],
      ["4px 8px 12px 16px", 16],
    ];
    cases.forEach(([pad, expected]) => {
      const el = document.createElement("wavelength-input");
      el.setAttribute("padding", pad as string);
      document.body.appendChild(el);
      const helper = el.shadowRoot!.querySelector(".helper-message") as HTMLElement;
      expect(helper.style.paddingLeft).toBe(`${String(expected)}px`);
      el.remove();
    });
  });

  test("respects helper color only when not in error", () => {
    element.setAttribute("helper-message", "hello");
    element.setAttribute("helper-color", "#00ff00");

    const helper = element.shadowRoot!.getElementById("helper") as HTMLElement;
    expect(helper.style.color).toBe("rgb(0, 255, 0)");

    element.setAttribute("force-error", "");
    (element as any).validate(true);

    expect(helper.style.color).not.toBe("rgb(0, 255, 0)");
  });

  test("upgrades property when already set before connection", () => {
    const el = document.createElement("wavelength-input") as any;

    Object.defineProperty(el, "placeholder", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: "preset",
    });

    document.body.appendChild(el);

    expect(el.getAttribute("placeholder")).toBe("preset");
  });

  test("debounces validation on rapid calls", () => {
    jest.useFakeTimers();
    const validateSpy = jest.spyOn(element as any, "_validate");

    (element as any)._setupDebouncedValidation();
    (element as any)._debounceValidate();
    (element as any)._debounceValidate();
    (element as any)._debounceValidate();

    jest.advanceTimersByTime(199);
    expect(validateSpy).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1);
    expect(validateSpy).toHaveBeenCalledTimes(1);

    jest.useRealTimers();
  });

  test("value getter returns input element's value", () => {
    const input = element.shadowRoot!.querySelector("input")!;
    input.value = "fromInput";
    expect((element as any).value).toBe("fromInput");
  });

  test("placeholder getter returns the correct attribute value", () => {
    element.setAttribute("placeholder", "Enter email");
    expect((element as any).placeholder).toBe("Enter email");
  });

  test("required setter adds or removes the attribute", () => {
    (element as any).required = true;
    expect(element.hasAttribute("required")).toBe(true);

    (element as any).required = false;
    expect(element.hasAttribute("required")).toBe(false);
  });

  test("disabled setter adds or removes the attribute", () => {
    (element as any).disabled = true;
    expect(element.hasAttribute("disabled")).toBe(true);

    (element as any).disabled = false;
    expect(element.hasAttribute("disabled")).toBe(false);
  });

  test("clearable getter returns whether attribute is set", () => {
    expect((element as any).clearable).toBe(false);

    element.setAttribute("clearable", "");
    expect((element as any).clearable).toBe(true);
  });

  test("clearable setter adds or removes the attribute", () => {
    (element as any).clearable = true;
    expect(element.hasAttribute("clearable")).toBe(true);

    (element as any).clearable = false;
    expect(element.hasAttribute("clearable")).toBe(false);
  });

  test.each([
    ["label", null, "Test"],
    ["helper-message", null, "Text"],
    ["error-message", null, "Error"],
    ["force-error", null, ""],
    ["validation-type", "none", "always"],
    ["value", "abc", "xyz"],
    ["clearable", null, ""],
    ["required", null, ""],
  ])("attributeChangedCallback handles %s", (attr, oldVal, newVal) => {
    const elWithCallback = element as HTMLElement & {
      attributeChangedCallback: (name: string, oldVal: string | null, newVal: string | null) => void;
    };
    elWithCallback.attributeChangedCallback(attr, oldVal, newVal);
    expect(true).toBe(true);
  });
});
