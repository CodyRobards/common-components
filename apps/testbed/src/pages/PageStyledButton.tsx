import { WavelengthDropdown, WavelengthStyledButton } from "@wavelengthusaf/components";
import AddIcon from "@mui/icons-material/Add";

import buttonTypesCode from "../assets/buttonTypesCode";
import CodeBlock from "../components/CodeBlock/CodeBlock";
import Example from "../components/Example/Example";
import { useState } from "react";
import ComponentContainer from "../components/ComponentContainer/ComponentContainer";

const imp = `import { WavelengthStyledButton } from "@wavelengthusaf/components";`;

type Types =
  | "channel_one_transparent"
  | "channel_one_launch"
  | "channel_one_request"
  | "channel_one_pending"
  | "channel_one_disabled"
  | "ewdms_tertiary"
  | "ewdms_primary"
  | "ewdms_secondary"
  | "brewery"
  | "default";

function PageStyledButton() {
  const [types, setTypes] = useState<Types>("default");
  const [text, setText] = useState("Default");
  const [codeBlock, setCodeBlock] = useState(buttonTypesCode[9]);

  const handleTypeChange = (newState: Types) => {
    setTypes(newState);
  };
  const menuOptions: { option: React.ReactNode; onClick: React.MouseEventHandler<HTMLLIElement> | undefined }[] = [
    {
      option: <span style={{ fontSize: "12px" }}>Channel One Transparent</span>,
      onClick: () => {
        handleTypeChange("channel_one_transparent");
        setText("add");
        setCodeBlock(buttonTypesCode[0]);
      },
    },
    {
      option: <span style={{ fontSize: "12px" }}>Channel One Launch</span>,
      onClick: () => {
        handleTypeChange("channel_one_launch");
        setText("Launch");
        setCodeBlock(buttonTypesCode[1]);
      },
    },
    {
      option: <span style={{ fontSize: "12px" }}>Channel One Request</span>,
      onClick: () => {
        handleTypeChange("channel_one_request");
        setText("Request Access");
        setCodeBlock(buttonTypesCode[2]);
      },
    },
    {
      option: <span style={{ fontSize: "12px" }}>Channel One Pending</span>,
      onClick: () => {
        handleTypeChange("channel_one_pending");
        setText("Pending");
        setCodeBlock(buttonTypesCode[3]);
      },
    },
    {
      option: <span style={{ fontSize: "12px" }}>Channel One Disabled</span>,
      onClick: () => {
        handleTypeChange("channel_one_disabled");
        setText("Not Available");
        setCodeBlock(buttonTypesCode[4]);
      },
    },
    {
      option: <span style={{ fontSize: "12px" }}>EWDMS Tertiary</span>,
      onClick: () => {
        handleTypeChange("ewdms_tertiary");
        setText("Button");
        setCodeBlock(buttonTypesCode[7]);
      },
    },
    {
      option: <span style={{ fontSize: "12px" }}>EWDMS Primary</span>,
      onClick: () => {
        handleTypeChange("ewdms_primary");
        setText("Button");
        setCodeBlock(buttonTypesCode[5]);
      },
    },
    {
      option: <span style={{ fontSize: "12px" }}>EWDMS Secondary</span>,
      onClick: () => {
        handleTypeChange("ewdms_secondary");
        setText("Button");
        setCodeBlock(buttonTypesCode[6]);
      },
    },
    {
      option: <span style={{ fontSize: "12px" }}>Brewery</span>,
      onClick: () => {
        handleTypeChange("brewery");
        setText("Create Report");
        setCodeBlock(buttonTypesCode[8]);
      },
    },
    {
      option: <span style={{ fontSize: "12px" }}>Default</span>,
      onClick: () => {
        handleTypeChange("default");
        setText("Default");
        setCodeBlock(buttonTypesCode[9]);
      },
    },
  ];

  return (
    <>
      <span className="page-name">Styled Buttons</span>
      <div className="contentBlock">
        <p>Wavelength Styled Buttons have preset styles that allow specific buttons with minimal code</p>
        <br />

        <h2>Import Statements</h2>
        <CodeBlock code={imp} />
      </div>

      <Example title="type" description="Each styled button must have a type, the default is 'default'. Use the dropdown menu to view the different types">
        <WavelengthDropdown
          palette={"custom"}
          width={"190px"}
          buttonSx={{ backgroundColor: "white", width: "188px", height: "45px", marginBottom: "15px" }}
          options={menuOptions}
          buttonText={<span style={{ fontSize: "12px", fontWeight: "bold" }}>Select Button type</span>}
        ></WavelengthDropdown>
        <ComponentContainer>
          <WavelengthStyledButton type={types}>{text}</WavelengthStyledButton>
        </ComponentContainer>
        <CodeBlock code={codeBlock}></CodeBlock>
      </Example>
      <Example title="styles" description="styles allows users to apply custom styles to the button overiding current styles">
        <ComponentContainer>
          <WavelengthStyledButton type="brewery">Create Report</WavelengthStyledButton>
          <WavelengthStyledButton type="brewery" styles={{ width: "100px", marginLeft: "16px", borderRadius: "0px" }}>
            Create
          </WavelengthStyledButton>
        </ComponentContainer>
        <CodeBlock
          code='<WavelengthStyledButton type="brewery">Create Report</WavelengthStyledButton>
<WavelengthStyledButton type="brewery" styles={{ width: "100px", marginLeft: "16px", borderRadius: "0px" }}>
Create
</WavelengthStyledButton>'
        ></CodeBlock>
      </Example>
      <Example title="hoverstyles" description="hoverstyles are applied when the button is hovered">
        <ComponentContainer>
          <WavelengthStyledButton type="default" hoverstyles={{ backgroundColor: "blue" }}>
            Custom
          </WavelengthStyledButton>
        </ComponentContainer>
        <CodeBlock
          code='<WavelengthStyledButton type="default"  hoverstyles={{ backgroundColor: "blue" }}>
Custom
</WavelengthStyledButton>'
        ></CodeBlock>
      </Example>
      <Example title="activestyles" description="activestyles are applied when a button is clicked or held">
        <ComponentContainer>
          <WavelengthStyledButton type="default" activestyles={{ border: "1px solid blue", color: "blue" }}>
            Custom
          </WavelengthStyledButton>
        </ComponentContainer>
        <CodeBlock
          code='<WavelengthStyledButton type="default" activestyles={{ border: "1px solid blue", color: "blue" }}>
Custom
</WavelengthStyledButton>'
        ></CodeBlock>
      </Example>
      <Example title="disabledstyles" description="disabledstyles are applied when the 'disabled' prop is set to true">
        <ComponentContainer>
          <WavelengthStyledButton type="channel_one_transparent">Add</WavelengthStyledButton>
          <WavelengthStyledButton type="channel_one_transparent" disabled disabledstyles={{ color: "#898989", border: "1px solid #898989", cursor: "not-allowed" }} styles={{ marginLeft: "16px" }}>
            Add
          </WavelengthStyledButton>
        </ComponentContainer>
      </Example>
      <Example title="icon" description="icon allows users to add an Icon in front of the text inside the button">
        <ComponentContainer>
          <WavelengthStyledButton type="ewdms_primary" icon={<AddIcon fontSize="small" />}>
            Button
          </WavelengthStyledButton>
        </ComponentContainer>
        <CodeBlock
          code='<WavelengthStyledButton type="ewdms_primary" icon={<AddIcon fontSize="small" />}>
Button
</WavelengthStyledButton>'
        ></CodeBlock>
      </Example>
    </>
  );
}

export default PageStyledButton;
