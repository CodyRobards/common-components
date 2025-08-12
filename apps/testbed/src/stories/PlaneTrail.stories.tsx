import { Meta, StoryObj } from "@storybook/react";
import { WavelengthPlaneTrail } from "@wavelengthusaf/components";
import { Controls, Source } from "@storybook/blocks";
import { Canvas } from "@storybook/blocks";

const meta: Meta<typeof WavelengthPlaneTrail> = {
  title: "Statics/WavelengthPlaneTrail", // The title under which the component will appear in the Storybook sidebar
  component: WavelengthPlaneTrail, // The component to display in the story

  // Optional parameters to modify the layout and other behaviors of the story
  parameters: {
    layout: "center", // Centers the component in the canvas for display
    backgrounds: {
      default: "light", // You can set a dark background for the canvas if you prefer
    },
    docs: {
      page: () => (
        <>
          <h1>WavelengthPlaneTrail</h1>
          <p>
            The <code>WavelengthPlaneTrail</code> is a simple, styled separator for your webpage.
          </p>

          <h2>Usage</h2>
          <p>
            To use the <code>WavelengthPlaneTrail</code>, simply import it and set the desired props.
          </p>
          <Source code="import { WavelengthPlaneTrail } from '@wavelengthusaf/components';" language="tsx" />

          <Canvas layout="padded" />

          <h2>Props</h2>
          <p>Here are the available props you can pass to customize the plane trail:</p>
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
    trailDir: { control: "select", options: ["right", "left"], description: "Defines the PlaneTrail's direction." }, // Options for the 'type' prop
    color: { control: "color", description: "Sets the color of the trail and plane." },
    id: { control: "text", description: "Sets the id of the component." },
  },
} satisfies Meta<typeof WavelengthPlaneTrail>;

export default meta;

// Define the Story type based on the Meta configuration
type Story = StoryObj<typeof meta>;

// Default story example
export const Properties: Story = {
  args: {},
};
