import { WavelengthAutocomplete } from "@wavelengthusaf/components";
import React from "react";

describe("AutoComplete.cy.tsx", () => {
  it("Basic Autocomplete", () => {
    cy.mount(<WavelengthAutocomplete label="Label" variant="outlined" />);
    cy.contains("label", "Label").should("exist").should("have.css", "color", "rgb(255, 255, 255)").should("have.css", "border-color", "rgb(255, 255, 255)");
    cy.get(".MuiFormLabel-root").should("have.text", "Label");
  });
  it("Autocomplete with colors and default width", () => {
    cy.mount(<WavelengthAutocomplete label="Label" variant="outlined" borderColor="black" hoverColor="green" textColor="black" />);
    cy.get(".MuiAutocomplete-root")
      .should("exist")

      .should("have.css", "color", "rgb(0, 0, 0)")
      .should("have.css", "border-color", "rgb(0, 0, 0)")
      .invoke("width")
      .should("eq", 300);
  });
  it("Autocomplete with colors and specified width", () => {
    cy.mount(<WavelengthAutocomplete label="Label" variant="outlined" borderColor="black" hoverColor="green" textColor="black" width={400} />);
    cy.get(".MuiAutocomplete-root").should("exist").should("have.css", "color", "rgb(0, 0, 0)").should("have.css", "border-color", "rgb(0, 0, 0)").invoke("width").should("eq", 400);
  });

  it("Autocomplete with items", () => {
    cy.mount(<WavelengthAutocomplete label="Label" variant="outlined" borderColor="black" hoverColor="green" textColor="black" items={["Name 1", "Name 2", "Name 3", "Name 4", "Name 5"]} />);
    cy.get(".MuiInputBase-root")
      .should("exist")
      .should("have.css", "color", "rgb(0, 0, 0)")
      .should("have.css", "border-color", "rgb(0, 0, 0)")
      .should("have.css", "width", "300px")
      .children()
      .should("have.value", "Name 1");

    for (let i = 0; i < 5; i++) {
      cy.get(`[data-testid="ArrowDropDownIcon"]`).should("exist").click().wait(300);
      cy.get('[role="combobox"]')
        .should("exist")
        .get(`#\\:r6\\:-option-${i}`)
        .click()
        .get(".MuiInputBase-root")
        .children()
        .should("have.value", `Name ${i + 1}`);
    }
  });

  it("Standard Variant Test", () => {
    cy.mount(<WavelengthAutocomplete label="Standard" variant="standard" textColor="red" items={["Name 1", "Name 2", "Name 3", "Name 4", "Name 5"]} />);
    cy.get(".MuiInputBase-root").should("have.css", "color", "rgb(255, 0, 0)");

    for (let i = 0; i < 5; i++) {
      cy.get(`[data-testid="ArrowDropDownIcon"]`).should("exist").click().wait(300);
      cy.get('[role="combobox"]')
        .should("exist")
        .get(`#\\:r8\\:-option-${i}`)
        .click()
        .get(".MuiInputBase-root")
        .children()
        .should("have.value", `Name ${i + 1}`);
    }
  });
  it("Filled Variant Test", () => {
    cy.mount(<WavelengthAutocomplete label="Standard" variant="filled" textColor="red" items={["Name 1", "Name 2", "Name 3", "Name 4", "Name 5"]} />);
    cy.get(".MuiInputBase-root").should("have.css", "color", "rgb(255, 0, 0)").should("have.css", "background-color", "rgba(0, 0, 0, 0.06)");

    for (let i = 0; i < 5; i++) {
      cy.get(`[data-testid="ArrowDropDownIcon"]`).should("exist").click().wait(300);
      cy.get('[role="combobox"]')
        .should("exist")
        .get(`#\\:ra\\:-option-${i}`)
        .click()
        .get(".MuiInputBase-root")
        .children()
        .should("have.value", `Name ${i + 1}`);
    }
  });
});
