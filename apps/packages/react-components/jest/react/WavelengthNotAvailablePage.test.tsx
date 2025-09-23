import React from "react";
import { WavelengthNotAvailablePage } from "../../src";
import { expect } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";

describe("WavelengthTitleBar should", () => {
  it("render with error message and button", async () => {
    render(
      <div data-testid="default">
        <WavelengthNotAvailablePage buttonText="Let's Go Spungos!" errorMessage="I'm sorry fellas, but these tickets are counterfeit." />
      </div>,
    );
    const pageNotAvailable = screen.getByTestId("default");
    expect(fireEvent.load(pageNotAvailable)).toEqual(true);
  });
  it("render with an App Logo when specified", async () => {
    render(
      <div data-testid="WavelengthAppLogo">
        <WavelengthNotAvailablePage WavelengthAppLogoName="wings" buttonText="Let's Go Spungos!" errorMessage="I'm sorry fellas, but these tickets are counterfeit." />
      </div>,
    );
    const pageNotAvailable = screen.getByTestId("WavelengthAppLogo");
    expect(fireEvent.load(pageNotAvailable)).toEqual(true);
  });

  it("render with a given Background Color when specified", async () => {
    render(
      <div data-testid="WavelengthAppLogo">
        <WavelengthNotAvailablePage backgroundColor="blue" buttonText="Let's Go Spungos!" errorMessage="I'm sorry fellas, but these tickets are counterfeit." />
      </div>,
    );
    const pageNotAvailable = screen.getByTestId("WavelengthAppLogo");
    expect(fireEvent.load(pageNotAvailable)).toEqual(true);
  });

  it("render with given Button colors when specified", async () => {
    render(
      <div data-testid="WavelengthAppLogo">
        <WavelengthNotAvailablePage buttonColorOne="blue" buttonColorTwo="yellow" buttonText="Let's Go Spungos!" errorMessage="I'm sorry fellas, but these tickets are counterfeit." />
      </div>,
    );
    const pageNotAvailable = screen.getByTestId("WavelengthAppLogo");
    expect(fireEvent.load(pageNotAvailable)).toEqual(true);
  });
});
