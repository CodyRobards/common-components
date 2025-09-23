import React from "react";
import { WavelengthTitleBar } from "../../src";
import { expect } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";
import "@wavelengthusaf/web-components";

describe("WavelengthTitleBar should", () => {
  it("render", async () => {
    render(
      <div data-testid="default">
        <WavelengthTitleBar titleText="Test" subtitleText="Test" textColor="hotpink" shadowColor="#ffffff" />
      </div>,
    );
    const titleBar = screen.getByTestId("default");
    expect(fireEvent.load(titleBar)).toEqual(true);
  });
});
