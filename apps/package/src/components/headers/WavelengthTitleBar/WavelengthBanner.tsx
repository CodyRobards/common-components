import { useEffect, useRef } from "react";
import "../../../web-components/wavelength-banner";

export interface WavelengthBannerProps {
  bannerText?: string;
  bannerColor?: string;
  textColor?: string;
  opacity?: string | number;
  zIndex?: string | number;
  id?: string;
  classification?: string;
  control?: string[];
}

export function WavelengthBanner({ bannerText, bannerColor, textColor, opacity = 1, zIndex = 10, id, classification, control }: WavelengthBannerProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;

    if (bannerText !== undefined) el.setAttribute("banner-text", bannerText);
    if (bannerColor !== undefined) el.setAttribute("banner-color", bannerColor);
    if (textColor !== undefined) el.setAttribute("text-color", textColor);
    if (classification !== undefined) el.setAttribute("classification", classification);
    if (control !== undefined) el.setAttribute("control", String(control));
    if (opacity !== undefined) el.setAttribute("opacity", String(opacity));
    if (zIndex !== undefined) el.setAttribute("z-index", String(zIndex));
    if (id) el.setAttribute("id", id);
  }, [bannerText, bannerColor, textColor, classification, control, opacity, zIndex, id]);

  return <wavelength-banner ref={ref} />;
}

export default WavelengthBanner;
