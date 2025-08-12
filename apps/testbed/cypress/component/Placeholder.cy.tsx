import { WavelengthContentPlaceholder } from "@wavelengthusaf/components";
import React from "react";

describe("Placeholder.cy.tsx", () => {
  it("Default Placeholder", () => {
    cy.mount(
      <div className="placeholder">
        <WavelengthContentPlaceholder>Placeholder</WavelengthContentPlaceholder>
      </div>,
    );

    cy.get(".placeholder").should("exist").children().should("exist").should("have.text", "Placeholder").should("have.css", "color", "rgb(255, 255, 255)").invoke("width").should("eq", 200);
  });
  it("Default Placeholder With Color Props", () => {
    cy.mount(
      <div className="placeholder">
        <WavelengthContentPlaceholder txtcolor="white" bgcolor="red" width={300} height={400}>
          Placeholder
        </WavelengthContentPlaceholder>
      </div>,
    );

    cy.get(".placeholder")
      .should("exist")
      .children()
      .should("exist")
      .should("have.text", "Placeholder")
      .should("have.css", "color", "rgb(255, 255, 255)")
      .should("have.css", "background-color", "rgb(255, 0, 0)")
      .invoke("width")
      .should("eq", 300);

    cy.get(".placeholder").children().invoke("height").should("eq", 400);
  });
  it("Circle Placeholder", () => {
    cy.mount(
      <div className="placeholder">
        <WavelengthContentPlaceholder type="circle">Placeholder</WavelengthContentPlaceholder>
      </div>,
    );

    cy.get(".placeholder")
      .should("exist")
      .children()
      .should("exist")
      .should("have.text", "Placeholder")
      .should("have.css", "color", "rgb(0, 0, 0)")

      .should("have.css", "border-radius", "50%")
      .invoke("width")
      .should("eq", 200);
  });
  it("Circle Placeholder With Color Props", () => {
    cy.mount(
      <div className="placeholder">
        <WavelengthContentPlaceholder type="circle" bgcolor="red" txtcolor="white" width={300} height={400}>
          Placeholder
        </WavelengthContentPlaceholder>
      </div>,
    );

    cy.get(".placeholder")
      .should("exist")
      .children()
      .should("exist")
      .should("have.text", "Placeholder")
      .should("have.css", "color", "rgb(255, 255, 255)")
      .should("have.css", "background-color", "rgb(255, 0, 0)")
      .should("have.css", "border-radius", "50%")
      .should("have.css", "height", "400px")
      .invoke("width")
      .should("eq", 300);
  });
});
