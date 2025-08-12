import React, { ReactNode } from "react";

import { getPalette } from "../../../themes/Palette";
import Grid from "@mui/material/Grid";

interface WavelengthBoxProps {
  width?: number;
  height?: number;
  children: ReactNode;
  borderTopRadius?: string;
  borderBottomRadius?: string;
  id?: string;
}

export function WavelengthBox({ width, height, children, borderBottomRadius, borderTopRadius, id }: WavelengthBoxProps) {
  const palette = getPalette();

  //#region CSS
  //#endregion

  return (
    <Grid
      container
      sx={{
        width: { width },
        height: { height },
        borderTopLeftRadius: borderTopRadius,
        borderTopRightRadius: borderTopRadius,
        borderBottomLeftRadius: borderBottomRadius,
        borderBottomRightRadius: borderBottomRadius,
        borderColor: "#70714B",
        bgcolor: palette.primary ? palette.primary : "brown",
        border: "1px solid grey",
      }}
    >
      <Grid container direction={"row"} alignItems={"flex-end"} justifyContent={"space-evenly"}>
        {children}
      </Grid>
    </Grid>
  );
}

export default WavelengthBox;
