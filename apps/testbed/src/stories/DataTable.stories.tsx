import { Canvas, Controls, Source, Stories } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";
import { WavelengthDataTable } from "@wavelengthusaf/components";

const data = [
  {
    id: 1,
    name: "Cy gargar",
    job: "Quality Control Specialist",
    location: "Canada",
    age: 4,
  },
  {
    id: 2,
    name: "Hart Hagerty",
    job: "Desktop Support Technician",
    location: "United States",
    age: 42,
    editable: true,
  },
  {
    id: 3,
    name: "Brice Swyre",
    job: "Tax Accountant",
    location: "China",
    age: 26,
  },
  {
    id: 4,
    name: "zy gargar",
    job: "Quality Control Specialist",
    location: "Canada",
    age: 4,
  },
  {
    id: 5,
    name: "Dart Hagerty",
    job: "Desktop Support Technician",
    location: "United States",
    age: 42,
    editable: true,
  },
  {
    id: 6,
    name: "Rice Swyre",
    job: "Tax Accountant",
    location: "China",
    age: 24,
  },
  {
    id: 7,
    name: "Ey gargar",
    job: "Quality Control Specialist",
    location: "Canada",
    age: 5,
  },
  {
    id: 8,
    name: "Kart Hagerty",
    job: "Desktop Support Technician",
    location: "United States",
    age: 47,
    editable: true,
  },
  {
    id: 9,
    name: "Qrice Swyre",
    job: "Tax Accountant",
    location: "China",
    age: 27,
  },
  {
    id: 10,
    name: "Vy gargar",
    job: "Quality Control Specialist",
    location: "Canada",
    age: 8,
  },
  {
    id: 11,
    name: "Sart Hagerty",
    job: "Desktop Support Technician",
    location: "United States",
    age: 43,
    editable: true,
  },
  {
    id: 12,
    name: "Lrice Swyre",
    job: "Tax Accountant",
    location: "China",
    age: 21,
  },
];

const columns = [
  {
    key: "name",
    title: "Name",
    width: "50px",
  },
  {
    key: "job",
    title: "Job",
    width: "300px",
  },
  {
    key: "location",
    title: "Location",
    width: "90px",
  },
  {
    key: "age",
    title: "Age",
    width: "90px",
    editable: true,
  },
];

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof WavelengthDataTable> = {
  title: "Content/WavelengthDataTable",
  component: WavelengthDataTable,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
    docs: {
      page: () => (
        <>
          <h1>WavelengthDataTable Documentation</h1>
          <p>
            The <code>WavelengthDataTable</code>is a web design component that allows you to store data in a range of cells organized in columns and rows for <code>string</code>
            and <code>number</code> inputs. You are able to load these values within the component and <code>doubleclick</code> to edit, <code>enter</code> to save, and <code>escape</code> to cancel.
            As well, click on the dropdown menu, for sorting and filtering options.
          </p>

          <h2>Usage</h2>
          <p>
            To use the <code>WavelengthDataTable</code>, simply import it and set the desired props.
          </p>

          <Source code="import { WavelengthDataTable } from '@wavelengthusaf/components';" language="tsx" />

          <h2>Code Implementation</h2>
          <p>
            A <code>data</code> array and a <code>columns</code> array based upon the <code>interface ColumnProps</code> and <code>interface DataType</code>
            are neccesary components. The data array needs an <code>id</code> index as part of every array object, and the columns array, must be implemented according to the structure of the
            ColumnProps.
          </p>

          <Source
            code="interface DataType {
  id: number;
  [key: string]: any;
};

interface ColumnProps<T> {
  key: string;
  title: string | ReactElement;
  width?: string;
  editable?: boolean;
  render?: (column: ColumnProps<T>, item: T) => ReactElement;
}"
            language="tsx"
          />

          <p>The example below is what the minimum working model neccesary for the working code implementation. You do not need to copy the interfaces above.</p>
          <Source
            code='const data = [
  {
    id: 1,
    name: "Cy gargar",
    job: "Quality Control Specialist",
    location: "Canada",
    age: 4,
  },
  {
    id: 2,
    name: "Hart Hagerty",
    job: "Desktop Support Technician",
    location: "United States",
    age: 42,
    editable: true,
  },
  {
    id: 3,
    name: "Brice Swyre",
    job: "Tax Accountant",
    location: "China",
    age: 26,
  },
  {
    id: 4,
    name: "zy gargar",
    job: "Quality Control Specialist",
    location: "Canada",
    age: 4,
  },
];

const columns = [
  {
    key: "name",
    title: "Name",
    width: "50px",
  },
  {
    key: "job",
    title: "Job",
    width: "300px",
  },
  {
    key: "location",
    title: "Location",
    width: "90px",
  },
  {
    key: "age",
    title: "Age",
    width: "90px",
    editable: true,
  },
];

<WavelengthDataTable data={data} columns={columns} itemsPerPage={9} totalPages={6} />'
            language="tsx"
          ></Source>

          <h2>Example WavelengthDataTable</h2>
          <p>Here's an example of the Wavelength DataTable:</p>
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
type Story = StoryObj<typeof WavelengthDataTable>;

export const DefaultDataTable: Story = {
  argTypes: {
    data: {
      control: "object",
      description: "Defines what items can be inputed and displayed in rows and columns of the data table.",
    },
    columns: {
      control: "object",
      description:
        "The columns associated with organizing the rows of data based on the <code>interface ColumnProps</code>. Allows you to assign the key, title, width, and if the object is editable.",
    },
    itemsPerPage: {
      control: "number",
      description: "How many data items can be displayed for pagination.",
    },
    totalPages: {
      control: "number",
      description:
        "The total number of pages you want to navigate through for the Data table. This allows a range of 1 to the final number of total pages to be displayed on the numbered pagination portion of the component.",
    },
  },
  args: {
    data: data,
    columns: columns,
    itemsPerPage: 9,
    totalPages: 6,
  },
};

export const DataTableWithNoDataObject: Story = {
  args: {
    columns: columns,
    itemsPerPage: 9,
    totalPages: 6,
  },
};
