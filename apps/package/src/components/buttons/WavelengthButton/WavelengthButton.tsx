import React, { useEffect, useRef } from "react";
import "../../../web-components/wavelength-button";

export interface WavelengthButtonProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "contained" | "outlined" | "text";
  size?: "small" | "medium" | "large";
  height?: string;
  width?: string;
  margin?: string;
  padding?: string;
  colorOne?: string;
  colorTwo?: string;
  fontSize?: string;
  disabled?: boolean;
  borderRadius?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  children?: React.ReactNode;
  href?: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
  boxShadow?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const WavelengthButton: React.FC<WavelengthButtonProps> = ({
  variant,
  size,
  height,
  width,
  margin,
  padding,
  colorOne,
  colorTwo,
  fontSize,
  disabled,
  borderRadius,
  onClick,
  children,
  className,
  href,
  target,
  boxShadow,
  style,
  ...rest
}) => {
  const ref = useRef<HTMLElement>(null);
  const latestOnClick = useRef<typeof onClick>();

  useEffect(() => {
    latestOnClick.current = onClick;
  }, [onClick]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const setAttr = (name: string, value?: string | boolean) => {
      if (value === undefined || value === null || value === false) {
        el.removeAttribute(name);
        return;
      }
      if (typeof value === "boolean") {
        el.setAttribute(name, "");
      } else {
        el.setAttribute(name, value);
      }
    };

    setAttr("variant", variant);
    setAttr("size", size);
    setAttr("height", height);
    setAttr("width", width);
    setAttr("margin", margin);
    setAttr("padding", padding);
    setAttr("color-one", colorOne);
    setAttr("color-two", colorTwo);
    setAttr("font-size", fontSize);
    setAttr("border-radius", borderRadius);
    setAttr("href", href);
    setAttr("target", target);
    setAttr("box-shadow", boxShadow);

    // disabled is boolean-attribute semantics
    if (disabled) el.setAttribute("disabled", "");
    else el.removeAttribute("disabled");
  }, [variant, size, height, width, margin, padding, colorOne, colorTwo, fontSize, borderRadius, disabled, href, target, boxShadow]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleClick = (e: Event) => {
      if (el.hasAttribute("disabled")) return;

      const fn = latestOnClick.current;

      if (fn) {
        fn(e as unknown as React.MouseEvent<HTMLElement>);
      }
    };

    el.addEventListener("click", handleClick);
    return () => {
      el.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <wavelength-button ref={ref} className={className} style={style} {...rest}>
      {children}
    </wavelength-button>
  );
};

export default WavelengthButton;
