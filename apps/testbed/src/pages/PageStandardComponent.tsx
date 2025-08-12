import CodeBlock from "../components/CodeBlock/CodeBlock";
import Demo from "../components/Demo/Demo";
import { WavelengthExampleComponent } from "@wavelengthusaf/components";
import Example from "../components/Example/Example";
import Details from "../components/Details/Details";
import PropertyDetail from "../components/Details/PropertyDetail";

function PageStandardComponent() {
  const snippet = "<WavelengthExampleComponent width={400} height={400} />";
  const imp = 'import { StandardComponent } from "@wavelengthusaf/components";';

  return (
    <>
      <h2>Standard Component</h2>
      <p>A component example for formatting of future components.</p>
      <br />
      <h2>Import Statement</h2>
      <CodeBlock code={imp} />

      <Demo>
        <Example title="Standard Component" description="">
          <WavelengthExampleComponent width={400} height={400} />
          <CodeBlock code={snippet} />
        </Example>
      </Demo>

      <Details>
        <PropertyDetail name="Standard Component" dataType="Various" description="Various" notes="N/A" />
      </Details>
    </>
  );
}

export default PageStandardComponent;
