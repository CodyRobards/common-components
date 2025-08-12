import { Meta, StoryObj } from "@storybook/react";
import { WavelengthManyPlanes } from "@wavelengthusaf/components";
import { Controls, Source } from "@storybook/blocks";
import { Canvas } from "@storybook/blocks";

const meta: Meta<typeof WavelengthManyPlanes> = {
  title: "Statics/WavelengthManyPlanes", // The title under which the component will appear in the Storybook sidebar
  component: WavelengthManyPlanes, // The component to display in the story

  // Optional parameters to modify the layout and other behaviors of the story
  parameters: {
    layout: "center", // Centers the component in the canvas for display
    backgrounds: {
      default: "light", // You can set a dark background for the canvas if you prefer
    },
    docs: {
      page: () => (
        <>
          <h1>WavelengthManyPlanes</h1>
          <p>
            The <code>WavelengthManyPlanes</code> can be adjusted to align to the left or to the right, as well as the number of planes you want to be shown.
          </p>

          <h2>Usage</h2>
          <p>
            To use the <code>WavelengthManyPlanes</code>, simply import it and set the desired props.
          </p>
          <Source code="import { WavelengthManyPlanes } from '@wavelengthusaf/components';" language="tsx" />

          <Canvas layout="padded" />

          <h2>Props</h2>
          <p>Here are the available props you can pass to customize the planes:</p>
          <Controls />

          <h2>More Information/Usage </h2>
          <p>
            Some styles are custom to specific product teams, If you have a specific component you would like to see added, create a{" "}
            <b>
              <a target="_blank" rel="noopener noreferrer" href="https://linear.app/850swgdet1/team/COM/active">
                LINEAR TICKET.
              </a>
            </b>
          </p>
        </>
      ),
    },
  },

  // Automatically generated tags for documentation
  tags: ["autodocs"],

  // Default args (props) for the component

  // Custom argTypes to control specific props via controls in Storybook UI
  argTypes: {
    numberOfPlanes: { control: "number", description: "Sets the number of planes for the header." },
    trailDir: { control: "select", options: ["right", "left"], description: "Sets the direction the planes will be aligned." },
    opacity: { control: { type: "number", min: 0, max: 1, step: 0.1 }, description: "Sets the opacity of the planes. (0-1)" },
    gradient: {
      control: "boolean",
      description: "Sets a gradient for the planes; They will appear to taper off in opacity as it continues. Can be combined with the opacity prop to set the max opacity for the gradient.",
    },
    color: { control: "color", description: "Sets the color of the planes." },
  },
} satisfies Meta<typeof WavelengthManyPlanes>;

export default meta;

// Define the Story type based on the Meta configuration
type Story = StoryObj<typeof meta>;

// Default story example
export const Properties: Story = {
  args: {},
};
