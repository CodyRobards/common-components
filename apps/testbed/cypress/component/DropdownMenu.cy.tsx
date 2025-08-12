import { WavelengthDropdown } from "@wavelengthusaf/components";
import React from "react";

describe("DropdownMenu.cy.tsx", () => {
  it("playground", () => {
    cy.mount(
      <div>
        <WavelengthDropdown
          palette="brewery"
          buttonText={<span className="lora-text">Create Report</span>}
          width="200px"
          options={[
            { option: <label className="lora-text">TFR</label>, onClick: () => console.log("TFR") },
            { option: <label className="lora-text">EWAR</label>, onClick: () => console.log("EWAR") },
            { option: <label className="lora-text">HSR</label>, onClick: () => console.log("HSR") },
          ]}
        />
      </div>,
    );

    // Button checks
    cy.get("wavelength-button").should("exist").shadow().find("button").should("have.css", "color", "rgb(25, 118, 210)").and("have.css", "background-color", "rgba(0, 0, 0, 0)");

    // Click to open dropdown
    cy.get("wavelength-button").shadow().find("button").click({ force: true });
  });
});
