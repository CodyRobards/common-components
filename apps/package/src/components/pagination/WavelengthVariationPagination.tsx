import { useState, CSSProperties } from "react";
import Button from "@mui/material/Button";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styled from "styled-components";

interface StylesDictionary {
  [Key: string]: CSSProperties;
}

interface PaginationProps {
  totalPages: number;
  current: number;
  variant?: "text" | "contained" | "outlined";
  handleChangePage: (value: number | string) => void;
  itemList: (string | number)[];
  firstEllipseList: number[];
  secondEllipseList: number[];
}

export function WavelengthVariationPagination({ totalPages, current, variant, handleChangePage, itemList, firstEllipseList, secondEllipseList }: PaginationProps) {
  const [isOpen, setIsOpen] = useState(false); // for dropdown
  const [isSecOpen, setIsSecOpen] = useState(false);

  const MyDroplistItems = styled("li")`
    background-color: white;
    color: #000000;
    padding: 10px 30px;
    textdecoration: none;
    display: block;
    width: 80px;

    &:hover {
      background-color: lightgray;
    }
  `;

  const dropstyles: StylesDictionary = {
    pagination: {
      display: "flex",
    },
    dropcenter: {
      position: "relative",
      left: "-40px",
      top: "-20px",
    },
    mydrop: {
      position: "absolute",
      zIndex: "3",
      maxHeight: "200px",
      overflow: "scroll",
    },
    rangenumbers: {
      display: "flex",
    },
  };

  const toggleDropdown = (index: number) => {
    if (index === 1) {
      setIsOpen(!isOpen);
    } else {
      setIsSecOpen(!isSecOpen);
    }
  };

  return (
    <div style={dropstyles.pagination}>
      <Button onClick={() => handleChangePage(current - 1)} variant={variant} disabled={current === 1}>
        <ArrowBackIosNewIcon />
      </Button>

      <section style={dropstyles.rangenumbers}>
        {itemList.map((item, index) =>
          item === "..." && index === 1 ? ( //first half ellipse with first half dropdown
            // eslint-disable-next-line react/jsx-key
            <div>
              <Button key={index} onClick={() => toggleDropdown(1)} variant={variant} className={current === index ? "active" : ""}>
                {item}
              </Button>
              {isOpen && (
                <div style={dropstyles.dropcenter}>
                  <ul style={dropstyles.mydrop}>
                    {firstEllipseList.map((item) => (
                      <MyDroplistItems
                        style={dropstyles.mydroplist}
                        key={item}
                        onClick={() => {
                          // Handle item click here
                          handleChangePage(item), setIsOpen(false); // Close dropdown after click
                        }}
                      >
                        {item}
                      </MyDroplistItems>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : item === "..." && index === 5 ? ( //second half ellipse with second half dropdown
            <div>
              <Button key={index} onClick={() => toggleDropdown(5)} variant={variant} className={current === index ? "active" : ""}>
                {item}
              </Button>
              {isSecOpen && (
                <div style={dropstyles.dropcenter}>
                  <ul style={dropstyles.mydrop}>
                    {secondEllipseList.map((item) => (
                      <MyDroplistItems
                        style={dropstyles.mydroplist}
                        key={item}
                        onClick={() => {
                          // Handle item click here
                          handleChangePage(item), setIsOpen(false); // Close dropdown after click
                        }}
                      >
                        {item}
                      </MyDroplistItems>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <Button key={index} onClick={() => handleChangePage(item)} className={current === item ? "active" : ""} variant={variant}>
              {item}
            </Button>
          ),
        )}
      </section>

      <Button onClick={() => handleChangePage(current + 1)} disabled={current === totalPages} variant={variant}>
        <ArrowForwardIosIcon />
      </Button>
    </div>
  );
}

WavelengthVariationPagination.displayName = "WavelengthVariationPagination";

export default WavelengthVariationPagination;
