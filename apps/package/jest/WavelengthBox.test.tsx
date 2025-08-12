import React from "react";
import { WavelengthBox } from "../src";
import { expect } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Brown Box should", () => {
  it("render", async () => {
    render(
      <div data-testid="default">
        <WavelengthBox children height={200} width={450} />
      </div>,
    );
    const box = screen.getByTestId("default");
    expect(fireEvent.load(box)).toEqual(true);
  });
});
