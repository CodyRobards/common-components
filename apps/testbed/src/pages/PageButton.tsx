import CodeBlock from "../components/CodeBlock/CodeBlock";
import Demo from "../components/Demo/Demo";
import { WavelengthButton } from "@wavelengthusaf/components";
import Example from "../components/Example/Example";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ComponentContainer from "../components/ComponentContainer/ComponentContainer";

function PageButton() {
  const imp = 'import { WavelengthButton } from "@wavelengthusaf/components";';
  const [margin, changeMargin] = useState("5px");
  //const [isFocus, setFocus] = useState(false);
  return (
    <>
      <span className="page-name">Button</span>
      <div className="contentBlock">
        <p>This is a button. There are three variants: outlined, contained, and text.</p>
        <br />

        <br />
        <h2>Import Statement</h2>
        <CodeBlock code={imp} />
      </div>
      <div id="variant" className="targets" />
      <Demo>
        <Example title="variant" description="Outlined Button, Contained Button, Text Button, Custom Button">
          <ComponentContainer>
            {" "}
            <WavelengthButton margin="5px" variant={"outlined"}>
              Outlined Button
            </WavelengthButton>
            <WavelengthButton margin="5px" variant={"contained"}>
              Contained Button
            </WavelengthButton>
            <WavelengthButton margin="5px" variant={"text"}>
              Text Button
            </WavelengthButton>
          </ComponentContainer>
          <CodeBlock
            code={
              "<WavelengthButton variant={'outlined'}>Outlined Button </WavelengthButton> \n<WavelengthButton variant={'contained'}>Contained Button</WavelengthButton> \n<WavelengthButton variant={'text'}>Text Button</WavelengthButton>\n<WavelengthButton variant='custom',\n '&:hover': {   backgroundColor: 'lightgreen', }, }} >   Custom{' '} </WavelengthButton>"
            }
          />
        </Example>

        <Example title="onClick?" description="onClick gives the button a task to complete when clicked. For this example the onClick method toggles the margin for the button between 5px and 20px.">
          <div id="onClick" className="targets" />
          <ComponentContainer>
            <WavelengthButton
              margin={margin}
              variant={"outlined"}
              onClick={() => {
                if (margin === "20px") {
                  changeMargin("5px");
                } else {
                  changeMargin("20px");
                }
              }}
            >
              Outlined Button
            </WavelengthButton>
          </ComponentContainer>
          <CodeBlock
            code={`const [margin, changeMargin] = useState('5px');
<WavelengthButton
  margin={margin}
  variant={'outlined'}
  onClick={() => {
        if (margin == '20px') {
          changeMargin('5px');
        } else {
          changeMargin('20px');
        }
      }}
    >
  Outlined Button
</WavelengthButton>`}
          />
        </Example>

        <Example title="colorOne? & colorTwo?" description="Changes the color values of the primary and secondary colors for the button. Outlined button only uses colorOne (Hex values can be used)">
          <div id="colors" className="targets" />
          <ComponentContainer>
            <WavelengthButton margin="5px" variant={"outlined"} colorOne="#4ec9b0">
              Outlined Button
            </WavelengthButton>
            <WavelengthButton margin="5px" variant={"contained"} colorOne="#9cdcfe" colorTwo="white">
              Contained Button
            </WavelengthButton>
            <WavelengthButton margin="5px" variant={"text"} colorOne="#ce9178" colorTwo="purple">
              Text Button
            </WavelengthButton>
          </ComponentContainer>
          <CodeBlock
            code={`<WavelengthButton margin="5px" variant={'outlined'} colorOne="#4ec9b0"> Outlined Button </WavelengthButton>
<WavelengthButton margin="5px" variant={'contained'} colorOne="#9cdcfe" colorTwo="white"> Contained Button </WavelengthButton>
<WavelengthButton margin="5px" variant={'text'} colorOne="#ce9178" colorTwo="purple"> Text Button </WavelengthButton>`}
          />
        </Example>

        <Example title="margin?" description="Value for the buttons margin in all directions. Wavelength Buttons have a default value of 0px.">
          <div id="margin" className="targets" />
          <ComponentContainer>
            <div>
              {" "}
              <WavelengthButton variant="outlined" margin="0px">
                No Margin Button
              </WavelengthButton>
              <WavelengthButton variant="outlined" margin="30px">
                30px Margin Button
              </WavelengthButton>
            </div>
          </ComponentContainer>
          <CodeBlock
            code={`<WavelengthButton variant="outlined" margin="0px">
  No Margin Button
</WavelengthButton>
<WavelengthButton variant="outlined" margin="30px">
  30px Margin Button
</WavelengthButton>`}
          />
        </Example>

        <Example
          title="padding?"
          description="Controls the spacing between the content inside the button and the border. Wavelength buttons have a default padding of 15px for the X-axis and 5px for the Y-axis."
        >
          <div id="padding" className="targets" />
          <ComponentContainer>
            <div>
              {" "}
              <WavelengthButton variant="outlined" padding="5px">
                5px Padding
              </WavelengthButton>
              <WavelengthButton variant="outlined" margin="5px" padding="15px">
                15px Padding
              </WavelengthButton>
            </div>
          </ComponentContainer>
          <CodeBlock
            code={`<WavelengthButton variant="outlined" margin="5px" padding="15px">
  15px Padding
</WavelengthButton>`}
          />
        </Example>

        <Example
          title="autoFocus?"
          description="When present, it specifies that the Wavelength Button should automatically get focus when the page loads. To make the button autofocus, change the autofocus to true."
        >
          <div id="autoFocus" className="targets" />

          <ComponentContainer>
            {" "}
            <WavelengthButton autoFocus={false} margin="10px" variant="outlined">
              Not Auto-Focused
            </WavelengthButton>
          </ComponentContainer>
          <CodeBlock
            code={`<WavelengthButton autoFocus={false} variant="outlined">
  Auto-Focused
</WavelengthButton>`}
          />
        </Example>

        <Example title="disabled?" description="Makes Wavelength Button unusable. Can be used with any variant.">
          <div id="disabled" className="targets" />

          <div>
            <WavelengthButton variant="outlined" margin="10px" disabled={true}>
              Outlined Disabled
            </WavelengthButton>
            <WavelengthButton variant="contained" disabled={true}>
              Contained Disabled
            </WavelengthButton>
            <WavelengthButton variant="text" disabled={true} margin="10px">
              Text Disabled
            </WavelengthButton>
          </div>

          <CodeBlock
            code={`<WavelengthButton variant="outlined" margin="10px" disabled={true}>
  Outlined Disabled
</WavelengthButton>
<WavelengthButton variant="contained" disabled={true}>
  Contained Disabled
</WavelengthButton>
<WavelengthButton variant="text" disabled={true} margin="10px">
  Text Disabled
</WavelengthButton>`}
          />
        </Example>

        <Example title="children?" description="Enables the use of embedded React Components inside of the Wavelength buttons.">
          <div id="children" className="targets" />
          <ComponentContainer>
            {" "}
            <WavelengthButton variant="outlined" margin="10px">
              Outlined Button
              <DeleteIcon fontSize="small" />
            </WavelengthButton>
          </ComponentContainer>
          <CodeBlock
            code={`<WavelengthButton variant="outlined" margin="10px">
  Outlined Button
  <DeleteIcon fontSize="small"/>
</WavelengthButton>`}
          />
        </Example>
      </Demo>
    </>
  );
}

export default PageButton;
