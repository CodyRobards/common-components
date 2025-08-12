import React from "react";
import { WavelengthAlert } from "../../../package/src";
// describe("Alert.cy.tsx", () => {
//   it("Renders Default Alert Box", () => {
//     cy.mount(<WavelengthAlert id="wavelengthAlert" />);

//     const Alert = cy.get("#wavelengthAlert");
//     Alert.should("exist");
//     Alert.should("have.css", "width", "320px").and("have.css", "height", "96px").and("have.css", "background-color", "rgb(229, 246, 253)").and("have.css", "border", "1px solid rgb(2, 136, 209)");
//     const header = Alert.children().eq(1).children().eq(0);

//     header.should("have.text", "Access Requested");
//     const alertDescription = Alert.parent().children().eq(1);
//     alertDescription.should("have.text", "Keenan Ray has requested to be added as a User to your App");
//     const icon = cy.get("svg").should("exist").should("have.css", "color", "rgb(2, 136, 209)");
//   });

//   it("Renders The Correct Styles When Viewed is True", () => {
//     cy.mount(<WavelengthAlert id="wavelengthAlert" viewed />);

//     const Alert = cy.get("#wavelengthAlert");
//     Alert.should("exist");
//     Alert.should("have.css", "width", "320px").and("have.css", "height", "96px").and("have.css", "background-color", "rgb(223, 220, 220)").and("have.css", "border", "1px solid rgb(160, 162, 163)");
//     const header = Alert.children().eq(1).children().eq(0);
//     header.should("have.text", "Access Requested");
//     const alertDescription = Alert.parent().children().eq(1);
//     alertDescription.should("have.text", "Keenan Ray has requested to be added as a User to your App");
//     const icon = cy.get("svg").should("exist").should("have.css", "color", "rgb(160, 162, 163)");
//   });

//   it("Renders Close Icon when a onClose function is active", () => {
//     cy.mount(<WavelengthAlert id="wavelengthAlert" onClose={() => {}} />);
//     const Alert = cy.get("#wavelengthAlert");
//     Alert.should("exist");
//     cy.get('[data-testid="CloseIcon"]').should("exist");
//   });
// });
