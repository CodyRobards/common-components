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
  handleChangePage: (value: number | string) => void;
  itemList: (string | number)[];
  firstEllipseList: number[];
  secondEllipseList: number[];
}
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

export function WavelengthButtonPagination({ totalPages, current, handleChangePage, itemList, firstEllipseList, secondEllipseList }: PaginationProps) {
  const [isOpen, setIsOpen] = useState(false); // for dropdown
  const [isSecOpen, setIsSecOpen] = useState(false);

  const toggleDropdown = (index: number) => {
    if (index === 1) {
      setIsOpen(!isOpen);
    } else {
      setIsSecOpen(!isSecOpen);
    }
  };

  const dropstyles: StylesDictionary = {
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
    butPagCompDivStyle: {
      display: "flex",
    },
  };

  const WLButtonPagStyle = {
    background: "white",
    color: "black",
    border: "none",
    padding: "1px",
    fontSize: "16px",
    height: "55px",
    width: "40px",
    boxshadow: "4px 2px 4px darkslategray",
    borderRadius: "50%",
    margin: "3px",

    "&:hover": {
      background: "#49baf7",
    },

    "&:disabled": {
      background: "rgb(226, 223, 223)",
    },

    "&.active": {
      background: "#8FD8FF",
    },
  };

  return (
    <div style={dropstyles.butPagCompDivStyle}>
      <Button onClick={() => handleChangePage(current - 1)} disabled={current === 1} sx={WLButtonPagStyle}>
        <ArrowBackIosNewIcon />
      </Button>

      <section style={dropstyles.rangenumbers}>
        {itemList.map((item, index) =>
          item === "..." && index === 1 ? ( //first half ellipse with first half dropdown
            // dropdown
            // eslint-disable-next-line react/jsx-key
            <div>
              <Button key={index} onClick={() => toggleDropdown(1)} className={current === index ? "active" : ""} sx={WLButtonPagStyle}>
                {item}
              </Button>
              {isOpen && (
                <div style={dropstyles.dropcenter}>
                  <ul style={dropstyles.mydrop}>
                    {firstEllipseList.map((item) => (
                      <MyDroplistItems
                        key={item}
                        onClick={() => {
                          (handleChangePage(item), setIsOpen(false)); // Close dropdown after click
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
              <Button key={index} onClick={() => toggleDropdown(5)} className={current === index ? "active" : ""} sx={WLButtonPagStyle}>
                {item}
              </Button>
              {isSecOpen && (
                <div style={dropstyles.dropcenter}>
                  <ul style={dropstyles.mydrop}>
                    {secondEllipseList.map((item) => (
                      <MyDroplistItems
                        key={item}
                        onClick={() => {
                          (handleChangePage(item), setIsOpen(false)); // Close dropdown after click
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
            <Button key={index} onClick={() => handleChangePage(item)} className={current === item ? "active" : ""} sx={WLButtonPagStyle}>
              {item}
            </Button>
          ),
        )}
      </section>
      <Button onClick={() => handleChangePage(current + 1)} disabled={current === totalPages} sx={WLButtonPagStyle}>
        <ArrowForwardIosIcon />
      </Button>
    </div>
  );
}

WavelengthButtonPagination.displayName = "WavelengthButtonPagination";

export default WavelengthButtonPagination;
