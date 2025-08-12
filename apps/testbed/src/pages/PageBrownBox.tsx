import CodeBlock from "../components/CodeBlock/CodeBlock";
import ComponentContainer from "../components/ComponentContainer/ComponentContainer";

import { WavelengthAppLogo, WavelengthBox } from "@wavelengthusaf/components";

function PageBrownBox() {
  const snippet = `<WavelengthBox width={400} height={200}>
  <WavelengthAppLogo name="563rdpatch" width={100} height={100} />
</WavelengthBox>`;
  const imp = 'import { WavelengthBox } from "@wavelengthusaf/components";';

  return (
    <>
      <span className="page-name">Brown Box</span>
      <p>This is the "Brown Box" that we'll put user info in.</p>
      <br />
      <h2>Import Statement</h2>
      <CodeBlock code={imp} />

      <ComponentContainer>
        {" "}
        <WavelengthBox width={400} height={200}>
          <WavelengthAppLogo name="563rdpatch" width={100} height={100} />
        </WavelengthBox>
      </ComponentContainer>

      <CodeBlock code={snippet} />
    </>
  );
}

export default PageBrownBox;
