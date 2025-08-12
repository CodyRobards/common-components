import CodeBlock from "../components/CodeBlock/CodeBlock";
import { WavelengthAutocomplete } from "@wavelengthusaf/components";
import Example from "../components/Example/Example";
import top100FilmsArray from "../assets/100movies";
import { Stack } from "@mui/material";
import ComponentContainer from "../components/ComponentContainer/ComponentContainer";

function PageAutoComplete() {
  const snippet0 = `<WavelengthAutocomplete label='Label'/>`;

  const snippet1 = `<WavelengthAutocomplete label="Select" items={top100FilmsArray} />`;

  const snippet2 = `<WavelengthAutocomplete label="Outlined" variant="outlined" />
<WavelengthAutocomplete label="Standard" variant="standard" />
<WavelengthAutocomplete label="Filled" variant="filled" />`;

  const snippet3 = `<WavelengthAutocomplete label="Default Width: 300" items={top100FilmsArray} />
<WavelengthAutocomplete label="Width: 500" items={top100FilmsArray} width={500} />`;

  const imp = `import { WavelengthAutocomplete } from '@wavelengthusaf/components'`;

  return (
    <>
      <span className="page-name">Autocomplete</span>
      <div className="contentBlock">
        {" "}
        <p>A select dropdown menu that allows you to search for a specific element within the list. Pressing Tab will then select the best result.</p>
        <br />
        <h2>Import Statement</h2>
        <CodeBlock code={imp} />
      </div>
      <div className="demoContainer">
        <Example title="label" description="The name above the Select dropdown. Will show inside of the dropdown when the list is unpopulated and unselected.">
          {" "}
          <ComponentContainer>
            <WavelengthAutocomplete label="Label" />
          </ComponentContainer>
          <CodeBlock code={snippet0} />
        </Example>
        <div id="items?" className="targets" />
        <Example title="items?" description="The list of items to be displayed in the Select Dropdown.">
          <ComponentContainer>
            <WavelengthAutocomplete label="Select" items={top100FilmsArray} />
          </ComponentContainer>
          <CodeBlock code={snippet1} />
        </Example>
        <div id="variant?" className="targets" />
        <Example title="variant?" description="The physical appearance of the Select dropdown. Default set to 'outlined'.">
          <ComponentContainer>
            <Stack spacing={2}>
              <WavelengthAutocomplete label="Outlined" variant="outlined" />
              <WavelengthAutocomplete label="Filled" variant="filled" />
              <WavelengthAutocomplete label="Standard" variant="standard" />
            </Stack>
          </ComponentContainer>
          <CodeBlock code={snippet2} />
        </Example>
        <div id="width?" className="targets" />
        <Example title="width?" description="The width of the Select dropdown. Default set to 300.">
          <ComponentContainer>
            {" "}
            <Stack spacing={3}>
              <WavelengthAutocomplete label="Default Width: 300" items={top100FilmsArray} />

              <WavelengthAutocomplete label="Width: 500" items={top100FilmsArray} width={500} />
            </Stack>
          </ComponentContainer>
          <CodeBlock code={snippet3} />
        </Example>
      </div>
    </>
  );
}
export default PageAutoComplete;
