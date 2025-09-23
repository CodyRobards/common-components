import React, { ReactNode } from "react";
import Snackbar from "@mui/material/Snackbar";

import SnackbarContent from "@mui/material/SnackbarContent";

interface StandardSnackbarProps {
  type: "success" | "error" | "disabled";
  //snackBarColor?: string;
  show: boolean;
  closeIcon: ReactNode | React.JSX.Element;
  icon?: ReactNode;

  toggleShow: (on: boolean) => void;
  // The variable 'show' is used later, the linter is not picking it up

  // setShow: (show: boolean) => void;
  horryAlign?: "left" | "right" | "center";
  vertyAlign?: "top" | "bottom";
  durationSb?: number;
  width?: string | number;
  message?: string | ReactNode;
  customVertyAlign?: string;
  id?: string;
}

export function WavelengthStandardSnackbar({ type, show, icon, horryAlign, vertyAlign, durationSb, width, message, customVertyAlign, toggleShow, closeIcon, id }: StandardSnackbarProps) {
  const handleClose = () => {
    toggleShow(false);
  };

  const durationMs = durationSb ? durationSb * 1000 : 4000;
  let bgColor = "";
  if (type === "success") {
    bgColor = "#25ab21";
  } else if (type === "error") {
    bgColor = "#FF4646";
  } else if (type === "disabled") {
    bgColor = "#737373";
  }

  const sIcon = icon ? icon : "";

  return (
    <Snackbar // z-index is set to the recommend value of 1400, but other components are not adjusted to take this into account - 24 Sep 24
      id={id}
      sx={{ marginTop: customVertyAlign ? `${customVertyAlign}` : "", zIndex: 1400 }}
      open={show}
      onClose={handleClose}
      autoHideDuration={durationMs}
      anchorOrigin={{
        vertical: vertyAlign ? vertyAlign : "top",
        horizontal: horryAlign ? horryAlign : "center",
      }}
    >
      <SnackbarContent
        style={{
          backgroundColor: bgColor,
          borderRadius: "1px",

          //color: props.textColor ? props.textColor : palette.secondary,
        }}
        sx={{ paddingTop: "0px", paddingBottom: "0px" }}
        message={
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",

              width: width,
            }}
          >
            <div style={{ gridColumnStart: 2, gridColumnEnd: 5, textAlign: "center", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }} id="snackbar">
              <div style={{ marginTop: "5px" }}>{sIcon}</div>
              <div style={{ fontSize: "1rem", marginLeft: "10px" }}>{message ? message : "Insert Message Here"}</div>
            </div>
            <div style={{ gridColumnStart: 6 }} onClick={handleClose}>
              {closeIcon}
            </div>
          </div>
        }
      ></SnackbarContent>
    </Snackbar>
  );
}

WavelengthStandardSnackbar.displayName = "WavelengthStandardSnackbar";

export default WavelengthStandardSnackbar;
