import { ChangeEvent, useEffect, useRef, useState, KeyboardEvent, act } from "react";
import { WLAutoComplete } from "../src";
import { expect } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ReactDOMClient, { createRoot } from "react-dom/client";
import React from "react";

const data: string[] = ["leo and his hideout", "donald", "rian", "ceoryan", "adrian", "bat", "bruce", "wayne", "super", "bot", "a1", "ozzy"];

describe("WavelengthTitleBar should", () => {
  it("render", async () => {
    const setStateMock = jest.fn();
    render(
      <div data-testid="default">
        <WLAutoComplete data={data} floatLabel="name" onDataChange={setStateMock} />
      </div>,
    );
    const contentPlaceHolder = screen.getByTestId("default");
    expect(fireEvent.load(contentPlaceHolder)).toEqual(true);
  });
  it("render with complete props filled out", async () => {
    const setStateMock = jest.fn();
    render(
      <div data-testid="completepropsfilled">
        <WLAutoComplete
          data={data}
          floatLabel="name"
          onDataChange={setStateMock}
          height="51px"
          width="350px"
          inputBorderStyle="2px solid #ccc"
          inputFocusBorderColor="#4a90e2"
          labelColor="#ccc"
          autoBackGroundColor="#FFFFF"
          FocusedlabelColor="#4a90e2"
        />
      </div>,
    );
    const contentPlaceHolder = screen.getByTestId("completepropsfilled");
    expect(fireEvent.load(contentPlaceHolder)).toEqual(true);
  });
  it("render with complete props filled out", async () => {
    const user = userEvent.setup();
    const setStateMock = jest.fn();
    render(
      <WLAutoComplete
        data={data}
        floatLabel="name"
        onDataChange={setStateMock}
        height="51px"
        width="350px"
        inputBorderStyle="2px solid #ccc"
        inputFocusBorderColor="#4a90e2"
        labelColor="#ccc"
        autoBackGroundColor="#FFFFF"
        FocusedlabelColor="#4a90e2"
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
      <WLAutoComplete
        data={data}
        floatLabel="name"
        onDataChange={setStateMock}
        height="51px"
        width="350px"
        inputBorderStyle="2px solid #ccc"
        inputFocusBorderColor="#4a90e2"
        labelColor="#ccc"
        autoBackGroundColor="#FFFFF"
        FocusedlabelColor="#4a90e2"
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
      <WLAutoComplete
        data={data}
        floatLabel="name"
        onDataChange={setStateMock}
        height="51px"
        width="350px"
        inputBorderStyle="2px solid #ccc"
        inputFocusBorderColor="#4a90e2"
        labelColor="#ccc"
        autoBackGroundColor="#FFFFF"
        FocusedlabelColor="#4a90e2"
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
      <WLAutoComplete
        data={data}
        floatLabel="name"
        onDataChange={setStateMock}
        height="51px"
        width="350px"
        inputBorderStyle="2px solid #ccc"
        inputFocusBorderColor="#4a90e2"
        labelColor="#ccc"
        autoBackGroundColor="#FFFFF"
        FocusedlabelColor="#4a90e2"
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
  it("handleblur event", async () => {
    const user = userEvent.setup();
    const setStateMock = jest.fn();
    render(
      <div data-testid="handleblurtest">
        <WLAutoComplete
          data={data}
          floatLabel="name"
          onDataChange={setStateMock}
          height="51px"
          width="350px"
          inputBorderStyle="2px solid #ccc"
          inputFocusBorderColor="#4a90e2"
          labelColor="#ccc"
          autoBackGroundColor="#FFFFF"
          FocusedlabelColor="#4a90e2"
        />
        <button data-testid="testbutton" />
      </div>,
    );
    const input = screen.getByTestId("InputSearchBar") as HTMLInputElement;
    await user.click(input);
    const testclick = screen.getByTestId("testbutton");
    await user.click(testclick);
    expect(input.value).toBe("");
  });
  it("handleblur with no exact match", async () => {
    const user = userEvent.setup();
    const setStateMock = jest.fn();
    render(
      <div data-testid="blurnoexacttest">
        <WLAutoComplete
          data={data}
          floatLabel="name"
          onDataChange={setStateMock}
          height="51px"
          width="350px"
          inputBorderStyle="2px solid #ccc"
          inputFocusBorderColor="#4a90e2"
          labelColor="#ccc"
          autoBackGroundColor="#FFFFF"
          FocusedlabelColor="#4a90e2"
        />
        <button data-testid="testbutton" />
      </div>,
    );
    const input = screen.getByTestId("InputSearchBar") as HTMLInputElement;
    await user.click(input);
    await user.type(input, "adfg");
    const testclick = screen.getByTestId("testbutton");
    await user.click(testclick);
    expect(input.value).toBe("");
  });
  it("handlelistclick", async () => {
    const user = userEvent.setup();
    const setStateMock = jest.fn();
    render(
      <WLAutoComplete
        data={data}
        floatLabel="name"
        onDataChange={setStateMock}
        height="51px"
        width="350px"
        inputBorderStyle="2px solid #ccc"
        inputFocusBorderColor="#4a90e2"
        labelColor="#ccc"
        autoBackGroundColor="#FFFFF"
        FocusedlabelColor="#4a90e2"
      />,
    );
    //data-testid="InputSearchOptionsList
    const input = screen.getByTestId("InputSearchBar") as HTMLInputElement;
    await user.click(input);
    const inputListItem = screen.getByTestId("WlAutoComp-inputSearchList-1") as HTMLUListElement;
    await user.click(inputListItem);
    expect(input.value).toBe("leo and his hideout");
  });
  it("false test for handlechange, seeing if value length is zero", async () => {
    const user = userEvent.setup();
    const setStateMock = jest.fn();
    render(
      <WLAutoComplete
        data={data}
        floatLabel="name"
        onDataChange={setStateMock}
        height="51px"
        width="350px"
        inputBorderStyle="2px solid #ccc"
        inputFocusBorderColor="#4a90e2"
        labelColor="#ccc"
        autoBackGroundColor="#FFFFF"
        FocusedlabelColor="#4a90e2"
      />,
    );

    const input = screen.getByTestId("InputSearchBar") as HTMLInputElement;
    await user.click(input);
    await user.type(input, "sdfhf");
    const j = 5;

    for (let i = 0; i < j; i++) {
      await user.keyboard("{backspace}");
    }
    await user.keyboard("{enter}");
    expect(input.value).toBe("");
  });
  it("no hover item click", async () => {
    const user = userEvent.setup();
    const setStateMock = jest.fn();
    render(
      <WLAutoComplete
        data={data}
        floatLabel="name"
        onDataChange={setStateMock}
        height="51px"
        width="350px"
        inputBorderStyle="2px solid #ccc"
        inputFocusBorderColor="#4a90e2"
        labelColor="#ccc"
        autoBackGroundColor="#FFFFF"
        FocusedlabelColor="#4a90e2"
      />,
    );

    const input = screen.getByTestId("InputSearchBar") as HTMLInputElement;
    await user.click(input);
    await user.type(input, "sdfhf");
    const noHoverItem = screen.getByText("No Options found");
    await user.click(noHoverItem);
    expect(input.value).toBe("sdfhf");
  });
});

//`InputSearchList-${item}`
// No Options found
//"NoOptionsListitem"
