import React from "react";
import { WavelengthDefaultIcon, WavelengthFooter } from "../../src";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Default Icon", () => {
  it("Should render", async () => {
    render(
      <div data-testid="defaultIcon">
        <WavelengthDefaultIcon />
      </div>,
    );
    const defaultIcon = screen.getByTestId("defaultIcon");
    expect(fireEvent.load(defaultIcon)).toEqual(true);
  });

  it("Should render with given height and width", async () => {
    render(
      <div data-testid="defaultIconHeightWidth">
        <WavelengthDefaultIcon width="180" height={140} />
      </div>,
    );
    const defaultIcon = screen.getByTestId("defaultIconHeightWidth");
    expect(fireEvent.load(defaultIcon)).toEqual(true);
  });
});
