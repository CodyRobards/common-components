import { SearchResult, WavelengthSearch } from "@wavelengthusaf/components";
import React, { useState } from "react";

const template: SearchResult[] = [{ id: "22", title: "Rest" }];

describe("Searchbar.cy.tsx", () => {
  it("playground", () => {
    const TestWrapper = () => {
      const [option, setOptions] = useState(template);

      return (
        <WavelengthSearch
          mode="automatic"
          options={option}
          onChange={(e) => {
            console.log("E Value: ", e.target.value);
            const testData = [
              { id: "1", title: "Harry Potter1", subtitle: "A Movie About Wizards" },
              { id: "2", title: "Harry Potter1", subtitle: "Another Movie About Wizards" },
              { id: "3", title: "Transformers", subtitle: "A Movie About Robots" },
              { id: "4", title: " Avengers", subtitle: " Famous Superhero's Team Up" },
              { id: "5", title: "Random Movie", subtitle: "A Random Movie" },
              { id: "6", title: "Title One", subtitle: " Subtitle for Title One" },
            ];
            const resultArray = testData.filter((arrItem) => arrItem.title.toLowerCase().includes(e.target.value.toLowerCase()));
            setOptions(resultArray);
          }}
        />
      );
    };

    cy.mount(<TestWrapper />);
  });
});
