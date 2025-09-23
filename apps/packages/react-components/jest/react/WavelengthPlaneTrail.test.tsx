import React from "react";
import { WavelengthPlaneTrail } from "../../src";
import { expect } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";

describe("WavelengthPlaneTrail styling", () => {
  test("render right", async () => {
    render(
      <div data-testid="PlaneTrailDefault">
        <WavelengthPlaneTrail trailDir="right" />
      </div>,
    );

    const box = screen.getByTestId("PlaneTrailDefault");
    expect(fireEvent.load(box)).toEqual(true);
  });

  test("render left", async () => {
    render(
      <div data-testid="PlaneTrailLeftDefault">
        <WavelengthPlaneTrail trailDir="left" />
      </div>,
    );

    const boxTwo = screen.getByTestId("PlaneTrailLeftDefault");
    expect(fireEvent.load(boxTwo)).toEqual(true);
  });
});
