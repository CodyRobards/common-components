import React from "react";
import { SampleComponent } from "../../src";
import { expect } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";

describe("SampleComponent should", () => {
  it("render", async () => {
    render(
      <div data-testid="default">
        <SampleComponent testProp="Sample Component" children="Sample Component" />
      </div>,
    );
    const titleBar = screen.getByTestId("default");
    expect(fireEvent.load(titleBar)).toEqual(true);
  });
});
