import { Meta, StoryObj } from "@storybook/react";
import { WavelengthStyledButton } from "@wavelengthusaf/components";

import { Controls, Source } from "@storybook/blocks";
import { Canvas } from "@storybook/blocks";
import { fn } from "@storybook/test";

// List of button types
const buttonTypes: string[] = [
  "channel_one_transparent",
  "channel_one_launch",
  "channel_one_request",
  "channel_one_pending",
  "channel_one_disabled",
  "ewdms_tertiary",
  "ewdms_primary",
  "ewdms_secondary",
  "brewery",
  "default",
];

const meta: Meta<typeof WavelengthStyledButton> = {
  title: "Inputs/WavelengthStyledButton", // The title under which the component will appear in the Storybook sidebar
  component: WavelengthStyledButton, // The component to display in the story

  parameters: {
    layout: "centered", // Centers the component in the canvas for display
    backgrounds: {
      default: "dark", // You can set a dark background for the canvas if you prefer
    },
    docs: {
      page: () => (
        <>
          <h1>WavelengthStyledButton Documentation</h1>
          <p>
            The <code>WavelengthStyledButton</code> is a customizable button component that supports different styles, sizes, and states.
          </p>

          <h2>Usage</h2>
          <p>
            To use the <code>WavelengthStyledButton</code>, simply import it and set the desired props. The component supports various types of buttons, including a "default" type and a "brewery" type
            for specific use cases.
          </p>
          <Source code="import { WavelengthStyledButton } from '@wavelengthusaf/components';" language="tsx" />

          <h2>Example Button</h2>
          <p>Here's an example of the styled button:</p>
          <Canvas />
          <h2>Props</h2>
          <Controls />
        </>
      ),
    },
  },

  tags: ["autodocs"],

  // Custom argTypes to control specific props via controls in Storybook UI
  argTypes: {
    type: {
      control: "select",
      options: buttonTypes,
      description: "Defines the button's visual style (e.g., 'default', 'brewery')", // Description for 'type' prop
    },
    children: {
      control: "text",
      description: "The content inside the button (e.g., text or elements).", // Description for 'children' prop
    },
    disabled: {
      control: "boolean",
      description: "Disables the button if set to true.", // Description for 'disabled' prop
    },
    styles: {
      control: "object",
      description: "Customizes the button's CSS styling.", // Description for 'styles' prop
    },
    hoverstyles: {
      control: "object",
      description: "Customizes the button’s hover effect.", // Description for 'hoverstyles' prop
    },
    activestyles: {
      control: "object",
      description: "Customizes the button’s active effect.", // Description for 'activestyles' prop
    },
    icon: {
      control: "object",
      description: "Icon that goes in front of text inside the button.", // Description for 'icon' prop
    },
    disabledstyles: {
      control: "object",
      description: "Styles applied to the button in its disabled state.", // Description for 'disabledstyles' prop
    },
    onClick: {
      description: "The function to be called when the button is clicked.", // Description for 'onClick' prop
    },
  },
};

export default meta;

// Define the Story type based on the Meta configuration
type Story = StoryObj<typeof meta>;

// Default story example
export const Properties: Story = {
  args: {
    type: "ewdms_primary",
    children: "Button",
    disabled: false,
    styles: {},
    hoverstyles: {},
    activestyles: {},
    // icon: <AddIcon fontSize="small" sx={{ color: "white" }} />,
    disabledstyles: {},
    onClick: fn(),
  },
};
