import React, { ReactNode } from "react";
import { getPalette } from "../../themes/Palette";

import Snackbar from "@mui/material/Snackbar";
import SnackbarContent from "@mui/material/SnackbarContent";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

interface ConfirmationSnackbarProps {
  show: boolean;
  // The variable 'show' is used later, the linter is not picking it up
  setShow: (show: boolean) => void;
  closeIcon?: ReactNode | React.JSX.Element;
  message?: ReactNode | React.JSX.Element;
  snackBarColor?: string;
  textColor?: string;
  horryAlign?: "left" | "right" | "center";
  vertyAlign?: "top" | "bottom";
  durationSb?: number;
  id?: string;
  width?: string | number;
  icon?: ReactNode;
}

export function WavelengthSnackbar({ show, setShow, closeIcon, message, snackBarColor, textColor, horryAlign, vertyAlign, durationSb, width, icon, id }: ConfirmationSnackbarProps) {
  const handleClose = () => {
    setShow(false);
  };

  const defaultIcon = (
    <IconButton size="small" aria-label="close" color="inherit">
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  const palette = getPalette();
  const durationMs = durationSb ? durationSb * 1000 : 4000;
  return (
    <Snackbar
      id={id}
      open={show}
      onClose={handleClose}
      autoHideDuration={durationMs}
      anchorOrigin={{
        vertical: vertyAlign ? vertyAlign : "bottom",
        horizontal: horryAlign ? horryAlign : "center",
      }}
    >
      <SnackbarContent
        style={{
          backgroundColor: snackBarColor ? snackBarColor : palette.primary,
          color: textColor ? textColor : palette.secondary,
          display: "flex",

          width: width,
        }}
        message={
          <div>
            <span>{icon}</span>
            <span id="snackbar">{message ? message : "Insert Message Here"}</span>
          </div>
        }
        action={
          <div style={{ display: "flex", justifyContent: "center" }} onClick={handleClose}>
            {closeIcon ? closeIcon : defaultIcon}
          </div>
        }
      ></SnackbarContent>
    </Snackbar>
  );
}

export default WavelengthSnackbar;
