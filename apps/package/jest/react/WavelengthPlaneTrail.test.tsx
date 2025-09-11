import React from "react";
import { WavelengthPlaneTrail } from "../../src";
import { expect } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";

describe("WavelengthPlaneTrail styling", () => {
  test("render right", async () => {
    render(
      <div data-testid="PlaneTraildefault">
        <WavelengthPlaneTrail trailDir="right" />
      </div>,
    );

    const box = screen.getByTestId("PlaneTraildefault");
    expect(fireEvent.load(box)).toEqual(true);
  });

  test("render left", async () => {
    render(
      <div data-testid="PlaneTrailLeftdefault">
        <WavelengthPlaneTrail trailDir="left" />
      </div>,
    );

    const boxTwo = screen.getByTestId("PlaneTrailLeftdefault");
    expect(fireEvent.load(boxTwo)).toEqual(true);
  });
});
