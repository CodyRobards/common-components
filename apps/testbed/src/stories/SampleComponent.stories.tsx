import { Canvas, Controls, Source } from "@storybook/blocks";
import { Meta, StoryObj } from "@storybook/react";
import { SampleComponent } from "@wavelengthusaf/components";

const meta: Meta<typeof SampleComponent> = {
  title: "Samples/SampleComponent",
  component: SampleComponent,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>SampleComponent Documentation</h1>
          <p>
            The <code>SampleComponent</code> is a generic component intended to be a template for internal developers to use as the base for a future component.
          </p>

          <Source code="import { SampleComponent } from '@wavelengthusaf/components';" language="tsx" />
          <Canvas />

          <h2>Props</h2>
          <p>These props allow customization of the sample component:</p>
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
    testProp: {
      control: "text",
      description: "A sample attribute used to demonstrate prop binding.",
      defaultValue: "Hello from Storybook!",
    },
    children: {
      control: "text",
      description: "Slot content to display inside the component.",
      defaultValue: "Slot Content",
    },
  },
} satisfies Meta<typeof SampleComponent>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    testProp: "Sample Component",
    children: "",
  },
};
