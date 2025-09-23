import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { WavelengthButton } from "../../src";
import { jest } from "@jest/globals";
import "@testing-library/jest-dom";
import "@wavelengthusaf/web-components";

describe("WavelengthButton", () => {
  it("renders with all variants", () => {
    const variants: Array<"outlined" | "contained" | "text"> = ["outlined", "contained", "text"];

    variants.forEach((variant) => {
      render(
        <WavelengthButton data-testid={`button-${variant}`} variant={variant}>
          {variant} button
        </WavelengthButton>,
      );
      expect(screen.getByTestId(`button-${variant}`)).toBeInTheDocument();
    });
  });

  it("fires onClick handler when clicked", () => {
    const handleClick = jest.fn();

    render(
      <WavelengthButton data-testid="click-test" onClick={handleClick}>
        Click Me
      </WavelengthButton>,
    );

    fireEvent.click(screen.getByTestId("click-test"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("disables the button when `disabled` is true", () => {
    const handleClick = jest.fn();

    render(
      <WavelengthButton data-testid="disabled-test" disabled>
        Disabled
      </WavelengthButton>,
    );

    const button = screen.getByTestId("disabled-test");
    expect(button).toHaveAttribute("disabled");

    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("renders children content correctly", () => {
    render(
      <WavelengthButton data-testid="child-test">
        <span>Nested Content</span>
      </WavelengthButton>,
    );

    const button = screen.getByTestId("child-test");
    expect(button).toHaveTextContent("Nested Content");
  });

  it("applies inline style props: margin, padding, borderRadius", () => {
    render(
      <WavelengthButton data-testid="styled-button" margin="2rem" padding="1rem 0.5rem" borderRadius="10px">
        Styled Button
      </WavelengthButton>,
    );

    const button = screen.getByTestId("styled-button");
    const style = getComputedStyle(button);

    expect(button.getAttribute("margin")).toBe("2rem");
    expect(button.getAttribute("padding")).toBe("1rem 0.5rem");
    expect(button.getAttribute("border-radius")).toBe("10px");
  });

  it("applies `colorOne` and `colorTwo` correctly to contained variant", () => {
    render(
      <WavelengthButton data-testid="color-test" variant="contained" colorOne="#ff0000" colorTwo="#ffffff">
        Colored Button
      </WavelengthButton>,
    );

    const button = screen.getByTestId("color-test");

    expect(button.getAttribute("color-one")).toBe("#ff0000");
    expect(button.getAttribute("color-two")).toBe("#ffffff");
  });

  it("applies size presets correctly", () => {
    const sizes: Array<"small" | "medium" | "large"> = ["small", "medium", "large"];

    sizes.forEach((size) => {
      render(
        <WavelengthButton data-testid={`button-${size}`} size={size}>
          {size} size
        </WavelengthButton>,
      );

      const button = screen.getByTestId(`button-${size}`);
      expect(button.getAttribute("size")).toBe(size);
    });
  });
});
