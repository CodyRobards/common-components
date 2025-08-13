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
