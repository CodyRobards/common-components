import { WavelengthNotAvailablePage, WavelengthButton } from "@wavelengthusaf/components";
import CodeBlock from "../components/CodeBlock/CodeBlock";
import Example from "../components/Example/Example";
import { useState } from "react";
import { Stack } from "@mui/material";
import ComponentContainer from "../components/ComponentContainer/ComponentContainer";

function PageNotAvailable() {
  const imp = "import { WavelengthNotAvailablePageComponent } from '@wavelengthusaf/components;";
  const [color, setColor] = useState("");

  return (
    <>
      <span className="page-name">Page / App Not Available Page</span>
      <div className="contentBlock">
        <h2>Import Statement</h2>
        <CodeBlock code={imp} />
      </div>

      <div className="demoContainer">
        <Example title="Page / App Not Available Page" description="Customizable Error Page for when a page is not available ">
          <ComponentContainer>
            {" "}
            <div style={{ height: 700, width: 800 }}>
              <WavelengthNotAvailablePage
                backgroundColor={color}
                errorMessage="Example App is not available"
                buttonText={"Go to Common Components Home Page"}
                redirectLink={"/common-components/"}
              ></WavelengthNotAvailablePage>
            </div>
          </ComponentContainer>{" "}
          <CodeBlock
            code={` <WavelengthNotAvailablePage backgroundColor={color} errorMessage="Example App is not available" 
buttonText={'Go to Common Components Home Page'} redirectLink={'/'} ></WavelengthNotAvailablePage>`}
          ></CodeBlock>
          <h3 style={{ textAlign: "center", marginTop: 20, marginBottom: 20 }}>Live Color Demo</h3>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
            <WavelengthButton variant="contained" colorOne="white" colorTwo="red" onClick={() => setColor("red")}>
              Red Color
            </WavelengthButton>
            <WavelengthButton variant="contained" colorOne="white" colorTwo="black" onClick={() => setColor("black")}>
              Black Color
            </WavelengthButton>
            <WavelengthButton variant="contained" colorOne="white" colorTwo="gray" onClick={() => setColor("gray")}>
              Gray Color
            </WavelengthButton>
            <WavelengthButton variant="contained" colorOne="black" colorTwo="cyan" onClick={() => setColor("cyan")}>
              Cyan Color
            </WavelengthButton>
            <WavelengthButton variant="contained" colorOne="white" colorTwo="purple" onClick={() => setColor("purple")}>
              Purple Color
            </WavelengthButton>
          </div>
          <Stack spacing={3} marginTop={5}>
            <div>
              <h3>WavelengthAppLogo</h3>
              <i>name of the logo to be displayed</i>
            </div>
            <div>
              {" "}
              <h3>errorMessage</h3>
              <i>Message to be displayed under the WavelengthAppLogo</i>
            </div>
            <div>
              <h3>buttonText</h3>
              <i>Text that goes inside the button</i>
            </div>
            <div>
              <h3>redirectLink</h3>
              <i>Link that takes the user somewhere when clicked</i>
            </div>
            <div>
              <h3>backgroundColor</h3>
              <i>Background color for the page</i>
            </div>
            <div>
              <h3>buttonColorOne & buttonColorTwo</h3>
              <i>buttonColorOne is the color of text inside button, also border color</i>
              <i>buttonColorTwo is the color of the background of the button</i>
            </div>
          </Stack>
        </Example>
      </div>
    </>
  );
}

export default PageNotAvailable;
