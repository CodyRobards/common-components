import { Canvas, Controls, Source, Stories } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";
import { WavelengthForm } from "@wavelengthusaf/components";
import { z } from "zod";

const sampleSchema = z.object({
  firstName: z.string().min(1, "Required"),
  lastName: z.string().min(1, "Required"),
});

const meta: Meta<typeof WavelengthForm> = {
  title: "Forms/WavelengthForm",
  component: WavelengthForm,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>WavelengthForm Documentation</h1>
          <p>
            The <code>WavelengthForm</code> React wrapper bridges React with the underlying <code>&lt;wavelength-form&gt;</code> web component. Provide a Zod schema to describe the form fields and
            optionally pass initial values.
          </p>
          <h2>Usage</h2>
          <p>Import the component, create a schema, and pass it along with an optional value object:</p>
          <Source
            code={`import { WavelengthForm } from '@wavelengthusaf/components';

const schema = z.object({ firstName: z.string(), lastName: z.string() });
<WavelengthForm schema={schema} value={{ firstName: 'Clark', lastName: 'Kent' }} />`}
            language="tsx"
          />
          <p>
            Customize the submit button text with <code>submitLabel</code> or pass
            <code>submitButtonProps</code> to forward attributes to the internal
            <code>&lt;wavelength-button&gt;</code>.
          </p>
          <p>
            Provide a <code>title</code> to render a heading above the form and control its alignment with <code>titleAlign</code>.
          </p>
          <h2>Example</h2>
          <Canvas />
          <h2>Props</h2>
          <Controls />
          <Stories />
        </>
      ),
    },
  },
  argTypes: {
    schema: { control: "object", description: "Zod schema defining form shape" },
    value: { control: "object", description: "Initial form values" },
    submitLabel: { control: "text", description: "Label for the submit button" },
    submitButtonProps: {
      control: "object",
      description: "Props forwarded to the internal wavelength-button",
    },
    showSubmit: { control: "boolean", description: "Toggle internal submit button" },
    backLabel: { control: "text", description: "Label for a back button" },
    backButtonProps: { control: "object", description: "Props for the back button" },
    idPrefix: { control: "text", description: "Prefix applied to generated input IDs" },
    title: { control: "text", description: "Heading text displayed above the form" },
    titleAlign: {
      control: "select",
      options: ["left", "center", "right"],
      description: "Alignment for the heading text",
    },
    formWidth: { control: "text", description: "CSS width applied to the form" },
    layout: { control: "object", description: "Array of column counts per row" },
  },
  args: {
    schema: sampleSchema,
    value: { firstName: "Jane", lastName: "Doe" },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof WavelengthForm>;

export const Default: Story = {
  render: (args) => <WavelengthForm {...args} />,
};

export const CustomSubmitButton: Story = {
  args: {
    schema: sampleSchema,
    value: { firstName: "Jane", lastName: "Doe" },
    submitLabel: "Register",
    submitButtonProps: { variant: "contained", colorOne: "#2e7d32", colorTwo: "#fff" },
  },
  render: (args) => <WavelengthForm {...args} />,
};

export const WithIdPrefix: Story = {
  args: {
    schema: sampleSchema,
    value: { firstName: "Jane", lastName: "Doe" },
    idPrefix: "person",
  },
  render: (args) => <WavelengthForm {...args} />,
};

export const WithTitle: Story = {
  args: {
    schema: sampleSchema,
    value: { firstName: "Jane", lastName: "Doe" },
    title: "Registration",
    titleAlign: "center",
  },
  render: (args) => <WavelengthForm {...args} />,
};

export const WithLayout: Story = {
  args: {
    schema: sampleSchema,
    value: { firstName: "Jane", lastName: "Doe" },
    layout: [2],
    formWidth: "400px",
  },
  render: (args) => <WavelengthForm {...args} />,
};

export const WithoutSubmitButton: Story = {
  args: {
    schema: sampleSchema,
    value: { firstName: "Jane", lastName: "Doe" },
    showSubmit: false,
  },
  render: (args) => <WavelengthForm {...args} />,
};

export const WithBackButton: Story = {
  args: {
    schema: sampleSchema,
    value: { firstName: "Jane", lastName: "Doe" },
    backLabel: "Back",
  },
  render: (args) => <WavelengthForm {...args} onBack={() => console.log("back")} />,
};
