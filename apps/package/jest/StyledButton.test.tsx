import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { expect } from "@jest/globals";
import { WavelengthStyledButton } from "../src";

describe("WavelengthStyledButton", () => {
  it("renders with default type", () => {
    render(<WavelengthStyledButton type="default">Click Me</WavelengthStyledButton>);
    expect(screen.getByText("Click Me")).toBeTruthy();
  });

  it("renders with a specific preset (ewdms_primary)", () => {
    render(<WavelengthStyledButton type="ewdms_secondary">Primary</WavelengthStyledButton>);
    const button = screen.getByRole("button");
    expect(button).toBeTruthy();
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(
      <WavelengthStyledButton type="brewery" onClick={handleClick}>
        Brew
      </WavelengthStyledButton>,
    );
    fireEvent.click(screen.getByText("Brew"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", () => {
    const handleClick = jest.fn();
    render(
      <WavelengthStyledButton type="brewery" onClick={handleClick} disabled={true}>
        Disabled
      </WavelengthStyledButton>,
    );
    const button = screen.getByText("Disabled") as HTMLButtonElement;
    expect(button.disabled).toBe(true);
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("renders with custom icon and children", () => {
    const TestIcon = <span data-testid="test-icon">🔍</span>;
    render(
      <WavelengthStyledButton type="ewdms_secondary" icon={TestIcon}>
        Search
      </WavelengthStyledButton>,
    );
    expect(screen.getByTestId("test-icon")).toBeTruthy();
    expect(screen.getByText("Search")).toBeTruthy();
  });

  it("applies custom inline styles", () => {
    render(
      <WavelengthStyledButton type="default" styles={{ backgroundColor: "red", color: "white" }}>
        Styled
      </WavelengthStyledButton>,
    );
    const button = screen.getByText("Styled");
    const computedStyles = getComputedStyle(button);

    expect(computedStyles.backgroundColor).toBe("red");
    expect(computedStyles.color).toBe("white");
  });
});
