import { Canvas, Controls, Source, Stories } from "@storybook/blocks";
import { Meta, StoryObj } from "@storybook/react";
import { WavelengthAppLogo, WavelengthBox } from "@wavelengthusaf/components";

const meta: Meta<typeof WavelengthBox> = {
  title: "Content/WavelengthBox", // The title under which the component will appear in the Storybook sidebar
  component: WavelengthBox, // The component to display in the story

  // Optional parameters to modify the layout and other behaviors of the story
  parameters: {
    layout: "centered", // Centers the component in the canvas for display
    backgrounds: {
      default: "dark", // You can set a dark background for the canvas if you prefer
    },
    docs: {
      page: () => (
        <>
          <h1>WavelengthBox Documentation</h1>
          <p>
            The <code>WavelengthBox</code> is a customizable Box/Container.
          </p>

          <h2>Usage</h2>
          <p>
            To use the <code>WavelengthBox</code>, simply import it and set the desired props. The component supports various types of app logos that can be input.
          </p>
          <Source code="import { WavelengthBox } from '@wavelengthusaf/components';" language="tsx" />

          <h2>Example WavelengthBox</h2>
          <p>Here's an example of the WavelengthBox:</p>
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

export const BasicBox: Story = {
  argTypes: {
    borderTopRadius: {
      control: "text",
      description: "Border radius of the top of the Box",
    },
    borderBottomRadius: {
      control: "text",
      description: "Border radius of the bottom of the Box",
    },
    width: {
      control: "number",
      description: "Width of the Box",
    },
    height: {
      control: "number",
      description: "Height of the Box",
    },
    children: {
      control: "text",
      description: "Element/Content placed inside of the box",
    },
  },
  args: {
    width: 200,
    height: 200,
    borderTopRadius: "5px",
    borderBottomRadius: "5px",
    children: "",
  },
};

export const BoxWithChild: Story = {
  argTypes: {
    borderTopRadius: {
      control: "text",
      description: "Border radius of the top of the Box",
    },
    borderBottomRadius: {
      control: "text",
      description: "Border radius of the bottom of the Box",
    },
    width: {
      control: "number",
      description: "Width of the Box",
    },
    height: {
      control: "number",
      description: "Height of the Box",
    },
    children: {
      control: "text",
      description: "Element/Content placed inside of the box",
    },
  },
  args: {
    width: 200,
    height: 200,
    borderTopRadius: "5px",
    borderBottomRadius: "5px",
    children: <WavelengthAppLogo name="wings" width={100} height={100} />,
  },
};
