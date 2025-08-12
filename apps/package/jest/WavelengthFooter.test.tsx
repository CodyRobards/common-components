import React from "react";
import { WavelengthFooter } from "../src";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Wavelength Footer", () => {
  it("Should render footer", async () => {
    render(
      <div data-testid="wavelengthFooter">
        <WavelengthFooter />
      </div>,
    );
    const footer = screen.getByTestId("wavelengthFooter");
    expect(fireEvent.load(footer)).toEqual(true);
  });

  it("Should render footer with text", async () => {
    render(
      <div data-testid="wavelengthFooterText">
        <WavelengthFooter text="Test" />
      </div>,
    );
    const footer = screen.getByTestId("wavelengthFooterText");
    expect(fireEvent.load(footer)).toEqual(true);
  });

  it("Should render footer with text and text color", async () => {
    render(
      <div data-testid="wavelengthFooterTextColor">
        <WavelengthFooter text="Test" textColor="#FFFFFF" />
      </div>,
    );
    const footer = screen.getByTestId("wavelengthFooterTextColor");
    expect(fireEvent.load(footer)).toEqual(true);
  });
});
