import { WavelengthProgressBar } from "@wavelengthusaf/components";
import CodeBlock from "../components/CodeBlock/CodeBlock";
import Example from "../components/Example/Example";
import ComponentContainer from "../components/ComponentContainer/ComponentContainer";
function PageProgressBar() {
  const imp = 'import { WavelengthProgressBar } from "@wavelengthusaf/components";';
  return (
    <>
      <span className="page-name">Progress Bar</span>
      <div className="contentBlock">
        <p>The Progress Bar component enables user to display progress of a particular operation such as file uploads. How the progress is calculated is up to the user.</p>
        <br />

        <h2>Import Statements</h2>
        <CodeBlock code={imp} />
      </div>
      <Example title="Value" description="Represents the amount of progress being displayed in the progress bar.">
        <ComponentContainer>
          <WavelengthProgressBar width="425px" height="12px" value={85} name="Filename.csv" />
        </ComponentContainer>
        <CodeBlock code='<WavelengthProgressBar width="425px" height="12px" name="Filename.csv" value={100} />' />
      </Example>
      <Example title="Customization" description="You can use props like, progressColor, backgroundColor, borderRadius etc to customize the progress bar.">
        <ComponentContainer>
          <WavelengthProgressBar width="425px" height="12px" value={100} name="Filename.csv" progressColor="rgba(38, 186, 190, 1)" backgroundColor="rgba(255, 255, 255, 1)" borderRadius="24px" />
        </ComponentContainer>
        <CodeBlock code='<WavelengthProgressBar width="425px" height="12px" value={100} name="Filename.csv" progressColor="rgba(38, 186, 190, 1)" backgroundColor="rgba(255, 255, 255, 1)" borderRadius="24px" />' />
      </Example>
    </>
  );
}

export default PageProgressBar;
