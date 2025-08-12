import { ChildDataTable } from "@wavelengthusaf/components";
import { Canvas, Controls, Source, Stories } from "@storybook/blocks";
import { Meta, StoryObj } from "@storybook/react";

const downClick = () => {
  const value = "dd";
  alert(value);
};

const data = [
  {
    id: 1,
    Platform: "U-2",
    MissionId: "Mission ID",
    MissionDate: "01/01/1011",
    MissionClassification: "CUI",
    AOR: "ABC, ABC, ABC, ABC, ABC, ABC",
    Creator: "Creator: SGT Murphy",
    ModifiedDate: "Modified: 01/02/1011",
    Details: {
      relationId: 1,
      fileObjects: [
        {
          id: 1,
          FileName: "ABC123",
          UploadTime: "0123",
          UploadDate: "01/01/2023",
          FileSize: "64MB",
          FileType: "File",
          Uploader: "Uploader",
          TailNumber: "093",
          FileClassification: "Class",
          DownloadCount: "2",
        },
        {
          id: 2,
          FileName: "SBC123",
          UploadTime: "2123",
          UploadDate: "21/01/2023",
          FileSize: "34MB",
          FileType: "Eile",
          Uploader: "Sploader",
          TailNumber: "893",
          FileClassification: "Elass",
          DownloadCount: "5",
        },
        {
          id: 3,
          FileName: "QBC123",
          UploadTime: "1123",
          UploadDate: "51/01/2023",
          FileSize: "64MB",
          FileType: "Gile",
          Uploader: "Vploader",
          TailNumber: "093",
          FileClassification: "Zlass",
          DownloadCount: "9",
        },
      ],
    },
  },
  {
    id: 2,
    Platform: "U-3",
    MissionId: "Mission I2",
    MissionDate: "02/01/1011",
    MissionClassification: "Secret",
    AOR: "AOR, AOR, AOR, AOR, AOR, AOR",
    Creator: "Creator: SGT Surphy",
    ModifiedDate: "Modified: 03/02/1011",
    Details: {
      relationId: 2,
      fileObjects: [
        {
          id: 1,
          FileName: "BBC123",
          UploadTime: "0153",
          UploadDate: "02/02/2023",
          FileSize: "32MB",
          FileType: "Tile",
          Uploader: "Zploader",
          TailNumber: "083",
          FileClassification: "Dlass",
          DownloadCount: "4",
        },
      ],
    },
  },
  {
    id: 3,
    Platform: "U-$",
    MissionId: "Mission I3",
    MissionDate: "05/01/1011",
    MissionClassification: "Top Secret",
    AOR: "AOR, AOR, AOR, AOR, AOR, AOR",
    Creator: "Creator: VGT Surphy",
    ModifiedDate: "Modified: 04/02/1011",
    Details: {
      relationId: 3,
      fileObjects: [
        {
          id: 1,
          FileName: "CBC123",
          UploadTime: "0423",
          UploadDate: "03/03/2023",
          FileSize: "54MB",
          FileType: "Sile",
          Uploader: "Pploader",
          TailNumber: "023",
          FileClassification: "Slass",
          DownloadCount: "5",
        },
        {
          id: 2,
          FileName: "ZBC123",
          UploadTime: "0423",
          UploadDate: "07/03/2023",
          FileSize: "54MB",
          FileType: "Sile",
          Uploader: "Pploader",
          TailNumber: "023",
          FileClassification: "Slass",
          DownloadCount: "5",
        },
      ],
    },
  },
];

const columns = [
  {
    key: "Platform",
    title: "Platform",
    subDataTableColumn: false,
    PrimaryBoldText: true,
  },
  {
    key: "MissionId",
    title: "Mission Id",
    subDataTableColumn: false,
  },
  {
    key: "MissionDate",
    title: "Date",
    subDataTableColumn: false,
  },
  {
    key: "MissionClassification",
    title: "Classification",
    subDataTableColumn: false,
  },
  {
    key: "AOR",
    title: "AOR",
    subDataTableColumn: false,
  },
  {
    key: "Creator",
    title: "Creator",
    subDataTableColumn: false,
  },
  {
    key: "ModifiedDate",
    title: "Modified",
    subDataTableColumn: false,
  },
  {
    key: "Details.FileName",
    title: "File Name",
    subDataTableColumn: true,
  },
  {
    key: "Details.UploadTime",
    title: "Upload Time",
    subDataTableColumn: true,
  },
  {
    key: "Details.UploadDate",
    title: "Upload Date",
    subDataTableColumn: true,
  },
  {
    key: "Details.FileSize",
    title: "File Size",
    subDataTableColumn: true,
  },
  {
    key: "Details.FileType",
    title: "File Type",
    subDataTableColumn: true,
  },
  {
    key: "Details.Uploader",
    title: "Uploader",
    subDataTableColumn: true,
  },
  {
    key: "Details.TailNumber",
    title: "Tail #",
    subDataTableColumn: true,
  },
  {
    key: "Details.FileClassification",
    title: "File Classification",
    subDataTableColumn: true,
  },
  {
    key: "Details.DownloadCount",
    title: "Download Count",
    subDataTableColumn: true,
  },
];

const meta: Meta<typeof ChildDataTable> = {
  title: "Content/ChildDataTable", // The title under which the component will appear in the Storybook sidebar
  component: ChildDataTable, // The component to display in the story
  parameters: {
    layout: "padded",
    backgrounds: {
      default: "dark",
    },
    docs: {
      page: () => (
        <>
          <h1>ChildDataTable Documentation</h1>
          <p>
            The <code>ChildDataTable</code> web design component is a datatable with child rows that contain a subtables of object data associated with the primary row.{" "}
            <u>
              This current implementation is a work in progress, and the buttons associated with downloading mission or adding files are awaiting further specifications. Request a ticket in the
              splashpage if you would want to customize this component to fit your projects' needs.
            </u>
          </p>

          <h2>Usage</h2>
          <p>
            To use the <code>ChildDataTable</code>, simply import it and set the desired props.
          </p>

          <Source code="import { ChildDataTable } from '@wavelengthusaf/components';" language="tsx" />

          <h2>Code Implementation</h2>
          <p>
            A <code>data</code> array and a <code>columns</code> array based upon the <code>interface ColumnProps</code> and <code>interface DataType</code>
            are neccesary components. The data array needs an <code>id</code> index as part of every array object, and the columns array, must be implemented according to the structure of the
            ColumnProps. The <code>Details</code> and <code>fileObject</code> interfaces are needed for associating information with the primary row and introducing the proper subtable objects to the
            correct row. Use the <code>subDataTableColumn</code> boolean to associate if a key is associated with a sub table column key or not. The subtable key must be entered in a{" "}
            <code>"Details.title"</code>
            format to differenitate keys from their respective array objects.
          </p>

          <Source
            code="interface fileObject {
  id: number;
  [key: string]: any;
}

interface Details {
  relationId: number;
  fileObjects: fileObject[];
}

interface DataType {
  id: number;
  [key: string]: any;
  Details?: Details;
}

interface ColumnProps {
  key: string;
  title: string | ReactElement;
  subDataTableColumn: boolean;
  PrimaryBoldText?: boolean;
}

type Props<T> = {
  columns: Array<ColumnProps>;
  data?: T[] | undefined;
  downloadArrowOnClick?: () => void | Promise<void>;
  downloadMissionOnClick?: () => void | Promise<void>;
  addFilesOnClick?: () => void | Promise<void>;
};"
            language="tsx"
          />

          <p>
            The example below is what the minimum working model neccesary for the working code implementation. You do not need to copy the interfaces above. The <code>id</code> associated with the
            arrays are a neccesary part of the integration as well defining <code>Details</code> and <code>fileObjects</code> for the subarray naming conventions.
          </p>
          <Source
            code='const data = [
  {
    id: 1,
    Platform: "U-2",
    MissionId: "Mission ID",
    MissionDate: "01/01/1011",
    MissionClassification: "CUI",
    AOR: "ABC, ABC, ABC, ABC, ABC, ABC",
    Creator: "Creator: SGT Murphy",
    ModifiedDate: "Modified: 01/02/1011",
    Details: {
      relationId: 1,
      fileObjects: [
        {
          id: 1,
          FileName: "ABC123",
          UploadTime: "0123",
          UploadDate: "01/01/2023",
          FileSize: "64MB",
          FileType: "File",
          Uploader: "Uploader",
          TailNumber: "093",
          FileClassification: "Class",
          DownloadCount: "2",
        },
        {
          id: 2,
          FileName: "SBC123",
          UploadTime: "2123",
          UploadDate: "21/01/2023",
          FileSize: "34MB",
          FileType: "Eile",
          Uploader: "Sploader",
          TailNumber: "893",
          FileClassification: "Elass",
          DownloadCount: "5",
        },
        {
          id: 3,
          FileName: "QBC123",
          UploadTime: "1123",
          UploadDate: "51/01/2023",
          FileSize: "64MB",
          FileType: "Gile",
          Uploader: "Vploader",
          TailNumber: "093",
          FileClassification: "Zlass",
          DownloadCount: "9",
        },
      ],
    },
  },
];

const columns = [
  {
    key: "Platform",
    title: "Platform",
    subDataTableColumn: false,
    PrimaryBoldText: true,
  },
  {
    key: "Details.FileName",
    title: "File Name",
    subDataTableColumn: true,
  },
];

<ChildDataTable data={data} columns={columns} downloadArrowOnClick={testClick} downloadMissionOnClick={testClick} addFilesOnClick={testClick}/>'
            language="tsx"
          ></Source>

          <p>
            For the props of <code>downloadArrowOnClick</code>,<code>downloadMissionOnClick</code>, and <code>addFilesOnClick</code>, you may pass in functions of <code>() =&gt; void</code> or{" "}
            <code>() =&gt; Promise&lt;void&gt;</code>. Below are example of the functions you can adminster for these buttons:
          </p>

          <Source
            code='//example of () => Promise<void>
const fetchData = async (): Promise<void> => {
   try {
     const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
     if (!response.ok) {
       throw new Error(`HTTP error! status: ${response.status}`);
     }
     console.log("Data fetched successfully.");
   } catch (error) {
     console.error("Error fetching data:", error);
   }
 };
 
 //example of () => void
const testClick = () => {
  alert("hello");
};'
            language="tsx"
          ></Source>

          <h2>Example ChildDataTable</h2>
          <p>Here's an example of the ChildDataTable:</p>
          <p>You may click the click the arrow buttons in the header sections to sort the data in an ascending or descending manner, or click the dropdown arrow to reveal the subtable.</p>
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
    downloadArrowOnClick: {
      type: "function",
      description:
        "A parameter that takes in the argument of <code>() => void</code> or <code>() =&gt; Promise&lt;void&gt;</code>. You may pass a function with these parameters. The current implementation allows you to  trigger an alert when pressed when the download arrow icon is clicked on the subtable.",
    },
    downloadMissionOnClick: {
      type: "function",
      description: "A parameter that takes in the argument of <code>() => void</code> or <code>() =&gt; Promise&lt;void&gt;</code>.",
    },
    addFilesOnClick: {
      type: "function",
      description: "A parameter that takes in the argument of <code>() => void</code> or <code>() =&gt; Promise&lt;void&gt;</code>.",
    },
  },
  args: {
    data: data,
    columns: columns,
    downloadArrowOnClick: downClick,
    downloadMissionOnClick: downClick,
    addFilesOnClick: downClick,
  },
};
