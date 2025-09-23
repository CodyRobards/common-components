import { WavelengthAutoComplete } from "../../src";
import { expect } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

const data: string[] = ["leo and his hideout", "donald", "ryan", "ceo ryan", "adrian", "bat", "bruce", "wayne", "super", "bot", "a1", "randy"];

describe("WavelengthAutoComplete should", () => {
  it("render", async () => {
    const setStateMock = jest.fn();
    render(
      <div data-testid="default">
        <WavelengthAutoComplete data={data} floatLabel="name" onDataChange={setStateMock} />
      </div>,
    );
    const contentPlaceHolder = screen.getByTestId("default");
    expect(fireEvent.load(contentPlaceHolder)).toEqual(true);
  });
  it("render with complete props filled out", async () => {
    const setStateMock = jest.fn();
    render(
      <div data-testid="complete-props-filled">
        <WavelengthAutoComplete
          data={data}
          floatLabel="name"
          onDataChange={setStateMock}
          height="51px"
          width="350px"
          inputBorderStyle="2px solid #ccc"
          inputFocusBorderColor="#4a90e2"
          labelColor="#ccc"
          autoBackGroundColor="#FFFFF"
          focusedLabelColor="#4a90e2"
        />
      </div>,
    );
    const contentPlaceHolder = screen.getByTestId("complete-props-filled");
    expect(fireEvent.load(contentPlaceHolder)).toEqual(true);
  });
  it("render with complete props filled out", async () => {
    const user = userEvent.setup();
    const setStateMock = jest.fn();
    render(
      <WavelengthAutoComplete
        data={data}
        floatLabel="name"
        onDataChange={setStateMock}
        height="51px"
        width="350px"
        inputBorderStyle="2px solid #ccc"
        inputFocusBorderColor="#4a90e2"
        labelColor="#ccc"
        autoBackGroundColor="#FFFFF"
        focusedLabelColor="#4a90e2"
      />,
    );

    const input = screen.getByTestId("InputSearchBar") as HTMLInputElement;

    await user.click(input);
    await user.type(input, "leo");
    //fireEvent.change(input, { target: { value: "leo" } });
    expect(input.value).toBe("leo");
  });
  it("render without suggestion being available", async () => {
    const user = userEvent.setup();
    const setStateMock = jest.fn();
    render(
      <WavelengthAutoComplete
        data={data}
        floatLabel="name"
        onDataChange={setStateMock}
        height="51px"
        width="350px"
        inputBorderStyle="2px solid #ccc"
        inputFocusBorderColor="#4a90e2"
        labelColor="#ccc"
        autoBackGroundColor="#FFFFF"
        focusedLabelColor="#4a90e2"
      />,
    );

    const input = screen.getByTestId("InputSearchBar") as HTMLInputElement;

    await user.click(input);
    await user.type(input, "zsd");
    expect(input.value).toBe("zsd");
  });
  it("test the dropdown list and click", async () => {
    const user = userEvent.setup();
    const setStateMock = jest.fn();
    render(
      <WavelengthAutoComplete
        data={data}
        floatLabel="name"
        onDataChange={setStateMock}
        height="51px"
        width="350px"
        inputBorderStyle="2px solid #ccc"
        inputFocusBorderColor="#4a90e2"
        labelColor="#ccc"
        autoBackGroundColor="#FFFFF"
        focusedLabelColor="#4a90e2"
      />,
    );

    const input = screen.getByTestId("InputSearchBar") as HTMLInputElement;
    await user.click(input);
    await user.keyboard("{arrowdown}");
    await user.keyboard("{arrowup}");
    await user.keyboard("{enter}");
    await user.keyboard("{enter}");
    expect(input.value).toBe("leo and his hideout");
  });
  it("dropdown list 10 times and click", async () => {
    const user = userEvent.setup();
    const setStateMock = jest.fn();
    render(
      <WavelengthAutoComplete
        data={data}
        floatLabel="name"
        onDataChange={setStateMock}
        height="51px"
        width="350px"
        inputBorderStyle="2px solid #ccc"
        inputFocusBorderColor="#4a90e2"
        labelColor="#ccc"
        autoBackGroundColor="#FFFFF"
        focusedLabelColor="#4a90e2"
      />,
    );

    const input = screen.getByTestId("InputSearchBar") as HTMLInputElement;
    await user.click(input);
    const j = 10;

    for (let i = 0; i < j; i++) {
      await user.keyboard("{arrowdown}");
    }
    await user.keyboard("{enter}");

    expect(input.value).toBe("a1");
  });
  it("handle blur event", async () => {
    const user = userEvent.setup();
    const setStateMock = jest.fn();
    render(
      <div data-testid="handle-blur-test">
        <WavelengthAutoComplete
          data={data}
          floatLabel="name"
          onDataChange={setStateMock}
          height="51px"
          width="350px"
          inputBorderStyle="2px solid #ccc"
          inputFocusBorderColor="#4a90e2"
          labelColor="#ccc"
          autoBackGroundColor="#FFFFF"
          focusedLabelColor="#4a90e2"
        />
        <button data-testid="test-button" />
      </div>,
    );
    const input = screen.getByTestId("InputSearchBar") as HTMLInputElement;
    await user.click(input);
    const testclick = screen.getByTestId("test-button");
    await user.click(testclick);
    expect(input.value).toBe("");
  });
  it("handle blur with no exact match", async () => {
    const user = userEvent.setup();
    const setStateMock = jest.fn();
    render(
      <div data-testid="blur-no-exact-test">
        <WavelengthAutoComplete
          data={data}
          floatLabel="name"
          onDataChange={setStateMock}
          height="51px"
          width="350px"
          inputBorderStyle="2px solid #ccc"
          inputFocusBorderColor="#4a90e2"
          labelColor="#ccc"
          autoBackGroundColor="#FFFFF"
          focusedLabelColor="#4a90e2"
        />
        <button data-testid="test-button" />
      </div>,
    );
    const input = screen.getByTestId("InputSearchBar") as HTMLInputElement;
    await user.click(input);
    await user.type(input, "cheese");
    const testClick = screen.getByTestId("test-button");
    await user.click(testClick);
    expect(input.value).toBe("");
  });
  it("handle list click", async () => {
    const user = userEvent.setup();
    const setStateMock = jest.fn();
    render(
      <WavelengthAutoComplete
        data-testid="auto-comp-input-search-list-1"
        data={data}
        floatLabel="name"
        onDataChange={setStateMock}
        height="51px"
        width="350px"
        inputBorderStyle="2px solid #ccc"
        inputFocusBorderColor="#4a90e2"
        labelColor="#ccc"
        autoBackGroundColor="#FFFFF"
        focusedLabelColor="#4a90e2"
      />,
    );
    const input = screen.getByTestId("InputSearchBar") as HTMLInputElement;
    await user.click(input);
    const inputListItem = screen.getByTestId("auto-comp-input-search-list-1") as HTMLUListElement;
    await user.click(inputListItem);
    expect(input.value).toBe("leo and his hideout");
  });
  it("false test for handle change, seeing if value length is zero", async () => {
    const user = userEvent.setup();
    const setStateMock = jest.fn();
    render(
      <WavelengthAutoComplete
        data={data}
        floatLabel="name"
        onDataChange={setStateMock}
        height="51px"
        width="350px"
        inputBorderStyle="2px solid #ccc"
        inputFocusBorderColor="#4a90e2"
        labelColor="#ccc"
        autoBackGroundColor="#FFFFF"
        focusedLabelColor="#4a90e2"
      />,
    );

    const input = screen.getByTestId("InputSearchBar") as HTMLInputElement;
    await user.click(input);
    await user.type(input, "cheese");
    const j = 5;

    for (let i = 0; i < j; i++) {
      await user.keyboard("{backspace}");
    }
    await user.keyboard("{enter}");
    expect(input.value).toBe("ceo ryan");
  });
  it("no hover item click", async () => {
    const user = userEvent.setup();
    const setStateMock = jest.fn();
    render(
      <WavelengthAutoComplete
        data={data}
        floatLabel="name"
        onDataChange={setStateMock}
        height="51px"
        width="350px"
        inputBorderStyle="2px solid #ccc"
        inputFocusBorderColor="#4a90e2"
        labelColor="#ccc"
        autoBackGroundColor="#FFFFF"
        focusedLabelColor="#4a90e2"
      />,
    );

    const input = screen.getByTestId("InputSearchBar") as HTMLInputElement;
    await user.click(input);
    await user.type(input, "cheese");
    const noHoverItem = screen.getByText("No Options found");
    await user.click(noHoverItem);
    expect(input.value).toBe("cheese");
  });
});

//`InputSearchList-${item}`
// No Options found
//"NoOptionsListitem"
