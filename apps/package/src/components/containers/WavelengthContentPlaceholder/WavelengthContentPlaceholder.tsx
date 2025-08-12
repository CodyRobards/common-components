import { getPalette } from "../../../themes/Palette";
import React, { ReactNode } from "react";

interface WavelengthContentPlaceholderProps {
  type?: "circle" | "rectangle";
  width?: string | number;
  height?: string | number;
  txtcolor?: string;
  bgcolor?: string;
  children: ReactNode;
  id?: string;
}
export function WavelengthContentPlaceholder({ type, width, height, txtcolor, bgcolor, children, id }: WavelengthContentPlaceholderProps) {
  //#region CSS

  // Retrieves the Palette for this Component
  const palette = getPalette();

  const divStyleRectangle = {
    display: "flex",
    border: "1px solid black",
    padding: "5px",
    borderRadius: "5px",
    background: bgcolor ? bgcolor : palette.primary,
    width: width ? width : 200,
    height: height ? height : 200,
    color: txtcolor ? txtcolor : palette.secondary,
    alignItems: "center",
    justifyContent: "center",
  };

  const divStyleCircle = {
    display: "flex",
    border: "1px solid black",
    padding: "5px",
    borderRadius: "50%",
    background: bgcolor ? bgcolor : bgcolor,
    width: width ? width : 200,
    height: height ? height : 200,
    color: txtcolor ? txtcolor : txtcolor,
    alignItems: "center",
    justifyContent: "center",
  };

  if (type === "circle") {
    return (
      <div style={divStyleCircle} id={id}>
        {children}
      </div>
    );
  } else {
    return (
      <div style={divStyleRectangle} id={id}>
        {children}
      </div>
    );
  }

  //#endregion
}

export default WavelengthContentPlaceholder;
