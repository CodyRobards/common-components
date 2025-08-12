import { Meta, StoryObj } from "@storybook/react";
import { WavelengthButton, WavelengthStandardSnackbar as WLSSB } from "@wavelengthusaf/components";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { Controls, Source } from "@storybook/blocks";
import { Canvas } from "@storybook/blocks";
import { useState } from "react";

const WavelengthStandardSnackbar = (args) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <WavelengthButton variant="contained" onClick={() => setShow(true)}>
        Show Snackbar
      </WavelengthButton>

      <WLSSB
        {...args}
        show={show}
        toggleShow={setShow}
        closeIcon={
          <IconButton size="small" color="inherit">
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </div>
  );
};

const hookExample = `<WavelengthButton variant={'outlined'} colorOne="#8FD8FC" onClick={() => {
        setSnackbar1(true);
      }}
     >
      Show Snackbar
    </WavelengthButton>

    <WavelengthStandardSnackbar
      show={snackbar1}
      toggleShow={setSnackbar1}
      closeIcon={
        <IconButton size="small" aria-label="close" color="inherit">
          <CloseIcon fontSize="small" />
        </IconButton>
      }
      />`;

const meta: Meta<typeof WavelengthStandardSnackbar> = {
  title: "Popups/WavelengthStandardSnackbar",
  component: WavelengthStandardSnackbar,

  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
    docs: {
      page: () => (
        <>
          <h1>WavelengthStandardSnackbar</h1>
          <p>
            The <code>WavelengthStandardSnackbar</code> acts as a banner to show important information to users.
          </p>

          <h2>Usage</h2>
          <p>
            To use the <code>WavelengthStandardSnackbar</code>, import it and set the required props.
          </p>
          <Source code="import { WavelengthStandardSnackbar } from '@wavelengthusaf/components';" language="tsx" />

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
    message: { control: "text", description: "Snackbar message." },
    durationSb: { control: "number", description: "Snackbar duration in seconds." },
    type: { control: "select", options: ["success", "error", "disabled"], description: "Snackbar background color." },
    width: { control: "number", description: "Changes the width of the snack bar." },
    horryAlign: { control: "select", options: ["left", "right", "center"], description: "Horizontal alignment." },
    vertyAlign: { control: "select", options: ["top", "bottom"], description: "Vertical alignment." },
  },
} satisfies Meta<typeof WavelengthStandardSnackbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Properties: Story = {
  args: {
    type: "success",
    message: "This is a snackbar!",
    durationSb: 4,
    snackBarColor: "#1976d2",
    textColor: "#ffffff",
    horryAlign: "center",
    vertyAlign: "bottom",
  },
};
