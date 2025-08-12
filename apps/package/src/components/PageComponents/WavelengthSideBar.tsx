import React, { useState } from "react";

import { getPalette } from "../../themes/Palette";
import { useNavigate } from "react-router-dom";
import { KeyboardArrowDownRounded, KeyboardArrowRightRounded } from "@mui/icons-material";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import Box from "@mui/material/Box";

interface SubSectionItem {
  title?: string;
  path?: string;
  onClick?: () => void;
  items?: SubSectionItem[];
}

interface SubSection {
  title?: string;
  items?: SubSectionItem[];
}

interface Section {
  title: string;
  subsections?: SubSection[];
}

interface SidebarProps {
  id?: string;
  sections: Section[];
  bgColor?: string;
  txtColor?: string;
  labelColor?: string;
  arrowColor?: string;
  marginTop?: string;
  marginLeft?: string;
  width?: string | number;
  height?: string | number;
}

export function WavelengthSideBar({ sections, txtColor, bgColor, labelColor, arrowColor, marginTop, marginLeft, width = 240, height = 300, id }: SidebarProps): React.JSX.Element {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const navigate = useNavigate();

  const palette = getPalette();

  function handleToggle(sectionTitle: string) {
    setOpenSections((prevState) => ({
      ...prevState,
      [sectionTitle]: !prevState[sectionTitle],
    }));
  }

  return (
    <div
      id={id}
      style={{
        width: width,
        minHeight: 300,
        height: height,
        maxHeight: 737,
        overflow: "hidden",
        overflowY: "scroll",
        backgroundColor: bgColor ? bgColor : palette.primary,
        marginBottom: 5,
        marginTop: marginTop,
        marginLeft: marginLeft,
        borderRadius: "12px",
        position: "relative",
      }}
    >
      <List component="nav">
        {sections.map((section, index) => (
          <React.Fragment key={index}>
            {/* Main Section List Item */}
            <ListItem button onClick={() => handleToggle(section.title)} sx={{ flexDirection: "row", alignItems: "center", paddingX: 0.75, paddingY: 0.5 }}>
              {openSections[section.title] ? (
                <KeyboardArrowDownRounded sx={{ color: arrowColor ? arrowColor : palette.secondary }} />
              ) : (
                <KeyboardArrowRightRounded sx={{ color: arrowColor ? arrowColor : palette.secondary }} />
              )}
              <Typography variant="h6" sx={{ fontSize: 16, color: txtColor ? txtColor : palette.secondary }}>
                {section.title}
              </Typography>
            </ListItem>

            {/* Collapsible Subsections */}
            {section.subsections?.length && (
              <Collapse in={openSections[section.title]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding sx={{ paddingLeft: 4 }}>
                  {section.subsections.map((subsection, subIndex) => (
                    <React.Fragment key={subIndex}>
                      {/* Subsection Header (Unclickable) */}
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontSize: 12,
                          marginTop: 1,
                          paddingLeft: 0.75,
                          color: labelColor ? labelColor : palette.secondary,
                        }}
                      >
                        {subsection.title?.toUpperCase()}
                      </Typography>

                      {/* Clickable List Items under the subsection */}
                      {subsection.items &&
                        subsection.items.map((item, itemIndex) => (
                          <ListItem
                            key={itemIndex}
                            button
                            onClick={item.path ? () => navigate(item.path as string) : item.onClick}
                            sx={{ color: txtColor ? txtColor : palette.secondary, paddingLeft: 4, paddingX: 0.75, paddingY: 0.25 }}
                          >
                            <Typography variant="body2" sx={{ fontSize: 16 }}>
                              {item.title}
                            </Typography>
                          </ListItem>
                        ))}
                    </React.Fragment>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
}

export default WavelengthSideBar;
