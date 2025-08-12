import { Canvas, Controls, Source } from "@storybook/blocks";
import { Meta, StoryObj } from "@storybook/react";
import { WavelengthAccessAlert } from "@wavelengthusaf/components";

const meta: Meta<typeof WavelengthAccessAlert> = {
  title: "Content/WavelengthAccessAlert",
  component: WavelengthAccessAlert,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
    docs: {
      page: () => (
        <>
          <h1>WavelengthAccessAlert Documentation</h1>
          <p>
            The <code>WavelengthAccessAlert</code> is an alert box that displays information to the user.
          </p>

          <h2>Usage</h2>
          <p>
            To use the <code>WavelengthAccessAlert</code>, simply import it and set the desired props.
          </p>

          <Source code="import { WavelengthAccessAlert } from '@wavelengthusaf/components';" language="tsx" />

          <h2>Example WavelengthAccessAlert</h2>
          <p>Here's an example of the app logos:</p>
          <Canvas />
          <h2>Props</h2>
          <Controls />
        </>
      ),
    },
  },
  tags: ["autodocs"],
  argTypes: {
    height: {
      control: "text",
      description: 'Specifies the height of the alert container (e.g., "120px", "auto").',
    },
    width: {
      control: "text",
      description: 'Specifies the width of the alert container (e.g., "100%", "400px").',
    },
    access: {
      control: { type: "radio" },
      options: ["Access Request", "Access Granted", "Access Denied"],
      description: "Determines the access status being displayed in the alert.",
    },

    appNickname: {
      control: "text",
      description: "A shortened or alternative name for the application.",
    },
    requestorName: {
      control: "text",
      description: "Name of the individual or entity making the access request.",
    },
    time: {
      control: "text",
      description: "Time at which the access request occurred (as a string).",
    },
    message: {
      control: "text",
      description: "Optional message providing more context for the alert.",
    },
    WavelengthAppLogo: {
      control: "text",
      description: "URL of the application logo to be displayed in the alert.",
    },
    backgroundColor: {
      control: "color",
      description: "Background color of the alert component.",
    },
    onClear: {
      action: "cleared",
      description: "Callback function triggered when the alert is dismissed or cleared.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const WavelengthAccessAlerts: Story = {
  args: {
    access: "Access Granted",
    time: "3h ago",
  },
};
