import { WavelengthCommentDisplay } from "@wavelengthusaf/components";
import React from "react";

describe("CommentMessage.cy.tsx", () => {
  it("Render Basic Comment Display with Required Props", () => {
    cy.mount(
      <div className="comment-container">
        <WavelengthCommentDisplay author="Keenan" date="April 17th 2025" comments="This is the comment." />
      </div>,
    );

    const CommentDisplay = cy.get(".comment-container").children().should("have.css", "border", "1px solid rgba(0, 0, 0, 0.05)");
    CommentDisplay.should("have.css", "width", "332px").should("have.css", "background-color", "rgb(250, 242, 236)").should("have.css", "padding", "12px").should("have.css", "border-radius", "6px");
    const name = CommentDisplay.children().eq(0).should("have.text", "Keenan");
    const date = CommentDisplay.parent().children().eq(1).should("have.text", "April 17th 2025").should("have.css", "font-size", "12px");
    const comment = CommentDisplay.parent().children().eq(2);
    comment.should("have.text", "This is the comment.").should("have.css", "font-size", "14px");
    const icon = CommentDisplay.parent().children().children().click().wait(100);
    cy.get(".comment-container").children().children().children().children().should("have.css", "color", "rgb(209, 106, 47)");
  });

  it("Render Comment Display with custom props", () => {
    cy.mount(
      <div className="comment-container">
        <WavelengthCommentDisplay
          author="Keenan"
          date="April 17th 2025"
          comments="This is my comment block, entering more text to take up more space."
          iconSelectedColor="green"
          textColor="green"
          backgroundColor="white"
          border="2px solid green"
        />
      </div>,
    );
    const CommentDisplay = cy.get(".comment-container").children().should("have.css", "color", "rgb(0, 128, 0)").should("have.css", "border", "2px solid rgb(0, 128, 0)");
    CommentDisplay.should("have.css", "width", "332px").should("have.css", "background-color", "rgb(255, 255, 255)").should("have.css", "padding", "12px").should("have.css", "border-radius", "6px");
    const name = CommentDisplay.children().eq(0).should("have.text", "Keenan");
    const date = CommentDisplay.parent().children().eq(1).should("have.text", "April 17th 2025").should("have.css", "font-size", "12px");
    const comment = CommentDisplay.parent().children().eq(2);
    comment.should("have.text", "This is my comment block, entering more text to take up more space.").should("have.css", "font-size", "14px");
    const icon = CommentDisplay.parent().children().children().click().wait(100);
    cy.get(".comment-container").children().children().children().children().should("have.css", "color", "rgb(0, 128, 0)");
  });
});
