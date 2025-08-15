import { ReactNode } from "react";
import "./Frame.css";
import Box from "@mui/material/Box";

import CssBaseline from "@mui/material/CssBaseline";

import CustomAppBar from "../CustomAppBar/CustomAppBar";
import { WavelengthSideBar } from "@wavelengthusaf/components";

const drawerWidth = 240;
const sections = [
  {
    title: "Getting Started",
    subsections: [
      {
        items: [
          { title: "Instructions", path: "/" },
          { title: "FAQs", path: "/Faqs" },
          { title: "Playground", path: "/Playground" },
        ],
      },
    ],
  },
  {
    title: "Components",
    subsections: [
      {
        title: "Content",
        items: [
          { title: "App Logo", path: "/WavelengthAppLogo" },
          { title: "Brown Box", path: "/BrownBox" },
          { title: "Carousel", path: "/Carousel" },
          { title: "Comment", path: "/Comment" },
          { title: "Page Not Available", path: "/PageNotAvailable" },
          { title: "Placeholder", path: "/Placeholder" },
          { title: "Pagination", path: "/Pagination" },
          { title: "Progress Bar", path: "/ProgressBar" },
          { title: "Side Bar", path: "/SideBar" },
          { title: "Spinning Logo", path: "/SpinningLogo" },
          { title: "Title & Subtitle", path: "/Title&Subtitle" },
        ],
      },
      {
        title: "Inputs",
        items: [
          { title: "Autocomplete", path: "/Autocomplete" },
          { title: "Button", path: "/button" },
          { title: "Drag and Drop", path: "/DragAndDrop" },
          { title: "Styled Button", path: "/StyledButton" },
          { title: "File Downloader", path: "/FileDownloader" },
          { title: "Search Bar", path: "/SearchBar" },
          { title: "Slider", path: "/Slider" },
          { title: "Text Field", path: "/TextField" },
        ],
      },
      {
        title: "Pop Ups",
        items: [
          { title: "Confirmation Modal", path: "/ConfirmationModal" },
          { title: "Dropdown Menu", path: "/DropdownMenu" },
          { title: "Pop Up Menu", path: "/PopUpMenu" },
          { title: "Snack Bar", path: "/SnackBar" },
          { title: "Standard Snackbar", path: "/StandardSnackbar" },
        ],
      },
      {
        title: "Statics",
        items: [
          { title: "Banner", path: "/Banner" },
          { title: "Footer", path: "/Footer" },
          { title: "Many Planes", path: "/ManyPlanes" },
          { title: "Plane Trail", path: "/PlaneTrail" },
        ],
      },
    ],
  },
];

interface FrameProps {
  children: ReactNode;
}

export function Frame({ children }: FrameProps) {
  return (
    // backgroundColor: "#092E42"
    <Box sx={{ backgroundColor: "#092E42", height: "100%", display: "grid", gridTemplateColumns: "15% 80%" }}>
      <CssBaseline />
      <CustomAppBar></CustomAppBar>

      <div className="sidebar-pos">
        <div className="sidebar">
          <WavelengthSideBar sections={sections} txtColor="white" marginLeft="25px" marginTop="60px" bgColor="#15384b" width={drawerWidth} labelColor="#758d99" height={600} />
        </div>
      </div>

      <Box className="box">
        <div id="frame-container">
          <div id="content-container">{children}</div>
        </div>
      </Box>
    </Box>
  );
}
