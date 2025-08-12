import { Canvas, Controls, Source } from "@storybook/blocks";
import { Meta, StoryObj } from "@storybook/react";
import { WavelengthTitleBar } from "@wavelengthusaf/components";

const meta: Meta<typeof WavelengthTitleBar> = {
  title: "Content/WavelengthTitleBar",
  component: WavelengthTitleBar,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>WavelengthTitleBar Documentation</h1>
          <p>
            The <code>WavelengthTitleBar</code> is a static Titlebar that contains a subtitle.
          </p>

          <h2>Usage</h2>
          <p>
            To use the <code>WavelengthTitleBar</code>, simply import it and set the desired props.
          </p>
          <Source code="import { WavelengthTitleBar } from '@wavelengthusaf/components';" language="tsx" />
          <Canvas />

          <h2>Props</h2>
          <p>These props allow customization of the snackbar:</p>
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
  tags: ["autodocs"],

  argTypes: {
    titleText: {
      control: "text",
      description: "Sets the main title.",
    },
    subtitleText: {
      control: "text",
      description: "Sets the subtitle.",
    },
    textColor: {
      control: "color",
      description: "Sets the color for the main title and subtitle.",
    },
    textShadow: {
      control: "boolean",
      description: "Sets the text shadow for the main title.",
    },
  },
} satisfies Meta<typeof WavelengthTitleBar>;

export default meta;
type Story = StoryObj<typeof meta>;
export const TitleBar: Story = {
  args: {
    titleText: "Channel 01",
    subtitleText: "350th Spectrum Warfare Wing Applications",
    textColor: "#34649b",
    textShadow: true,
  },
};
