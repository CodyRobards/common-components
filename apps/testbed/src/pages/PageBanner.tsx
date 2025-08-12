import CodeBlock from "../components/CodeBlock/CodeBlock";
import Demo from "../components/Demo/Demo";
import Example from "../components/Example/Example";
import { WavelengthBanner } from "@wavelengthusaf/components";

function PageBanner() {
  const snippet0 = `<WavelengthBanner />`;
  const snippet1 = `<WavelengthBanner classification="unclassified" />`;
  const snippet2 = `<WavelengthBanner classification="controlled" />`;
  const snippet3 = `<WavelengthBanner classification="controlled unclassified information" />`;
  const snippet4 = `<WavelengthBanner classification="cui" />`;
  const snippet5 = `<WavelengthBanner classification="u" />`;
  const snippet6 = `<WavelengthBanner classification="confidential" />`;
  const snippet7 = `<WavelengthBanner classification="c" />`;
  const snippet8 = `<WavelengthBanner classification="secret" />`;
  const snippet9 = `<WavelengthBanner classification="s" />`;
  const snippet10 = `<WavelengthBanner classification="top secret" />`;
  const snippet11 = `<WavelengthBanner classification="ts" />`;
  const snippet12 = `<WavelengthBanner classification="unclassified" control={['cui']} />`;
  const snippet13 = `<WavelengthBanner classification="top secret" control={['sci']} />`;
  const snippet14 = `<WavelengthBanner classification="ts" control={['sci', 'fvey', 'fouo']} />`;
  const snippet15 = `<WavelengthBanner classification="Let's Go Spungos!" textColor="yellow" headerColor="hotpink" />`;

  const imp = `import { WavelengthBanner } from '@wavelengthusaf/components';`;

  return (
    <>
      <span className="page-name">Banner</span>
      <p>A component that acts as a banner to show the classification level to the user. Can also be customized to suit the user's needs.</p>
      <br />

      <h2>Import Statement</h2>
      <CodeBlock code={imp} />

      <Demo>
        <Example
          title="classification?"
          description="Changes the classification of the banner. Setting the classification to any of the below banner classifications will format the banner's text & background color automatically."
        >
          <div id="classification" className="targets" />

          <WavelengthBanner />
          <CodeBlock code={snippet0} />
          <WavelengthBanner classification="unclassified" />
          <CodeBlock code={snippet1} />
          <WavelengthBanner classification="controlled" />
          <CodeBlock code={snippet2} />
          <WavelengthBanner classification="controlled unclassified information" />
          <CodeBlock code={snippet3} />
          <WavelengthBanner classification="cui" />
          <CodeBlock code={snippet4} />
          <WavelengthBanner classification="u" />
          <CodeBlock code={snippet5} />
          <WavelengthBanner classification="confidential" />
          <CodeBlock code={snippet6} />
          <WavelengthBanner classification="c" />
          <CodeBlock code={snippet7} />
          <WavelengthBanner classification="secret" />
          <CodeBlock code={snippet8} />
          <WavelengthBanner classification="s" />
          <CodeBlock code={snippet9} />
          <WavelengthBanner classification="top secret" />
          <CodeBlock code={snippet10} />
          <WavelengthBanner classification="ts" />
          <CodeBlock code={snippet11} />
        </Example>
        <Example
          title="control?"
          description="Changes the control of the banner. Multiple controls can be added. Some control options will update the appearance of the banner to match the appropriate classification level."
        >
          <div id="control" className="targets" />
          <WavelengthBanner classification="unclassified" control={["cui"]} />
          <CodeBlock code={snippet12} />
          <WavelengthBanner classification="top secret" control={["sci"]} />
          <CodeBlock code={snippet13} />
          <WavelengthBanner classification="ts" control={["sci", "fvey", "fouo"]} />
          <CodeBlock code={snippet14} />
        </Example>
        <Example title="textColor? & headerColor?" description="Changes the color of the text and/or the background. Use this for further customization.">
          <div id="textColor&headerColor" className="targets" />

          <WavelengthBanner classification="Let's Go Spungos!" textColor="yellow" headerColor="hotpink" />
          <CodeBlock code={snippet15} />
        </Example>
      </Demo>
    </>
  );
}

export default PageBanner;
