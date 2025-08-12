import type { Meta, StoryObj } from "@storybook/react";
import { WavelengthDropdown } from "@wavelengthusaf/components";
import { fn } from "@storybook/test";
import { Canvas, Controls, Source, Stories } from "@storybook/addon-docs"; // Import the Source component

// Your Meta configuration for the story
const meta = {
  title: "PopUps/WavelengthDropDown",
  component: WavelengthDropdown,

  parameters: {
    docs: {
      Description: {},
      page: () => (
        <>
          <h1>WavelengthDropdown Documentation</h1>
          <p>To use the `WavelengthDropdown` component, import it like this:</p>

          {/* This will display the import statement inside a copyable box */}
          <Source code={`import { WavelengthDropdown } from "@wavelengthusaf/components";`} language="tsx" />

          <h2>Usage Example</h2>
          <p>Here’s how you can use the `WavelengthDropdown` component in your project:</p>
          <Canvas />
          <h2>Props</h2>
          <Controls />
          <Stories />
        </>
      ),
    },
    layout: "centered", // Optional: Centers the component in the Canvas
  },
  tags: ["autodocs"], // Tags for autodocs generation

  argTypes: {
    palette: { table: { defaultValue: { summary: "brewery" } } },
    width: { table: { defaultValue: { summary: "200px" } } },
    menuSx: {
      control: {
        type: "object",
        backgroundColor: {
          control: {
            type: "select",
          },
        },
      },
    },
  },
  args: {
    palette: "brewery",
    width: "200px",
    menuSx: { backgroundColor: "#FCFAF8", borderColor: "#d16a2f", boxShadow: "", hoverColor: "rgba(209, 106, 47, 0.1)" },
    options: [{ option: "Not Specified", onClick: fn(() => console.log("The")) }],
  },
} satisfies Meta<typeof WavelengthDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

// Brewery Dropdown Example (This is where the component will be rendered)
/**Here is the styling for the default brewery dropdown */
export const Brewery: Story = {
  argTypes: {
    palette: {
      options: ["brewery", "custom"],
      control: { type: "inline-radio" },
    },
  },
  args: {
    id: "Wavelength-Dropdown",
    palette: "brewery",
    width: "200px",
    options: [
      { option: "TFR", onClick: fn(() => console.log("TFR")) },
      { option: "EWAR", onClick: fn(() => console.log("EWAR")) },
      { option: "HSR", onClick: fn(() => console.log("HSR")) },
    ],

    buttonText: "Create Report",
  },
};

// Custom Dropdown Example
export const Custom: Story = {
  args: {
    id: "wavelength-dropdown-custom",
    palette: "custom",
    width: "200px",

    buttonSx: { border: "1px solid blue", width: "200px" },
    options: [{ option: "Option 1" }, { option: "Option 2" }, { option: "Option 3" }],
    menuSx: { borderColor: "blue" },
    buttonText: "Custom Dropdown That's on two lines",
  },
};
