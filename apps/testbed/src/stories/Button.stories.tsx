import { Canvas, Controls, Source, Stories } from "@storybook/blocks";
import { Meta, StoryObj } from "@storybook/react";
import { WavelengthButton } from "@wavelengthusaf/components";

const meta: Meta<typeof WavelengthButton> = {
  title: "Inputs/WavelengthButton",
  component: WavelengthButton,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>WavelengthButton Documentation</h1>
          <p>
            The <code>WavelengthButton</code> is a stylized web component button that supports various UI states and variants. You can customize its look and behavior using props listed below.
          </p>

          <h2>Usage</h2>
          <p>
            To use the <code>WavelengthButton</code>, simply import and render it:
          </p>
          <Source code={`import { WavelengthButton } from '@wavelengthusaf/components';`} language="tsx" />
          <Canvas />

          <h2>Props</h2>
          <Controls />
          <Stories />

          <h2>More Information</h2>
          <p>
            Styles may vary depending on team needs. For requests or improvements, please submit a{" "}
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
    variant: {
      control: "select",
      options: ["outlined", "contained", "text"],
      description: "Defines the visual style of the button.",
      defaultValue: "outlined",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Predefined button size options.",
      defaultValue: "medium",
    },
    height: {
      control: "text",
      description: "Sets the height of the button.",
    },
    width: {
      control: "text",
      description: "Sets the minWidth of the button.",
    },
    margin: {
      control: "text",
      description: "CSS margin to apply around the button (e.g., '0.5rem 1rem').",
    },
    padding: {
      control: "text",
      description: "CSS padding to control button size (e.g., '0.625rem 1.25rem'). Overrides `size` presets.",
    },
    colorOne: {
      control: "color",
      description: "Primary color for the button background or border.",
    },
    colorTwo: {
      control: "color",
      description: "Secondary color used for text and contrast.",
    },
    fontSize: {
      control: "text",
      description: "Sets the font size for the inside text.",
    },
    borderRadius: {
      control: "text",
      description: "CSS border-radius for rounding button corners (e.g., '0.25rem').",
    },
    disabled: {
      control: "boolean",
      description: "If true, disables the button and greys it out.",
    },
    children: {
      control: "text",
      description: "Content to display inside the button. Accepts text or JSX.",
    },
    href: {
      control: "text",
      description: "Use to set an external link to the button.",
    },
    target: {
      control: "select",
      options: ["_self", "_blank"],
      description: "Specifies where to open the link provided by ``href``. Default is ``_blank``",
    },
    boxShadow: {
      control: "text",
      description: "Sets the boxShadow.",
    },
    onClick: {
      control: false,
      description: "Callback function triggered when the button is clicked.",
    },
  },
} satisfies Meta<typeof WavelengthButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "outlined",
    size: "medium",
    height: "",
    width: "",
    margin: "",
    padding: "",
    colorOne: "#1976d2",
    colorTwo: "#ffffff",
    fontSize: "0.813rem",
    disabled: false,
    boxShadow: "",
    borderRadius: "",
    href: "",
    target: "_blank",
    children: "Click Me",
  },
};

export const ExternalLinkButton: Story = {
  args: {
    variant: "contained",
    size: "medium",
    colorOne: "#4285F4",
    colorTwo: "#ffffff",
    fontSize: "0.875rem",
    borderRadius: "0.25rem",
    padding: "0.625rem 1.25rem",
    href: "https://www.google.com",
    target: "_blank",
    children: "Go to Google",
  },
};

export const ClickHandlerExample: Story = {
  args: {
    variant: "contained",
    size: "medium",
    colorOne: "#4CAF50",
    colorTwo: "#ffffff",
    children: "Click me",
    onClick: () => alert("Button clicked!"),
  },
};
