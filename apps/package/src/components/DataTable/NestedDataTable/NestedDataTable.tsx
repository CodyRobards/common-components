import { ReactElement, useRef, useState } from "react";
import styled from "styled-components";

//Subtable structure
interface Details {
  relationId: number;
  [key: string]: any;
}

//primary datatable strucutre
interface DataType {
  id: number;
  [key: string]: any;
  Details?: Details;
}

interface ColumnProps<T> {
  key: string;
  title: string | ReactElement;
  subDataTableColumn: boolean;
  width?: string;
  editable?: boolean;
  render?: (column: ColumnProps<T>, item: T) => ReactElement;
}

//prop arguments for component
type Props<T> = {
  columns: Array<ColumnProps<T>>;
  data?: T[] | undefined;
};

const TableStyle = styled.table`
  width: 100%;
  height: 100%;
  border-collapse: collapse;
  color: black;
  text-align: center;

  thead {
    background-color: black;
    color: white;
  }

  margin-left: auto;
  margin-right: auto;
  position: absolute;
`;

const MainThHeaders = styled.th`
  &:not(:last-child) {
    border-right: 1px solid #c6c7cc;
  }
`;

const SubDataTr = styled.tr`
  background-color: white;

  &:nth-child(even) {
    background-color: #e0ffff;
  }
`;

const PrimaryTrRows = styled.tr<{ $index: number }>`
  background-color: ${(props) => (props.$index % 2 === 0 ? "white" : "#e0ffff")};
`;

const SubTrRows = styled.tr<{ $index: number }>`
  background-color: ${(props) => (props.$index % 2 === 0 ? "white" : "#e0ffff")};
  height: 120px;
`;

const SubTableStyle = styled.table`
  width: 95%;
  border-collapse: collapse;
  margin-top: -15px;
  margin-left: auto;
  margin-right: auto;

  td {
    &:not(:last-child) {
      border-right: 1px solid black;
    }
  }

  th {
    background-color: #065465;
    &:not(:last-child) {
      border-right: 1px solid #c6c7cc;
    }
  }
`;

const DropdownButton = styled.button`
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  font-weight: bold; /* This makes the UTF symbols bold */
  font-size: 20px;
`;

const PrimaryTdSpan = styled.td`
  &:not(:last-child) {
    border-right: 1px solid black;
  }
`;

function trimBeforePeriod(text: string): string {
  const index = text.indexOf(".");
  return index === -1 ? text : text.substring(index + 1);
}

export const NestedDataTable = <T extends DataType>({ data, columns }: Props<T>) => {
  const HeadColumns = columns.filter((col) => col.subDataTableColumn === false);
  const SubDataColumns = columns.filter((col) => col.subDataTableColumn === true);

  const [isOpen, setIsOpen] = useState(false); //Dropdown logic
  const [isAscending, setIsAscending] = useState(false); //logic for arrow
  const [primaryRowIndex, setPrimaryRowIndex] = useState<number | null>(null);

  const toggleDropdown = (rowIndex: number) => {
    setIsOpen(!isOpen);
    setIsAscending(!isAscending);
    setPrimaryRowIndex(rowIndex);
  };

  // ----------Main Headers------------ //
  const headers = HeadColumns.map((column, index) => {
    return <MainThHeaders key={`headCell-${index}`}>{column.title}</MainThHeaders>;
  });

  const SubDataHeaders = SubDataColumns.map((column, index) => {
    return <th key={`SubHeadCell-${index}`}>{column.title}</th>;
  });

  // ----------Rows of Sub DataTable------------ //
  const subDataRows = !data?.length ? (
    <tr>
      <td title={"NoSubDataRows"} colSpan={columns.length}>
        No data
      </td>
    </tr>
  ) : (
    data.map((item, index) => (
      <>
        <SubDataTr key={`Sub-${item.id}-${index}`}>
          {SubDataColumns.map((column, colIndex) => {
            const columnKey = trimBeforePeriod(column.key);
            const value = item.Details?.[columnKey];
            console.log("value: ", value);
            if (value !== undefined) {
              return (
                <td key={`Span-${item.id}-${colIndex}`}>
                  <span>{value}</span>
                </td>
              );
            }
          })}
        </SubDataTr>
      </>
    ))
  );

  // ----------Subtable ------------ //
  const childRows = (
    <SubTableStyle>
      <thead>
        <tr>{SubDataHeaders}</tr>
      </thead>
      <tbody>{subDataRows}</tbody>
    </SubTableStyle>
  );

  const rows = !data?.length ? (
    <tr>
      <td title={"NoDataRows"} colSpan={columns.length}>
        No data
      </td>
    </tr>
  ) : (
    data?.map((item, index) => (
      <>
        <PrimaryTrRows key={index} $index={index}>
          <DropdownButton onClick={() => toggleDropdown(index)}>{isAscending && isOpen && primaryRowIndex === index ? <>&#8743;</> : <>&#8744;</>}</DropdownButton>
          {HeadColumns.map((column, index2) => {
            return (
              <PrimaryTdSpan key={`${item.id}-${index}=${index2}`}>
                <span title={`spanRow-${item.id}-${column.key}-${index2}`}>{item[column.key]}</span>
              </PrimaryTdSpan>
            );
          })}
        </PrimaryTrRows>
        {isOpen && primaryRowIndex === index && (
          <SubTrRows key={index} $index={index}>
            <td colSpan={HeadColumns.length + 1}>{childRows}</td>
          </SubTrRows>
        )}
      </>
    ))
  );

  return (
    <div>
      <TableStyle>
        <thead>
          <tr>
            <th title="dropdownth"></th>
            {headers}
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </TableStyle>
    </div>
  );
};

NestedDataTable.displayName = "NestedDataTable";

export default NestedDataTable;
