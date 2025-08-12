import { useEffect, useRef } from "react";
import "../../../web-components/wavelength-title-bar";

interface WavelengthTitleBarProps {
  titleText?: string;
  subtitleText?: string;
  textColor?: string;
  textShadow?: boolean;
}

export function WavelengthTitleBar({ titleText, subtitleText, textColor, textShadow }: WavelengthTitleBarProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.setAttribute("title-text", titleText || "Default Title");
      ref.current.setAttribute("subtitle-text", subtitleText || "Default Subtitle");
      ref.current.setAttribute("text-color", textColor || "#34649b");
      ref.current.setAttribute("has-shadow", textShadow ? "false" : "true");
    }
  }, [titleText, subtitleText, textColor, textShadow]);

  return <wavelength-title-bar ref={ref}></wavelength-title-bar>;
}

export default WavelengthTitleBar;
