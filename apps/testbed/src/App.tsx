import "./App.css";
import { Route, Routes } from "react-router-dom";
import PageHome from "./pages/PageHome";
import PageButton from "./pages/PageButton";
// import PageIconButtonTest from './pages/PageIconButtonTest';
import { Frame } from "./components/Frame/Frame";
import { useEffect } from "react";
import PageTitle from "./pages/PageTitle";
import PageTrail from "./pages/PagePlaneTrail";
import PageFooter from "./pages/PageFooter";
import PageTextField from "./pages/PageTextField";
// import PageCardFlip from './pages/PageCardFlip';
// import PageCardFront from './pages/PageCardFront';
// import PageCardBack from './pages/PageCardBack';
// import PageStandardComponent from './pages/PageStandardComponent';
import PageBrownBox from "./pages/PageBrownBox";
import PagePlaceholder from "./pages/PagePlaceholder";
import PageAutoComplete from "./pages/PageAutocomplete";
import PageManyPlanes from "./pages/PageManyPlanes";
import PageConfirmationModal from "./pages/PageConfirmationModal";
import PageCarousel from "./pages/PageCarousel";
// import { PageContentModal } from './pages/PageContentModal';
import PageSearchBar from "./pages/PageSearchBar";
import PageBanner from "./pages/PageBanner";
// import PageWavelengthAppLogo from "./pages/PageWavelengthAppLogo";
// import PageAppLogo from "./pages/PageAppLogo";
import PagePopUpMenu from "./pages/PagePopUpMenu";
import PagePagination from "./pages/PagePagination";
import PageSnackbar from "./pages/PageSnackbar";
import PageNotAvailable from "./pages/PageNotAvailable";
import PageStandardSnackbar from "./pages/PageStandardSnackbar";
import PageSideBar from "./pages/PageSideBar";
import PageSpinningLogo from "./pages/PageSpinningLogo";
import PageFileDownloader from "./pages/PageFileDownloader";
import PageDropdown from "./pages/PageDropdown";
import PageSlider from "./pages/PageSlider";
import PageFaq from "./pages/PageFaq";
import { WavelengthFooter } from "@wavelengthusaf/components";
import PageStyledButton from "./pages/PageStyledButton";
// import PageTextField from "./pages/PageTextField";
import PageDragAndDrop from "./pages/PageDragAndDrop";
import PageProgressBar from "./pages/PageProgressBar";
import PageSubDataTableFour from "./pages/PageSubDataFour";
import PageSubDataTableFive from "./pages/PageSubDataFive";
import PageCommentDisplay from "./pages/PageCommentDisplay";
// import PageWavelengthTestSnackbar from './pages/PageWavelengthTestSnackbar';
import PageChildData from "./pages/pageChildDat";
// import PageDataInputTestThree from "./pages/dateInputTest";
import PageAutoTest from "./pages/ewAutoTest";
// import PageInputDatePicker from "./pages/PageInputDatePicker";

export default function App() {
  // One Time Load on App Start
  useEffect(() => {
    console.log("Loading");
  }, []);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet"></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      ></link>

      <Frame>
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/Faqs" element={<PageFaq />} />
          <Route path="/Button" element={<PageButton />} />
          <Route path="/SearchBar" element={<PageSearchBar />} />
          <Route path="/Title&Subtitle" element={<PageTitle />} />
          <Route path="/PlaneTrail" element={<PageTrail />} />
          <Route path="/StyledButton" element={<PageStyledButton />} />
          {/* <Route path="/TextField" element={<PageTextField />} /> */}
          <Route path="/DragAndDrop" element={<PageDragAndDrop />} />
          <Route path="/Comment" element={<PageCommentDisplay />} />
          <Route path="/ProgressBar" element={<PageProgressBar />} />
          {/* <Route path="/DateInputThree" element={<PageDataInputTestThree />} /> */}
          {/* <Route path="/InputDatePicker" element={<PageInputDatePicker />} /> */}
          {/* <Route path="/StandardComponent" element={<PageStandardComponent />} /> */}
          <Route path="/Footer" element={<PageFooter />} />
          {/* <Route path="/bee" element={<PageBee />} /> */}
          {/* <Route path="/AceOfSpadesComponent" element={<PageAceOfSpadesComponent />} /> */}
          {/* <Route path="/WavelengthAppLogo" element={<PageWavelengthAppLogo />} /> */}
          <Route path="/FileDownloader" element={<PageFileDownloader />} />
          <Route path="/Slider" element={<PageSlider />} />
          {/* <Route path="/PageAutoTest" element={<PageAutoTest />} /> */}
          {/* <Route path="/old563EWSLogo" element={<PageOld563EWSLogo />} />
          <Route path="/ARROW" element={<PageArrow />} />
          <Route path="/Portal" element={<PagePortal />} />
          <Route path="/SWARM" element={<PageSwarm />} />
          <Route path="/RapidRef" element={<PageRapidref />} />
          <Route path="/Unit563" element={<Page563 />} />
          <Route path="/Wavelength" element={<PageWavelength />} /> */}
          <Route path="/BrownBox" element={<PageBrownBox />} />
          <Route path="/DropdownMenu" element={<PageDropdown />} />
          <Route path="/Placeholder" element={<PagePlaceholder />} />
          {/* <Route path="/IconButton" element={<PageIconButtonTest />} /> */}
          <Route path="/Autocomplete" element={<PageAutoComplete />} />
          <Route path="/ManyPlanes" element={<PageManyPlanes />} />
          <Route path="/ConfirmationModal" element={<PageConfirmationModal />} />
          <Route path="/Carousel" element={<PageCarousel />} />
          <Route path="/ChildData" element={<PageChildData />} />
          {/* <Route path="/ContentModal" element={<PageContentModal />} /> */}
          <Route path="/Banner" element={<PageBanner />} />
          <Route path="/PopUpMenu" element={<PagePopUpMenu />} />
          <Route path="/Pagination" element={<PagePagination />} />
          <Route path="/SnackBar" element={<PageSnackbar />} />
          <Route path="/PageNotAvailable" element={<PageNotAvailable />} />
          <Route path="/StandardSnackbar" element={<PageStandardSnackbar />} />
          <Route path="/SideBar" element={<PageSideBar />} />
          <Route path="/SpinningLogo" element={<PageSpinningLogo />} />
          <Route path="/SubDataFour" element={<PageSubDataTableFour />} />
          <Route path="/SubDataFive" element={<PageSubDataTableFive />} />
          <Route path="/TextField" element={<PageTextField />} />

          {/* AutoTestThree */}
          {/* <Route path="/WavelengthTestSnackbar" element={<PageWavelengthTestSnackbar />} /> */}
        </Routes>
      </Frame>
      <WavelengthFooter text="563 EWS" />
    </>
  );
}
