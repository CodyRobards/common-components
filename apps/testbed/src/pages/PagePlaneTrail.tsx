import CodeBlock from "../components/CodeBlock/CodeBlock";
import { WavelengthPlaneTrail } from "@wavelengthusaf/components";
import Example from "../components/Example/Example";
import ComponentContainer from "../components/ComponentContainer/ComponentContainer";
import Demo from "../components/Demo/Demo";

function PageTrail() {
  const snippet1 = `<WavelengthPlaneTrail />`;
  const snippet2 = `<WavelengthPlaneTrail trailDir="left" />`;
  const imp = 'import { TrailComponent } from "@wavelengthusaf/components";';

  return (
    <>
      <span className="page-name">Plane Trail</span>
      <p>This is sample code for the plane trail designed.</p>
      <br />
      <h2>Import Statement</h2>
      <CodeBlock code={imp} />
      <Demo>
        <ComponentContainer>
          <WavelengthPlaneTrail />
        </ComponentContainer>
        <CodeBlock code={snippet1} />
        <Example title="trailDir?" description="Sets the alignment direction or the trail.">
          <ComponentContainer>
            <WavelengthPlaneTrail trailDir="left" />
          </ComponentContainer>
          <CodeBlock code={snippet2} />
        </Example>
      </Demo>
    </>
  );
}

export default PageTrail;
