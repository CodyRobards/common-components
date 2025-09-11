import React from "react";
import { WavelengthContentPlaceholder } from "../../src";
import { expect } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";

describe("WavelengthContentPlaceholder should", () => {
  it("render", async () => {
    render(
      <div data-testid="default">
        <WavelengthContentPlaceholder children />
      </div>,
    );
    const contentPlaceHolder = screen.getByTestId("default");
    expect(fireEvent.load(contentPlaceHolder)).toEqual(true);
  });
  it("render as a shape when specified", async () => {
    render(
      <div data-testid="type">
        <WavelengthContentPlaceholder children type="circle" />
      </div>,
    );
    const contentPlaceHolder = screen.getByTestId("type");
    expect(fireEvent.load(contentPlaceHolder)).toEqual(true);
  });
  it("render with a given height and/or width when specified", async () => {
    render(
      <div data-testid="size">
        <WavelengthContentPlaceholder children height={200} width={450} />
      </div>,
    );
    const contentPlaceHolder = screen.getByTestId("size");
    expect(fireEvent.load(contentPlaceHolder)).toEqual(true);
  });
  it("render with a given text color and/or background color when specified", async () => {
    render(
      <div data-testid="color">
        <WavelengthContentPlaceholder children bgcolor="blue" txtcolor="yellow" />
      </div>,
    );
    const contentPlaceHolder = screen.getByTestId("color");
    expect(fireEvent.load(contentPlaceHolder)).toEqual(true);
  });
});
