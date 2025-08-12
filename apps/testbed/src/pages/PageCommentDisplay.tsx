import CodeBlock from "../components/CodeBlock/CodeBlock";
import { WavelengthCommentDisplay } from "@wavelengthusaf/components";
import ComponentContainer from "../components/ComponentContainer/ComponentContainer";
import Example from "../components/Example/Example";

const imp = 'import { WavelengthCommentDisplay } from "@wavelengthusaf/components";';
const comment =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis lobortis nibh sed accumsan. Morbi quam nisl, condimentum eget congue in, imperdiet eu tellus. Nulla vitae aliquet sem. Nam id accumsan ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam erat volutpat.";
function PageCommentDisplay() {
  return (
    <>
      <span className="page-name">Comment Box</span>
      <p>How comments are displayed in our apps.</p>
      <br />
      <h2>Import Statement</h2>
      <CodeBlock code={imp} />
      <Example title="Example Comment Box From Brewery" description="This is the comment box brewery uses.">
        <ComponentContainer backgroundColor="rgba(251, 246, 242, 1)">
          <WavelengthCommentDisplay author="Random Name" date="Jully 11th, 2024" comments={comment} />
        </ComponentContainer>
        <CodeBlock code='<WavelengthCommentDisplay author="Random Name" date="Jully 11th, 2024" comments={comment} />' />
      </Example>
      <Example title="Customizable Comment Box">
        <ComponentContainer>
          <WavelengthCommentDisplay
            author="Jermaine C"
            date="March 11th, 2025"
            border="1px solid lightblue"
            iconSelectedColor="lightblue"
            comments="As these notes from my compositions turn to compositions."
            onClick={() => console.log("Ddd")}
          />
        </ComponentContainer>
        <CodeBlock
          code='<WavelengthCommentDisplay
            author="Jermaine C"
            date="March 11th, 2025"
            border="1px solid lightblue"
            iconSelectedColor="lightblue"
            comments="As these notes from my compositions turn to compositions."
          />'
        />
      </Example>
    </>
  );
}

export default PageCommentDisplay;
