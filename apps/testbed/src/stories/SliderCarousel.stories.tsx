import { Canvas, Controls, Source, Stories } from "@storybook/blocks";
import { Meta, StoryObj } from "@storybook/react";
import { SliderCardCarousel } from "@wavelengthusaf/components";
//import { cards } from "src/pages/images"; import "../styles/carousel.css";
import "../styles/carousel.css";

const cards = [
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
  },
  {
    id: 3,
    image: "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Trinity.The-Matrix.webp",
    title: "Card 3",
    description: "Info which directs to the other page.",
    path: "https://en.wikipedia.org/wiki/The_Matrix_Resurrections",
  },
  {
    id: 4,
    image: "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Trinity.The-Matrix.webp",
    title: "Card 4",
    description: "Info which directs to the other page.",
    path: "https://www.trinity.edu/",
  },
];

const meta: Meta<typeof SliderCardCarousel> = {
  title: "Content/SliderCardCarousel",
  component: SliderCardCarousel,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
    docs: {
      page: () => (
        <>
          <h1>SliderCardCarousel Documentation</h1>
          <p>
            The <code>SliderCardCarousel</code> web design component that displays multiple pieces of content are displayed in a continuous loop, allowing users to slide through them and interact with
            them. Hover over the component to pause the loop. If the user hovers over a certain card, and clicks on it, the user will be redirected to whatever path was specified in the items object.
          </p>

          <h2>Usage</h2>
          <p>
            To use the <code>SliderCardCarousel</code>, simply import it and set the desired props.
          </p>

          <Source code="import { SliderCardCarousel } from '@wavelengthusaf/components';" language="tsx" />

          <h2>Example SliderCardCarousel</h2>
          <p>Here's an example of the Slider Carousel:</p>
          <Canvas />
          <h2>Props</h2>
          <Controls />
          <Stories />
          <h3>Carousel.css</h3>
          <p>CSS file necessary to make sure that the animation for the sliding carousel moves correctly:</p>

          <Source
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
            language="tsx"
          />
        </>
      ),
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SliderCardCarouselWithProps: Story = {
  argTypes: {
    items: {
      control: "object",
      description: "Defines what items can be inputed in a object format.",
    },
    cardHeight: {
      control: "number",
      description: "The card height of the SliderCardCarousel",
    },
    cardWidth: {
      control: "number",
      description: "The card width of the SliderCardCarousel",
    },
    contHeight: {
      control: "number",
      description: "The container height of the SliderCardCarousel",
    },
    contWidth: {
      control: "number",
      description: "The container width of the SliderCardCarousel",
    },
  },
  args: {
    items: cards,
    cardHeight: 220,
    cardWidth: 410,
    contHeight: 400,
    contWidth: 1200,
  },
};

export const SliderCardCarouselWithNoProps: Story = {
  argTypes: {
    items: {
      control: "object",
      description: "Defines what items object can be inputed.",
    },
  },
  args: {
    items: cards,
  },
};

//<SliderCardCarousel items={cards} buttonSize={120} imageHeight={300} imageWidth={400} cardHeight={400} cardWidth={400} />
