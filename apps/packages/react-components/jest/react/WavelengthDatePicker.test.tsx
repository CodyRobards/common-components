import { WavelengthDatePicker } from "../../src";
import { expect } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";

describe("WavelengthDatePicker should", () => {
  it("render", async () => {
    const setStateMock = jest.fn();
    render(
      <div data-testid="default">
        <WavelengthDatePicker floatLabel="start" inputTimeType="datetime-local" OnDataChange={setStateMock} />
      </div>,
    );
    const contentPlaceHolder = screen.getByTestId("default");
    expect(fireEvent.load(contentPlaceHolder)).toEqual(true);
  });
  it("render date, no styling", async () => {
    const setStateMock = jest.fn();
    render(
      <div data-testid="date-default">
        <WavelengthDatePicker floatLabel="start" inputTimeType="date" OnDataChange={setStateMock} />
      </div>,
    );
    const contentPlaceHolder = screen.getByTestId("date-default");
    expect(fireEvent.load(contentPlaceHolder)).toEqual(true);
  });
  it("render datetime-local, only min times", async () => {
    const setStateMock = jest.fn();
    render(
      <div data-testid="date-local-min-time">
        <WavelengthDatePicker floatLabel="start" inputTimeType="datetime-local" min="2000-01-01" OnDataChange={setStateMock} />
      </div>,
    );
    const contentPlaceHolder = screen.getByTestId("date-local-min-time");
    expect(fireEvent.load(contentPlaceHolder)).toEqual(true);
  });
  it("render datetime-local, only max times", async () => {
    const setStateMock = jest.fn();
    render(
      <div data-testid="date-local-max-time">
        <WavelengthDatePicker floatLabel="start" inputTimeType="datetime-local" max="2025-01-14" OnDataChange={setStateMock} />
      </div>,
    );
    const contentPlaceHolder = screen.getByTestId("date-local-max-time");
    expect(fireEvent.load(contentPlaceHolder)).toEqual(true);
  });
  it("render datetime-local, add min and max times", async () => {
    const setStateMock = jest.fn();
    render(
      <div data-testid="date-local-min-and-max">
        <WavelengthDatePicker floatLabel="start" inputTimeType="datetime-local" min="2000-01-01" max="2025-01-01" OnDataChange={setStateMock} />
      </div>,
    );
    const contentPlaceHolder = screen.getByTestId("date-local-min-and-max");
    expect(fireEvent.load(contentPlaceHolder)).toEqual(true);
  });
  it("render input focused", async () => {
    const setStateMock = jest.fn();
    render(<WavelengthDatePicker floatLabel="start" inputTimeType="date" min="2000-01-01" max="2025-01-01" OnDataChange={setStateMock} />);
    const dateInput = screen.getByTestId("my_wl_date_input");
    //fireEvent.focus(dateInput);
    fireEvent.change(dateInput, { target: { value: "2023-07-15" } });
    expect(setStateMock).toHaveBeenCalledTimes(1);
  });
  it("render input lose focus", async () => {
    const setStateMock = jest.fn();
    render(<WavelengthDatePicker floatLabel="start" inputTimeType="date" min="2000-01-01" max="2025-01-01" OnDataChange={setStateMock} />);
    const dateInput = screen.getByTestId("my_wl_date_input");
    fireEvent.focus(dateInput);
    fireEvent.blur(dateInput);
    expect(setStateMock).toHaveBeenCalledTimes(0);
  });
});
