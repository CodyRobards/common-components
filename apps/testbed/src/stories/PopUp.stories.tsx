import { Canvas, Controls, Source, Stories } from "@storybook/blocks";
import { Meta, StoryObj } from "@storybook/react";
import { WavelengthPopUpMenu } from "@wavelengthusaf/components";
import InfoIcon from "@mui/icons-material/Info";

const testItems = [
  { label: "Random Company Wellness", link: "/PopUpMenu", itemType: "link" },
  { label: "Primary Care", link: "/PopUpMenu", itemType: "link" },
  { label: "Nutrition Services", link: "/PopUpMenu", itemType: "link" },
  { label: "Inspired Meal Planning", link: "/PopUpMenu", itemType: "link", end: true },
  { label: "Business Services", link: "/PopUpMenu", itemType: "link" },
];

const meta: Meta<typeof WavelengthPopUpMenu> = {
  title: "PopUps/PopUp Menu",
  component: WavelengthPopUpMenu,
  tags: ["autodocs"],

  parameters: {
    docs: {
      page: () => (
        <>
          <h1>WavelengthPopUp Menu Documentation</h1>
          <p>
            To use the <code>Wavelength PopUp</code> component, import it like this:
          </p>
          {/* This will display the import statement inside a copyable box */}
          <Source code={`import { WavelengthPopUpMenu } from "@wavelengthusaf/components";`} language="tsx" />
          <h2>Usage Example</h2>
          <p>
            Here’s how you can use the <code>WavelengthPopUpMenu</code> component in your project:
          </p>

          <Canvas />
          <h2>Props</h2>
          <Controls />
          <Stories />
        </>
      ),
    },
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof WavelengthPopUpMenu>;
/**This is a sample help menu  */
/**The sample code and configuration can be found in the code block below */
export const HelpMenu: Story = {
  argTypes: {
    menuItems: {
      description: "Array of menu items to be displayed in the pop-up menu. Defined as `menuItemProps[]`.",
      control: { type: "object" },
    },
    customIcon: {
      description: "Optional custom icon to display next to the menu. Can be any valid React node (e.g., a React component or element).",
    },
    width: {
      description: 'Optional width of the menu. It can be a string like "200px", "50%", etc.',
      control: { type: "text" },
    },
    menuDirection: {
      description: 'Optional direction of the menu relative to its trigger. Can be "top" or "bottom".',
      control: { type: "inline-radio", options: ["top", "bottom"] },
    },
    color: {
      description: 'Optional color of the menu. Can be any valid CSS color string (e.g., "red", "#333", "rgba(255, 0, 0, 0.5)").',
      control: { type: "color" },
    },
    border: {
      description: 'Optional border style for the menu, defined as a string (e.g., "1px solid #ccc").',
      control: { type: "text" },
    },
    id: {
      description: "Optional unique identifier for the menu, which could be used to target the element with CSS or JavaScript.",
      control: { type: "text" },
    },
  },
  args: {
    color: "black",
    menuItems: [
      { itemType: "header", label: "Help & Support", link: "/", end: true },
      { itemType: "footer", label: "Contact Us:" },
      { itemType: "footer", email: "awesomehelp563EWS@orgbox.mil", label: "awesomehelp563EWS@orgbox.mil", hoverColor: "blue" },
    ],
  },
};
/**Menu with regular links */
export const Menu: Story = {
  args: {
    color: "black",
    menuItems: testItems,
  },
};
/**The wavelength pop up menu is very customizable, You can choose the direction (Up or down), Icon Color (If you choose a custom Icon, you must manually change the color)  */
export const CustomizingMenu: Story = {
  args: {
    customIcon: <InfoIcon sx={{ color: "red" }} />,
    border: "1px solid red",

    menuItems: testItems,
  },
};
