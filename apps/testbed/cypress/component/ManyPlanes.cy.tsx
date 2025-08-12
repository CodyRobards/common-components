import { WavelengthManyPlanes } from "@wavelengthusaf/components";
import React from "react";

describe("ManyPlanes.cy.tsx", () => {
  it("Default Rendering of the Many Planes Component", () => {
    cy.mount(
      <div className="planes">
        <WavelengthManyPlanes />
      </div>,
    );
    const planes = cy.get(".planes").children().children().should("have.length", 5);

    for (let i = 0; i < 5; i++) {
      planes
        .get("g")
        .eq(i)
        .should("exist")
        .children()

        .should("have.css", "fill", "rgb(67, 115, 170)");
    }
  });

  it("Testing the numberofplanes prop", () => {
    cy.mount(
      <div className="planes">
        <WavelengthManyPlanes numberOfPlanes={9} />
      </div>,
    );
    const planes = cy.get(".planes").children().children().should("have.length", 9);

    for (let i = 0; i < 9; i++) {
      planes
        .get("g")
        .eq(i)
        .should("exist")
        .children()

        .should("have.css", "fill", "rgb(67, 115, 170)");
    }
  });
  it("Testing the opacity prop", () => {
    cy.mount(
      <div className="planes">
        <WavelengthManyPlanes numberOfPlanes={9} opacity={0.5} />
      </div>,
    );
    const planes = cy.get(".planes").children().children().should("have.length", 9);

    for (let i = 0; i < 9; i++) {
      planes
        .get("g")
        .eq(i)
        .should("exist")
        .children()

        .should("have.css", "fill", "rgb(67, 115, 170)")
        .should("have.css", "fill-opacity", "0.5");
    }
  });

  it("Testing the color prop", () => {
    cy.mount(
      <div className="planes">
        <WavelengthManyPlanes numberOfPlanes={9} opacity={0.5} color="red" />
      </div>,
    );
    const planes = cy.get(".planes").children().children().should("have.length", 9);

    for (let i = 0; i < 9; i++) {
      planes
        .get("g")
        .eq(i)
        .should("exist")
        .children()

        .should("have.css", "fill", "rgb(255, 0, 0)")
        .should("have.css", "fill-opacity", "0.5");
    }
  });
});
