import CodeBlock from "../components/CodeBlock/CodeBlock";
import { WavelengthTitleBar } from "@wavelengthusaf/components";
import ComponentContainer from "../components/ComponentContainer/ComponentContainer";
const imp = 'import { WavelengthTitleBar } from "@wavelengthusaf/components";';

function PageTitle() {
  const snippet = `<WavelengthTitleBar />`;

  return (
    <>
      <span className="page-name">Title & Subtitle</span>
      <p>This is sample code for how our title and subtitles should be set up.</p>
      <br />
      <h2>Import Statement</h2>
      <CodeBlock code={imp} />
      <ComponentContainer>
        <WavelengthTitleBar />
      </ComponentContainer>
      <CodeBlock code={snippet} />
    </>
  );
}

export default PageTitle;
