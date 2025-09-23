import styled from "@emotion/styled";
import React from "react";
import { getPalette } from "../../themes/Palette";
import TextField, { TextFieldProps } from "@mui/material/TextField";

export function WavelengthSearchTextField() {
  const palette = getPalette();
  const WavelengthSearchTextField = styled(TextField)<TextFieldProps>(() => ({
    "&.MuiTextField-root": {
      "& label.Mui-focused": {
        color: `${palette.primary}`,
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#2D3140",
        },
        "&:hover fieldset": {
          borderColor: `${palette.primary}`,
        },
        "&.Mui-focused fieldset": {
          borderColor: `${palette.primary}`,
        },
      },
    },
  }));
  return <WavelengthSearchTextField />;
}

WavelengthSearchTextField.displayName = "WavelengthSearchTextField";

export default WavelengthSearchTextField;
