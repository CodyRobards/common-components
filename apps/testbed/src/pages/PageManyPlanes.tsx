import { WavelengthManyPlanes } from "@wavelengthusaf/components";
import CodeBlock from "../components/CodeBlock/CodeBlock";
import Demo from "../components/Demo/Demo";
import Example from "../components/Example/Example";
import ComponentContainer from "../components/ComponentContainer/ComponentContainer";

function PageManyPlanes() {
  const snippet1 = `<WavelengthManyPlanes />`;
  const snippet2 = `<WavelengthManyPlanes numberOfPlanes={10} />`;
  const snippet3 = `<WavelengthManyPlanes trailDir="right" />`;
  const snippet4 = `<WavelengthManyPlanes opacity={0.5} />`;
  const snippet5 = `<WavelengthManyPlanes gradient />`;
  const snippet6 = `<WavelengthManyPlanes color="hotpink" />`;
  const imp = 'import { WavelengthManyPlanes } from "@wavelengthusaf/components";';

  return (
    <>
      <span className="page-name">Many Planes</span>
      <p>This is the Many Planes logo. Can be adjusted to align to the left or to the right, as well as the number of planes you want to be shown.</p>
      <br />
      <h2>Import Statement</h2>
      <CodeBlock code={imp} />

      <Demo>
        <br />
        <ComponentContainer>
          <div>
            <WavelengthManyPlanes />
          </div>
        </ComponentContainer>
        <CodeBlock code={snippet1} />
        <Example title="numberofPlanes?" description="Sets the number of planes for the header.">
          <ComponentContainer>
            <div>
              <WavelengthManyPlanes numberOfPlanes={12} />
            </div>
          </ComponentContainer>
          <CodeBlock code={snippet2} />
        </Example>
        <Example title="trailDir?" description="Sets the direction the planes will be aligned.">
          <ComponentContainer>
            <div>
              <WavelengthManyPlanes trailDir="right" />
            </div>
          </ComponentContainer>
          <CodeBlock code={snippet3} />
        </Example>
        <Example title="opacity?" description="Sets the opacity of the planes.">
          <ComponentContainer>
            <div>
              <WavelengthManyPlanes opacity={0.5} />
            </div>
          </ComponentContainer>
          <CodeBlock code={snippet4} />
        </Example>
        <Example
          title="gradient?"
          description="Sets a gradient for the planes; They will appear to taper off in opacity as it continues. Can be combined with the opacity? prop to set the max opacity for the gradient."
        >
          <ComponentContainer>
            <div>
              <WavelengthManyPlanes gradient />
            </div>
          </ComponentContainer>
          <CodeBlock code={snippet5} />
        </Example>
        <Example title="color?" description="Sets the color of the planes.">
          <ComponentContainer>
            <div>
              <WavelengthManyPlanes color="hotpink" />
            </div>
          </ComponentContainer>
          <CodeBlock code={snippet6} />
        </Example>
      </Demo>
    </>
  );
}

export default PageManyPlanes;
