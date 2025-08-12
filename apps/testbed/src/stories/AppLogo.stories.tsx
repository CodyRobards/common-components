import { Canvas, Controls, Source } from "@storybook/blocks";
import { Meta, StoryObj } from "@storybook/react";
import { WavelengthAppLogo } from "@wavelengthusaf/components";

const names = ["wings", "563rdpatch", "563rdlabel", "arrow", "channelone", "swarm", "wavelengthw"];

const meta: Meta<typeof WavelengthAppLogo> = {
  title: "Content/WavelengthAppLogo",
  component: WavelengthAppLogo,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
    docs: {
      page: () => (
        <>
          <h1>WavelengthAppLogo Documentation</h1>
          <p>
            The <code>WavelengthAppLogo</code> is a customizable container that contains an app logo.
          </p>

          <h2>Usage</h2>
          <p>
            To use the <code>WavelengthAppLogo</code>, simply import it and set the desired props. The component supports various types of app logos.
          </p>

          <Source code="import { WavelengthAppLogo } from '@wavelengthusaf/components';" language="tsx" />

          <h2>Example WavelengthAppLogo</h2>
          <p>Here's an example of the app logos:</p>
          <Canvas />
          <h2>Props</h2>
          <Controls />
        </>
      ),
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const WavelengthAppLogos: Story = {
  argTypes: {
    name: {
      options: names,
      control: "select",
      description: "Defines the WavelengthAppLogo's visual style (e.g., 'wings', 'channelone').",
    },
    width: {
      control: "number",
      description: "The width of the WavelengthAppLogo",
    },
    height: {
      control: "number",
      description: "The height of the WavelengthAppLogo",
    },
    grayscale: {
      control: "boolean",
      description: "Applies a grey styling to the WavelengthAppLogo",
    },
  },
  args: {
    name: "",
    width: 200,
    height: 200,
    grayscale: false,
  },
};
