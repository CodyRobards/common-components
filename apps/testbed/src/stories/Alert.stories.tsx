import { Canvas, Controls, Source } from "@storybook/blocks";
import { Meta, StoryObj } from "@storybook/react";
import { WavelengthPermissionAlert } from "@wavelengthusaf/components";

const meta: Meta<typeof WavelengthPermissionAlert> = {
  title: "Content/WavelengthPermissionAlert",
  component: WavelengthPermissionAlert,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
    docs: {
      page: () => (
        <>
          <h1>WavelengthPermissionAlert Documentation</h1>
          <p>
            The <code>WavelengthPermissionAlert</code> is an alert box that displays information to the user.
          </p>

          <h2>Usage</h2>
          <p>
            To use the <code>WavelengthPermissionAlert</code>, simply import it and set the desired props.
          </p>

          <Source code="import { WavelengthPermissionAlert } from '@wavelengthusaf/components';" language="tsx" />

          <h2>Example WavelengthPermissionAlert</h2>
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
      description: 'Sets the height of the alert container (e.g., "100px", "auto").',
    },
    width: {
      control: "text",
      description: 'Sets the width of the alert container (e.g., "400px", "100%").',
    },
    permission: {
      control: { type: "radio" },
      options: ["Permission Requested", "Permission Denied"],
      description: "Defines the permission status being communicated by the alert.",
    },
    applicationName: {
      control: "text",
      description: "Name of the application that is requesting permission.",
    },
    requestorName: {
      control: "text",
      description: "Name of the person or entity requesting the permission.",
    },
    dateOfRequest: {
      control: "text",
      description: "Date when the permission was requested (formatted as a string).",
    },
    backgroundColor: {
      control: "color",
      description: "Sets the background color of the alert component.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const WavelengthPermissionAlerts: Story = {
  args: {
    permission: "Permission Requested",
    applicationName: "EMBER",
    requestorName: "Rian Baltazar",
    dateOfRequest: "10 Oct 24",
    unit: "563rd",
    onDismiss: (e) => {
      e.preventDefault();
      console.log("Dismissed");
    },
  },
};
