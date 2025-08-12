import React from "react";
import { WavelengthStyledButton } from "../../../package/src";
import "cypress-real-events";
import AddIcon from "@mui/icons-material/Add";

describe("StyledButton.cy.tsx", () => {
  it("Render Default Button with Default styles", () => {
    cy.mount(
      <div className="button-div">
        <WavelengthStyledButton type="default">Button</WavelengthStyledButton>
      </div>,
    );

    const button = cy.get(".button-div").children();
    button
      .should("have.css", "width", "130px")
      .and("have.css", "height", "45px")
      .and("have.css", "border-radius", "8px")
      .and("have.css", "color", "rgb(0, 0, 0)")
      .and("have.css", "background-color", "rgb(239, 239, 239)");
  });

  it("Render Brewery Button with correct styles", () => {
    cy.mount(
      <div className="button-div">
        <WavelengthStyledButton type="brewery">Button</WavelengthStyledButton>
      </div>,
    );

    const button = cy.get(".button-div").children();
    button
      .should("have.css", "width", "138px")
      .and("have.css", "height", "44px")
      .and("have.css", "border-radius", "6px")
      .and("have.css", "color", "rgb(255, 255, 255)")
      .and("have.css", "background-color", "rgb(209, 106, 47)")
      .and("have.css", "padding", "12px 16px");
  });
  it("Render ewdms primary Button with correct styles", () => {
    cy.mount(
      <div className="button-div">
        <WavelengthStyledButton type="ewdms_primary">Button</WavelengthStyledButton>
      </div>,
    );

    const button = cy.get(".button-div").children();
    button
      .should("have.css", "width", "130px")
      .and("have.css", "height", "45px")
      .and("have.css", "border-radius", "8px")
      .and("have.css", "color", "rgb(255, 255, 255)")
      .and("have.css", "background-color", "rgb(26, 128, 131)")
      .and("have.css", "padding", "12px 32px");
  });

  it("Render ewdms secondary Button with correct styles", () => {
    cy.mount(
      <div className="button-div">
        <WavelengthStyledButton type="ewdms_secondary">Button</WavelengthStyledButton>
      </div>,
    );

    const button = cy.get(".button-div").children();
    button
      .should("have.css", "width", "130px")
      .and("have.css", "height", "45px")
      .and("have.css", "border-radius", "8px")
      .and("have.css", "border", "1px solid rgb(26, 128, 131)")
      .and("have.css", "color", "rgb(26, 128, 131)")
      .and("have.css", "background-color", "rgba(0, 0, 0, 0)")
      .and("have.css", "padding", "12px 32px");
  });

  it("Render ewdms  tertiary with correct styles", () => {
    cy.mount(
      <div className="button-div">
        <WavelengthStyledButton type="ewdms_tertiary">Button</WavelengthStyledButton>
      </div>,
    );

    const button = cy.get(".button-div").children();
    button
      .should("have.css", "width", "130px")
      .and("have.css", "height", "45px")
      .and("have.css", "border-radius", "8px")
      .and("have.css", "color", "rgb(26, 128, 131)")
      .and("have.css", "background-color", "rgba(0, 0, 0, 0)")
      .and("have.css", "padding", "12px 32px");
  });

  it("Render channel_one_launch with correct styles", () => {
    cy.mount(
      <div className="button-div">
        <WavelengthStyledButton type="channel_one_launch">Button</WavelengthStyledButton>
      </div>,
    );

    const button = cy.get(".button-div").children();
    button
      .should("have.css", "width", "62px")
      .and("have.css", "height", "24px")
      .and("have.css", "border-radius", "20px")
      .and("have.css", "color", "rgb(255, 255, 255)")
      .and("have.css", "background-color", "rgb(36, 168, 24)")
      .and("have.css", "padding", "0px");
  });

  it("Render channel_one_request with correct styles", () => {
    cy.mount(
      <div className="button-div">
        <WavelengthStyledButton type="channel_one_request">Button</WavelengthStyledButton>
      </div>,
    );

    const button = cy.get(".button-div").children();
    button
      .should("have.css", "width", "100px")
      .and("have.css", "height", "24px")
      .and("have.css", "border-radius", "20px")
      .and("have.css", "color", "rgb(255, 255, 255)")
      .and("have.css", "background-color", "rgb(29, 49, 228)")
      .and("have.css", "padding", "0px");
  });

  it("Render channel_one_pending with correct styles", () => {
    cy.mount(
      <div className="button-div">
        <WavelengthStyledButton type="channel_one_pending">Button</WavelengthStyledButton>
      </div>,
    );

    const button = cy.get(".button-div").children();
    button
      .should("have.css", "width", "62px")
      .and("have.css", "height", "24px")
      .and("have.css", "border-radius", "20px")
      .and("have.css", "color", "rgb(255, 255, 255)")
      .and("have.css", "background-color", "rgb(248, 136, 5)")
      .and("have.css", "padding", "0px");
  });

  it("Render channel_one_disabled with correct styles", () => {
    cy.mount(
      <div className="button-div">
        <WavelengthStyledButton type="channel_one_disabled">Button</WavelengthStyledButton>
      </div>,
    );

    const button = cy.get(".button-div").children();
    button
      .should("have.css", "width", "100px")
      .and("have.css", "height", "24px")
      .and("have.css", "border-radius", "20px")
      .and("have.css", "color", "rgb(255, 255, 255)")
      .and("have.css", "background-color", "rgb(158, 158, 158)")
      .and("have.css", "padding", "0px");
  });

  it("Render channel_one_disabled with correct styles", () => {
    cy.mount(
      <div className="button-div">
        <WavelengthStyledButton type="channel_one_transparent">Button</WavelengthStyledButton>
      </div>,
    );

    const button = cy.get(".button-div").children();
    button
      .should("have.css", "width", "70px")
      .and("have.css", "height", "25px")
      .and("have.css", "border-radius", "6px")
      .and("have.css", "color", "rgb(255, 255, 255)")
      .and("have.css", "background-color", "rgba(0, 0, 0, 0)")
      .and("have.css", "padding", "0px");
  });

  const TestComponent = () => {
    const [btnText, setText] = React.useState("Button");

    return (
      <div className="mybtn">
        <WavelengthStyledButton type="ewdms_primary" onClick={() => setText("ddd")}>
          {btnText}
        </WavelengthStyledButton>
      </div>
    );
  };

  it("Making sure onClick functionality works", () => {
    cy.mount(<TestComponent />);
    cy.get(".mybtn button").click();
    cy.contains("ddd").should("exist"); // ✅ check if text updated
  });

  it("Make sure styles prop works", () => {
    cy.mount(
      <div>
        <WavelengthStyledButton type="default" styles={{ backgroundColor: "blue", color: "white" }}>
          Button
        </WavelengthStyledButton>
      </div>,
    );

    const mybtn = cy.get("button").should("have.css", "background-color", "rgb(0, 0, 255)").and("have.css", "color", "rgb(255, 255, 255)");
  });
  it("Make sure hoverstyles prop works", () => {
    cy.mount(
      <div>
        <WavelengthStyledButton type="default" hoverstyles={{ backgroundColor: "blue", color: "white" }}>
          Button
        </WavelengthStyledButton>
      </div>,
    );

    const mybtn = cy.get("button").realHover().should("have.css", "background-color", "rgb(0, 0, 255)");
  });

  it("Make sure activestyles prop works", () => {
    cy.mount(
      <div>
        <WavelengthStyledButton type="default" activestyles={{ backgroundColor: "blue", color: "white" }}>
          Button
        </WavelengthStyledButton>
      </div>,
    );

    const mybtn = cy.get("button").realMouseDown().should("have.css", "background-color", "rgb(0, 0, 255)").realMouseUp();
  });

  it("Make sure disabledstyles prop works with disabled prop", () => {
    cy.mount(
      <div>
        <WavelengthStyledButton type="ewdms_primary" disabled disabledstyles={{ backgroundColor: "blue" }}>
          Button
        </WavelengthStyledButton>
      </div>,
    );

    const mybtn = cy.get("button").should("have.css", "background-color", "rgb(0, 0, 255)").and("have.css", "opacity", "0.4").and("have.css", "cursor", "not-allowed");
  });

  it("Make sure children prop works", () => {
    cy.mount(
      <div className="button">
        <WavelengthStyledButton children="Child" type="default"></WavelengthStyledButton>
      </div>,
    );
    const mybtn = cy.get("button");
    mybtn.should("have.text", "Child");
  });

  it("Renders Button with Icon", () => {
    cy.mount(
      <WavelengthStyledButton type="ewdms_primary" icon={<AddIcon />}>
        Button
      </WavelengthStyledButton>,
    );
    const mybtn = cy.get("button");
    mybtn.find("svg").should("exist");
  });
});
