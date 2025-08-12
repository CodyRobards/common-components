import { Canvas, Controls, Source } from "@storybook/blocks";
import { Meta, StoryObj } from "@storybook/react";
import { WavelengthFileDownloader } from "@wavelengthusaf/components";

const meta: Meta<typeof WavelengthFileDownloader> = {
  title: "Inputs/WavelengthFileDownloader",
  component: WavelengthFileDownloader,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },

    docs: {
      page: () => (
        <>
          <h1>Wavelength File Downloader Documentation</h1>
          <p>
            The <code>WavelengthFileDownloader</code> component allows users to download files localy or use an API. (The API functionality has not been implemented yet)
          </p>
          <h2>Usage</h2>
          <p>
            To use the <code>WavelengthFileDownloader</code> component, simply import it and set the desired props.
          </p>
          <Source code='import { WavelengthFileDownloader } from "@wavelengthusaf/components";' />

          <h2>Example WavelengthFileDownloader</h2>
          <Canvas />
          <h2>Props</h2>
          <Controls />
          <h2>More Information / Usage</h2>
          <p>
            The <code>WavelengthFileDownloader</code> component is useful for users who want to download files using an api, or have a file downloaded from the projects local repository
          </p>
        </>
      ),
    },
  },
  tags: ["autodocs"],
  argTypes: {
    fileURL: { description: "The location of the file being downloaded" },
    fileLoc: { options: ["local"], control: "select", description: "Local if the file is in the local repository, otherwise api if using an api to retrieve file" },
    fileName: { description: "Name you want the downloaded file to be" },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const FileDownloader: Story = {
  args: {
    fileURL: "../../public/files/RandomFile.txt",
    fileName: "Random.txt",
    fileLoc: "local",
  },
};
