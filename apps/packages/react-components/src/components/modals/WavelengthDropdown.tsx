import React, { ReactNode } from "react";
import { Menu as MuiMenu } from "@mui/material";
import { MenuItem as MuiMenuItem, styled, SxProps, Theme } from "@mui/material";

import Grow from "@mui/material/Grow";
import { WavelengthButton } from "../buttons/WavelengthButton/WavelengthButton";
//making minor change

interface DropdownProps {
  id?: string;
  palette: "brewery" | "custom";
  width: string;
  options: menuOptions[];
  buttonSx?: SxProps<Theme> | undefined;
  menuSx?: MenuSxProps;
  buttonText: string | ReactNode;
}
interface menuOptions {
  option: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLLIElement> | undefined;
}
interface MenuSxProps {
  backgroundColor?: string;
  borderColor?: string;
  hoverColor?: string;
  width?: string;
  boxShadow?: string;
}
export function WavelengthDropdown({
  id,
  options,
  buttonSx,
  width = "200px",
  buttonText,
  menuSx = { backgroundColor: "#FCFAF8", borderColor: "blue", width: width, boxShadow: "none" },
  palette,
}: DropdownProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const breweryStyleButton = {
    backgroundColor: "#d16a2f",
    color: "white",
    padding: "16px 16px",
    width: width,
    fontSize: "18px",
    minWidth: "min-content",
    borderTopRightRadius: "8px",
    borderTopLeftRadius: "8px",
    "&:hover": {
      backgroundColor: "rgba(228, 119, 57, 1)",
    },
  };
  const breweryDropDownStyle = {
    backgroundColor: "#FCFAF8",
    borderColor: "#d16a2f",
    hoverColor: "rgba(209, 106, 47, 0.1)",
    width: width,
  };
  const defaultDropdownSx = {
    backgroundColor: "white",
    borderColor: "blue",
    hoverColor: "#d4d4e3",
    width: width,
  };
  const defaultsx = menuSx ? { ...defaultDropdownSx, ...menuSx } : defaultDropdownSx;

  //variables that can change
  let myButtonSx;
  let myMenusx;

  if (palette === "brewery") {
    myButtonSx = { ...breweryStyleButton, ...buttonSx };
    myMenusx = { ...breweryDropDownStyle, ...menuSx };
  } else {
    myButtonSx = buttonSx;
    myMenusx = defaultsx;
  }
  const MenuItem = styled(MuiMenuItem)({
    "&.MuiMenuItem-root": {
      "&.Mui-selected": {
        backgroundColor: `${myMenusx.backgroundColor}`,
      },
      "&:hover": {
        backgroundColor: `${myMenusx.hoverColor}`,
      },
    },
  });
  const MyMenu = styled(MuiMenu)({
    top: "-7px",
    left: "0px",

    boxSizing: "border-box",
    "& .MuiMenu-paper": {
      borderBottomLeftRadius: "8px",
      borderBottomRightRadius: "8px",
      borderTopRightRadius: "0px",
      borderTopLeftRadius: "0px",
      boxShadow: menuSx?.boxShadow,

      width: myMenusx.width,

      backgroundColor: `${myMenusx.backgroundColor}`,
    },

    "& .MuiMenu-list": {
      borderBottomLeftRadius: "8px",
      borderBottomRightRadius: "8px",
      borderLeft: `1px solid ${myMenusx.borderColor}`,
      borderRight: `1px solid ${myMenusx.borderColor}`,
      borderBottom: `1px solid ${myMenusx.borderColor}`,
    },
  });

  return (
    <>
      <WavelengthButton
        variant="contained"
        size="large"
        borderRadius="0.5rem"
        padding={myButtonSx.padding || breweryStyleButton.padding}
        width={width}
        margin="0rem"
        colorOne={menuSx.borderColor}
        colorTwo={menuSx.backgroundColor}
        fontSize="1.125rem"
        boxShadow="none"
        onClick={handleClick}
      >
        {buttonText}
      </WavelengthButton>

      <MyMenu
        id={id}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        TransitionComponent={Grow}
      >
        {options.map((item, index) => {
          return (
            <MenuItem key={index} onClick={item.onClick}>
              {item.option}
            </MenuItem>
          );
        })}
      </MyMenu>
    </>
  );
}

const WavelengthDropdownStyled = styled(WavelengthDropdown)``;

WavelengthDropdown.displayName = "WavelengthDropdown";

export default WavelengthDropdownStyled;
