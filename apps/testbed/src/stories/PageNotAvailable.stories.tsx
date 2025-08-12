import { Canvas, Controls, Source, Stories } from "@storybook/blocks";
import { Meta, StoryObj } from "@storybook/react";
import { WavelengthNotAvailablePage } from "@wavelengthusaf/components";

const meta: Meta<typeof WavelengthNotAvailablePage> = {
  title: "Content/WavelengthNotAvailablePage", // The title under which the component will appear in the Storybook sidebar
  component: WavelengthNotAvailablePage, // The component to display in the story

  // Optional parameters to modify the layout and other behaviors of the story
  parameters: {
    layout: "centered", // Centers the component in the canvas for display
    backgrounds: {
      default: "dark", // You can set a dark background for the canvas if you prefer
    },
    docs: {
      page: () => (
        <>
          <h1>WavelengthNotAvailablePage Documentation</h1>
          <p>
            The <code>WavelengthNotAvailablePage</code> is a customizable page displayed when content is unavailable, with options to show an error message and a redirect button.
          </p>

          <h2>Usage</h2>
          <p>
            To use the <code>WavelengthNotAvailablePage</code>, import it and set the desired props. It supports customizable logos, background colors, error messages, and buttons.
          </p>
          <Source code="import { WavelengthNotAvailablePage } from '@wavelengthusaf/components';" language="tsx" />

          <h2>Example WavelengthNotAvailablePage</h2>
          <p>Here’s an example of the WavelengthNotAvailablePage component:</p>
          <Canvas />
          <h2>Props</h2>
          <Controls />
          <Stories />

          <h2>More Information/Usage</h2>
          <p>
            The <code>WavelengthNotAvailablePage</code> component can be used in various scenarios where a page is temporarily unavailable. You can customize its look and feel by passing different
            props for the background color, button colors, and logos.
          </p>
        </>
      ),
    },
  },

  tags: ["autodocs"],

  // Default args (props) for the component
  args: {
    WavelengthAppLogoName: "563rdpatch",
    errorMessage: "Page Not Available",
    backgroundColor: "gray",
    buttonText: "Go Back",
    redirectLink: "#",
    buttonColorOne: "white",
    buttonColorTwo: "#0D5288",
    id: "not-available-page",
  },

  // Custom argTypes to control specific props via controls in Storybook UI
  argTypes: {
    WavelengthAppLogoName: {
      control: "text",
      description: "Defines the logo to be displayed (optional).",
    },
    errorMessage: {
      control: "text",
      description: "The error message to display (required).",
    },
    backgroundColor: {
      control: "color",
      description: "The background color of the page (optional).",
    },
    buttonText: {
      control: "text",
      description: "The text on the redirect button (required).",
    },
    redirectLink: {
      control: "text",
      description: "The URL the button redirects to (optional).",
    },
    buttonColorOne: {
      control: "color",
      description: "The first color for the button (optional).",
    },
    buttonColorTwo: {
      control: "color",
      description: "The second color for the button (optional).",
    },
    id: {
      control: "text",
      description: "The id of the container (optional).",
    },
  },
} satisfies Meta<typeof WavelengthNotAvailablePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    WavelengthAppLogoName: "563rdpatch",
    errorMessage: "Page Not Available",
    backgroundColor: "gray",
    buttonText: "Go Back",
    redirectLink: "#",
    buttonColorOne: "white",
    buttonColorTwo: "#0D5288",
    id: "not-available-page",
  },
};

export const CustomBackground: Story = {
  args: {
    WavelengthAppLogoName: "wings",
    errorMessage: "Oops! Example App is not available",
    backgroundColor: "#2C3E50",
    buttonText: "Go Back To Home Page",
    redirectLink: "/home",
    buttonColorOne: "#2c3e50",
    buttonColorTwo: "white",
    id: "custom-page",
  },
};

export const CustomButtonColors: Story = {
  args: {
    WavelengthAppLogoName: "563rdpatch",
    errorMessage: "Example App is not available",
    backgroundColor: "black",
    buttonText: "Contact Support",
    redirectLink: "/contact",
    buttonColorOne: "#ECF0F1",
    buttonColorTwo: "#16A085",
    id: "support-page",
  },
};
