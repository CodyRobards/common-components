import { Meta, StoryObj } from "@storybook/react";
import { WavelengthButton, WavelengthSnackbar as WLSB } from "@wavelengthusaf/components";
import { Controls, Source } from "@storybook/blocks";
import { Canvas } from "@storybook/blocks";
import { useState } from "react";

const WavelengthSnackbar = (args) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <WavelengthButton variant="contained" onClick={() => setShow(true)}>
        Show Snackbar
      </WavelengthButton>

      <WLSB {...args} show={show} setShow={setShow} />
    </div>
  );
};

const hookExample = `<WavelengthButton variant={'outlined'} colorOne="#8FD8FC" onClick={() => {
        setSnackbar1(true);
      }}
     >
      Show Snackbar
    </WavelengthButton>

    <WavelengthSnackbar
      show={snackbar1}
      setShow={setSnackbar1}
      closeIcon={
        <IconButton size="small" aria-label="close" color="inherit">
          <CloseIcon fontSize="small" />
        </IconButton>
      }
      />`;

const meta: Meta<typeof WavelengthSnackbar> = {
  title: "Popups/WavelengthSnackbar",
  component: WavelengthSnackbar,

  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
    docs: {
      page: () => (
        <>
          <h1>WavelengthSnackbar</h1>
          <p>
            The <code>WavelengthSnackbar</code> acts as a banner to show important information to users.
          </p>

          <h2>Usage</h2>
          <p>
            To use the <code>WavelengthSnackbar</code>, import it and set the required props.
          </p>
          <Source code="import { WavelengthSnackbar } from '@wavelengthusaf/components';" language="tsx" />

          <h2>Hooks</h2>
          <p>
            A <code>useState()</code> hook is required to control the visibility of the Snackbar. Below is a sample hook and an example of it's use:
          </p>
          <Source code="const [snackbar1, setSnackbar1] = useState<boolean>(false);" language="tsx"></Source>
          <Source format={true} code={hookExample} language="tsx"></Source>

          <Canvas />

          <h2>Props</h2>
          <p>These props allow customization of the snackbar:</p>
          <Controls />

          <h2>More Information</h2>
          <p>
            For feature requests or modifications, submit a{" "}
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
    message: { description: "Snackbar message. Can be a react or jsx element." },
    durationSb: { control: "number", description: "Snackbar duration in seconds." },
    snackBarColor: { control: "color", description: "Snackbar background color." },
    textColor: { control: "color", description: "Snackbar text color." },
    horryAlign: { control: "select", options: ["center", "left", "right"], description: "Horizontal alignment." },
    vertyAlign: { control: "select", options: ["bottom", "top"], description: "Vertical alignment." },
  },
} satisfies Meta<typeof WavelengthSnackbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Properties: Story = {
  args: {
    message: "This is a snackbar!",
    durationSb: 4,
    snackBarColor: "#1976d2",
    textColor: "#ffffff",
    horryAlign: "center",
    vertyAlign: "bottom",
  },
};
