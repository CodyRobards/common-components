import ComponentContainer from "../components/ComponentContainer/ComponentContainer";

function PagePlayground() {
  return (
    <>
      <span className="page-name">Playground</span>
      <ComponentContainer>
        <p>Use this space to experiment with components outside of Storybook.</p>
      </ComponentContainer>
    </>
  );
}

export default PagePlayground;
