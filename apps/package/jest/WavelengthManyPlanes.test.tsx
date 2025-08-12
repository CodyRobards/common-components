import React from "react";
import { jest } from "@jest/globals";
import { render, waitFor, screen, fireEvent } from "@testing-library/react";
import { WavelengthManyPlanes } from "../src";

function getManyPlanes() {
  return (
    <>
      {" "}
      <div data-testid="manyplaneid">
        <WavelengthManyPlanes />
      </div>
      <div data-testid="numofplanes">
        <WavelengthManyPlanes numberOfPlanes={8} color="red" />
      </div>
      <div data-testid="planesopacity">
        <WavelengthManyPlanes opacity={0.5} />
      </div>
      <div data-testid="planesgradient">
        <WavelengthManyPlanes gradient />
      </div>
    </>
  );
}

describe("Many Planes Component", () => {
  it("Should Render the Many Planes Component", async () => {
    render(getManyPlanes());
    const planesComponent = screen.getByTestId("manyplaneid");
    const planesComponent2 = screen.getByTestId("numofplanes");
    const planesComponent3 = screen.getByTestId("planesopacity");
    const planesComponent4 = screen.getByTestId("planesgradient");

    expect(fireEvent.load(planesComponent)).toEqual(true);
    expect(fireEvent.load(planesComponent2)).toEqual(true);
    expect(fireEvent.load(planesComponent3)).toEqual(true);
    expect(fireEvent.load(planesComponent4)).toEqual(true);
  });
});
