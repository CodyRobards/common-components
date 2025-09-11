import { ChangeEvent, useEffect, useRef, useState, KeyboardEvent, act } from "react";
import { WLDatePicker } from "../../src";
import { expect } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ReactDOMClient, { createRoot } from "react-dom/client";
import React from "react";

describe("WavelengthTitleBar should", () => {
  it("render", async () => {
    const setStateMcok = jest.fn();
    render(
      <div data-testid="default">
        <WLDatePicker labelVariant="start" inputTimeType="datetime-local" OnDataChange={setStateMcok} />
      </div>,
    );
    const contentPlaceHolder = screen.getByTestId("default");
    expect(fireEvent.load(contentPlaceHolder)).toEqual(true);
  });
  it("render date, no styling", async () => {
    const setStateMcok = jest.fn();
    render(
      <div data-testid="datedefault">
        <WLDatePicker labelVariant="start" inputTimeType="date" OnDataChange={setStateMcok} />
      </div>,
    );
    const contentPlaceHolder = screen.getByTestId("datedefault");
    expect(fireEvent.load(contentPlaceHolder)).toEqual(true);
  });
  it("render datetime-local, only min times", async () => {
    const setStateMcok = jest.fn();
    render(
      <div data-testid="datelocalmintime">
        <WLDatePicker labelVariant="start" inputTimeType="datetime-local" min="2000-01-01" OnDataChange={setStateMcok} />
      </div>,
    );
    const contentPlaceHolder = screen.getByTestId("datelocalmintime");
    expect(fireEvent.load(contentPlaceHolder)).toEqual(true);
  });
  it("render datetime-local, only max times", async () => {
    const setStateMcok = jest.fn();
    render(
      <div data-testid="datelocalmaxtime">
        <WLDatePicker labelVariant="start" inputTimeType="datetime-local" max="2025-01-14" OnDataChange={setStateMcok} />
      </div>,
    );
    const contentPlaceHolder = screen.getByTestId("datelocalmaxtime");
    expect(fireEvent.load(contentPlaceHolder)).toEqual(true);
  });
  it("render datetime-local, add min and max times", async () => {
    const setStateMcok = jest.fn();
    render(
      <div data-testid="datelocalminandmax">
        <WLDatePicker labelVariant="start" inputTimeType="datetime-local" min="2000-01-01" max="2025-01-01" OnDataChange={setStateMcok} />
      </div>,
    );
    const contentPlaceHolder = screen.getByTestId("datelocalminandmax");
    expect(fireEvent.load(contentPlaceHolder)).toEqual(true);
  });
  it("render input focused", async () => {
    const setStateMcok = jest.fn();
    render(<WLDatePicker labelVariant="start" inputTimeType="date" min="2000-01-01" max="2025-01-01" OnDataChange={setStateMcok} />);
    const dateInput = screen.getByTestId("my_wl_date_input");
    //fireEvent.focus(dateInput);
    fireEvent.change(dateInput, { target: { value: "2023-07-15" } });
    expect(setStateMcok).toHaveBeenCalledTimes(1);
  });
  it("render input lose focus", async () => {
    const setStateMcok = jest.fn();
    render(<WLDatePicker labelVariant="start" inputTimeType="date" min="2000-01-01" max="2025-01-01" OnDataChange={setStateMcok} />);
    const dateInput = screen.getByTestId("my_wl_date_input");
    fireEvent.focus(dateInput);
    fireEvent.blur(dateInput);
    expect(setStateMcok).toHaveBeenCalledTimes(0);
  });
});
