import React from "react";
import { WavelengthAppLogo } from "../../src";
import { expect } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";

describe("App Logo should", () => {
  it("render the default app logo when none is specified", async () => {
    render(
      <div data-testid="default">
        <WavelengthAppLogo />
      </div>,
    );
    const appLogo = screen.getByTestId("default");
    expect(fireEvent.load(appLogo)).toEqual(true);
  });
  it("render WavelengthAppLogo when specified", async () => {
    render(
      <div data-testid="WavelengthAppLogos">
        <WavelengthAppLogo name="wings" />
        <WavelengthAppLogo name="563rdpatch" />
        <WavelengthAppLogo name="563rdlabel" />
        <WavelengthAppLogo name="arrow" />
        <WavelengthAppLogo name="channelone" />
        <WavelengthAppLogo name="swarm" />
        <WavelengthAppLogo name="wavelengthw" />
      </div>,
    );
    const appLogo = screen.getByTestId("WavelengthAppLogos");
    expect(fireEvent.load(appLogo)).toEqual(true);
  });
  it("render WavelengthAppLogo in grayscale when specified", async () => {
    render(
      <div data-testid="grayscale">
        <WavelengthAppLogo name="wings" grayscale />
      </div>,
    );
    const appLogo = screen.getByTestId("grayscale");
    expect(fireEvent.load(appLogo)).toEqual(true);
  });
});
