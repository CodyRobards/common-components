import { Canvas, Controls, Source, Stories } from "@storybook/blocks";
import { Meta, StoryObj } from "@storybook/react";
import { DefaultPagination } from "@wavelengthusaf/components";
import { useState } from "react";

const meta: Meta<typeof DefaultPagination> = {
  title: "Content/DefaultPagination",
  component: DefaultPagination,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
    docs: {
      page: () => (
        <>
          <h1>DefaultPagination Documentation</h1>
          <p>
            The <code>DefaultPagination</code> web design component that is a UI navigation component that allows you to navigate to a specifc page number. It also features a dropdown menu feature to
            effecivelty navigate over multiple general pages.
          </p>

          <h2>Usage</h2>
          <p>
            To use the <code>DefaultPagination</code>, simply import it and set the desired props.
          </p>

          <Source code="import { DefaultPagination } from '@wavelengthusaf/components';" language="tsx" />

          <h2>Hooks</h2>
          <p>
            A <code>useState()</code> hook is required to control the page number of the pagination component.
          </p>
          <Source
            code='const [currentPage, setCurrentPage] = useState(1); 
<DefaultPagination totalPages={100} currentPageNumber={currentTestPage} onPageChange={setCurrentTestPage} style="text" />'
            language="tsx"
          ></Source>

          <h2>Example DefaultPagination</h2>
          <p>Here's an example of the Default Pagination:</p>
          <p>
            Please press the <code>...</code> to trigger the dropdown menu.
          </p>
          <Canvas />
          <h2>Props</h2>
          <Controls />
          <Stories />
        </>
      ),
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// argTypes: {
//   message: { control: "text", description: "Snackbar message." },
//   durationSb: { control: "number", description: "Snackbar duration in seconds." },
//   snackBarColor: { control: "color", description: "Snackbar background color." },
//   textColor: { control: "color", description: "Snackbar text color." },
//   horryAlign: { control: "select", options: ["center", "left", "right"], description: "Horizontal alignment." },
//   vertyAlign: { control: "select", options: ["bottom", "top"], description: "Vertical alignment." },
// },  "text" | "contained" | "outlined" | "circular"

export const DefaultPaginationWithProps: Story = {
  argTypes: {
    totalPages: {
      control: "number",
      description: "The number that represenets the total amount of pages that the pagination component can hold.",
    },
    style: {
      control: "select",
      options: ["text", "contained", "outlined", "circular", ""],
      description:
        'The styles that you can implement with the Pagination component. They are four styles including: "text", "outlined", "circular", "contained". This is also an optional parameter, you may choose to leave it blank and still use its default style.',
    },
  },
  args: {
    totalPages: 10,
    style: "text",
  },
  render: function Component(args) {
    const [currentPage, setCurrentPage] = useState(1);
    return <DefaultPagination {...args} currentPageNumber={currentPage} onPageChange={setCurrentPage} />;
  },
};

export const DefaultPaginationWithoutOptionalProps: Story = {
  args: {
    totalPages: 10,
  },
  render: function Component(args) {
    const [currentPage, setCurrentPage] = useState(1);
    return <DefaultPagination {...args} currentPageNumber={currentPage} onPageChange={setCurrentPage} />;
  },
};
