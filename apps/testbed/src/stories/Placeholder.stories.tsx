import { Canvas, Controls, Source, Stories } from "@storybook/blocks";
import { Meta, StoryObj } from "@storybook/react";
import { WavelengthContentPlaceholder } from "@wavelengthusaf/components";

const meta: Meta<typeof WavelengthContentPlaceholder> = {
  title: "Samples/WavelengthContentPlaceholder", // The title under which the component will appear in the Storybook sidebar
  component: WavelengthContentPlaceholder, // The component to display in the story

  // Optional parameters to modify the layout and other behaviors of the story
  parameters: {
    layout: "centered", // Centers the component in the canvas for display
    backgrounds: {
      default: "light", // You can set a light background for the canvas if you prefer
    },
    docs: {
      page: () => (
        <>
          <h1>WavelengthContentPlaceholder Documentation</h1>
          <p>
            The <code>WavelengthContentPlaceholder</code> is a placeholder component used to display a loading or unavailable content state. It supports both rectangular and circular shapes.
          </p>

          <h2>Usage</h2>
          <p>
            To use the <code>WavelengthContentPlaceholder</code>, simply import it and set the desired props. You can customize the type, size, colors, and content of the placeholder.
          </p>
          <Source code="import { WavelengthContentPlaceholder } from '@wavelengthusaf/components';" language="tsx" />

          <h2>Example WavelengthContentPlaceholder</h2>
          <p>Here’s an example of the WavelengthContentPlaceholder component:</p>
          <Canvas />
          <h2>Props</h2>
          <Controls />

          <Stories />

          <h2>More Information/Usage</h2>
          <p>
            The <code>WavelengthContentPlaceholder</code> can be used in various scenarios where a loading or unavailable state needs to be displayed. It supports two shapes, custom colors, and
            dimensions, making it flexible for different use cases.
          </p>
        </>
      ),
    },
  },

  tags: ["autodocs"],

  // Default args (props) for the component
  args: {
    type: "rectangle",
    width: "200px",
    height: "200px",
    children: "Loading...",
    id: "placeholder",
  },

  // Custom argTypes to control specific props via controls in Storybook UI
  argTypes: {
    type: {
      control: "select",
      options: ["circle", "rectangle"],
      description: "Defines the shape of the placeholder: 'circle' or 'rectangle' (optional).",
    },
    width: {
      control: "text",
      description: "The width of the placeholder (optional).",
    },
    height: {
      control: "text",
      description: "The height of the placeholder (optional).",
    },
    txtcolor: {
      control: "color",
      description: "The text color inside the placeholder (optional).",
    },
    bgcolor: {
      control: "color",
      description: "The background color of the placeholder (optional).",
    },
    children: {
      control: "text",
      description: "The content to display inside the placeholder (required).",
    },
    id: {
      control: "text",
      description: "The id of the placeholder container (optional).",
    },
  },
} satisfies Meta<typeof WavelengthContentPlaceholder>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "rectangle",
    width: "200px",
    height: "200px",
    txtcolor: "",
    bgcolor: "",
    children: "Loading...",
    id: "placeholder",
  },
};

export const CirclePlaceholder: Story = {
  args: {
    type: "circle",
    width: "150px",
    height: "150px",
    txtcolor: "#FFFFFF",
    bgcolor: "#3498db",
    children: "Loading...",
    id: "circle-placeholder",
  },
};

export const CustomSize: Story = {
  args: {
    type: "rectangle",
    width: "300px",
    height: "100px",
    txtcolor: "#FFFFFF",
    bgcolor: "#2c3e50",
    children: "Please wait...",
    id: "custom-size-placeholder",
  },
};
