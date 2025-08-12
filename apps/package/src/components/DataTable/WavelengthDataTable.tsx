import { ReactElement, useEffect, useRef, useMemo, useState, ChangeEvent } from "react";
import styled from "styled-components";
import DefaultPagination from "../pagination/WavelengthDefaultPagination";

interface DataType {
  id: number;
  [key: string]: any;
}

interface ColumnProps<T> {
  key: string;
  title: string | ReactElement;
  width?: string;
  editable?: boolean;
  render?: (column: ColumnProps<T>, item: T) => ReactElement;
}

type Props<T> = {
  columns: Array<ColumnProps<T>>;
  data?: T[] | undefined;
  itemsPerPage: number;
  totalPages: number;
};

const ModalInputDiv = styled.div`
  display: flex;
  flex-direction: column; /* Corrected this line */
  gap: 3px;
  margin: 3px;

  label {
    align-self: flex-start;
    color: #c6c7cc;
  }

  input,
  select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-bottom: 2px solid #c6c7cc;

    &:hover {
      border-bottom: 2px solid black;
    }

    &:focus {
      border-bottom: 2px solid #8fd8ff;
    }
  }
`;

//modal styling
const ModalOverlay = styled.div`
  position: fixed;
  bottom: 19%;
  right: 15%;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const ModalWrapper = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  position: relative;
  min-width: 300px;
  z-index: 1;
  display: flex;
  align-items: center;
`;

const ModalClose = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
  border: none;
  background: none;
  z-index: 2;
`;

//header styling
const TableHeadStyle = styled.th`
  position: relative;
`;

//kebab styling
const KebabMenu = styled.div`
  display: inline-block;
  position: absolute;
  right: 0;
  top: 2px;
`;

const KebabIcon = styled.div`
  cursor: pointer;
  font-size: 20px;
  padding: 5px;

  &:hover,
  &:focus {
    color: #45beff;
  }
  &:active {
    color: #8fd8ff;
  }
`;

const MenuOptions = styled.ul`
  position: absolute;
  right: 0;
  top: 100%;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    padding: 10px;
    text-decoration: none;
    display: block;
    cursor: pointer;

    &:hover {
      background-color: #ddd;
    }
  }
`;

//tbox
const StyledBoxDiv = styled.div`
  background-color: white;
  width: 700px;
  height: 480px;
  position: relative;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const StyledNavBoxDiv = styled.div`
  background-color: white;
  width: 700px;
  display: flex; /* Make parent a flex-container */
  justify-content: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  box-shadow: 0.5px 3px 5px black;
`;

const StyledTd = styled.td`
  border-top: 1px solid #c6c7cc;
  border-bottom: 1px solid #c6c7cc;
  padding: 10px 15px;
  vertical-align: middle;
`;

const StyledTableTwo = styled.table`
  width: 95%;
  height: 95%;
  border-collapse: collapse;
  background-color: white;
  color: black;

  margin-left: auto;
  margin-right: auto;

  th {
    position: relative; /* Enable absolute positioning of pseudo-elements */
    padding: 10px 15px;

    /* Create the partial right border */
    &:not(:last-child):after {
      content: ""; /* Ensure the pseudo-element is visible */
      position: absolute;
      right: 0; /* Position it on the right side of the th */
      top: 50%; /* Position it in the vertical center */
      height: 50%; /* Set the height of the border to be half the height of th */
      border-right: 1px solid #c6c7cc;
      transform: translateY(-50%); /* Center it vertically */
    }
  }
`;

const StyledInput = styled.input`
  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  color: #8fd8ff;
`;

export const WavelengthDataTable = <T extends DataType>({ data, columns, itemsPerPage, totalPages }: Props<T>) => {
  const [localData, setLocalData] = useState<T[]>(data || []);
  const copiedArray = [...(data || [])];
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedColumnKey, setEditedColumnKey] = useState<string | null>(null);
  const [editedValue, setEditedValue] = useState<string>("");

  const [noRowsOpen, setNoRowsOpen] = useState(false); //for filter changes

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [searchItem, setSearchItem] = useState("");

  const [selectedValue, setSelectedValue] = useState<string>(columns[0]?.key || "");
  const [currentPage, setCurrentPage] = useState(1);

  //kebab menu state ----------------------------//
  const [isOpen, setIsOpen] = useState(false);
  const [editingMenuKey, setEditingMenuKey] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  //----select logic-----------------------///
  function isNumeric(value: string): boolean {
    return /^\d+$/.test(value); // This checks for integers
  }

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    setLocalData(copiedArray);
  };

  useEffect(() => {
    if (!selectedValue || searchItem === "") {
      // If there's no column selected or no search item, reset to original data
      setLocalData(copiedArray);
      setNoRowsOpen(false);
      return;
    }

    // Apply filtering
    if (isNumeric(searchItem)) {
      // Filter by number
      const filteredItems = localData.filter((item) => item[selectedValue].toString().includes(searchItem));
      setLocalData(filteredItems);

      // Handle case for no results
      if (filteredItems.length === 0) {
        setNoRowsOpen(true);
      } else {
        setNoRowsOpen(false);
      }
    } else {
      // Filter by string (case-insensitive)
      const filteredItems = localData.filter((item) => item[selectedValue].toString().toLowerCase().includes(searchItem.toLowerCase()));

      // Handle case for no results
      if (filteredItems.length === 0) {
        setNoRowsOpen(true);
      } else {
        setLocalData(filteredItems);
        setNoRowsOpen(false);
      }
    }
  }, [selectedValue, searchItem]);
  //---------------------------------------------//
  //----popup modal logic -----------------------///
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isModalOpen && modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  //kebab menu functions ----------------------------//
  const toggleMenu = (key: string) => {
    setIsOpen(!isOpen);
    setEditingMenuKey(key);
  };
  //----- pagination system-------------------------//
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentPageData = localData.filter((_, index) => index >= indexOfFirstItem && index < indexOfLastItem);
  // ----------------------------------------------//

  //---- sorting function ------------------------//
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleSort = (column: keyof DataType, sortType: typeof sortOrder) => {
    const sortedItems = [...localData].sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];

      if (typeof valueA === "string" && typeof valueB === "string") {
        if (sortType === "asc") {
          return valueA.localeCompare(valueB);
        } else {
          return valueB.localeCompare(valueA);
        }
      } else if (typeof valueA === "number" && typeof valueB === "number") {
        if (sortType === "asc") {
          return valueA - valueB;
        } else {
          return valueB - valueA;
        }
      } else {
        return 0;
      }
    });

    setLocalData(sortedItems);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };
  // ----------------------------------------------//

  const handleEdit = (id: number, value: string, columnKey: string) => {
    //this helps find the id mumber and column to access input
    setEditingId(id);
    setEditedValue(value);
    setEditedColumnKey(columnKey);
  };

  const saveEdit = (id: number, editedValue: string, columnKey: string) => {
    setLocalData(localData.map((item) => (id === item.id ? { ...item, [columnKey]: editedValue } : item)));
    setEditingId(null);
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  const headers = columns.map((column, index) => {
    return (
      <TableHeadStyle key={`headCell-${index}`}>
        {column.title}
        {
          <KebabMenu ref={menuRef} key={index}>
            <KebabIcon
              title={`KebabIcon-${index}`}
              onClick={() => {
                toggleMenu(column.key);
              }}
            >
              &#8942;
            </KebabIcon>
            {isOpen && editingMenuKey === column.key && (
              <MenuOptions>
                {sortOrder === "asc" ? (
                  <li title={`MenuListASC-${index}`} onClick={() => handleSort(column.key, "asc")}>
                    <span>&#11014;</span> Sort ASC
                  </li>
                ) : (
                  <li title={`MenuListDES-${index}`} onClick={() => handleSort(column.key, "desc")}>
                    <span>&#11015;</span> Sort DESC
                  </li>
                )}
                <li title={`MenuListFilterButton-${index}`} onClick={openModal}>
                  <span>&#9207;</span> Filter
                </li>
                {isModalOpen && (
                  <ModalOverlay>
                    <ModalWrapper ref={modalRef}>
                      <ModalClose title={`ModalClose-${index}`} onClick={closeModal}>
                        &times;
                      </ModalClose>
                      <ModalInputDiv>
                        <label htmlFor={"filterSelectId"}>Columns: </label>
                        <select title={`filterSelect-${index}`} id={"filterSelectId"} value={selectedValue} onChange={handleChange}>
                          {columns.map((item) => (
                            <option key={item.key}>{item.key}</option>
                          ))}
                        </select>
                      </ModalInputDiv>
                      <ModalInputDiv>
                        <label htmlFor={"filterInputId"}>Values: </label>
                        <input
                          title={`Inputfiltertest-${index}`}
                          id={"filterInputId"}
                          type={isNumeric(searchItem) ? "number" : "text"}
                          value={searchItem}
                          onKeyDown={(e) => {
                            if (e.key === "Backspace") {
                              setLocalData(copiedArray);
                            }
                          }}
                          onChange={(e) => setSearchItem(e.target.value)}
                        />
                      </ModalInputDiv>
                    </ModalWrapper>
                  </ModalOverlay>
                )}
              </MenuOptions>
            )}
          </KebabMenu>
        }
      </TableHeadStyle>
    );
  });
  const rows =
    !currentPageData?.length || noRowsOpen ? (
      <tr>
        <td title={"NoDataRows"} colSpan={columns.length}>
          No data
        </td>
      </tr>
    ) : (
      currentPageData?.map((item) => (
        <tr key={item.id}>
          {columns.map((column, index2) => {
            return (
              <StyledTd key={index2}>
                {editingId === item.id && editedColumnKey === column.key ? (
                  <StyledInput
                    title={`styledRow-${item.id}-${column.key}-${index2}`}
                    type="text"
                    value={editedValue}
                    onChange={(e) => setEditedValue(e.target.value)}
                    onBlur={() => saveEdit(item.id, editedValue, column.key)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        saveEdit(item.id, editedValue, column.key);
                      } else if (e.key === "Escape") {
                        handleCancel();
                      }
                    }}
                    autoFocus
                  />
                ) : (
                  <span title={`spanRow-${item.id}-${column.key}-${index2}`} onDoubleClick={() => handleEdit(item.id, item[column.key], column.key)}>
                    {item[column.key]}
                  </span>
                )}
              </StyledTd>
            );
          })}
        </tr>
      ))
    );

  return (
    <div>
      <StyledBoxDiv title="StyledBoxDiv">
        <StyledTableTwo title="StyledTable">
          <thead>
            <tr>{headers}</tr>
          </thead>

          <tbody>{rows}</tbody>
        </StyledTableTwo>
      </StyledBoxDiv>
      <StyledNavBoxDiv>
        <DefaultPagination totalPages={totalPages} currentPageNumber={currentPage} onPageChange={setCurrentPage} style="circular" />
      </StyledNavBoxDiv>
    </div>
  );
};

export default WavelengthDataTable;
