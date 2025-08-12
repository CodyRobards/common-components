import { WavelengthAppLogo, WavelengthBox } from "@wavelengthusaf/components";
import React from "react";
const names = ["wings", "swarm", "563rdpatch", "arrow", "563rdlabel", "channelone", "wavelengthw"];
describe("BrownBox.cy.tsx", () => {
  it("Render Box", () => {
    names.forEach((name) => {
      cy.mount(
        <WavelengthBox width={400} height={200}>
          <WavelengthAppLogo name={name} height={100} width={100} />
        </WavelengthBox>,
      );
      cy.get(".MuiGrid-container").should("have.css", "width", "400px").should("have.css", "height", "200px");
    });
  });
  it("Render Box w/o height", () => {
    names.forEach((name) => {
      cy.mount(
        <WavelengthBox width={400}>
          <WavelengthAppLogo name={name} height={100} width={100} />
        </WavelengthBox>,
      );
      cy.get(".MuiGrid-container").should("have.css", "width", "400px");
    });
  });
  it("Render Box w/o width", () => {
    names.forEach((name) => {
      cy.mount(
        <WavelengthBox height={200}>
          <WavelengthAppLogo name={name} height={100} width={100} />
        </WavelengthBox>,
      );
      cy.get(".MuiGrid-container").should("have.css", "height", "200px");
    });
  });
});
