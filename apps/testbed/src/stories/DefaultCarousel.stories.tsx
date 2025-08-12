import { Canvas, Controls, Source, Stories } from "@storybook/blocks";
import { Meta, StoryObj } from "@storybook/react";
import { DefaultCarousel } from "@wavelengthusaf/components";

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

const meta: Meta<typeof DefaultCarousel> = {
  title: "Content/DefaultCarousel",
  component: DefaultCarousel,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
    docs: {
      page: () => (
        <>
          <h1>DefaultCarousel Documentation</h1>
          <p>
            The <code>DefaultCarousel</code> web design component that displays multiple sections of content on a web page. If clicked on, the user is redirected.
          </p>

          <h2>Usage</h2>
          <p>
            To use the <code>DefaultCarousel</code>, simply import it and set the desired props.
          </p>

          <Source code="import { DefaultCarousel } from '@wavelengthusaf/components';" language="tsx" />

          <h2>Example DefaultCarousel</h2>
          <p>Here's an example of the Default Carousel:</p>
          <Canvas />
          <h2>Props</h2>
          <Controls />
          <Stories />
        </>
      ),
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultCarousels: Story = {
  argTypes: {
    items: {
      control: "object",
      description: "Defines what items can be inputed in a object format.",
    },
    buttonSize: {
      control: "number",
      description: "The button size of the DefaultCarousel",
    },
    imageHeight: {
      control: "number",
      description: "The image height of the DefaultCarousel",
    },
    imageWidth: {
      control: "number",
      description: "The image width of the DefaultCarousel",
    },
    cardHeight: {
      control: "number",
      description: "The card height of the DefaultCarousel",
    },
    cardWidth: {
      control: "number",
      description: "The card width of the DefaultCarousel",
    },
  },
  args: {
    items: cards,
    buttonSize: 120,
    imageHeight: 300,
    imageWidth: 400,
    cardHeight: 400,
    cardWidth: 400,
  },
};

export const DefaultCarouselWithNoProps: Story = {
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

//<DefaultCarousel items={cards} buttonSize={120} imageHeight={300} imageWidth={400} cardHeight={400} cardWidth={400} />
