import React, { useRef } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { WavelengthInput } from "../src/components/TextField/WavelengthInput";

import "../src/web-components/wavelength-input";

describe("WavelengthInput (React Wrapper)", () => {
  test("renders and sets props as attributes", () => {
    render(
      <WavelengthInput
        data-testid="wavelength-input"
        id="ID"
        name="Name"
        placeholder="Test Placeholder"
        value="Hello"
        label="Label"
        clearable
        required
        minLength={3}
        maxLength={10}
        backgroundColor="#fafafa"
      />,
    );

    const el = screen.getByTestId("wavelength-input");

    expect(el).toHaveAttribute("id", "ID");
    expect(el).toHaveAttribute("name", "Name");
    expect(el).toHaveAttribute("placeholder", "Test Placeholder");
    expect(el).toHaveAttribute("value", "Hello");
    expect(el).toHaveAttribute("label", "Label");
    expect(el).toHaveAttribute("clearable");
    expect(el).toHaveAttribute("required");
    expect(el).toHaveAttribute("min-length", "3");
    expect(el).toHaveAttribute("max-length", "10");
    expect(el).toHaveAttribute("background-color", "#fafafa");
  });

  test("fires onChange from shadow input", () => {
    const handleChange = jest.fn();
    render(<WavelengthInput onChange={handleChange} />);
    const el = document.querySelector("wavelength-input")!;
    const input = el.shadowRoot!.querySelector("input")!;

    input.value = "changed";
    const event = new CustomEvent("inputChange", {
      bubbles: true,
      detail: { value: "changed" },
    });

    el.dispatchEvent(event);
    expect(handleChange).toHaveBeenCalled();
    expect(handleChange.mock.calls[0][0].target.value).toBe("changed");
  });

  test("validate() ref method triggers validate with true", () => {
    const validateFn = jest.fn();
    const Test = () => {
      const ref = useRef<any>(null);
      return (
        <>
          <WavelengthInput ref={ref} />
          <button onClick={() => ref.current?.validate()}>Click</button>
        </>
      );
    };

    render(<Test />);
    const el = document.querySelector("wavelength-input")!;
    (el as any).validate = validateFn;

    fireEvent.click(screen.getByText("Click"));
    expect(validateFn).toHaveBeenCalledWith(true);
  });

  test("updates attributes on rerender", () => {
    const { rerender } = render(<WavelengthInput data-testid="wavelength-input" placeholder="First" />);

    const el = screen.getByTestId("wavelength-input");
    expect(el).toHaveAttribute("placeholder", "First");

    rerender(<WavelengthInput data-testid="wavelength-input" placeholder="Second" />);
    expect(el).toHaveAttribute("placeholder", "Second");
  });

  test("internalRef is assigned and all effects run", () => {
    const onChange = jest.fn();

    render(
      <WavelengthInput
        data-testid="wavelength-input"
        id="ID"
        name="Name"
        placeholder="Testing"
        label="Test"
        onChange={onChange}
        value="abc"
        clearable
        forceError
        required
        regex=".*"
        helperMessage="help"
        errorMessage="err"
        validationType="always"
        minLength={2}
        maxLength={10}
        width="500px"
        height="40px"
        padding="10px"
        borderRadius="4px"
        backgroundColor="#fff"
        labelColor="#333"
        placeholderColor="#999"
        textColor="#111"
        borderColor="#222"
        focusColor="#444"
        helperColor="#666"
      />,
    );

    const el = screen.getByTestId("wavelength-input");

    // Hit every attribute change via first useEffect
    expect(el).toHaveAttribute("id", "ID");
    expect(el).toHaveAttribute("name", "Name");
    expect(el).toHaveAttribute("placeholder", "Testing");
    expect(el).toHaveAttribute("label", "Test");
    expect(el).toHaveAttribute("force-error");
    expect(el).toHaveAttribute("required");
    expect(el).toHaveAttribute("regex", ".*");
    expect(el).toHaveAttribute("helper-message", "help");
    expect(el).toHaveAttribute("error-message", "err");
    expect(el).toHaveAttribute("validation-type", "always");
    expect(el).toHaveAttribute("min-length", "2");
    expect(el).toHaveAttribute("max-length", "10");
    expect(el).toHaveAttribute("width", "500px");
    expect(el).toHaveAttribute("height", "40px");
    expect(el).toHaveAttribute("padding", "10px");
    expect(el).toHaveAttribute("border-radius", "4px");
    expect(el).toHaveAttribute("background-color", "#fff");
    expect(el).toHaveAttribute("label-color", "#333");
    expect(el).toHaveAttribute("placeholder-color", "#999");
    expect(el).toHaveAttribute("text-color", "#111");
    expect(el).toHaveAttribute("border-color", "#222");
    expect(el).toHaveAttribute("focus-color", "#444");
    expect(el).toHaveAttribute("helper-color", "#666");
  });

  test("defaults to required message when forceError without errorMessage", () => {
    render(<WavelengthInput data-testid="wavelength-input" forceError required />);
    const el = screen.getByTestId("wavelength-input") as HTMLElement;
    const helper = el.shadowRoot?.querySelector(".helper-message") as HTMLElement;
    expect(helper.textContent).toBe("This field is required.");
  });

  test("uses provided errorMessage when present with forceError", () => {
    render(<WavelengthInput data-testid="wavelength-input" forceError required errorMessage="Custom error" />);
    const el = screen.getByTestId("wavelength-input") as HTMLElement;
    const helper = el.shadowRoot?.querySelector(".helper-message") as HTMLElement;
    expect(helper.textContent).toContain("Custom error");
  });

  test("shows error message only once when blurred multiple times", () => {
    render(<WavelengthInput data-testid="wavelength-input" required validationType="onBlur" />);
    const el = screen.getByTestId("wavelength-input") as HTMLElement;
    const input = el.shadowRoot?.querySelector("input") as HTMLInputElement;

    fireEvent.blur(input);
    fireEvent.blur(input);
    fireEvent.blur(input);

    const helper = el.shadowRoot?.querySelector(".helper-message") as HTMLElement;
    expect(helper.innerHTML).toBe("This field is required.");
  });
});
