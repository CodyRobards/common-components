import React, { useRef, useEffect } from "react";
import "../../web-components/wavelength-progress-bar";

export interface WavelengthProgressBarProps extends React.HTMLAttributes<HTMLElement> {
  name?: string;
  value?: number;
  width?: string;
  height?: string;
  fontSize?: string;
  fontColor?: string;
  progressBorder?: string;
  progressColor?: string;
}

export const WavelengthProgressBar: React.FC<WavelengthProgressBarProps> = ({ name, value, width, height, fontSize, fontColor, progressBorder, progressColor, ...rest }) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      if (name !== undefined) ref.current.setAttribute("name", name);
      if (value !== undefined) ref.current.setAttribute("value", value.toString());
      if (width !== undefined) ref.current.setAttribute("width", width);
      if (height !== undefined) ref.current.setAttribute("height", height);
      if (fontSize !== undefined) ref.current.setAttribute("font-size", fontSize);
      if (fontColor !== undefined) ref.current.setAttribute("font-color", fontColor);
      if (progressBorder !== undefined) ref.current.setAttribute("progress-border", progressBorder);
      if (progressColor !== undefined) ref.current.setAttribute("progress-color", progressColor);
    }
  }, [name, value, width, height, fontSize, fontColor, progressBorder, progressColor]);

  return <wavelength-progress-bar ref={ref} {...rest} />;
};

WavelengthProgressBar.displayName = "WavelengthProgressBar";

export default WavelengthProgressBar;
