import React, { ReactNode } from "react";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";

import { HelpOutline } from "@mui/icons-material";
import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";

export interface menuItemProps {
  itemType: "header" | "link" | "footer" | string;
  label: string | number;
  link?: string;
  end?: boolean;
  email?: string;
  hoverColor?: string;
}
interface PopUPMenuProps {
  menuItems: menuItemProps[];
  customIcon?: React.ReactNode;
  width?: string;
  menuDirection?: "top" | "bottom";
  color?: string;
  border?: string;

  id?: string;
}

const customStyle = { marginLeft: 16, marginRight: 16, marginTop: 8, marginBottom: 8 };
const emailStyle = {
  marginLeft: 16,
  marginRight: 16,
  marginTop: 8,
  marginBottom: 8,
};

export function WavelengthPopUpMenu({ menuItems, customIcon = false, width, menuDirection = "top", color, id, border }: PopUPMenuProps) {
  const Links = styled.a<{ hoverColor?: string }>`
    color: inherit;
    text-decoration: none;

    &:hover,
    &:focus {
      color: ${({ hoverColor }) => hoverColor || "inherit"};
    }
    &:active {
      color: ${({ hoverColor }) => hoverColor || "inherit"};
    }
  `;

  /**anchorEl is the element the menu is anchored to*/
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  /**Dictates if the menu is open or not */
  const open = Boolean(anchorEl);
  let icon: ReactNode;
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  /**Sets Icon to be used inside of button */
  if (customIcon) {
    icon = customIcon;
  } else {
    icon = <HelpOutline fontSize="medium" sx={{ color: color }} />;
  }
  /**Sets the position of the menu depending on users input for the menuDirection Prop */
  const anchor = menuDirection === "top" || menuDirection === undefined ? "top" : "bottom";
  const transform = menuDirection === "top" || menuDirection === undefined ? "bottom" : "top";

  return (
    <>
      <IconButton onClick={handleClick}>{icon}</IconButton>

      <Menu
        id={id}
        open={open}
        sx={{
          width: width,
          "& .MuiPaper-root": {
            border: border,
          },
        }}
        onClose={handleClose}
        anchorEl={anchorEl}
        TransitionComponent={Slide}
        anchorOrigin={{ vertical: anchor, horizontal: "center" }}
        transformOrigin={{ vertical: transform, horizontal: "center" }}
      >
        {/**For each menu Item */}
        {...menuItems.map((items, index) => {
          /**If true, items will have a divider at the bottom */
          if (items.end === true) {
            if (items.itemType === "header") {
              /** If item has link, it is a clickable */
              if (items.link) {
                return (
                  <Box key={index}>
                    <MenuItem>
                      {/**Removes text decoration for the links */}
                      <a style={{ textDecoration: "none", color: "inherit" }} href={items.link}>
                        <span style={{ fontWeight: "bold" }}>{items.label}</span>
                      </a>
                    </MenuItem>
                    <Divider />
                  </Box>
                );
              } else {
                return (
                  <Box key={index}>
                    <p style={{ marginLeft: 16, marginRight: 16, marginTop: 6, marginBottom: 6 }}>
                      <span style={{ fontWeight: "bold" }}>{items.label}</span>
                    </p>
                    <Divider />
                  </Box>
                );
              }
            } else if (items.itemType === "link") {
              return (
                <Box key={index}>
                  <MenuItem>
                    <Links key={index} href={items.link} hoverColor={items.hoverColor}>
                      {items.label}
                    </Links>
                  </MenuItem>
                  <Divider />
                </Box>
              );
            } else {
              if (items.link) {
                return (
                  <Box key={index}>
                    <MenuItem>
                      <a style={{ textDecoration: "none", color: "inherit" }} href={items.link}>
                        {items.label}
                      </a>
                    </MenuItem>
                    <Divider />
                  </Box>
                );
              } else {
                if (items.email) {
                  return (
                    <Box key={index}>
                      <Links href={items.email} style={emailStyle}>
                        {items.label}
                      </Links>
                      <Divider />
                    </Box>
                  );
                } else {
                  return (
                    <Box key={index}>
                      <p style={customStyle}>{items.label}</p>
                      <Divider />
                    </Box>
                  );
                }
              }
            }
          } else if (items.end === undefined || items.end === false || items.end === null) {
            if (items.itemType === "header") {
              if (items.link) {
                return (
                  <MenuItem key={index}>
                    <Links href={items.link} hoverColor={items.hoverColor}>
                      {items.label}
                    </Links>
                  </MenuItem>
                );
              } else {
                return (
                  <p key={index} style={customStyle}>
                    {items.label}
                  </p>
                );
              }
            } else if (items.itemType === "link") {
              return (
                <MenuItem key={index} style={{ textDecoration: "none" }}>
                  <Links href={items.link} hoverColor={items.hoverColor || ""}>
                    {items.label}
                  </Links>
                </MenuItem>
              );
            } else {
              if (items.link) {
                return (
                  <MenuItem key={index} href={items.link}>
                    {items.label}
                  </MenuItem>
                );
              } else {
                if (items.email) {
                  return (
                    <p key={index} style={emailStyle}>
                      <Links href={items.email} hoverColor={items.hoverColor || "blue"}>
                        {items.label}
                      </Links>
                    </p>
                  );
                } else {
                  return (
                    <p key={index} style={customStyle}>
                      {items.label}
                    </p>
                  );
                }
              }
            }
          }
        })}
      </Menu>
    </>
  );
}

WavelengthPopUpMenu.displayName = "WavelengthPopUpMenu";

export default WavelengthPopUpMenu;
