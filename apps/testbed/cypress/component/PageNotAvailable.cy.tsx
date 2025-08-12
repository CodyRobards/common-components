import { WavelengthNotAvailablePage } from "@wavelengthusaf/components";
import React from "react";

describe("PageNotAvailable.cy.tsx", () => {
  it("Page with default props", () => {
    cy.mount(
      <div className="container">
        <WavelengthNotAvailablePage errorMessage={"Error Message"} buttonText={"Button Text"}></WavelengthNotAvailablePage>
      </div>,
    );

    cy.get(".container").children().should("exist").should("have.css", "background-color", "rgb(128, 128, 128)").contains("Error Message");

    // cy.get("wavelength-button").shadow().find(".label").should("have.text", "Button Text").should("have.css", "background-color", "rgb(13, 82, 136)").should("have.css", "color", "rgb(255, 255, 255)");
  });

  it("Page with button props", () => {
    cy.mount(
      <div className="container">
        <WavelengthNotAvailablePage errorMessage={"Error Message"} buttonText={"Button Text"} backgroundColor="green" buttonColorOne="red" buttonColorTwo="white"></WavelengthNotAvailablePage>
      </div>,
    );

    cy.get(".container").children().should("exist").should("have.css", "background-color", "rgb(0, 128, 0)").contains("Error Message");

    // cy.get("wavelength-button").shadow().find(".label").should("exist").should("have.text", "Button Text").should("have.css", "background-color", "rgb(255, 255, 255)").should("have.css", "color", "rgb(255, 0, 0)");

    cy.get("svg").should("exist");
  });
});
