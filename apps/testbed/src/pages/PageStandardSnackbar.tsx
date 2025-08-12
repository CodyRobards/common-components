import { WavelengthButton, WavelengthStandardSnackbar } from "@wavelengthusaf/components";
import CodeBlock from "../components/CodeBlock/CodeBlock";
import Example from "../components/Example/Example";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { Stack } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ComponentContainer from "../components/ComponentContainer/ComponentContainer";

function PageStandardSnackbar() {
  const imp = "import { WavelengthStandardSnackbar } from '@wavelengthusaf/components'";
  const imp2 = "import IconButton from '@mui/material/IconButton';";
  const imp3 = "import CloseIcon from '@mui/icons-material/Close';";
  const [snackbar1, setSnackbar1] = useState<boolean>(false);
  const [snackbar2, setSnackbar2] = useState<boolean>(false);
  const [snackbar3, setSnackbar3] = useState<boolean>(false);
  const [snackbar4, setSnackbar4] = useState<boolean>(false);
  const [snackbar5, setSnackbar5] = useState<boolean>(false);

  return (
    <>
      <span className="page-name">Standard Snackbar</span>
      <p>Displays full width pop up message when activated.</p>
      <br />
      <h2>Import Statements</h2>
      <CodeBlock code={imp + "\n" + imp2 + "\n" + imp3} />
      <h2>Snack Bar Hooks</h2>
      <CodeBlock
        code={`const [snackbar1, setSnackbar1] = useState<boolean>(false);
const [snackbar2, setSnackbar2] = useState<boolean>(false);
const [snackbar3, setSnackbar3] = useState<boolean>(false);
const [snackbar4, setSnackbar4] = useState<boolean>(false);
const [snackbar5, setSnackbar5] = useState<boolean>(false);`}
      ></CodeBlock>

      <Stack>
        <Example title="type" description="success type has a green background color, error has a red background color, disabled has a grey background color">
          <WavelengthStandardSnackbar
            type="success"
            show={snackbar1}
            toggleShow={setSnackbar1}
            width={window.innerWidth - 100}
            message="Future Success Message"
            closeIcon={
              <IconButton size="small" aria-label="close" color="inherit">
                <CloseIcon fontSize="small" />
              </IconButton>
            }
          />
          <WavelengthStandardSnackbar
            type="error"
            show={snackbar2}
            toggleShow={setSnackbar2}
            width={window.innerWidth - 100}
            message="Future Error Message"
            closeIcon={
              <IconButton size="small" aria-label="close" color="inherit">
                <CloseIcon fontSize="small" />
              </IconButton>
            }
          />
          <WavelengthStandardSnackbar
            type="disabled"
            show={snackbar3}
            toggleShow={setSnackbar3}
            width={window.innerWidth - 100}
            message="Future Disabled Message"
            closeIcon={
              <IconButton size="small" aria-label="close" color="inherit">
                <CloseIcon fontSize="small" />
              </IconButton>
            }
          />
          <ComponentContainer>
            <div className="btn-group">
              <WavelengthButton
                colorTwo="green"
                variant={"contained"}
                onClick={() => {
                  setSnackbar1(true);
                }}
              >
                Snackbar Success
              </WavelengthButton>
              <WavelengthButton
                colorTwo="red"
                variant={"contained"}
                onClick={() => {
                  setSnackbar2(true);
                }}
              >
                Snackbar Error{" "}
              </WavelengthButton>
              <WavelengthButton
                colorTwo="grey"
                variant={"contained"}
                onClick={() => {
                  setSnackbar3(true);
                }}
              >
                Snackbar Disabled
              </WavelengthButton>
            </div>
          </ComponentContainer>
          <CodeBlock
            code={`<WavelengthButton colorTwo="green" variant={'contained'} onClick={() => { setSnackbar1(true); }}>
  Snackbar Success
</WavelengthButton> 
<WavelengthStandardSnackbar
  type="success"
  show={snackbar1}
  toggleShow={setSnackbar1}
  width={window.innerWidth - 100}
  message="Future Success Message"
  closeIcon={
    <IconButton size="small" aria-label="close" color="inherit">
      <CloseIcon fontSize="small" />
    </IconButton>
  }
/>`}
          ></CodeBlock>
          <CodeBlock
            code={`<WavelengthButton colorTwo="red" variant={'contained'} onClick={() => {  setSnackbar2(true);}} > 
  Snackbar Error 
</WavelengthButton>
<WavelengthStandardSnackbar                      
  type="error"                      
  show={snackbar2}                      
  toggleShow={setSnackbar2}                     
  width={window.innerWidth - 100}                     
  message="Future Error Message"                    
  closeIcon={                   
    <IconButton size="small" aria-label="close" color="inherit">                  
      <CloseIcon fontSize="small" />                  
    </IconButton>                   
  }
          />`}
          ></CodeBlock>
          <CodeBlock
            code={`<WavelengthButton colorTwo="grey" variant={'contained'} onClick={() => {setSnackbar3(true);}}> Snackbar Disabled </WavelengthButton>
<WavelengthStandardSnackbar
  type="disabled"
  show={snackbar3}
  toggleShow={setSnackbar3}
  width={window.innerWidth - 100}
  message="Future Disabled Message"
  closeIcon={
    <IconButton size="small" aria-label="close" color="inherit">
      <CloseIcon fontSize="small" />
    </IconButton>
  }
/>`}
          ></CodeBlock>
        </Example>

        <Example title="icon" description="Enables you to put an icon beside the snackbar message">
          <WavelengthStandardSnackbar
            type="success"
            show={snackbar4}
            toggleShow={setSnackbar4}
            width={window.innerWidth - 100}
            icon={<CheckCircleOutlineIcon />}
            message="Future Success Message"
            closeIcon={
              <IconButton size="small" aria-label="close" color="inherit">
                <CloseIcon fontSize="small" />
              </IconButton>
            }
          />
          <ComponentContainer>
            {" "}
            <div>
              <WavelengthButton
                colorTwo="green"
                variant={"contained"}
                onClick={() => {
                  setSnackbar4(true);
                }}
              >
                Snackbar Success
              </WavelengthButton>
            </div>
          </ComponentContainer>
          <CodeBlock
            code={` <WavelengthButton colorTwo="green" variant={'contained'} onClick={() => { setSnackbar4(true); }}> Snackbar Success </WavelengthButton>
<WavelengthStandardSnackbar
  type="success"
  show={snackbar4}
  setShow={setSnackbar4}
  width={window.innerWidth - 100}
  icon={<CheckCircleOutlineIcon />}
  message="Future Success Message"
  closeIcon={
  <IconButton size="small" aria-label="close" color="inherit">
    <CloseIcon fontSize="small" />
  </IconButton>
}
/>
              `}
          ></CodeBlock>
        </Example>
        <Example title="durationSb" description="Enables you to put a timer on the snackbar (In Seconds) Default is 4 seconds">
          <WavelengthStandardSnackbar
            type="success"
            show={snackbar5}
            toggleShow={setSnackbar5}
            width={window.innerWidth - 100}
            durationSb={10}
            icon={<CheckCircleOutlineIcon />}
            message="Future Success Message Will Display For 10 Seconds"
            closeIcon={
              <IconButton size="small" aria-label="close" color="inherit">
                <CloseIcon fontSize="small" />
              </IconButton>
            }
          />
          <ComponentContainer>
            {" "}
            <div>
              {" "}
              <WavelengthButton
                colorTwo="green"
                variant={"contained"}
                onClick={() => {
                  setSnackbar5(true);
                }}
              >
                Snackbar Success
              </WavelengthButton>
            </div>
          </ComponentContainer>
          <CodeBlock
            code={`<WavelengthButton colorTwo="green" variant={'contained'} onClick={() => { setSnackbar5(true); }}> Snackbar Success </WavelengthButton>
<WavelengthStandardSnackbar
  type="success"
  show={snackbar5}
  setShow={setSnackbar5}
  width={window.innerWidth - 100}
  durationSb={10}
  icon={<CheckCircleOutlineIcon />}
  message="Future Success Message Will Display For 10 Seconds"
  closeIcon={
  <IconButton size="small" aria-label="close" color="inherit">
    <CloseIcon fontSize="small" />
  </IconButton>
  }
/>
              `}
          ></CodeBlock>
        </Example>
      </Stack>
    </>
  );
}

export default PageStandardSnackbar;
