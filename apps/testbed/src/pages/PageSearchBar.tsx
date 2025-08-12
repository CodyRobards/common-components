import CodeBlock from "../components/CodeBlock/CodeBlock";
import { Search } from "@mui/icons-material";
import { WavelengthSearch } from "@wavelengthusaf/components";
import { SearchResult } from "@wavelengthusaf/components/";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import Example from "../components/Example/Example";
import ComponentContainer from "../components/ComponentContainer/ComponentContainer";

const template: SearchResult[] = [];

function PageSearchBar() {
  const imp = 'import { WavelengthSearch } from "@wavelengthusaf/components";';
  const [option, setOptions] = useState(template);
  const [option2, setOptions2] = useState(template);
  const [option3, setOptions3] = useState(template);

  function onSearchItemSelectedExample(_selectedItem: string | SearchResult) {
    console.log("Perform action on item selected");
  }

  return (
    <>
      <span className="page-name">Search Bar</span>
      <div className="contentBlock">
        <p>Search Bars let users search a specific list of data for a string value.</p>
        <br />

        <h2>Import Statements</h2>
        <CodeBlock code={imp} />
      </div>
      <Example title="Requirements" description="In order to use the Search Bar these requirements must be met:">
        <Stack spacing={2}>
          <ul>
            <div>
              <li>
                Each Search Bar must have a <span style={{ fontWeight: "bold" }}>mode</span>{" "}
              </li>
            </div>
            <div>
              <li>
                The <span style={{ fontWeight: "bold" }}>mode</span> signifies the type of search the Search Bar will perform. It can be <span style={{ fontWeight: "bold" }}>automatic</span>(Searches
                with each keypress) or <span style={{ fontWeight: "bold" }}>manual</span> (Searches on Enter, or Icon Click)
              </li>
            </div>
          </ul>
          <br />
          <h2>SearchResult Interface</h2>
          <CodeBlock
            code={`export interface SearchResult {}
  id: string;
  title: string;
  subtitle?: string;
}`}
          />
        </Stack>
      </Example>
      <div id="Search Bar Mode: Automatic" className="targets" />

      <Stack spacing={0} sx={{ marginTop: "0px" }}>
        <Example
          title="Search Bar Mode: Automatic"
          description="automatic enables the user to search the response with each key press in the search input.
          Use onChange Prop for Search Functionality"
        >
          <ComponentContainer>
            <WavelengthSearch
              width="75%"
              mode="automatic"
              label="Search"
              borderColor="white"
              hoverColor="blue"
              textColor="white"
              borderRadius={30}
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
                const resultArray = testData.filter((arrItem) => {
                  return arrItem.title.toLowerCase().includes(e.target.value.toLowerCase());
                });
                setOptions(resultArray);
              }}
              onSearchItemSelected={(value: SearchResult | string) => {
                typeof value === "string" ? console.log(`String Response ${value}`) : console.log(`ID: ${value.id} Title: ${value.title} Subtitle: ${value.subtitle}`);
              }}
              children={<Search />}
            />
          </ComponentContainer>
          <CodeBlock
            code={`
  <WavelengthSearch
    width="75%"
    mode="automatic"
    label="Search"
    borderColor="white"
    hoverColor="blue"
    textColor="white"
    borderRadius={30}
    options={option}
    onChange={(e) => {
      console.log('E Value: ', e.target.value);
      const testData = [
        { id: '1', title: 'Harry Potter1', subtitle: 'A Movie About Wizards' },
        { id: '2', title: 'Harry Potter2', subtitle: 'Another Movie About Wizards' },
        { id: '3', title: 'Transformers', subtitle: 'A Movie About Robots' },
        { id: '4', title: ' Avengers', subtitle: " Famous Superhero's Team Up" },
        { id: '5', title: 'Random Movie', subtitle: 'A Random Movie' },
        { id: '6', title: 'Title One', subtitle: ' Subtitle for Title One' },
      ];
      const resultArray = testData.filter((arrItem) => {
        return arrItem.title.toLowerCase().includes(e.target.value.toLowerCase());
      });
      setOptions(resultArray);
    }}
    onSearchItemSelected={(value: SearchResult | string) => {
      typeof value === 'string'
        ? console.log(\`String Response \${value}\`)
        : console.log(\`ID: \${value.id} Title: \${value.title} Subtitle: \${value.subtitle}\`);
    }}
    children={<Search />}
  />
  `}
          />
        </Example>
        <div id="Search Bar Mode: Manual" className="targets" />
        <Example
          title="Search Bar Mode: Manual"
          description="manual enables the user to search the response of the search function with a click from search icon or Enter. Use the onEnter Function for search functionality. "
        >
          <ComponentContainer>
            <WavelengthSearch
              width="75%"
              label="Search"
              mode="manual"
              borderColor="white"
              hoverColor="blue"
              textColor="white"
              borderRadius={30}
              onEnter={(searchVal: string) => {
                const testData = [
                  { id: "1", title: "Harry Potter1", subtitle: "A Movie About Wizards" },
                  { id: "2", title: "Harry Potter2", subtitle: "Another Movie About Wizards" },
                  { id: "3", title: "Transformers", subtitle: "A Movie About Robots" },
                  { id: "4", title: " Avengers", subtitle: " Famous Superhero's Team Up" },
                  { id: "5", title: "Random Movie", subtitle: "A Random Movie" },
                  { id: "6", title: "Title One", subtitle: " Subtitle for Title One" },
                ];
                const resultArray = testData.filter((arrItem) => {
                  return arrItem.title.toLowerCase().includes(searchVal.toLowerCase());
                });
                setOptions2(resultArray);
              }}
              onSearchItemSelected={(value: SearchResult | string) => {
                typeof value === "string" ? console.log(`String Response ${value}`) : console.log(`ID: ${value.id} Title: ${value.title} Subtitle: ${value.subtitle}`);
              }}
              children={<Search />}
              options={option2}
            />
          </ComponentContainer>
          <CodeBlock
            code={`<WavelengthSearch
    width="75%"
    label="Search"
    mode="manual"
    borderColor="white"
    hoverColor="blue"
    textColor="white"
    borderRadius={30}
    onEnter={(searchVal: string) => {
      const testData = [
        { id: "1", title: "Harry Potter1", subtitle: "A Movie About Wizards" },
        { id: "2", title: "Harry Potter2", subtitle: "Another Movie About Wizards" },
        { id: "3", title: "Transformers", subtitle: "A Movie About Robots" },
        { id: "4", title: " Avengers", subtitle: " Famous Superhero's Team Up" },
        { id: "5", title: "Random Movie", subtitle: "A Random Movie" },
        { id: "6", title: "Title One", subtitle: " Subtitle for Title One" },
      ];
      const resultArray = testData.filter((arrItem) => {
        return arrItem.title.toLowerCase().includes(searchVal.toLowerCase());
      });
      setOptions2(resultArray);
    }}
    onSearchItemSelected={(value: SearchResult | string) => {
      typeof value === "string" ? console.log(\`String Response \${value}\`) : console.log(\`ID: \${value.id} Title: \${value.title} Subtitle: \${value.subtitle}\`);
    }}
    children={<Search />}
    options={option2}
            />`}
          />
        </Example>
        <Example title="Search Bar Type: Text Box" description="text-box type has searchbar functionality, without the search icon and in the form of a box. ">
          <ComponentContainer>
            <WavelengthSearch
              width="75%"
              label="Search"
              mode="automatic"
              size="small"
              type="text-box"
              borderColor="white"
              hoverColor="blue"
              textColor="white"
              borderRadius={5}
              onChange={(e) => {
                console.log("target", e.target.value);
                const testData = [
                  { id: "1", title: "Harry Potter1", subtitle: "A Movie About Wizards" },
                  { id: "2", title: "Harry Potter2", subtitle: "Another Movie About Wizards" },
                  { id: "3", title: "Transformers", subtitle: "A Movie About Robots" },
                  { id: "4", title: " Avengers", subtitle: " Famous Superhero's Team Up" },
                  { id: "5", title: "Random Movie", subtitle: "A Random Movie" },
                  { id: "6", title: "Title One", subtitle: " Subtitle for Title One" },
                ];
                const resultArray = testData.filter((arrItem) => {
                  return arrItem.title.toLowerCase().includes(e.target.value.toLowerCase());
                });
                setOptions3(resultArray);
              }}
              onSearchItemSelected={(value: SearchResult | string) => {
                typeof value === "string" ? console.log(`String Response ${value}`) : console.log(`ID: ${value.id} Title: ${value.title} Subtitle: ${value.subtitle}`);
              }}
              options={option3}
            />
          </ComponentContainer>
          <CodeBlock
            code={`<WavelengthSearch
    width="75%"
    label="Search"
    mode="automatic"
    size="small"
    type="text-box"
    borderColor="white"
    hoverColor="blue"
    textColor="white"
    borderRadius={5}
    onChange={(e) => {
      console.log("target", e.target.value);
      const testData = [
        { id: "1", title: "Harry Potter1", subtitle: "A Movie About Wizards" },
        { id: "2", title: "Harry Potter2", subtitle: "Another Movie About Wizards" },
        { id: "3", title: "Transformers", subtitle: "A Movie About Robots" },
        { id: "4", title: " Avengers", subtitle: " Famous Superhero's Team Up" },
        { id: "5", title: "Random Movie", subtitle: "A Random Movie" },
        { id: "6", title: "Title One", subtitle: " Subtitle for Title One" },
      ];
      const resultArray = testData.filter((arrItem) => {
        return arrItem.title.toLowerCase().includes(e.target.value.toLowerCase());
      });
      setOptions3(resultArray);
    }}
    onSearchItemSelected={(value: SearchResult | string) => {
      typeof value === "string" ? console.log(\`String Response \${value}\`) : console.log(\`ID: \${value.id} Title: \${value.title} Subtitle: \${value.subtitle}\`);
    }}
    
    options={option3}
            />`}
          />
        </Example>
        <div id="Customizing Search Bar" className="targets" />
        <Example title="Customizing Search Bar" description="The width, size, label, backgroundColor, and borderRadius allows you to customize your Search Bar">
          <span style={{ fontWeight: "bold" }}>width / size</span> - width controls the width meanwhile size controls height of the search bar. Size can either be "small" or "medium"
          <span style={{ fontWeight: "bold" }}>borderRadius</span> - Controls the radius of the border, gives the Search Bar a rounded border, Default value is 5
          <span style={{ fontWeight: "bold" }}>label</span> - shows label text inside search bar before its clicked
          <span style={{ fontWeight: "bold" }}>children</span> - enables you to pass in a child react component, in this case a mui icon (The search icon)
          <span style={{ fontWeight: "bold" }}>iconPos</span> - enables you to specify the horizontal position of the search icon. May either be "start" or "end"
          <Stack
            spacing={3}
            alignItems={"center"}
            sx={{
              backgroundColor: "#081C27",
              borderRadius: "5px",
              border: "1px solid #214355",
              padding: "30px",
              marginTop: "30px",
            }}
          >
            <WavelengthSearch
              options={[]}
              width="75%"
              label="Search Label"
              size="small"
              borderRadius={5}
              borderColor="#4EC9B3"
              hoverColor="blue"
              textColor="#4EC9B3"
              mode={"automatic"}
              children={<Search />}
              onSearchItemSelected={onSearchItemSelectedExample}
            />

            <WavelengthSearch
              width="75%"
              height="50px"
              label="Search Label"
              borderRadius={30}
              borderColor="#4EC9B3"
              hoverColor="#8df4e1"
              textColor="#4EC9B3"
              mode={"automatic"}
              children={<Search />}
              options={[]}
              onSearchItemSelected={onSearchItemSelectedExample}
            />
            <WavelengthSearch
              width="75%"
              height="50px"
              label="Search Label"
              borderRadius={30}
              borderColor="#4EC9B3"
              hoverColor="#8df4e1"
              iconPos="start"
              textColor="#4EC9B3"
              mode={"automatic"}
              children={<Search />}
              options={[]}
              onSearchItemSelected={onSearchItemSelectedExample}
            />
            <WavelengthSearch
              width="75%"
              height="50px"
              label="Search Label"
              borderRadius={30}
              borderColor="white"
              hoverColor="white"
              textColor="white"
              backgroundColor=""
              mode={"automatic"}
              children={<Search />}
              options={[]}
              onSearchItemSelected={onSearchItemSelectedExample}
            />
          </Stack>
          <CodeBlock
            code={`
  <WavelengthSearch
    options={[]}
    width="75%"
    label="Search Label"
    size="small"
    borderRadius={5}
    borderColor="#4EC9B3"
    hoverColor="blue"
    textColor="#4EC9B3"
    mode={"automatic"}
    children={<Search />}
    onSearchItemSelected={onSearchItemSelectedExample}
  />
  <WavelengthSearch
    width="75%"
    height="50px"
    label="Search Label"
    borderRadius={30}
    borderColor="#4EC9B3"
    hoverColor="#8df4e1"
    textColor="#4EC9B3"
    mode={"automatic"}
    children={<Search />}
    options={[]}
    onSearchItemSelected={onSearchItemSelectedExample}
  />
  <WavelengthSearch
    width="75%"
    height="50px"
    label="Search Label"
    borderRadius={30}
    borderColor="#4EC9B3"
    hoverColor="#8df4e1"
    iconPos="start"
    textColor="#4EC9B3"
    mode={"automatic"}
    children={<Search />}
    options={[]}
    onSearchItemSelected={onSearchItemSelectedExample}
  />
  <WavelengthSearch
    width="75%"
    height="50px"
    label="Search Label"
    borderRadius={30}
    borderColor="#4EC9B3"
    hoverColor="#8df4e1"
    textColor="#4EC9B3"
    backgroundColor="white"
    mode={"automatic"}
    children={<Search />}
    options={[]}
    onSearchItemSelected={onSearchItemSelectedExample}
  />
  `}
          />
        </Example>
      </Stack>
    </>
  );
}

export default PageSearchBar;
