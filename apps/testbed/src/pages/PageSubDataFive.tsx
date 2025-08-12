import { ReactElement, useMemo, useState, Fragment } from "react";
import styled, { keyframes } from "styled-components";

interface fileObject {
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
  downloadArrowOnClick?: () => void;
};

const downWardAnimation = keyframes`
 0% { top: -122px;  }
 100% { top: 0px;  }
`;

const disSubTableAnim = keyframes`
0% { opacity: 0;  }
 25% { opacity: 0;  }
 50% { opacity: 0;  }
 60% { opacity: 0.2;  }
 75% { opacity: 0.8;  }
 100% { opacity: 1;  }
`;

const OuterTable = styled.div`
  width: 1700px;
  height: 958px;
  border: 1px solid red;
`;

const TableContainer = styled.div`
  margin: auto;
  background-color: white;
  width: 1200px;
  border-radius: 16px;
`;

const TableRow = styled.div<{ $amountofColumns: number }>`
  display: grid;
  grid-template-columns: ${({ $amountofColumns }) => `repeat(${$amountofColumns}, 1fr)`};
`;

const TablePrimaryRow = styled.div<{ $amountofColumns: number }>`
  display: grid;
  grid-template-columns: ${({ $amountofColumns }) => `repeat(${$amountofColumns}, 1fr)`};
  margin-bottom: 25px;
`;

const BodyRowContainer = styled.div`
  border: 1px solid black;
  background-color: white;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 10px;
`;

const TableHeaderCell = styled.div`
  padding-left: 12px;
  padding-right: 25px;
`;

const TableBodyCell = styled.div<{ $primaryBoldState?: boolean }>`
  background-color: #fff;
  color: black;
  position: relative;
  padding: 10px 5px 0px 20px;
  text-wrap: balance;
  font-size: ${(props) => (props.$primaryBoldState ? "24px" : "16px")};
  font-weight: ${(props) => (props.$primaryBoldState ? "bold" : "normal")};
`;

const ButtonStylingRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const BottomArrowBar = styled.div`
  background-color: #e9e9e9;
  text-align: center;
`;

const BottomUpArrowBar = styled.div`
  background-color: #e9e9e9;
  text-align: center;
  position: relative;
  animation: ${downWardAnimation} 1.5s;
`;

const SubDataTable = styled.table`
  background-color: white;
  color: black;
  width: 100%;
  border-collapse: collapse;
  animation: ${disSubTableAnim} 1.5s;

  line-height: 1.2;
`;

const SubDataTableHeaderRow = styled.tr`
  height: 50px;
  background-color: #304359;
  color: white;
  font-size: 16px;
  font-weight: bold;

  th {
    white-space: nowrap;
  }
`;

const SubDataTableBodyRow = styled.tbody`
  font-size: 14px;
`;

const SubDataTableBodyRowContainer = styled.tr`
  td {
    padding: 10px 25px 10px 20px;
  }

  &:nth-child(even) {
    background-color: #96e0e5;
  }
`;

const SubDataTableCell = styled.td`
  text-align: center;
`;

const SubDataHeaderColumn = styled.thead`
  background-color: #304359;
`;

const SortButton = styled.button<{ $sortColor: string }>`
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.$sortColor};
  background-color: #11ffee00;
  border: none;
  white-space: nowrap;
`;

const DownloadMissionButton = styled.button`
  width: 217px;
  height: 45px;
  padding: 12px 32px 12px 32px;
  background-color: #1a8083cc;
  color: white;

  margin-left: 22px;
  margin-bottom: 15px;
  margin-top: 10px;
  white-space: nowrap;
  border: none;
  border-radius: 8px;
  gap: 4px;

  font-weight: 600;
  font-size: 16px;

  &:hover {
    background-color: rgba(38, 186, 190, 1);
    color: rgba(247, 247, 249, 1);
    cursor: pointer;
  }

  &:active {
    background-color: #67a8aa;
    transition: background-color 0.2s ease;
  }
`;

const AddButton = styled.button`
  width: 130px;
  height: 45px;
  border: 1px solid #1a8083;

  padding: 12px 32px 12px 32px;
  gap: 4px;
  background-color: white;
  color: #1a8083cc;

  margin-left: 22px;
  margin-bottom: 15px;
  margin-top: 10px;
  white-space: nowrap;
  border-radius: 8px;

  font-weight: 600;
  font-size: 16px;

  &:hover {
    background-color: rgba(26, 128, 131, 0.1);
    color: rgba(26, 128, 131, 1);
    cursor: pointer;
  }

  &:active {
    background-color: #bad7da;
    transition: background-color 0.2s ease;
  }
`;

const DownloadArrow = styled.button`
  background-color: transparent;
  border: none;

  &:active {
    transform: scale(0.95);
  }
`;

export const ChildDataTable = <T extends DataType>({ data, columns, downloadArrowOnClick }: Props<T>) => {
  const HeadColumns = columns.filter((col) => col.subDataTableColumn === false);
  const SubDataColumns = columns.filter((col) => col.subDataTableColumn === true);

  // --- Dropdown logic --- //
  const [openRow, setOpenRow] = useState<number | null>(null);

  // -- Sorting logic for primary datatable --//
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [sortKey, setSortKey] = useState<keyof DataType>(""); //use this for name, age, etc when setting with button

  // -- Sorting logic for subdatable --//
  const [sortSubOrder, setSortSubOrder] = useState<"asc" | "desc">("asc");
  const [sortSubKey, setSortSubKey] = useState<keyof DataType>("");

  const toggleSortOrder = (key: string) => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setSortKey(key);
  };

  const toggleSubSortOrder = (key: string) => {
    setSortSubOrder(sortSubOrder === "asc" ? "desc" : "asc");
    setSortSubKey(key);
  };

  const toggleDropdown = (id: number) => {
    setOpenRow(openRow === id ? null : id);
  };

  const toggleUpward = () => {
    setOpenRow(null);
  };

  function trimBeforePeriod(text: string): string {
    const index = text.indexOf(".");
    return index === -1 ? text : text.substring(index + 1);
  }

  const processedRowData = useMemo(() => {
    const result = [...(data ?? [])];

    //sorting for primary header
    if (sortOrder) {
      result.sort((a, b) => {
        const valueA = a[sortKey];
        const valueB = b[sortKey];

        if (typeof valueA === "string" && typeof valueB === "string") {
          if (sortOrder === "asc") {
            return valueA.localeCompare(valueB);
          } else {
            return valueB.localeCompare(valueA);
          }
        } else if (typeof valueA === "number" && typeof valueB === "number") {
          if (sortOrder === "asc") {
            return valueA - valueB;
          } else {
            return valueB - valueA;
          }
        } else {
          return 0;
        }
      });
    }

    //sorting for subtable files
    if (sortSubOrder) {
      result.map((item) =>
        item.Details?.fileObjects.sort((c, d) => {
          const valueC = c[sortSubKey];
          const valueD = d[sortSubKey];

          if (typeof valueC === "string" && typeof valueD === "string") {
            if (sortSubOrder === "asc") {
              return valueC.localeCompare(valueD);
            } else {
              return valueD.localeCompare(valueC);
            }
          } else if (typeof valueC === "number" && typeof valueD === "number") {
            if (sortSubOrder === "asc") {
              return valueC - valueD;
            } else {
              return valueD - valueC;
            }
          } else {
            return 0;
          }
        }),
      );
    }

    return result;
  }, [data, sortKey, sortOrder, sortSubKey, sortSubOrder]);

  //sorting for primary headers
  const renderSortButton = (column, sortOrder, sortKey) => {
    return sortKey === column.key ? (
      sortOrder === "asc" ? (
        <>
          <SortButton $sortColor="black" onClick={() => toggleSortOrder(column.key)}>
            {column.title}{" "}
            <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.2375 0.368774L7.5 6.09377L1.7625 0.368774L0 2.13127L7.5 9.63127L15 2.13127L13.2375 0.368774Z" fill="black" />
            </svg>
          </SortButton>
        </>
      ) : (
        <>
          <SortButton $sortColor="black" onClick={() => toggleSortOrder(column.key)}>
            {column.title}{" "}
            <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.2375 9.2627L7.5 3.5377L1.7625 9.2627L0 7.5002L7.5 0.000196457L15 7.5002L13.2375 9.2627Z" fill="black" />
            </svg>
          </SortButton>
        </>
      )
    ) : (
      <>
        <SortButton $sortColor="black" onClick={() => toggleSortOrder(column.key)}>
          {column.title}{" "}
          <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.2375 0.368774L7.5 6.09377L1.7625 0.368774L0 2.13127L7.5 9.63127L15 2.13127L13.2375 0.368774Z" fill="black" />
          </svg>
        </SortButton>
      </>
    );
  };

  const renderSortSubButton = (column, sortSubOrder, sortSubKey) => {
    const columnKey = trimBeforePeriod(column.key);
    return sortSubKey === columnKey ? (
      sortSubOrder === "asc" ? (
        <SortButton $sortColor="white" onClick={() => toggleSubSortOrder(columnKey)}>
          {column.title}{" "}
          <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.2375 0.368774L7.5 6.09377L1.7625 0.368774L0 2.13127L7.5 9.63127L15 2.13127L13.2375 0.368774Z" fill="white" />
          </svg>
        </SortButton>
      ) : (
        <SortButton $sortColor="white" onClick={() => toggleSubSortOrder(columnKey)}>
          {column.title}{" "}
          <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.2375 9.2627L7.5 3.5377L1.7625 9.2627L0 7.5002L7.5 0.000196457L15 7.5002L13.2375 9.2627Z" fill="white" />
          </svg>
        </SortButton>
      )
    ) : (
      <SortButton $sortColor="white" onClick={() => toggleSubSortOrder(columnKey)}>
        {column.title}{" "}
        <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.2375 0.368774L7.5 6.09377L1.7625 0.368774L0 2.13127L7.5 9.63127L15 2.13127L13.2375 0.368774Z" fill="white" />
        </svg>
      </SortButton>
    );
  };

  const headers = HeadColumns.map((column) => {
    return <TableHeaderCell key={`HeaderCell-${column.key}`}>{renderSortButton(column, sortOrder, sortKey)}</TableHeaderCell>;
  });

  const SubDataHeaders = SubDataColumns.map((column, index) => {
    return <th key={`SubHeadCell-${index}`}>{renderSortSubButton(column, sortSubOrder, sortSubKey)}</th>;
  });

  const subDataRows = (itemId: number) => {
    return processedRowData
      .filter((item) => item.Details?.relationId === itemId)
      .map((item) => (
        <Fragment key={`SDR-${item.id}-${item.Details?.relationId}`}>
          {item.Details?.fileObjects.map((fileItem, index) => (
            <SubDataTableBodyRowContainer key={`${item}-${item.Details?.relationId}-${fileItem.id}-${index}`}>
              <td key={`td-${item.Details?.relationId}-${fileItem.id}`}>
                <DownloadArrow onClick={downloadArrowOnClick}>
                  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.5 12L3.5 7L4.9 5.55L7.5 8.15V0H9.5V8.15L12.1 5.55L13.5 7L8.5 12ZM2.5 16C1.95 16 1.47917 15.8042 1.0875 15.4125C0.695833 15.0208 0.5 14.55 0.5 14V11H2.5V14H14.5V11H16.5V14C16.5 14.55 16.3042 15.0208 15.9125 15.4125C15.5208 15.8042 15.05 16 14.5 16H2.5Z"
                      fill="#1C1B1F"
                    />
                  </svg>
                </DownloadArrow>
              </td>
              {SubDataColumns.map((column) => {
                const columnKey = trimBeforePeriod(column.key);
                const value = fileItem[columnKey];
                if (value !== undefined) {
                  return (
                    <SubDataTableCell key={`fileitem-${item}-${item.Details?.relationId}-${fileItem.id}-${index}-${column.title}`}>
                      <span key={`span-${item.Details?.relationId}-${fileItem.id}-${index}-${column.title}`}>{value}</span>
                    </SubDataTableCell>
                  );
                }
              })}
            </SubDataTableBodyRowContainer>
          ))}
        </Fragment>
      ));
  };

  const dataRows = processedRowData?.map((item, index) => (
    <BodyRowContainer key={`Bodycontainer-${item.id}-${index}`}>
      <TableRow $amountofColumns={HeadColumns.length}>
        {HeadColumns.map((column) => (
          <TableBodyCell key={`TableBodycell-${item.id}-${column.key}`} $primaryBoldState={column.PrimaryBoldText}>
            {item[column.key]}
          </TableBodyCell>
        ))}
      </TableRow>
      <ButtonStylingRow>
        <DownloadMissionButton>Download Mission</DownloadMissionButton>
        <AddButton>Add files</AddButton>
      </ButtonStylingRow>
      {openRow !== item.id && (
        <BottomArrowBar onClick={() => toggleDropdown(item.id)}>
          <svg width="92" height="14" viewBox="0 0 92 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M64 0L44 6L24 0H0L44 14L92 0H64Z" fill="#7A7A7A" />
          </svg>
        </BottomArrowBar>
      )}
      {openRow === item.id && (
        <div>
          <SubDataTable>
            <SubDataHeaderColumn>
              <SubDataTableHeaderRow>
                <th></th>
                {SubDataHeaders}
              </SubDataTableHeaderRow>
            </SubDataHeaderColumn>
            <SubDataTableBodyRow>{subDataRows(item.id)}</SubDataTableBodyRow>
          </SubDataTable>
          <BottomUpArrowBar onClick={() => toggleUpward()}>
            <svg width="92" height="14" viewBox="0 0 92 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M64 14L44 8L24 14H0L44 0L92 14H64Z" fill="#7A7A7A" />
            </svg>
          </BottomUpArrowBar>
        </div>
      )}
    </BodyRowContainer>
  ));

  return (
    <OuterTable>
      <TableContainer>
        <TablePrimaryRow $amountofColumns={HeadColumns.length}>{headers}</TablePrimaryRow>
        <div title="tablebodies">{dataRows}</div>
      </TableContainer>
    </OuterTable>
  );
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

function PageSubDataTableFive() {
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

export default PageSubDataTableFive;
