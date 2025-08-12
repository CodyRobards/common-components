import { Canvas, Controls, Source } from "@storybook/blocks";
import { Meta, StoryObj } from "@storybook/react";
import { WavelengthConfirmationModal, WavelengthStyledButton } from "@wavelengthusaf/components";
import { useState } from "react";

interface WavelengthConfirmationModalProps {
  show: boolean;
  setShow: (show: boolean) => void;
  textObj: Record<string, string>;

  id?: string;
  width?: string;
  height?: string;
  fontFamily?: string;
  textColor?: string;
  cacelButton?: React.ReactNode;
  submitButton?: React.ReactNode;

  backgroundColor?: string;
}
const meta: Meta<typeof WavelengthConfirmationModal> = {
  title: "PopUps/WavelengthConfirmationModal",
  component: WavelengthConfirmationModal,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
    docs: {
      page: () => (
        <>
          <h1>WavelengthConfirmationModal Documentation</h1>
          <p>
            The <code>WavelengthConfirmationModal</code> is a customizable Modal.
          </p>

          <h2>Usage</h2>
          <p>
            To use the <code>WavelengthConfirmationModal</code>, simply import it and set the desired props.
          </p>

          <Source code="import { WavelengthConfirmationModal } from '@wavelengthusaf/components';" language="tsx" />

          <h2>Example WavelengthConfirmationModal</h2>
          <p>Here's an example of the Confirmation Modal:</p>
          <Canvas />
          <h2>Props</h2>
          <Source
            code=" const [confirmationModal, setConfirmationModal] = useState<boolean>(false);
  function closeModal(): void {
    setConfirmationModal(false);
  }"
          />
          <Controls />
        </>
      ),
    },
  },
  tags: ["autodocs"],
  argTypes: {
    show: {
      control: "boolean",
    },
  },
};

const ConfirmationModalEWDMS: React.FC<WavelengthConfirmationModalProps> = (args) => {
  const [confirmationModal, setConfirmationModal] = useState<boolean>(false);
  function closeModal(): void {
    setConfirmationModal(false);
  }
  return (
    <>
      <WavelengthStyledButton type="ewdms_primary" onClick={() => setConfirmationModal(true)}>
        Open Modal
      </WavelengthStyledButton>
      <WavelengthConfirmationModal
        {...args}
        show={confirmationModal}
        setShow={setConfirmationModal}
        cancelButton={
          <WavelengthStyledButton type="ewdms_secondary" styles={{ width: "105px" }} onClick={closeModal}>
            Cancel
          </WavelengthStyledButton>
        }
      />
    </>
  );
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ConfirmationModal: Story = {
  argTypes: {
    show: {
      description: "Boolean flag to determine if the modal is visible or hidden.",
      control: { type: "boolean" },
    },
    setShow: {
      description: "Function to control the visibility of the modal. Takes a boolean value (`true` to show, `false` to hide).",
    },
    textObj: {
      description: "An object where the keys are the text identifiers, and the values are the actual text to display in the modal.",
      control: { type: "object" },
    },
    id: {
      description: "Optional unique identifier for the modal, useful for targeting with CSS or JavaScript.",
      control: { type: "text" },
    },
    width: {
      description: 'Optional width of the modal, defined as a string (e.g., "500px", "80%").',
      control: { type: "text" },
    },
    height: {
      description: 'Optional height of the modal, defined as a string (e.g., "400px", "60%").',
      control: { type: "text" },
    },
    fontFamily: {
      description: "Optional font family for the text in the modal. Can be any valid CSS font family value.",
      control: { type: "text" },
    },
    textColor: {
      description: 'Optional text color for the modal content. Can be any valid CSS color (e.g., "black", "#333", "rgba(255, 0, 0)").',
      control: { type: "color" },
    },
    cancelButton: {
      description: "Optional custom React node for the cancel button. Can be a custom button or element.",
    },
    submitButton: {
      description: "Optional custom React node for the submit button. Can be a custom button or element.",
    },
    backgroundColor: {
      description: 'Optional background color for the modal. Can be any valid CSS color (e.g., "white", "#f0f0f0", "rgba(0, 0, 0, 0.7)").',
      control: { type: "color" },
    },
  },
  args: {
    width: "450px",
    height: "256px",
    backgroundColor: "rgb(230, 232, 236)",
    textObj: { purpose: "Continue", title: "Confirm Submission", dialog: "Let us help apps determine location. This means sending anonymous location data to us, even when no apps are running." },
    submitButton: (
      <WavelengthStyledButton type="ewdms_primary" styles={{ width: "109px", backgroundColor: "rgba(26, 128, 131, 0.1)" }}>
        Submit
      </WavelengthStyledButton>
    ),
  },
  render: (args) => <ConfirmationModalEWDMS {...args} />,
};
