import { useEffect, useRef } from "react";
import "@wavelengthusaf/web-components";

interface WavelengthTitleBarProps {
  titleText?: string;
  subtitleText?: string;
  textColor?: string;
  shadowColor?: string;
}

export function WavelengthTitleBar({ titleText, subtitleText, textColor, shadowColor }: WavelengthTitleBarProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.setAttribute("title-text", titleText || "Default Title");
      ref.current.setAttribute("subtitle-text", subtitleText || "Default Subtitle");
      ref.current.setAttribute("text-color", textColor || "#34649b");
      ref.current.setAttribute("shadow-color", shadowColor || "");
    }
  }, [titleText, subtitleText, textColor, shadowColor]);

  return <wavelength-title-bar ref={ref}></wavelength-title-bar>;
}

WavelengthTitleBar.displayName = "WavelengthTitleBar";

export default WavelengthTitleBar;
