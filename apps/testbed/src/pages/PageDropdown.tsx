import React from "react";
import { WavelengthDropdown } from "@wavelengthusaf/components";
import CodeBlock from "../components/CodeBlock/CodeBlock";
import ComponentContainer from "../components/ComponentContainer/ComponentContainer";
import Example from "../components/Example/Example";

interface Option {
  option: React.ReactNode;
  onClick: () => void;
}

const DropdownExamples: React.FC = () => {
  const dropdownOptions1: Option[] = [
    { option: <label className="lora-text">TFR</label>, onClick: () => console.log("TFR") },
    { option: <label className="lora-text">EWAR</label>, onClick: () => console.log("EWAR") },
    { option: <label className="lora-text">HSR</label>, onClick: () => console.log("HSR") },
  ];

  const dropdownOptions2: Option[] = [
    { option: <label className="lora-text">borderColor</label>, onClick: () => console.log("borderColor") },
    { option: <label className="lora-text">backgroundColor</label>, onClick: () => console.log("backgroundColor") },
    { option: <label className="lora-text">hoverColor</label>, onClick: () => console.log("hoverColor") },
  ];

  return (
    <>
      <span className="page-name">Dropdown Menu</span>

      <div className="content-block">
        <p>This is a button that displays a Dropdown Menu when clicked.</p>
        <h2>Import Statements</h2>
        <CodeBlock code={`import { WavelengthDropdown } from "@wavelengthusaf/components";`} />
      </div>

      {/* Example 1: Required Props */}
      <Example title="Required Props" description="These are the required props for the dropdown menu to be functional.">
        <PropDescription title="buttonText" description="The text displayed inside of the button, can be a string or React node" />
        <PropDescription title="width" description="The width of the dropdown menu & button." />
        <PropDescription
          title="options"
          description="An array of options to display in the dropdown menu. Each option should have a `title` (which will be displayed) and optionally an `onClick` function."
        />
        <PropDescription title="palette" description="The example below is the brewery palette" />

        <ComponentContainer>
          <WavelengthDropdown palette="brewery" buttonText={<span className="lora-text">Create Report</span>} width="190px" options={dropdownOptions1} menuSx={{ boxShadow: "none" }} />
        </ComponentContainer>

        <CodeBlock
          code={`
<WavelengthDropdown
  palette="brewery"
  buttonText={<span className="lora-text">Create Report</span>}
  width="190px"
  options={[
    { option: <label className="lora-text">TFR</label>, onClick: () => console.log('TFR') },
    { option: <label className="lora-text">EWAR</label>, onClick: () => console.log('EWAR') },
    { option: <label className="lora-text">HSR</label>, onClick: () => console.log('HSR') },
  ]}
/>
          `}
        />
      </Example>

      {/* Example 2: Styling Dropdown Menu */}
      <Example title="Styling Dropdown Menu" description="These props enable you to customize the styling of the dropdown menu.">
        <PropDescription title="buttonSx" description="Use this buttonSx prop to override and customize CSS styles for the button." />
        <PropDescription title="menuSx" description="Use this menuSx prop to override or customize CSS styles for the menu. menuSx must conform with menuSxProps!" />

        <CodeBlock
          code={`
interface MenuSxProps {
  backgroundColor: string;
  borderColor: string;
  hoverColor: string;
  width: string;
}
          `}
        />

        <ComponentContainer>
          <WavelengthDropdown
            buttonText="Button Text"
            buttonSx={{
              backgroundColor: "blue",
              width: "190px",
              color: "white",
              padding: "12px 16px",
              "&:hover": { backgroundColor: "lightblue" },
            }}
            palette="custom"
            width="240px"
            options={dropdownOptions2}
          />
        </ComponentContainer>

        <CodeBlock
          code={`
<WavelengthDropdown
  buttonText="Button Text"
  buttonSx={{
    backgroundColor: 'blue',
    width: '240px',
    color: 'white',
    padding: '12px 16px',
    '&:hover': { backgroundColor: 'lightblue' },
  }}
  palette="custom"
  menuSx={{ backgroundColor: 'lightblue' }}
  width="240px"
  options={[
    { option: <label className="lora-text">borderColor</label>, onClick: () => console.log('borderColor') },
    { option: <label className="lora-text">backgroundColor</label>, onClick: () => console.log('backgroundColor') },
    { option: <label className="lora-text">hoverColor</label>, onClick: () => console.log('hoverColor') },
  ]}
/>
          `}
        />
      </Example>
    </>
  );
};

interface PropDescriptionProps {
  title: string;
  description: string;
}

const PropDescription: React.FC<PropDescriptionProps> = ({ title, description }) => (
  <>
    <h2>{title}</h2>
    <p>{description}</p>
  </>
);

export default DropdownExamples;
