import { Canvas, Controls, Source, Stories } from "@storybook/blocks";
import { Meta, StoryObj } from "@storybook/react";
import { WavelengthButton, WavelengthInput } from "@wavelengthusaf/components";
import { useRef } from "react";

const meta: Meta<typeof WavelengthInput> = {
  title: "Inputs/WavelengthInput",
  component: WavelengthInput,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>WavelengthInput Documentation</h1>
          <p>
            The <code>WavelengthInput</code> is a stylized web component text field that can be used for various user inputs. You can customize its look and behavior using props listed below.
          </p>

          <h2>Usage</h2>
          <p>
            To use the <code>WavelengthInput</code>, simply import and render it:
          </p>
          <Source code={`import { WavelengthInput } from '@wavelengthusaf/components';`} language="tsx" />
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
    value: { control: "text", description: "The current value of the input field." },
    clearable: { control: "boolean", description: "Enables a button on the right-side of the input field that will clear the input field." },
    placeholder: { control: "text", description: "Placeholder text shown when input is empty." },
    inputType: {
      control: { type: "select" },
      options: ["text", "email", "password", "number", "date"],
      description: "Type of the input field.",
    },
    label: { control: "text", description: "Floating label displayed above the input field." },
    helperMessage: { control: "text", description: "Helper text shown when not in error state." },
    errorMessage: { control: "text", description: "Default error message when validation fails." },
    minLengthMessage: { control: "text", description: "Default error message when the user inputs less characters than the minLength." },
    maxLengthMessage: { control: "text", description: "Default error message when the user surpasses the maxLength." },
    regex: { control: "text", description: "Regex pattern input must match." },
    validationType: {
      control: { type: "select" },
      options: ["none", "always", "onBlur", "manual"],
      description: "Controls when validation occurs.",
    },
    minLength: { control: "number", description: "Set a default minimum length for the input field." },
    maxLength: { control: "number", description: "Set a hard-cap on the number of characters the user can input." },
    required: { control: "boolean", description: "Marks the field as required." },
    forceError: { control: "boolean", description: "Forces the error state visually regardless of input." },
    width: { control: "text", description: "CSS width of the input element." },
    height: { control: "text", description: "CSS height of the input element." },
    padding: { control: "text", description: "CSS padding inside the input field." },
    borderRadius: { control: "text", description: "CSS border radius of the input element." },
    backgroundColor: { control: "color", description: "Background color of the input." },
    labelColor: { control: "color", description: "Color of the floating label." },
    placeholderColor: { control: "color", description: "Color of the placeholder text." },
    helperColor: { control: "color", description: "Color of the helperMessage text." },
    textColor: { control: "color", description: "Color of the typed input text." },
    borderColor: { control: "color", description: "Border color in normal state." },
    focusColor: { control: "color", description: "Border color when focused." },
    disabled: { control: "boolean", description: "Disables the input field if true." },
    onChange: { action: "inputChange", description: "Fired when the input value changes." },
    id: { control: "text", description: "The unique ID for the internal input element. Useful for label associations and DOM targeting." },
    name: { control: "text", description: `The input's name used during form submission to identify its value in the payload.` },
  },
} satisfies Meta<typeof WavelengthInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Input",
    clearable: true,
    placeholder: "Enter some text...",
    regex: "^[a-zA-Z_ ]*$",
    helperMessage: "Enter text here (letters and spaces only)",
    errorMessage: "Please enter letters and spaces only.",
    minLengthMessage: "",
    maxLengthMessage: "",
    width: "300px",
    height: "53px",
    borderRadius: "8px",
    inputType: "text",
    value: "",
    validationType: "always",
    minLength: undefined,
    maxLength: undefined,
    required: false,
    forceError: false,
    padding: "16.5px 14px",
    backgroundColor: "#ffffff",
    labelColor: "#666666",
    placeholderColor: "#999999",
    textColor: "#000000",
    helperColor: "#000000",
    borderColor: "#cccccc",
    focusColor: "#5e9ed6",
    disabled: false,
    id: "Input",
    name: "Input",
  },
};

export const RequiredField: Story = {
  args: {
    clearable: true,
    label: "Required Field",
    placeholder: "This field is required",
    required: true,
    validationType: "onBlur",
    errorMessage: "This field cannot be empty.",
    width: "300px",
  },
};

export const MinLengthError: Story = {
  args: {
    clearable: true,
    label: "Min Length",
    placeholder: "Enter at least 5 characters",
    minLength: 5,
    validationType: "always",
    errorMessage: "",
    width: "300px",
  },
};

export const MaxLengthError: Story = {
  args: {
    clearable: true,
    label: "Max Length",
    placeholder: "Enter no more than 10 characters",
    value: "Hello World!",
    maxLength: 10,
    validationType: "always",
    helperMessage: "NOTE: This error will only throw if the value prop is pre-defined to have more than the max character count",
    errorMessage: "",
    width: "300px",
  },
};

export const ForceErrorState: Story = {
  args: {
    clearable: true,
    label: "Force Error",
    placeholder: "Manually force error state",
    forceError: true,
    errorMessage: "This is a manually triggered error.",
    width: "300px",
  },
};

export const CustomStylings: Story = {
  args: {
    clearable: true,
    label: "Spungos!",
    placeholder: "Style me!",
    helperMessage: "Let's go team!",
    helperColor: "violet",
    width: "300px",
    inputType: "text",
    borderRadius: "0px",
    backgroundColor: "yellow",
    labelColor: "orange",
    placeholderColor: "red",
    textColor: "blue",
    borderColor: "black",
    focusColor: "lime",
  },
};

const ManualValidationExample: React.FC = () => {
  const inputRef = useRef<HTMLElement & { validate?: () => boolean }>(null);
  const handleClick = () => inputRef.current?.validate?.();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "300px" }}>
      <WavelengthInput
        ref={inputRef}
        clearable={true}
        label="Manual Check"
        placeholder="Enter some text..."
        regex="^[a-zA-Z_ ]*$"
        helperMessage="Enter text here (letters and spaces only)"
        errorMessage="Only letters and spaces allowed"
        value=""
        inputType="text"
        validationType="manual"
        width="300px"
      />
      <WavelengthButton onClick={handleClick}>Validate</WavelengthButton>
    </div>
  );
};

export const ManualValidation: Story = {
  render: () => <ManualValidationExample />,
};

export const RegexValidation: Story = {
  args: {
    clearable: true,
    label: "Letters & Spaces Only",
    placeholder: "Enter some text...",
    inputType: "text",
    regex: "^[a-zA-Z_ ]*$",
    errorMessage: "Please enter letters and spaces only.",
    validationType: "always",
    width: "300px",
  },
};
