import "./CustomAppBar.css";
import AppBar from "@mui/material/AppBar";
import { Box, Collapse, Divider, Drawer, IconButton, List, ListItemButton, ListItemText, Toolbar } from "@mui/material";
import { DrawerItems } from "./DrawerItems";
import { useNavigate } from "react-router-dom";
import { SearchResult, WavelengthButton, WavelengthSearch } from "@wavelengthusaf/components";
import { ExpandLess, ExpandMore, Search } from "@mui/icons-material";
import { searchBarOptions } from "./SearchbarPageRoutes";
import MenuIcon from "@mui/icons-material/Menu";
import npmr from "../../assets/npmr.png";
import gitlab from "../../assets/gitlab.png";
import figma from "../../assets/figma.png";
import wlimage from "../../assets/wavelength.png";

import React from "react";
const bgColor = "#092E42";
const template: SearchResult[] = [];
export function CustomAppBar() {
  const [option, setOptions] = React.useState(template);
  const navigate = useNavigate();

  type Anchor = "top" | "left" | "bottom" | "right";
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick1 = () => {
    setOpen1(!open1);
  };

  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === "keydown" && ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <div className="drawer">
      <Box
        sx={{
          width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
          marginTop: "30px",
          backgroundColor: bgColor,
          zIndex: 35,
        }}
        role="presentation"
      >
        <List sx={{ marginTop: "80px", color: "white" }}>
          <ListItemButton onClick={handleClick}>
            <ListItemText primary="Getting Started" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} href="/common-components/" className="noTextDecoration">
                <ListItemText primary="Instructions" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="FAQs" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={handleClick1}>
            <ListItemText primary="Components" />
            {open1 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {DrawerItems.map((item, index) => {
                return (
                  <ListItemButton key={index} href={item.link} sx={{ pl: 4 }} className="noTextDecoration">
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                );
              })}
            </List>
          </Collapse>
        </List>
        <Divider />
      </Box>
    </div>
  );
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, height: "80px", boxShadow: "none" }}>
      <Toolbar style={{ backgroundColor: bgColor, height: "80px" }}>
        <div className="leftside">
          <a href="/common-components/" className="noTextDecoration" id="wavelengthHome">
            <img src={wlimage} alt="" />
          </a>
        </div>
        <div className="rightside">
          <div id="search-icon">
            <Search sx={{ color: "#8FD8FF" }} />
          </div>
          <div className="search">
            <WavelengthSearch
              options={option}
              width="100%"
              height="50px"
              mode="automatic"
              iconPos="start"
              placeholder="Search for a component"
              borderRadius={30}
              backgroundColor="#081C27"
              textColor="white"
              children={<Search sx={{ color: "#8FD8FF" }} />}
              onChange={(e) => {
                const returnArray: SearchResult[] = [];
                const testData = [
                  { id: "6", title: "App Logo" },
                  { id: "9", title: "Autocomplete" },
                  { id: "12", title: "Banner" },
                  { id: "7", title: "Brown Box" },
                  { id: "1", title: "Button" },
                  { id: "20", title: "Carousel" },
                  { id: "27", title: "Comment Display" },
                  { id: "11", title: "Confirmation Modal" },
                  { id: "19", title: "Dropdown Menu" },
                  { id: "21", title: "File Downloader" },
                  { id: "5", title: "Footer" },
                  { id: "10", title: "Many Planes" },
                  { id: "15", title: "Page Not Available" },
                  { id: "8", title: "Placeholder" },
                  { id: "4", title: "Plane Trail" },
                  { id: "13", title: "Pop Up Menu" },
                  { id: "26", title: "Progress Bar" },

                  { id: "2", title: "Search Bar" },
                  { id: "17", title: "Side Bar" },
                  { id: "22", title: "Slider" },
                  { id: "25", title: "Drag and Drop" },

                  { id: "14", title: "Snack Bar" },
                  { id: "18", title: "Spinning Logo" },
                  { id: "16", title: "Standard Snackbar" },
                  { id: "23", title: "Styled Button" },
                  { id: "24", title: "Text Field" },
                  { id: "3", title: "Title & Subtitle" },
                ];
                testData.forEach((item) => {
                  if (item.title.toLowerCase().includes(e.target.value.toLowerCase())) {
                    returnArray.push(item);
                  }
                });
                setOptions(returnArray);
              }}
              onSearchItemSelected={(value: SearchResult | string) => {
                typeof value === "string" ? console.log(`String Response ${value}`) : console.log(`ID: ${value.id} Title: ${value.title} Subtitle: ${value.subtitle}`);

                if (typeof value !== "string") {
                  const route = searchBarOptions.get(value.title);

                  if (route !== undefined) {
                    navigate(route);
                  }
                }
              }}
            />
          </div>
          <IconButton id="npm" target="_blank" rel="noreferrer" href="https://www.npmjs.com/package/@wavelengthusaf/components">
            <img className="header-icons" src={npmr} alt="NPM Logo Button" />
          </IconButton>
          <IconButton id="gitlab" target="_blank" rel="noreferrer" href="https://gitlab.com/wavelength2/common-components/">
            <img className="header-icons" src={gitlab} alt="Gitlab Logo Button" />
          </IconButton>
          <IconButton id="figma" target="_blank" rel="noreferrer" href="https://www.figma.com/design/jVVCvaJ91hOK1Hm9I7QAYE/Common-Components?node-id=0-1&t=0Xq1ZHl0MyHIgj0l-1">
            <img className="header-icons" src={figma} alt="Figma Logo Button" />
          </IconButton>
          <WavelengthButton id="req" variant="contained" colorOne="#B1E4FF" colorTwo="#8FD8FF" borderRadius="50px">
            <a className="noTextDecoration" target="_blank" rel="noreferrer" href="https://linear.app/850swgdet1/team/COM/active">
              Request a Component
            </a>
          </WavelengthButton>
          <React.Fragment key={"top"}>
            <IconButton sx={{ display: "none" }} id="demo-positioned-button" onClick={toggleDrawer("top", !state.top)}>
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
            <Drawer anchor="top" open={state["top"]} onClose={toggleDrawer("top", false)}>
              {list("top")}
            </Drawer>
          </React.Fragment>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default CustomAppBar;
