import { render, screen, fireEvent } from "@testing-library/react";
import { WavelengthCommentDisplay } from "../../src";

import { expect } from "@jest/globals";

import React from "react";

describe("WavelengthCommentDisplay", () => {
  const mockProps = {
    author: "John Doe",
    date: "April 18, 2025",
    comments: "This is a test comment.",
  };

  it("renders author, date, and comment text", () => {
    render(<WavelengthCommentDisplay {...mockProps} />);

    expect(screen.getByText("John Doe")).toBeTruthy();
    expect(screen.getByText("April 18, 2025")).toBeTruthy();
    expect(screen.getByText("This is a test comment.")).toBeTruthy();
  });

  it("shows outlined check icon by default", () => {
    render(<WavelengthCommentDisplay {...mockProps} />);

    expect(screen.getByTestId("CheckCircleOutlineIcon")).toBeTruthy();
  });

  it("toggles to filled check icon on click", () => {
    render(<WavelengthCommentDisplay {...mockProps} />);

    const iconButton = screen.getByRole("button");
    fireEvent.click(iconButton);

    expect(screen.getByTestId("CheckCircleIcon")).toBeTruthy();
  });

  it("calls the onClick handler when icon is clicked", () => {
    const onClickMock = jest.fn();
    render(<WavelengthCommentDisplay {...mockProps} onClick={onClickMock} />);

    const iconButton = screen.getByRole("button");
    fireEvent.click(iconButton);

    expect(onClickMock).toHaveBeenCalled();
  });
});
