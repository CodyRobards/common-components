import { DefaultPagination } from "@wavelengthusaf/components";
import { useState, useEffect } from "react";
import Example from "../components/Example/Example";
import ComponentContainer from "../components/ComponentContainer/ComponentContainer";
import CodeBlock from "../components/CodeBlock/CodeBlock";
import { Stack } from "@mui/material";

function PagePagination() {
  const imp = "import { DefaultPagination } from @wavelengthusaf/components";
  const data = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
    "Item 11",
    "Item 12",
    "Item 13",
    "Item 14",
    "Item 15",
    "Item 16",
    "Item 17",
    "Item 18",
    "Item 19",
    "Item 20",
    "Item 21",
    "Item 22",
    "Item 23",
    "Item 24",
    "Item 25",
    "Item 26",
    "Item 27",
    "Item 28",
    "Item 29",
    "Item 30",
    "Item 31",
    "Item 32",
    "Item 33",
    "Item 34",
    "Item 35",
    "Item 36",
    "Item 37",
    "Item 38",
    "Item 39",
    "Item 40",
    "Item 41",
    "Item 42",
    "Item 43",
    "Item 44",
    "Item 45",
    "Item 46",
    "Item 47",
    "Item 48",
    "Item 49",
    "Item 50",
  ];
  const itemsPerPage = 5;
  const [currentTestPage, setCurrentTestPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  // Slice the data based on the current page
  const [paginatedData, setPaginatedData] = useState<string[]>([]);

  useEffect(() => {
    // Calculate the index range for the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    // Slice the data array to get the items for the current page
    setPaginatedData(data.slice(indexOfFirstItem, indexOfLastItem));
  }, [currentPage]);

  return (
    <>
      <span className="page-name">Default Numbered Pagination</span>
      <p>Numbered Pagination components with various styles and a numbered dropdown menu feature to effecivelty navigate over multiple general scenarios.</p>
      <br />
      <h2>Import Statement</h2>
      <CodeBlock code={imp} />
      <div>
        <Example title="DefaultPagination" description="Pagination design component that has a style of text that has dropdown numbered system. Press on the ellipse to use the dropdown.">
          <ComponentContainer>
            <DefaultPagination totalPages={100} currentPageNumber={currentTestPage} onPageChange={setCurrentTestPage} />
          </ComponentContainer>
          <CodeBlock
            code="const [currentPage, setCurrentPage] = useState(1); 
<DefaultPagination totalPages={100} currentPageNumber={currentPage} onPageChange={setCurrentPage} />"
          />
        </Example>
        <Stack spacing={3} marginTop={5}>
          <div>
            <h3>totalPages</h3>
            <i>Enter the number of the total amount of Pages to be displayed.</i>
          </div>
          <div>
            {" "}
            <h3>currentPageNumber</h3>
            <i>The current PageNumber you would like the page to be displayed. The reccomendation is to use a UseState React Hook.</i>
          </div>
          <div>
            <h3>onPageChange</h3>
            <i>callback when the page is changed.</i>
            <br />
            <code>signature: onPageChange: (page: number) =&gt; void;</code>
          </div>
          <div>
            <h3>style</h3>
            <i>The styles that you can implement with the Pagination component. They are four styles including: "text", "outlined", "circular", "contained".</i>
          </div>
        </Stack>
      </div>
      <Example title="Pagination Style Variations" description="The different Pagination styles you can administer.">
        <ComponentContainer>
          <Stack spacing={5}>
            <DefaultPagination totalPages={100} currentPageNumber={currentTestPage} onPageChange={setCurrentTestPage} style="text" />
            <DefaultPagination totalPages={100} currentPageNumber={currentTestPage} onPageChange={setCurrentTestPage} style="outlined" />
            <DefaultPagination totalPages={100} currentPageNumber={currentTestPage} onPageChange={setCurrentTestPage} style="contained" />
            <DefaultPagination totalPages={10} currentPageNumber={currentTestPage} onPageChange={setCurrentTestPage} style="circular" />
          </Stack>
        </ComponentContainer>
        <CodeBlock
          code='<DefaultPagination totalPages={100} currentPageNumber={currentPage} onPageChange={setCurrentPage}  style="text"/>
<DefaultPagination totalPages={100} currentPageNumber={currentPage} onPageChange={setCurrentPage}  style="outlined"/>
<DefaultPagination totalPages={100} currentPageNumber={currentPage} onPageChange={setCurrentPage}  style="contained"/>
<DefaultPagination totalPages={10} currentPageNumber={currentPage} onPageChange={setCurrentPage}  style="circular"/>'
        />
      </Example>
      <Example title="Pagination Demo Example" description="Pagination with an example code usage and display.">
        <ComponentContainer>
          <div>
            <div>
              <h3>Pagination Example</h3>
              <ul>
                {paginatedData.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="styletest">
              <DefaultPagination totalPages={10} currentPageNumber={currentPage} onPageChange={setCurrentPage} style="circular" />
            </div>
          </div>
        </ComponentContainer>
        <CodeBlock
          code="const data = ['Item 1', ... 'Item 100'];  
const itemsPerPage = 5; 
const [currentPage, setCurrentPage] = useState(1);
const [paginatedData, setPaginatedData] = useState<string[]>([]);

useEffect(() => {
    // Calculate the index range for the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    // Slice the data array to get the items for the current page
    setPaginatedData(data.slice(indexOfFirstItem, indexOfLastItem));
  }, [currentPage]);

<DefaultPagination totalPages={100} currentPageNumber={currentPage} onPageChange={setCurrentPage} style='circular'/>"
        />
      </Example>
    </>
  );
}

export default PagePagination;

//Add a classname to DefaultPagination so that you can adjust the css height and width
