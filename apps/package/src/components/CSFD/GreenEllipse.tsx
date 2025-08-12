import Grid from "@mui/material/Grid";
import React from "react";

interface EllipseProps {
  width?: number;
  height?: number;
  initials?: string;
}

export function GreenEllipse({ width = 65, height = 65, initials = "HW" }: EllipseProps) {
  //#region CSS

  const divStyle = {
    display: "inline-block",
    border: "1px solid black",
    padding: "5px",
    borderRadius: "5px",
    background: "#2B6DBACC",
  };

  //#endregion

  return (
    <Grid container style={divStyle}>
      <Grid item>
        <svg width={width} height={height} viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="35.5" cy="35.5" r="32.5" stroke="#00FF0A" strokeWidth="5" strokeDasharray="1 3">
            <text x="5" y="30" fill="white" fontSize="35">
              HW
            </text>
          </circle>
          <text x="14" y="34" fill="white" fontSize="26" alignmentBaseline="mathematical">
            {initials}
          </text>
        </svg>
      </Grid>
      {/* <Grid id = "initials" item>{initials}</Grid> */}
    </Grid>
  );
}

export default GreenEllipse;
