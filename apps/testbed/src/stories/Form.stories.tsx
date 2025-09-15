import { Canvas, Controls, Source, Stories } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";
import { WavelengthForm } from "@wavelengthusaf/components";
import { z } from "zod";

const sampleSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, { message: "FIRST NAME is required." })
    .regex(new RegExp(/^[a-zA-Zà-ÿÀ-Ÿ\s'-]+$/), { message: "Alphabetical characters only." }),
  middleName: z
    .string()
    .regex(new RegExp(/^(?![\s.]+$)[a-zA-Zà-ÿÀ-Ÿ\s'-.]*$/), { message: "Alphabetical characters only." })
    .optional(),
  lastName: z
    .string()
    .min(1, { message: "LAST NAME is required." })
    .regex(new RegExp(/^[a-zA-Zà-ÿÀ-Ÿ\s'-]+$/), { message: "Alphabetical characters only." }),
  additionalInfo: z
    .string()
    .regex(new RegExp(/^(?![\s.]+$)[a-zA-Zà-ÿÀ-Ÿ\s'-.]*$/), { message: "Alphabetical characters only." })
    .optional(),
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
            Optional action buttons can be added via the <code>leftButton</code>,<code>centerButton</code>, and <code>rightButton</code> props. Each accepts a label, optional <code>buttonProps</code>{" "}
            forwarded to the underlying
            <code>&lt;wavelength-button&gt;</code> (for example, <code>variant</code> or
            <code>size</code>), and an optional custom event name.
          </p>
          <p>
            Provide a <code>title</code> to render a heading above the form and control its alignment with <code>titleAlign</code>.
          </p>
          <p>
            The form width defaults to <code>300px</code>. Override it with the <code>formWidth</code> prop.
          </p>
          <h2>Schema & Validation</h2>
          <p>
            Fields are validated with <code>zod</code>. Any validation errors are surfaced on the corresponding inputs and returned through the form&apos;s submit handler.
          </p>
          <Source
            code={`const schema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
});

<WavelengthForm schema={schema} onSubmit={(data) => console.log(data)} />`}
            language="tsx"
          />
          <h2>Custom Buttons & Events</h2>
          <p>
            Use <code>onBack</code>, <code>onCenter</code>, <code>onRight</code>, and <code>onSubmit</code> to respond to button clicks or form submission.
          </p>
          <Source
            code={`<WavelengthForm
  schema={schema}
  leftButton={{ label: 'Back' }}
  centerButton={{ label: 'Help' }}
  rightButton={{ label: 'Next' }}
  onBack={() => console.log('back')}
  onCenter={() => console.log('center')}
  onRight={() => console.log('right')}
  onSubmit={(values) => console.log('submit', values)}
/>`}
            language="tsx"
          />
          <h2>Layout & Styling</h2>
          <p>
            Control the layout with a <code>layout</code> array specifying column counts per row. Style the form with
            <code>titleColor</code>, <code>formWidth</code>, and shared <code>inputProps</code> applied to each field.
          </p>
          <Source
            code={`<WavelengthForm
  schema={schema}
  layout={[2, 2]}
  title="Registration"
  titleColor="#1976d2"
  formWidth="500px"
  inputProps={{ width: '250px' }}
/>`}
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
    leftButton: { control: "object", description: "Config for left-aligned button" },
    centerButton: { control: "object", description: "Config for center-aligned button" },
    rightButton: { control: "object", description: "Config for right-aligned button" },
    inputProps: { control: "object", description: "Props applied to each WavelengthInput" },
    idPrefix: { control: "text", description: "Prefix applied to generated input IDs and names" },
    title: { control: "text", description: "Heading text displayed above the form" },
    titleAlign: {
      control: "select",
      options: ["left", "center", "right"],
      description: "Alignment for the heading text",
    },
    titleColor: { control: "color", description: "Color for the heading text" },
    formWidth: { control: "text", description: "CSS width applied to the form (default: 300px)" },
    layout: { control: "object", description: "Array of column counts per row" },
  },
  args: {
    schema: sampleSchema,
    value: { firstName: "Clark", lastName: "Kent" },
    inputProps: {
      clearable: true,
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof WavelengthForm>;

export const Default: Story = {
  render: (args) => <WavelengthForm {...args} />,
};

export const WithIdPrefix: Story = {
  args: {
    schema: sampleSchema,
    value: { firstName: "Clark", lastName: "Kent" },
    idPrefix: "person",
  },
  render: (args) => <WavelengthForm {...args} />,
};

export const WithTitle: Story = {
  args: {
    schema: sampleSchema,
    value: { firstName: "Clark", lastName: "Kent" },
    title: "Registration",
    titleAlign: "center",
    titleColor: "#808080",
  },
  render: (args) => <WavelengthForm {...args} />,
};

export const WithLayout: Story = {
  args: {
    schema: sampleSchema,
    value: { firstName: "Clark", lastName: "Kent" },
    layout: [3, 1],
    formWidth: "600px",
  },
  render: (args) => <WavelengthForm {...args} />,
};

export const CustomFormWidth: Story = {
  args: {
    schema: sampleSchema,
    value: { firstName: "Clark", lastName: "Kent" },
    formWidth: "400px",
  },
  render: (args) => <WavelengthForm {...args} />,
};

export const WithBackButton: Story = {
  args: {
    schema: sampleSchema,
    value: { firstName: "Clark", lastName: "Kent" },
    leftButton: {
      label: "Back",
      buttonProps: { id: "back-btn", variant: "text", size: "small" },
    },
  },
  render: (args) => <WavelengthForm {...args} onBack={() => console.log("back")} />,
};

export const WithCenterButton: Story = {
  args: {
    schema: sampleSchema,
    value: { firstName: "Clark", lastName: "Kent" },
    centerButton: {
      label: "Help",
      buttonProps: { id: "help-btn", variant: "contained", size: "medium" },
    },
  },
  render: (args) => <WavelengthForm {...args} onCenter={() => console.log("center")} />,
};

export const WithRightButton: Story = {
  args: {
    schema: sampleSchema,
    value: { firstName: "Clark", lastName: "Kent" },
    rightButton: {
      label: "Next ＞＞",
      buttonProps: { id: "next-btn", variant: "outlined", size: "small" },
    },
  },
  render: (args) => <WavelengthForm {...args} />,
};

export const CustomRightButton: Story = {
  args: {
    schema: sampleSchema,
    value: { firstName: "Clark", lastName: "Kent" },
    rightButton: {
      label: "Register",
      buttonProps: { id: "register-btn", variant: "contained", size: "large" },
    },
  },
  render: (args) => <WavelengthForm {...args} />,
};

export const WithInputProps: Story = {
  args: {
    schema: sampleSchema,
    value: { firstName: "Clark", lastName: "Kent" },
    inputProps: { width: "300px", "data-test": "story" },
  },
  render: (args) => <WavelengthForm {...args} />,
};

export const WithCustomInputAndButtonProps: Story = {
  args: {
    schema: sampleSchema,
    value: { firstName: "Clark", lastName: "Kent" },
    inputProps: {
      "border-radius": "0px",
      "helper-message": "Let's go Spungos!",
      "background-color": "yellow",
      "border-color": "black",
      "focus-color": "lime",
      "label-color": "orange",
      "placeholder-color": "red",
      "text-color": "blue",
      "helper-color": "hotpink",
      "validation-type": "always",
    },
    leftButton: {
      label: "＜＜ Back",
      buttonProps: {
        id: "back-btn",
        variant: "contained",
        size: "small",
        "color-one": "orange",
        "color-two": "blue",
      },
    },
    centerButton: {
      label: "cancel",
      buttonProps: {
        id: "cancel-btn",
        variant: "outlined",
        size: "small",
        "color-one": "red",
        "color-two": "black",
      },
    },
    rightButton: {
      label: "Next ＞＞",
      buttonProps: {
        id: "next-btn",
        variant: "contained",
        size: "small",
        "color-one": "orange",
        "color-two": "blue",
      },
    },
  },
  render: (args) => <WavelengthForm {...args} />,
};

export const WithSubmitHandler: Story = {
  args: {
    schema: sampleSchema,
    value: { firstName: "Clark", lastName: "Kent" },
  },
  render: (args) => <WavelengthForm {...args} onSubmit={(data) => console.log("submit", data)} />,
};

export const WithButtonEvents: Story = {
  args: {
    schema: sampleSchema,
    value: { firstName: "Clark", lastName: "Kent" },
    leftButton: { label: "Back" },
    centerButton: { label: "Help" },
    rightButton: { label: "Next" },
  },
  render: (args) => <WavelengthForm {...args} onBack={() => console.log("back")} onCenter={() => console.log("center")} onRight={() => console.log("right")} />,
};

export const MultiRowLayout: Story = {
  args: {
    schema: sampleSchema,
    value: { firstName: "Clark", lastName: "Kent" },
    layout: [2, 2],
  },
  render: (args) => <WavelengthForm {...args} />,
};

export const StyledForm: Story = {
  args: {
    schema: sampleSchema,
    value: { firstName: "Clark", lastName: "Kent" },
    title: "Styled",
    titleColor: "#1976d2",
    formWidth: "500px",
  },
  render: (args) => <WavelengthForm {...args} />,
};
