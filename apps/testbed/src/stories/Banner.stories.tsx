import { Meta, StoryObj } from "@storybook/react";
import { WavelengthBanner } from "@wavelengthusaf/components";
import { Controls, Source } from "@storybook/blocks";
import { Canvas } from "@storybook/blocks";

const meta: Meta<typeof WavelengthBanner> = {
  title: "Statics/WavelengthBanner", // The title under which the component will appear in the Storybook sidebar
  component: WavelengthBanner, // The component to display in the story

  // Optional parameters to modify the layout and other behaviors of the story
  parameters: {
    layout: "center", // Centers the component in the canvas for display
    backgrounds: {
      default: "light", // You can set a dark background for the canvas if you prefer
    },
    docs: {
      page: () => (
        <>
          <h1>WavelengthBanner</h1>
          <p>
            The <code>WavelengthBanner</code> acts as a banner to show the classification level to the user. Can also be customized to suit the user's needs.
          </p>
          <h2>Usage</h2>
          <p>
            To use the <code>WavelengthBanner</code>, simply import it and set the desired props.
          </p>
          <Source code="import { WavelengthBanner } from '@wavelengthusaf/components';" language="tsx" />
          <Canvas layout="padded" />
          <h2>Props</h2>
          <p>Here are the available props you can pass to customize the banner:</p>
          <Controls />
          <h2>More Information/Usage </h2>
          <br></br>
          <h3>Clearance Level Documentation</h3>
          <table>
            <tr>
              <th>Classification</th>
              <th style={{ whiteSpace: "nowrap" }}>Banner Color</th>
              <th>Description</th>
            </tr>
            <tr>
              <td style={{ textAlign: "center", fontWeight: "bold" }}>UNCLASSIFIED</td>
              <td style={{ backgroundColor: "#007a33", color: "#ffffff", fontWeight: "bold", textAlign: "center" }}>#007a33</td>
              <td>Use for information that is neither sensitive nor classified and poses no harm if released publicly.</td>
            </tr>
            <tr>
              <td style={{ textAlign: "center", fontWeight: "bold" }}>CUI</td>
              <td style={{ backgroundColor: "#502b85", color: "#ffffff", fontWeight: "bold", textAlign: "center" }}>#502b85</td>
              <td>Use for sensitive information that requires safeguarding or dissemination controls, but is not classified national security information.</td>
            </tr>
            <tr>
              <td style={{ textAlign: "center", fontWeight: "bold" }}>CONFIDENTIAL</td>
              <td style={{ backgroundColor: "#0033a0", color: "#ffffff", fontWeight: "bold", textAlign: "center" }}>#0033a0</td>
              <td>Use for information whose unauthorized disclosure could reasonably be expected to cause damage to national security.</td>
            </tr>
            <tr>
              <td style={{ textAlign: "center", fontWeight: "bold" }}>SECRET</td>
              <td style={{ backgroundColor: "#c8102e", color: "#ffffff", fontWeight: "bold", textAlign: "center" }}>#c8102e</td>
              <td>
                Use for information whose unauthorized disclosure could reasonably be expected to cause <b>SERIOUS</b> damage to national security.
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "center", fontWeight: "bold" }}>TOP SECRET</td>
              <td style={{ backgroundColor: "#ff8c00", color: "#000000", fontWeight: "bold", textAlign: "center" }}>#ff8c00</td>
              <td>
                Use for information whose unauthorized disclosure could reasonably be expected to cause <b>EXCEPTIONALLY GRAVE</b> damage to national security.{" "}
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "center", fontWeight: "bold", whiteSpace: "nowrap" }}>TOP SECRET//SCI</td>
              <td style={{ backgroundColor: "#fce83a", color: "#000000", fontWeight: "bold", textAlign: "center" }}>#fce83a</td>
              <td>
                Use for Top Secret information concerning or derived from intelligence sources, methods, or analytical processes, which is required to be handled within formal access control systems
                established by the Director of National Intelligence.{" "}
              </td>
            </tr>
          </table>{" "}
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

  // Automatically generated tags for documentation
  tags: ["autodocs"],

  // Default args (props) for the component

  // Custom argTypes to control specific props via controls in Storybook UI
  argTypes: {
    classification: {
      control: "select",
      options: ["", "unclassified", "u", "controlled", "controlled unclassified information", "c", "cui", "u", "confidential", "secret", "s", "top secret", "ts"],
      description: "Changes the classification of the banner. Setting the classification to any of the given banner classifications will format the banner's text & background color automatically.",
    },
    control: {
      control: "select",
      options: ["", "cui", "sci", "fouo", "fvey", "nf", "propin", "frd", "gbr s", "si", "si-g", "tk", "relido", "rd", "rd-n", "rel", "hcs"],
      description: "Changes the control of the banner. Multiple controls can be added. Some control options will update the appearance of the banner to match the appropriate classification level.",
    },
    bannerText: {
      control: "text",
      description: "Sets the text of the banner.",
    },
    bannerColor: {
      control: "color",
      description: "Changes the control of the banner.",
    },
    textColor: { control: "color", description: "Changes the color of the text." },
    opacity: { control: { type: "number", min: 0, max: 1, step: 0.1 }, description: "Sets the opacity of the banner. (0-1)" },
    zIndex: { control: "number", description: "Changes the zIndex of the banner." },
    id: { control: "text", description: "Sets the id of the banner." },
  },
} satisfies Meta<typeof WavelengthBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    classification: "",
    control: [""],
    bannerText: "",
    bannerColor: "",
    textColor: "",
    opacity: 1,
    zIndex: 10,
    id: "classification-default",
  },
};

export const Unclassified: Story = {
  args: {
    classification: "unclassified",
    opacity: 1,
    zIndex: 10,
    id: "classification-unclassified",
  },
};

export const UnclassifiedWithControl: Story = {
  args: {
    classification: "unclassified",
    control: "cui",
    opacity: 1,
    zIndex: 10,
    id: "classification-unclassified-with-control",
  },
};

export const CUI: Story = {
  args: {
    classification: "cui",
    opacity: 1,
    zIndex: 10,
    id: "classification-cui",
  },
};

export const Confidential: Story = {
  args: {
    classification: "confidential",
    opacity: 1,
    zIndex: 10,
    id: "classification-confidential",
  },
};

export const Secret: Story = {
  args: {
    classification: "secret",
    opacity: 1,
    zIndex: 10,
    id: "classification-secret",
  },
};

export const TopSecret: Story = {
  args: {
    classification: "top secret",
    opacity: 1,
    zIndex: 10,
    id: "classification-top-secret",
  },
};

export const TopSecretWithSCI: Story = {
  args: {
    classification: "top secret",
    control: "sci",
    opacity: 1,
    zIndex: 10,
    id: "classification-top-secret-sci",
  },
};

export const CustomBanner: Story = {
  args: {
    bannerText: "Let's Go Spungos!!!",
    bannerColor: "hotpink",
    textColor: "yellow",
    opacity: 1,
    zIndex: 10,
    id: "classification-top-secret-sci",
  },
};
