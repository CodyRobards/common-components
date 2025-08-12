import { DefaultCarousel } from "@wavelengthusaf/components";
import { SliderCardCarousel } from "@wavelengthusaf/components";
import Example from "../components/Example/Example";
import ComponentContainer from "../components/ComponentContainer/ComponentContainer";
import CodeBlock from "../components/CodeBlock/CodeBlock";
import { cards } from "./images";
import "../styles/carousel.css";

function PageCarousel() {
  const imp = "import { DefaultCarousel } from @wavelengthusaf/components;";
  const imptwo = "import { SliderCardCarousel } from @wavelengthusaf/components;";
  const snippet = "<DefaultCarousel items={cards} imageHeight={300} imageWidth={400} cardHeight={400} cardWidth={400} />";
  const snippetTwo = "<DefaultCarousel items={cards} buttonSize={120} imageHeight={300} imageWidth={400} cardHeight={400} cardWidth={400} />";
  const snippetThree = "<SliderCardCarousel items={cards} cardHeight={220} cardWidth={410} contHeight={400} contWidth={1200} />";
  const snippetFive = "<SliderCardCarousel items={cards} />";
  const snippetSix = "<DefaultCarousel items={cards} />";
  return (
    <>
      <span className="page-name">Default Carousel and Sliding Carousel</span>
      <p>Carousels to be used to show multiple pieces of content in a webpage.</p>
      <br />
      <h2>Import Statement</h2>
      <CodeBlock code={imp} />
      <CodeBlock code={imptwo} />
      <div>
        <Example title="DefaultCarousel" description="Carousel web design component that displays multiple sections of content on a web page. If clicked on, the user is redirected.">
          <ComponentContainer>
            <DefaultCarousel items={cards} />
          </ComponentContainer>
          <CodeBlock code={snippetSix} />
        </Example>
        <Example title="imageHeight?, imageWidth?, cardHeight?, cardWeight?" description="set the dimensions Properly for the central content.">
          <ComponentContainer>
            <DefaultCarousel items={cards} imageHeight={300} imageWidth={400} cardHeight={400} cardWidth={400} />
          </ComponentContainer>
          <CodeBlock code={snippet} />
        </Example>
        <Example title="buttonSize?" description="Adjust the button size as desired.">
          <ComponentContainer>
            <DefaultCarousel items={cards} buttonSize={120} imageHeight={300} imageWidth={400} cardHeight={400} cardWidth={400} />
          </ComponentContainer>
          <CodeBlock code={snippetTwo} />
        </Example>
        <br />
        <Example
          title="Sliding Carousel"
          description="An interactive carousel where multiple pieces of content are displayed in a continuous loop, allowing users to slide through them and interact with them. Hover over the component to pause the loop. If the user hovers over a certain card, and clicks on it, the user will be redirected to whatever path was specified in the items object."
        >
          <ComponentContainer>
            <SliderCardCarousel items={cards} />
          </ComponentContainer>
          <CodeBlock code={snippetFive} />
        </Example>
        <br />
        <Example
          title="cardHeight?, cardWidth?, contHeight?, contWidth?"
          description="An interactive carousel where multiple pieces of content are displayed in a continuous loop, allowing users to slide through them and interact with them."
        >
          <ComponentContainer>
            <SliderCardCarousel items={cards} cardHeight={220} cardWidth={410} contHeight={400} contWidth={1200} />
          </ComponentContainer>
          <CodeBlock code={snippetThree} />
        </Example>
        <div>
          <h3>items</h3>
          <i>
            Prop that can accept an Javascript object as an array, in order to load a title, description, and image, and path in order to load the data into the component. An example of the accepted
            object is below:{" "}
          </i>
        </div>
        <CodeBlock
          code='export const cards = [
  {
    id: 1,
    image: "https://howtocut.it/wp-content/uploads/IMG_4391-copy-e1665175443163.jpg",
    title: "Card 1",
    description: "Info which directs to the other page.",
    path: "https://www.simon.com/",
  },
  {
    id: 2,
    image: "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Neo.The-Matrix.webp",
    title: "Card 2",
    description: "Info which directs to the other page.",
    path: "https://www.thematrix.com/",
  }];'
        />
        <div>
          <h3>Carousel.css</h3>
          <i>CSS file necessary to make sure that the animation for the sliding carousel moves correctly: </i>
        </div>
        <CodeBlock
          code=".my-animation {
  animation: slide 20s linear infinite;
    &:hover {
        animation-play-state: paused;
    }
}

@keyframes slide {
  0% {
    left: 0;
  }
  100% {
    left: -200%;
  }
}"
        />
      </div>
    </>
  );
}

export default PageCarousel;
