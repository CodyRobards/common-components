import React, { useRef, useEffect, forwardRef, useImperativeHandle, ChangeEvent, CSSProperties } from "react";
import "../../web-components/wavelength-input";

interface WavelengthInputProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  name?: string;
  value?: string;
  clearable?: boolean;
  placeholder?: string;
  inputType?: string;
  regex?: string;
  helperMessage?: string;
  errorMessage?: string;
  minLengthMessage?: string;
  maxLengthMessage?: string;
  validationType?: "none" | "always" | "onBlur" | "manual";
  minLength?: number;
  maxLength?: number;
  required?: boolean;
  forceError?: boolean;
  disabled?: boolean;
  width?: string;
  height?: string;
  padding?: string;
  borderRadius?: string;
  backgroundColor?: string;
  labelColor?: string;
  placeholderColor?: string;
  textColor?: string;
  borderColor?: string;
  focusColor?: string;
  helperColor?: string;
  label?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const WavelengthInput = forwardRef<HTMLElement & { validate?: () => boolean }, WavelengthInputProps>(
  (
    {
      id,
      name,
      value,
      clearable,
      placeholder,
      inputType = "text",
      regex,
      helperMessage,
      errorMessage,
      minLengthMessage,
      maxLengthMessage,
      validationType = "none",
      minLength,
      maxLength,
      required,
      forceError,
      disabled,
      width,
      height,
      padding,
      borderRadius,
      backgroundColor,
      labelColor,
      placeholderColor,
      textColor,
      borderColor,
      focusColor,
      helperColor,
      label,
      onChange,
      style,
      ...rest
    },
    ref,
  ) => {
    const internalRef = useRef<HTMLElement>(null);

    useImperativeHandle(ref, () => ({
      ...(internalRef.current as HTMLElement),
      validate: () => (internalRef.current as any)?.validate?.(true),
    }));

    useEffect(() => {
      const el = internalRef.current;
      if (!el) return;

      const set = (attr: string, val?: string | number | boolean) => {
        if (val !== undefined && val !== null && val !== false) {
          el.setAttribute(attr, String(val));
        } else {
          el.removeAttribute(attr);
        }
      };

      set("id", id);
      set("name", name);
      set("value", value);
      set("clearable", clearable ? "" : undefined);
      set("placeholder", placeholder);
      set("input-type", inputType);
      set("regex", regex);
      set("helper-message", helperMessage);
      set("error-message", errorMessage);
      set("min-length-message", minLengthMessage);
      set("max-length-message", maxLengthMessage);
      set("validation-type", validationType);
      set("min-length", minLength);
      set("max-length", maxLength);
      set("required", required ? "" : undefined);
      set("force-error", forceError ? "" : undefined);
      set("width", width);
      set("height", height);
      set("padding", padding);
      set("border-radius", borderRadius);
      set("background-color", backgroundColor);
      set("label-color", labelColor);
      set("placeholder-color", placeholderColor);
      set("text-color", textColor);
      set("border-color", borderColor);
      set("focus-color", focusColor);
      set("helper-color", helperColor);
      set("label", label);
      set("disabled", disabled ? "" : undefined);
    }, [
      id,
      name,
      value,
      clearable,
      placeholder,
      inputType,
      regex,
      helperMessage,
      errorMessage,
      minLengthMessage,
      maxLengthMessage,
      validationType,
      minLength,
      maxLength,
      required,
      forceError,
      width,
      height,
      padding,
      borderRadius,
      backgroundColor,
      labelColor,
      placeholderColor,
      textColor,
      borderColor,
      focusColor,
      helperColor,
      label,
      disabled,
    ]);

    useEffect(() => {
      const el = internalRef.current;
      if (!el || !onChange) return;

      const handler = (e: Event) => {
        const input = el.shadowRoot?.querySelector("input");
        if (input) {
          const synthetic = {
            ...e,
            target: input,
            currentTarget: input,
          } as unknown as ChangeEvent<HTMLInputElement>;
          onChange(synthetic);
        }
      };

      el.addEventListener("inputChange", handler);
      return () => el.removeEventListener("inputChange", handler);
    }, [onChange]);

    const combinedStyle: CSSProperties = {
      ...style,
      ...(backgroundColor ? { ["--wavelength-label-background" as any]: backgroundColor } : {}),
    };

    return <wavelength-input ref={internalRef} style={combinedStyle} {...rest} />;
  },
);

WavelengthInput.displayName = "WavelengthInput";

export default WavelengthInput;
