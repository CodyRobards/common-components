import React from "react";
import { getPalette } from "../../themes/Palette";

interface WavelengthExampleComponentProps {
  width?: number;
  height?: number;
}

export function WavelengthExampleComponent({ width = 100, height = 100 }: WavelengthExampleComponentProps) {
  //#region CSS

  // Retrieves the Palette for this Component
  const palette = getPalette();

  const divStyle = {
    display: "inline-block",
    border: "1px solid black",
    padding: "5px",
    borderRadius: "5px",
  };

  //#endregion

  return (
    <div style={divStyle}>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 96 105">
        <g fill={palette.primary} stroke={palette.secondary} strokeLinejoin="round" strokeLinecap="round">
          <path d="M14,40v24M81,40v24M38,68v24M57,68v24M28,42v31h39v-31z" strokeWidth="12" />
          <path d="M32,5l5,10M64,5l-6,10 " strokeWidth="2" />
        </g>
        <path d="M22,35h51v10h-51zM22,33c0-31,51-31,51,0" fill={palette.primary} />
        <g fill="#FFF">
          <circle cx="36" cy="22" r="2" />
          <circle cx="59" cy="22" r="2" />
        </g>
      </svg>
    </div>
  );
}

export default WavelengthExampleComponent;
