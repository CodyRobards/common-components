import { Canvas, Controls, Source, Stories } from "@storybook/blocks";
import { Meta, StoryObj } from "@storybook/react";
import { WavelengthAlert } from "@wavelengthusaf/components";

const meta: Meta<typeof WavelengthAlert> = {
  title: "Content/WavelengthAlert",
  component: WavelengthAlert,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
    docs: {
      page: () => (
        <>
          <h1>WavelengthAlert Documentation</h1>
          <p>
            A <code>WavelengthAlert</code>displays a short, important message in a way that attracts the user's attention without interrupting the user's task.
          </p>

          <h2>Usage</h2>
          <p>
            To use the <code>WavelengthAlert</code>, simply import it and set the desired props.
          </p>

          <Source code="import { WavelengthAlert } from '@wavelengthusaf/components';" language="tsx" />

          <h2>Example WavelengthAlert</h2>
          <p>Here's an example of the app logos:</p>
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
    // viewed: {
    //   control: "boolean",
    //   description: "Displays grayed out styling",
    // },
    variant: {
      options: ["caveman", "basic", "civilized"],
      control: "select",
      description: "Each variant renders a different layout for the alert component",
    },
    viewed: {
      control: "boolean",
      description: "Displayes a greyed out styling if viewed is true",
    },
    height: {
      control: "text",
      description: 'Defines the height of the alert component (e.g., "100px", "auto").',
    },
    width: {
      control: "text",
      description: 'Defines the width of the alert component (e.g., "100%", "400px").',
    },
    backgroundColor: {
      control: "color",
      description: "Sets the background color of the alert container.",
    },

    alertDescription: {
      control: "text",
      description: "Descriptive text providing additional context or details in the alert.(Specific to the civilized variant)",
    },
    onClose: {
      description: "Function that is called when the Close button is clicked.",
    },
    datatestid: {
      control: "text",
      description: "Custom test ID used for targeting the component in automated tests.",
    },
    alertType: {
      control: "text",
      description: "Describes the alert type, User Access Requested, Access Request, Action Required",
    },
    timeStamp: {
      control: "text",
      description: "Time where notification/alert was sent",
    },
    appName: {
      control: "text",
      description: "Name of app the alert pertains to. (Specific to the basic variant)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
/**Caveman structure*/
/**Time Stamp */
/**Alert Type */

export const WavelengthAlerts: Story = {
  args: {
    timeStamp: "05/02/25 ",
    alertType: "User Access Requested",
    variant: "caveman",
    url: "www.google.com",
    onClose: () => {},
  },
};

export const BasicAlert: Story = {
  args: {
    variant: "basic",
    onClose: () => {},
    height: "107px",
    alertDescription: "User Access Requested",
    appName: "RUDE",
    timeStamp: "05/02/25 8:21am",
    url: "/",
  },
};

export const CivilizedAlert: Story = {
  args: {
    variant: "civilized",
    onClose: () => {},
    height: "123px",
    alertDescription: "Originated by: Brad Watson",

    timeStamp: "2m ago\n",
    appName: "EWDMS",
    alertType: "Access Request",
    url: "/",
  },
};
