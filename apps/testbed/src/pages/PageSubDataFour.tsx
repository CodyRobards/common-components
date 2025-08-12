import { ChildDataTable } from "@wavelengthusaf/components";

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

function PageSubDataTableFour() {
  const downClick = () => {
    const value = "dd";
    alert(value);
  };
  return (
    <div>
      <ChildDataTable data={data} columns={columns} downloadArrowOnClick={downClick} />
    </div>
  );
}

export default PageSubDataTableFour;
