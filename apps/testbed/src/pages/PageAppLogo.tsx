import { WavelengthAppLogo } from "@wavelengthusaf/components";
import CodeBlock from "../components/CodeBlock/CodeBlock";
import Example from "../components/Example/Example";
import { Grid, Stack } from "@mui/material";
import ComponentContainer from "../components/ComponentContainer/ComponentContainer";

function PageWavelengthAppLogo() {
  const imp = "import { WavelengthAppLogo } from '@wavelengthusaf/components';";

  return (
    <>
      <span className="page-name">App Logo</span>
      <div className="contentBlock">
        <p>
          The WavelengthAppLogo Component enables you to create a custom component with a logo name.The names of the <a href="#logonames">logos</a> are at the bottom of the page.
        </p>
        <br />
        {/* This part is to create links to navigate through out the page (Amir)*/}

        <h2>Import Statements</h2>
        <CodeBlock code={imp} />
      </div>

      <div className="demoContainer">
        <Stack spacing={2}>
          <div id="name" className="targets" />
          <Example title="name?" description="the name prop takes in the name of the logo">
            <Stack spacing={0}>
              <ComponentContainer>
                <WavelengthAppLogo name="wings" width={200} height={200} />
              </ComponentContainer>
              <CodeBlock code={`<WavelengthAppLogo name="wings" width={200} height={200} />`} />
              <ComponentContainer>
                <WavelengthAppLogo name="swarm" width={200} height={200} />
              </ComponentContainer>
              <CodeBlock code={`<WavelengthAppLogo name="swarm" width={200} height={200} />`} />
              <ComponentContainer>
                <WavelengthAppLogo name="563rdpatch" width={200} height={200} />
              </ComponentContainer>
              <CodeBlock code={`<WavelengthAppLogo name="563rdpatch" width={200} height={200} />`} />
            </Stack>
          </Example>
          <div id="width" className="targets" />
          <Example title="width?" description="the width prop dictates how wide the app logo will be (X-axis).">
            <Stack>
              <ComponentContainer>
                <WavelengthAppLogo name="arrow" width={400} />
              </ComponentContainer>
              <CodeBlock code={`<WavelengthAppLogo name="arrow" width={400} />`} />
            </Stack>
          </Example>
          <div id="height" className="targets" />
          <Example title="height?" description="the height prop dictates how tall the app logo will be (Y-axis)">
            <Stack>
              <ComponentContainer>
                <WavelengthAppLogo name="wings" height={100} />
              </ComponentContainer>
              <CodeBlock code={`<WavelengthAppLogo name="wings" height={100} />`} />
            </Stack>
          </Example>
          <div id="grayscale" className="targets"></div>
          <Example title="grayscale" description="the grayscale prop change the color of the app log to gray.">
            <Stack>
              <ComponentContainer>
                <WavelengthAppLogo name="wavelengthw" width={200} height={200} grayscale></WavelengthAppLogo>
              </ComponentContainer>
              <CodeBlock code={`<WavelengthAppLogo name="wavelengthw" width={200} height={200} grayscale></WavelengthAppLogo>`}></CodeBlock>
            </Stack>
          </Example>
        </Stack>
      </div>
      <h2 style={{ marginTop: 50 }}>Logo Names</h2>
      <div className="demoContainer">
        <Example title="" description="The names for the app logos">
          <div
            id="logonames"
            style={{
              display: "grid",
              gridTemplateRows: "1fr 1fr",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",

              backgroundColor: "#081C27",
              padding: "20px",
              borderRadius: "5px",
              border: "1px solid #214355",
            }}
          >
            <Grid item>
              <WavelengthAppLogo name="wings" width={150} height={150} />
              <p style={{ textAlign: "center", fontWeight: "bold" }}>wings</p>
            </Grid>
            <Grid item>
              <WavelengthAppLogo name="563rdpatch" width={150} height={150} />
              <p style={{ textAlign: "center", fontWeight: "bold" }}>563rdpatch</p>
            </Grid>
            <Grid item>
              <WavelengthAppLogo name="563rdlabel" width={150} height={150} />
              <p style={{ textAlign: "center", fontWeight: "bold" }}>563rdlabel</p>
            </Grid>
            <Grid item>
              <WavelengthAppLogo name="arrow" width={150} height={150} />
              <p style={{ textAlign: "center", fontWeight: "bold" }}>arrow</p>
            </Grid>
            <Grid item>
              <WavelengthAppLogo name="channelone" width={150} height={150} />
              <p style={{ textAlign: "center", fontWeight: "bold" }}>channelone</p>
            </Grid>
            <Grid item>
              <WavelengthAppLogo name="swarm" width={150} height={150} />
              <p style={{ textAlign: "center", fontWeight: "bold" }}>swarm</p>
            </Grid>
            <Grid item>
              <WavelengthAppLogo name="wavelengthw" width={150} height={150} />
              <p style={{ textAlign: "center", fontWeight: "bold" }}>wavelengthw</p>
            </Grid>
          </div>
        </Example>
      </div>
    </>
  );
}

export default PageWavelengthAppLogo;
