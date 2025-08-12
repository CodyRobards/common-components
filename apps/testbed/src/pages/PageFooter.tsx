import CodeBlock from "../components/CodeBlock/CodeBlock";
import { WavelengthFooter } from "@wavelengthusaf/components";
import ComponentContainer from "../components/ComponentContainer/ComponentContainer";
import Example from "../components/Example/Example";

function PageFooter() {
  const snippet1 = `<WavelengthFooter />`;
  const snippet2 = `<WavelengthFooter text="563 EWS" />`;
  const snippet3 = `<<WavelengthFooter text="563 EWS" textColor="hotpink" />`;
  const imp = `import { WavelengthFooter } from '@wavelengthusaf/components';`;

  return (
    <>
      <span className="page-name">Footer</span>
      <div className="contentBlock">
        <p>A simple footer component with the full Wavelength logo.</p>
        <br />
        <h2>Import Statement</h2>
        <CodeBlock code={imp} />
      </div>
      <ComponentContainer>
        <WavelengthFooter />
      </ComponentContainer>
      <CodeBlock code={snippet1} />
      <Example title="text?" description="Adds a simple text blurb next to the Wavelength logo. The forward slash (/) is included.">
        <ComponentContainer>
          <WavelengthFooter text="563 EWS" />
        </ComponentContainer>
        <CodeBlock code={snippet2} />
      </Example>
      <Example title="textColor?" description="Sets the color of the given text to match your design. Default set to match your secondary pallete color.">
        <ComponentContainer>
          <WavelengthFooter text="563 EWS" textColor="hotpink" />
        </ComponentContainer>
        <CodeBlock code={snippet3} />
      </Example>
    </>
  );
}

export default PageFooter;
