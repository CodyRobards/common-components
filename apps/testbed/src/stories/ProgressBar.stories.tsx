import { Canvas, Controls, Source, Stories } from "@storybook/blocks";
import { Meta, StoryObj } from "@storybook/react";
import { WavelengthProgressBar } from "@wavelengthusaf/components";

const meta: Meta<typeof WavelengthProgressBar> = {
  title: "Content/WavelengthProgressBar",
  component: WavelengthProgressBar,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
    docs: {
      page: () => (
        <>
          <h1>Progress Bar Documentation</h1>
          <p>
            The <code>WavelengthProgressBar</code> is a component that enables users to display the progress of a particular operation such as file uploads.
          </p>
          <h2>Usage</h2>
          <p>
            To use the <code>WavelengthProgressBar</code>, simply import the React wrapper and set the desired props.
          </p>
          <Source code={`import WavelengthProgressBar from "@wavelengthusaf/components";`} language="tsx" />
          <h2>Example Progress Bar</h2>
          <Canvas />
          <h2>Props</h2>
          <Controls />
          <Stories />
        </>
      ),
    },
  },
  tags: ["autodocs"],
  argTypes: {
    name: { description: "Label for the task being shown", control: "text" },
    value: {
      control: { type: "range", min: 0, max: 100 },
      description: "Progress value between 0 and 100.",
    },
    width: { description: "Total width of the progress bar", control: "text" },
    height: { description: "Height of the progress bar", control: "text" },
    fontSize: { description: "Sets the font-size for the label text", control: "text" },
    fontColor: { description: "Sets the font-color for the label text", control: "color" },
    progressBorder: { description: "Sets the border attributes for progress bar", control: "text" },
    progressColor: { description: "Color of the progress fill", control: "color" },
  },
  args: {
    name: "upload.txt",
    value: 75,
    width: "425px",
    height: "12px",
    fontSize: "inherit",
    fontColor: "#000000",
    progressBorder: "2px solid black",
    progressColor: "#1976d2",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ProgressBar: Story = {
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const EwdmsProgressBar: Story = {
  args: {
    name: "Finished",
    value: 100,
    width: "425px",
    height: "12px",
    fontSize: "inherit",
    fontColor: "#ffffff",
    progressBorder: "2px solid white",
    progressColor: "rgba(38, 186, 190, 1)",
  },
};
