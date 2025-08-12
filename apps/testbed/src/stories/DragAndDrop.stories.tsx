import { Canvas, Controls, Source, Stories } from "@storybook/blocks";
import { Meta, StoryObj } from "@storybook/react";

import { WavelengthDragAndDrop } from "@wavelengthusaf/components";

const meta: Meta<typeof WavelengthDragAndDrop> = {
  title: "Inputs/WavelengthDragAndDrop",
  component: WavelengthDragAndDrop,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
    docs: {
      page: () => (
        <>
          <h1>WavelengthDragAndDrop Documentation</h1>
          <p>
            The <code>WavelengthDragAndDrop</code> component allows users to drag and drop files onto the interface. You can customize its appearance and configure it to handle different types of
            files.
          </p>

          <h2>Usage</h2>
          <p>
            To use the <code>WavelengthDragAndDrop</code> component, simply import it and set the desired props. It allows users to drag files, and once they are dropped, the{" "}
            <code>onFilesSelected</code> callback will be triggered with the selected files.
          </p>
          <Source code="import { WavelengthDragAndDrop } from '@Wavelengthusaf/components';" language="tsx" />
          <h2>Example WavelengthDragAndDrop</h2>
          <p>Here's an example of the WavelengthDragAndDrop component:</p>
          <Canvas />
          <h2>Props</h2>

          <Controls />
          <Stories />
          <h2>More Information / Usage</h2>
          <p>
            The <code>WavelengthDragAndDrop</code> component is useful for scenarios where users need to upload files via drag and drop. You can easily customize the appearance and behavior using the
            props outlined above. If you need more specific file handling, consider integrating validation for MIME types or file extensions based on your needs.
          </p>
        </>
      ),
    },
  },
  tags: ["autodocs"],
  argTypes: {
    width: { description: "Specifies the width of the drag-and-drop area. (optional)", control: "text" },
    height: { description: "Specifies the height of the drag-and-drop area. (optional)", control: "text" },
    border: { description: "Specifies the border style (e.g., '2px solid #ccc'). (optional)", control: "text" },
    onFilesSelected: { description: "A function that gets triggered when files are selected or dropped. It returns an array of <code>File</code> objects. (required)", action: "files selected" },
    textColor: { description: "The color of the text displayed within the drag-and-drop area. (optional)", control: "color" },
    fontSize: { description: "The font size for the text within the drag-and-drop area. (optional)", control: "text" },
    allowedFileMIME: { description: "An array of MIME types to filter allowed files (e.g., ['image/png', 'application/pdf']). (optional)", control: "multi-select" },
    allowedFileExtensions: { description: "A string specifying allowed file extensions (e.g., '.jpg,.png'). (optional)", control: "text" },
    backgroundColor: { description: " Specifies the background color of the drag-and-drop area. (optional)", control: "color" },
  },
  args: {
    width: "300px",
    height: "150px",
    border: "2px dashed #ccc",
    onFilesSelected: (files) => console.log(files), // Placeholder for file selection handler
    textColor: "#333",
    fontSize: "16px",
    allowedFileMIME: ["image/png", "image/jpeg"],
    allowedFileExtensions: ".png,.jpg",
    backgroundColor: "#f0f0f0",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: "300px",
    height: "150px",
    border: "",
    onFilesSelected: (files) => console.log(files),
    textColor: "#333",
    fontSize: "16px",
    allowedFileMIME: ["image/png", "image/jpeg"],
    allowedFileExtensions: ".png,.jpg",
    backgroundColor: "",
  },
};

export const EwdmsDragAndDropExample: Story = {
  argTypes: {
    onFilesSelected: { action: "files selected" },
  },
  args: {
    width: "545px",
    height: "225px",
    border: "1px dashed rgba(0, 0, 0, 1)",
    onFilesSelected: (files) => console.log(files),
    textColor: "black",
    fontSize: "12px",
    allowedFileMIME: ["image/png", "image/jpeg", "application/pdf"],
    allowedFileExtensions: ".png,.jpg,.pdf",
    backgroundColor: "transparent",
  },
};
