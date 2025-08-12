import { WavelengthTitleBar } from "@wavelengthusaf/components";
import React from "react";

describe("WavelengthTitleBar (React wrapper)", () => {
  it("renders the web component with correct text and styling", () => {
    cy.mount(<WavelengthTitleBar titleText="Hello World" subtitleText="Subtitle here" textColor="#123456" textShadow={false} />);

    cy.get("wavelength-title-bar").should("exist");

    cy.get("wavelength-title-bar").shadow().find(".title").should("contain.text", "Hello World").and("have.css", "color", "rgb(18, 52, 86)");

    cy.get("wavelength-title-bar").shadow().find(".subtitle").should("contain.text", "Subtitle here");
  });

  it("applies no shadow by default when textShadow is undefined", () => {
    cy.mount(<WavelengthTitleBar titleText="Shadow Title" />);
    cy.get("wavelength-title-bar").shadow().find(".title").should("have.css", "text-shadow", "none");
  });

  it("enables shadow when textShadow is defined", () => {
    cy.mount(<WavelengthTitleBar titleText="No Shadow" textShadow />);
    cy.get("wavelength-title-bar").shadow().find(".title").should("have.css", "text-shadow", "rgb(255, 255, 255) 5.008px 5.008px 6px");
  });
});
