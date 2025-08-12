import { WavelengthAppLogo } from "@wavelengthusaf/components";
import React from "react";
const names = ["wings", "swarm", "563rdpatch", "arrow", "563rdlabel", "channelone", "wavelengthw"];
describe("WavelengthAppLogo.cy.tsx", () => {
  it("Render each logo with height and width", () => {
    names.forEach((name) => {
      cy.mount(<WavelengthAppLogo name={name} width={200} height={200} />);
      cy.get("svg").should("have.css", "width", "200px").should("have.css", "height", "200px");
    });
  });

  it("Render each logo with height not width", () => {
    names.forEach((name) => {
      cy.mount(<WavelengthAppLogo name={name} height={200} />);
      cy.get("svg").should("have.css", "height", "200px");
    });
  });
  it("Render each logo with width not height", () => {
    names.forEach((name) => {
      cy.mount(<WavelengthAppLogo name={name} width={200} />);
      cy.get("svg").should("have.css", "width", "200px");
    });
  });
  it("No name attribute", () => {
    cy.mount(<WavelengthAppLogo />);
    cy.get('[data-cy-root=""] > div').should("have.text", "AIR  FORCE");
  });
});
