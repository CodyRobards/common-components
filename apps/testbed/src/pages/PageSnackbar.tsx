import CodeBlock from "../components/CodeBlock/CodeBlock";
import { WavelengthButton, WavelengthSnackbar } from "@wavelengthusaf/components";
import Example from "../components/Example/Example";
import { useState } from "react";
import Demo from "../components/Demo/Demo";
import CloseIcon from "@mui/icons-material/Close";
import ComponentContainer from "../components/ComponentContainer/ComponentContainer";
import IconButton from "@mui/material/IconButton";

function PagePlaceholder() {
  const imp = 'import { WavelengthSnackbar } from "@wavelengthusaf/components";';

  const snippet1 = `const [snackbar1, setSnackbar1] = useState<boolean>(false);
const [snackbar2, setSnackbar2] = useState<boolean>(false);
const [snackbar3, setSnackbar3] = useState<boolean>(false);
const [snackbar4, setSnackbar4] = useState<boolean>(false);
const [snackbar5, setSnackbar5] = useState<boolean>(false);`;
  const snippet2 = `<WavelengthButton variant={'outlined'} colorOne="#8FD8FC" onClick={() => {
    setSnackbar1(true);
  }}
 >
  SNACKBAR 1
</WavelengthButton>
<WavelengthSnackbar
  show={snackbar1}
  setShow={setSnackbar1}
  closeIcon={
    <IconButton size="small" aria-label="close" color="inherit">
      <CloseIcon fontSize="small" />
    </IconButton>
  }
  />`;
  const snippet3 = `<WavelengthButton variant={'outlined'} colorOne="#8FD8FC" onClick={() => {
      setSnackbar2(true);
    }}
  >
    SNACKBAR 2
  </WavelengthButton>
  <WavelengthSnackbar
  show={snackbar2}
  setShow={setSnackbar2}
  message={\`Let's go Spungos!\`}
  closeIcon={
    <IconButton size="small" aria-label="close" color="inherit">
      <CloseIcon fontSize="small" />
    </IconButton>
  }
  />`;

  const [snackbar1, setSnackbar1] = useState<boolean>(false);
  const [snackbar2, setSnackbar2] = useState<boolean>(false);
  const [snackbar3, setSnackbar3] = useState<boolean>(false);
  const [snackbar4, setSnackbar4] = useState<boolean>(false);
  const [snackbar5, setSnackbar5] = useState<boolean>(false);
  const [snackbar6, setSnackbar6] = useState<boolean>(false);

  return (
    <>
      <span className="page-name">Snack Bar</span>
      <p>Displays a small, pop-up message when activated.</p>
      <br />
      <h2>Import Statement</h2>
      <CodeBlock code={imp} />
      <h2>Snack Bar Hooks</h2>
      <p>These are the hooks used in the examples below. You'll need at least one hook in order to get your Snack Bar to function.</p>
      <CodeBlock code={snippet1} />

      <Demo>
        <Example title="show & setShow" description="Hook needed for the Snack Bar to function properly.">
          <WavelengthSnackbar
            show={snackbar1}
            setShow={setSnackbar1}
            closeIcon={
              <IconButton size="small" aria-label="close" color="inherit">
                <CloseIcon fontSize="small" />
              </IconButton>
            }
          />
          <ComponentContainer>
            {" "}
            <WavelengthButton
              variant={"outlined"}
              colorOne="#8FD8FC"
              onClick={() => {
                setSnackbar1(true);
              }}
            >
              SNACKBAR 1
            </WavelengthButton>
          </ComponentContainer>
          <CodeBlock code={snippet2} />
        </Example>

        <Example title="message?" description="Sets the message for the Snack Bar.">
          <WavelengthSnackbar
            show={snackbar2}
            setShow={setSnackbar2}
            message={`Let's go Spungos!`}
            closeIcon={
              <IconButton size="small" aria-label="close" color="inherit">
                <CloseIcon fontSize="small" />
              </IconButton>
            }
          />
          <ComponentContainer>
            <WavelengthButton
              variant={"outlined"}
              colorOne="#8FD8FC"
              onClick={() => {
                setSnackbar2(true);
              }}
            >
              SNACKBAR 2
            </WavelengthButton>
          </ComponentContainer>
          <CodeBlock code={snippet3} />
        </Example>
        <Example title="durationSb?" description="Sets the duration for the Snack Bar. The default is 4 seconds.">
          <WavelengthSnackbar
            show={snackbar3}
            setShow={setSnackbar3}
            message={`This Snackbar will be dismissed in 8 seconds.`}
            durationSb={8}
            closeIcon={
              <IconButton size="small" aria-label="close" color="inherit">
                <CloseIcon fontSize="small" />
              </IconButton>
            }
          />
          <ComponentContainer>
            {" "}
            <WavelengthButton
              variant={"outlined"}
              colorOne="#8FD8FC"
              onClick={() => {
                setSnackbar3(true);
              }}
            >
              SNACKBAR 3
            </WavelengthButton>
          </ComponentContainer>
          <CodeBlock
            code={`<WavelengthButton variant={'outlined'} colorOne="#8FD8FC" onClick={() => {
      setSnackbar3(true);
    }}
  >
    SNACKBAR 3
  </WavelengthButton>
  <WavelengthSnackbar
  show={snackbar3}
  setShow={setSnackbar3}
  message={\`This Snackbar will be dismissed in 8 seconds.\`}
  durationSb={8}
  closeIcon={
    <IconButton size="small" aria-label="close" color="inherit">
      <CloseIcon fontSize="small" />
    </IconButton>
  }
 />`}
          />
        </Example>

        <Example title="snackBarColor? & textColor?" description="Sets the color for the background and/or text.">
          <WavelengthSnackbar
            show={snackbar4}
            setShow={setSnackbar4}
            snackBarColor="hotpink"
            textColor="yellow"
            closeIcon={
              <IconButton size="small" aria-label="close" color="inherit">
                <CloseIcon fontSize="small" />
              </IconButton>
            }
          />
          <ComponentContainer>
            <WavelengthButton
              colorOne="#8FD8FC"
              variant={"outlined"}
              onClick={() => {
                setSnackbar4(true);
              }}
            >
              SNACKBAR 4
            </WavelengthButton>
          </ComponentContainer>
          <CodeBlock
            code={`<WavelengthButton variant={'outlined'} colorOne="#8FD8FC" onClick={() => {
    setSnackbar4(true);
  }}
>
  SNACKBAR 4
</WavelengthButton>
<WavelengthSnackbar
show={snackbar4}
setShow={setSnackbar4}
snackBarColor="hotpink"
textColor="yellow"
closeIcon={
  <IconButton size="small" aria-label="close" color="inherit">
    <CloseIcon fontSize="small" />
  </IconButton>
}
/>`}
          />
        </Example>

        <Example title="horryAlign? & vertyAlign?" description="Sets the horizontal and/or vertical position of the Snack Bar on the page.">
          <WavelengthSnackbar
            show={snackbar5}
            setShow={setSnackbar5}
            horryAlign="right"
            vertyAlign="bottom"
            closeIcon={
              <IconButton size="small" aria-label="close" color="inherit">
                <CloseIcon fontSize="small" />
              </IconButton>
            }
          />
          <ComponentContainer>
            <WavelengthButton
              variant={"outlined"}
              colorOne="#8FD8FC"
              onClick={() => {
                setSnackbar5(true);
              }}
            >
              SNACKBAR 5
            </WavelengthButton>
          </ComponentContainer>
          <CodeBlock
            code={`<WavelengthButton variant={'outlined'} colorOne="#8FD8FC" onClick={() => {
    setSnackbar5(true);
  }}
>
  SNACKBAR 5
</WavelengthButton> 
<WavelengthSnackbar
show={snackbar5}
setShow={setSnackbar5}
horryAlign="right"
vertyAlign="bottom"
closeIcon={
  <IconButton size="small" aria-label="close" color="inherit">
    <CloseIcon fontSize="small" />
  </IconButton>
}
/>`}
          />
        </Example>
        <Example title="width?" description="Sets the horizontal and/or vertical position of the Snack Bar on the page.">
          <WavelengthSnackbar
            show={snackbar6}
            setShow={setSnackbar6}
            width={600}
            closeIcon={
              <IconButton size="small" aria-label="close" color="inherit">
                <CloseIcon fontSize="small" />
              </IconButton>
            }
          />
          <ComponentContainer>
            {" "}
            <WavelengthButton
              variant={"outlined"}
              colorOne="#8FD8FC"
              onClick={() => {
                setSnackbar6(true);
              }}
            >
              SNACKBAR 6
            </WavelengthButton>
          </ComponentContainer>
          <CodeBlock
            code={`<WavelengthButton variant={'outlined'} colorOne="#8FD8FC" onClick={() => {
    setSnackbar6(true);
  }}
>
  SNACKBAR 6
</WavelengthButton>
<WavelengthSnackbar
show={snackbar6}
setShow={setSnackbar6}
width={600}
closeIcon={
  <IconButton size="small" aria-label="close" color="inherit">
    <CloseIcon fontSize="small" />
  </IconButton>
}/>`}
          />
        </Example>
      </Demo>
    </>
  );
}

export default PagePlaceholder;
