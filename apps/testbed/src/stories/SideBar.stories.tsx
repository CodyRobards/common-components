import { Meta, StoryObj } from "@storybook/react";
import { WavelengthSideBar } from "@wavelengthusaf/components";
import { Canvas, Controls, Source } from "@storybook/blocks";
import { MemoryRouter } from "react-router-dom";

const section1 = [
  {
    title: "Produce",
    subsections: [
      {
        title: "Fruit",
        items: [
          { title: "Apple (path? test)", path: "google.com" },
          {
            title: "Orange (onClick? test)",
            onClick: () => alert("Oranges are delicious!"),
          },
          { title: "Banana" },
        ],
      },
      {
        title: "Vegetable",
        items: [{ title: "Carrot" }, { title: "Lettuce" }, { title: "Tomato" }],
      },
    ],
  },
  {
    title: "Meat",
    subsections: [
      {
        title: "Beef",
        items: [{ title: "Ground Beef" }, { title: "Ribeye" }, { title: "Chicken Fried Steak" }],
      },
      {
        title: "Chicken",
        items: [{ title: "Roasted Chicken" }, { title: "Fried Chicken" }, { title: "Chicken Noodle Soup" }],
      },
    ],
  },
];

const meta: Meta<typeof WavelengthSideBar> = {
  title: "Content/WavelengthSideBar",
  component: WavelengthSideBar,
  parameters: {
    layout: "center",
    backgrounds: {
      default: "light",
    },
    docs: {
      page: () => (
        <>
          <h1>WavelengthSideBar</h1>
          <p>
            The <code>WavelengthSideBar</code> displays categorized navigation links as collapsible sections.
          </p>

          <h2>Usage</h2>
          <p>To use the sidebar, import it and pass in your sections configuration.</p>
          <Source code="import { WavelengthSideBar } from '@wavelengthusaf/components';" language="tsx" />

          <Canvas layout="centered" />
          <h2>Props</h2>
          <Controls />

          <h2>More Information</h2>
          <p>
            Some styles are custom to specific product teams. If you'd like to request a new feature, please submit a{" "}
            <b>
              <a target="_blank" rel="noopener noreferrer" href="https://linear.app/850swgdet1/team/COM/active">
                LINEAR TICKET
              </a>
            </b>
            .
          </p>
        </>
      ),
    },
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    sections: {
      control: "select",
      options: [section1],
      description: "Controls dropdown sections, labels, and items to render in the sidebar.",
    },
    bgColor: { control: "color", description: "Background color of the sidebar." },
    txtColor: { control: "color", description: "Color of the text." },
    labelColor: { control: "color", description: "Color of subsection labels." },
    arrowColor: { control: "color", description: "Color of the dropdown arrows." },
    marginTop: { control: "number", description: "Top margin of the sidebar." },
    marginLeft: { control: "number", description: "Left margin of the sidebar." },
    width: { control: "number", description: "Width of the sidebar in pixels." },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Properties: Story = {
  args: {
    sections: section1,
  },
};
