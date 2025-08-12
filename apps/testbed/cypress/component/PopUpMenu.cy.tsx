import { WavelengthPopUpMenu } from "@wavelengthusaf/components";
import React from "react";

const testItems = [
  { itemType: "header", label: "Help & Support", link: "/common-components", end: true },
  { itemType: "footer", label: "Contact Us:" },
  { itemType: "footer", label: "210-953-0564" },
  { itemType: "footer", email: "mailto:awesomehelp563EWS@orgbox.mil", label: "awesomehelp563EWS@orgbox.mil" },
];
const testItemLinks = [
  { label: "Random Company Wellness", link: "/PopUpMenu", itemType: "link" },
  { label: "Primary Care", link: "/PopUpMenu", itemType: "link" },
  { label: "Nutrition Services", link: "/PopUpMenu", itemType: "link" },
  { label: "Inspired Meal Planning", link: "/PopUpMenu", itemType: "link", end: true },
  { label: "Business Services", link: "/PopUpMenu", itemType: "link" },
];

describe("PopUpMenu.cy.tsx", () => {
  it("Basic Pop up menu test", () => {
    cy.mount(
      <div className="popup">
        <WavelengthPopUpMenu menuItems={testItems} color="black" />
      </div>,
    );
    const iconBtn = cy.get(".popup").children().children();
    iconBtn.should("have.css", "color", "rgb(0, 0, 0)");
    const btn = cy.get("button");
    btn.click().wait(100);
    const FirstListItem = cy.get("li");
    FirstListItem.should("have.text", "Help & Support");
    const SecondListItem = cy.get("p").first();
    SecondListItem.should("have.text", "Contact Us:");
    const thirdListItem = cy.get("p").eq(1);
    thirdListItem.should("have.text", "210-953-0564");
    const FourthListItem = cy.get("a").eq(1);
    FourthListItem.should("have.text", "awesomehelp563EWS@orgbox.mil");
  });

  it("popUp Menu with just links", () => {
    cy.mount(
      <WavelengthPopUpMenu
        menuItems={[
          { label: "Random Company Wellness", link: "/PopUpMenu", itemType: "link" },
          { label: "Primary Care", link: "/PopUpMenu", itemType: "link" },
          { label: "Nutrition Services", link: "/PopUpMenu", itemType: "link" },
          { label: "Inspired Meal Planning", link: "/PopUpMenu", itemType: "link", end: true },
          { label: "Business Services", link: "/PopUpMenu", itemType: "link" },
        ]}
        menuDirection="top"
      />,
    );

    cy.get("button").click().wait(50);
    const menu = cy.get("ul");

    for (let i = 0; i < 5; i++) {
      menu.get("li").eq(i).should("have.text", testItemLinks[i].label);
    }
  });
});
