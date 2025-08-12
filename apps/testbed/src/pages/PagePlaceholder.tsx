import CodeBlock from "../components/CodeBlock/CodeBlock";
import { WavelengthContentPlaceholder } from "@wavelengthusaf/components";
import Example from "../components/Example/Example";
import ComponentContainer from "../components/ComponentContainer/ComponentContainer";

function PagePlaceholder() {
  const snippet = `<WavelengthContentPlaceholder txtcolor='white' bgcolor='blue' width={300} height={300}>
  Placeholder</WavelengthContentPlaceholder>`;
  const snippet2 = `<WavelengthContentPlaceholder type="circle" txtcolor="white" bgcolor="blue" width={250} height={250}>
  Placeholder (Circle)</WavelengthContentPlaceholder>`;
  const imp = 'import { WavelengthContentPlaceholder } from "@wavelengthusaf/components";';

  return (
    <>
      <span className="page-name">Placeholder</span>
      <p>A component example for formatting of future components.</p>
      <br />
      <h2>Import Statement</h2>
      <CodeBlock code={imp} />

      <Example title="Placeholder" description="Placeholders can be used for formatting or designing page elements. Placeholders have 2 types, rectangle (By Default) and circle.">
        <ComponentContainer>
          <WavelengthContentPlaceholder txtcolor="white" bgcolor="blue" width={250} height={250}>
            Placeholder
          </WavelengthContentPlaceholder>
        </ComponentContainer>
        <CodeBlock code={snippet} />
        <ComponentContainer>
          {" "}
          <WavelengthContentPlaceholder type="circle" txtcolor="white" bgcolor="blue" width={250} height={250}>
            Placeholder (Circle)
          </WavelengthContentPlaceholder>
        </ComponentContainer>

        <CodeBlock code={snippet2} />
      </Example>
    </>
  );
}

export default PagePlaceholder;
