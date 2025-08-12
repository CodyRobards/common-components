import { Meta, StoryObj } from "@storybook/react";
import { WavelengthFooter } from "@wavelengthusaf/components";
import { Controls, Source } from "@storybook/blocks";
import { Canvas } from "@storybook/blocks";

const meta: Meta<typeof WavelengthFooter> = {
  title: "Statics/WavelengthFooter", // The title under which the component will appear in the Storybook sidebar
  component: WavelengthFooter, // The component to display in the story

  // Optional parameters to modify the layout and other behaviors of the story
  parameters: {
    layout: "center", // Centers the component in the canvas for display
    backgrounds: {
      default: "light", // You can set a dark background for the canvas if you prefer
    },
    docs: {
      page: () => (
        <>
          <h1>WavelengthFooter</h1>
          <p>
            The <code>WavelengthFooter</code> is the standard footer from Wavelength.
          </p>

          <h2>Usage</h2>
          <p>
            To use the <code>WavelengthFooter</code>, simply import it and set the desired props.
          </p>
          <Source code="import { WavelengthFooter } from '@wavelengthusaf/components';" language="tsx" />

          <Canvas layout="padded" />

          <h2>Props</h2>
          <p>Here are the available props you can pass to customize the button:</p>
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
    text: { control: "text", description: "Adds a simple text blurb next to the Wavelength logo. The forward slash (/) is included." }, // Options for the 'type' prop
    textColor: { control: "color", description: "Sets the color of the given text to match your design. Default set to match your secondary pallete color." },
  },
} satisfies Meta<typeof WavelengthFooter>;

export default meta;

// Define the Story type based on the Meta configuration
type Story = StoryObj<typeof meta>;

// Default story example
export const Properties: Story = {
  args: {},
};
