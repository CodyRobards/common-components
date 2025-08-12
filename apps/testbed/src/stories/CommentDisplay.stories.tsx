import { Canvas, Controls, Source, Stories } from "@storybook/blocks";
import { Meta, StoryObj } from "@storybook/react";
import { WavelengthCommentDisplay } from "@wavelengthusaf/components";

const meta: Meta<typeof WavelengthCommentDisplay> = {
  title: "Content/WavelengthCommentDisplay",
  component: WavelengthCommentDisplay,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
    docs: {
      page: () => (
        <>
          <h1>WavelengthCommentDisplay Documentation</h1>
          <p>
            The <code>WavelengthCommentDisplay</code> component allows you to display simple comments.
          </p>
          <h2>Usage</h2>
          <p>
            To use the <code>WavelengthCommentDisplay</code> component, simply import it and set the desired props.
          </p>
          <Source code='import { WavelengthCommentDisplay } from "@wavelengthusaf/components";' language="tsx" />
          <h2>Example WavelengthCommentDisplay</h2>
          <p>Heres an example WavelengthCommentDisplay Component</p>
          <Canvas />
          <h2>Props</h2>
          <Controls />
          <Stories />
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
  args: {
    author: "Keenan R.",
    date: "March 24th. 2024",
    comments: "Newly built component that displays comments.",
  },
  argTypes: {
    width: {
      control: "text",
      type: "string",
      description: 'The width of the comment box. Accepts a string value like "100%" or "300px".',
    },
    height: {
      control: "text",
      description: 'The height of the comment box. Accepts a string value like "auto", "200px", etc.',
      type: "string",
    },
    author: {
      control: "text",
      description: "The name of the person who authored the comment.",
      type: "string",
    },
    date: {
      control: "text",
      description: 'The date when the comment was made. Expected format: "YYYY-MM-DD".',
      type: "string",
    },
    comments: {
      control: "text",
      description: "The actual comment text. This is the content that will be displayed inside the comment box.",
      type: "string",
    },
    onClick: {
      description: "A callback function triggered when a button inside the comment box is clicked.",
      type: "function",
    },
    textColor: {
      control: "color",
      description: "The color of the text inside the comment box. Accepts any valid CSS color value.",
      type: "string",
    },
    backgroundColor: {
      control: "color",
      description: "The background color of the comment box. Accepts any valid CSS color value.",
      type: "string",
    },
    border: {
      control: "text",
      description: 'Defines the border style of the comment box. Example: "1px solid #000" or "none".',
      type: "string",
    },
    iconSelectedColor: {
      control: "color",
      description: "The color of the icon when it is selected or active. Accepts any valid CSS color value.",
      type: "string",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const CustomizedCommentDisplay: Story = {
  args: {
    backgroundColor: "#dfecf4",
    iconSelectedColor: "blue",
    height: "100px",
  },
};
