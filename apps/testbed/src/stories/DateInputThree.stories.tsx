import { Canvas, Controls, Source, Stories } from "@storybook/blocks";
import { Meta, StoryObj } from "@storybook/react";
import DateInputThree from "../pages/dateInputTest";

const meta: Meta<typeof DateInputThree> = {
  title: "Inputs/DateInputThree",
  component: DateInputThree,
  parameters: {
    layout: "padded",
    backgrounds: {
      default: "dark",
    },
    docs: {
      page: () => (
        <>
          <h1> DateInputThree Documentation</h1>
          <p>
            The <code> DateInputThree</code> web design component is a datatable with child rows that contain a subtables of object data associated with the primary row.{" "}
            <u>
              This current implementation is a work in progress, and the buttons associated with downloading mission or adding files are awaiting further specifications. Request a ticket in the
              splashpage if you would want to customize this component to fit your projects' needs.
            </u>
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

export const DefaultInputDate: Story = {
  args: {
    labelVariant: "start",
    height: "40px",
    width: "150px",
  },
};
