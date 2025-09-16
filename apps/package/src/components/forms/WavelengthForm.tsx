import React, { useEffect, useImperativeHandle, useRef } from "react";
import { z } from "zod";

// ---- Types that mirror the web component's API ----
/** Attributes passed through to the underlying `wavelength-button` */
export interface WavelengthButtonAttributes extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
}

export interface ButtonConfig {
  label?: string;
  buttonProps?: WavelengthButtonAttributes;
  eventName?: string;
}

/** Attributes passed through to each generated `wavelength-input` */
export interface WavelengthInputAttributes extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
}

interface WavelengthFormElement extends HTMLElement {
  schema?: unknown;
  value?: Record<string, unknown>;
  validate?: () => boolean;
  leftButton?: ButtonConfig;
  centerButton?: ButtonConfig;
  rightButton?: ButtonConfig;
  inputProps?: WavelengthInputAttributes;
  idPrefix?: string;
  title: string;
  titleAlign?: string;
  titleColor?: string;
  formWidth?: string;
  layout?: number[];
  addEventListener: (type: string, listener: EventListenerOrEventListenerObject) => void;
  removeEventListener: (type: string, listener: EventListenerOrEventListenerObject) => void;
}

export type FormDetail<T> = { value: T; issues: z.ZodIssue[] };
export type FormInvalidDetail<T> = FormDetail<Partial<T>>;
export type FormValidDetail<T> = FormDetail<T>;
export type FormChangeDetail<T> = FormDetail<Partial<T>>;

export interface WavelengthFormProps<T extends object = Record<string, unknown>> {
  /** A Zod object schema */
  schema: z.ZodType<T>;
  /** Initial or controlled value (partial OK) */
  value?: Partial<T>;
  /** Configuration for an optional left-aligned button */
  leftButton?: ButtonConfig;
  /** Configuration for an optional center-aligned button */
  centerButton?: ButtonConfig;
  /** Configuration for an optional right-aligned button */
  rightButton?: ButtonConfig;
  /** Props applied to each generated WavelengthInput */
  inputProps?: WavelengthInputAttributes;
  /** Prefix applied to generated input IDs and names */
  idPrefix?: string;
  /** Optional heading text displayed above the form */
  title?: string;
  /** Alignment for the heading text (default: left) */
  titleAlign?: React.CSSProperties["textAlign"];
  /** Color for the heading text */
  titleColor?: React.CSSProperties["color"];
  /** Per-field placeholder overrides */
  placeholders?: Partial<Record<keyof T & string, string>>;
  /** CSS width applied to the underlying form element */
  formWidth?: string;
  /** Array defining how many fields appear in each row */
  layout?: number[];

  /** Standard React props */
  className?: string;
  style?: React.CSSProperties;

  /** Event callbacks (straight from web component custom events) */
  onChange?: (value: Partial<T>, issues: z.ZodIssue[]) => void;
  onValid?: (value: T, issues: z.ZodIssue[]) => void;
  onInvalid?: (value: Partial<T>, issues: z.ZodIssue[]) => void;
  /** Fired when the default left event is triggered */
  onLeft?: () => void;
  /** Fired when the default center event is triggered */
  onCenter?: () => void;
  /** Fired when the default right event is triggered */
  onRight?: () => void;
  /** Fired when the underlying form emits a native submit event */
  onSubmit?: (event: SubmitEvent) => void;
}

export interface WavelengthFormRef<T extends object = Record<string, unknown>> {
  /** Runs the component’s internal validation and returns boolean */
  validate: () => boolean;
  /** Read current value (as the element holds it) */
  getValue: () => Partial<T> | undefined;
  /** Imperatively set the value */
  setValue: (v: Partial<T>) => void;
}

function useStableCallback<F extends (...args: any[]) => any>(fn?: F) {
  const fnRef = useRef(fn);
  useEffect(() => {
    fnRef.current = fn;
  }, [fn]);
  return (...args: Parameters<F>) => fnRef.current?.(...args);
}

function WavelengthFormInner<T extends object = Record<string, unknown>>(props: WavelengthFormProps<T>, ref: React.ForwardedRef<WavelengthFormRef<T>>) {
  const {
    schema,
    value,
    className,
    style,
    onChange,
    onValid,
    onInvalid,
    leftButton,
    centerButton,
    rightButton,
    inputProps,
    idPrefix,
    title,
    titleAlign,
    titleColor,
    placeholders,
    formWidth,
    layout,
    onLeft,
    onCenter,
    onRight,
    onSubmit,
  } = props;
  const hostRef = useRef<WavelengthFormElement | null>(null);

  const onChangeStable = useStableCallback(onChange);
  const onValidStable = useStableCallback(onValid);
  const onInvalidStable = useStableCallback(onInvalid);
  const onLeftStable = useStableCallback(onLeft);
  const onCenterStable = useStableCallback(onCenter);
  const onRightStable = useStableCallback(onRight);
  const onSubmitStable = useStableCallback(onSubmit);

  // Set properties & bind events
  useEffect(() => {
    const el = hostRef.current;
    if (!el) return;

    // Set schema/value as *properties* (not attributes)
    let finalSchema: unknown = schema;
    if (placeholders) {
      const shape: any = (schema as any)?.shape;
      if (shape) {
        const overrides: Record<string, any> = {};
        for (const [key, ph] of Object.entries(placeholders)) {
          const field = shape[key];
          if (field && typeof (field as any).meta === "function") {
            const curMeta = (field as any).meta() || {};
            overrides[key] = (field as any).meta({ ...curMeta, placeholder: ph });
          }
        }
        if (Object.keys(overrides).length > 0 && typeof (schema as any).extend === "function") {
          finalSchema = (schema as any).extend(overrides);
        }
      }
    }
    el.schema = finalSchema as any;
    if (value) el.value = value as any;
    if (leftButton !== undefined) el.leftButton = leftButton as any;
    if (centerButton !== undefined) el.centerButton = centerButton as any;
    if (rightButton !== undefined) el.rightButton = rightButton as any;
    if (inputProps !== undefined) el.inputProps = inputProps as any;
    el.idPrefix = idPrefix as any;
    if (title !== undefined) el.title = title;
    if (titleAlign !== undefined) el.titleAlign = titleAlign as any;
    if (titleColor !== undefined) el.titleColor = titleColor as any;
    if (formWidth !== undefined) el.formWidth = formWidth;
    if (layout !== undefined) el.layout = layout;
  }, [
    schema,
    value,
    leftButton,
    centerButton,
    rightButton,
    inputProps,
    idPrefix,
    title,
    titleAlign,
    titleColor,
    placeholders,
    formWidth,
    layout,
  ]);

  useEffect(() => {
    const el = hostRef.current;
    if (!el) return;

    const handleChange = (e: Event) => {
      const detail = (e as CustomEvent<FormChangeDetail<T>>).detail;
      onChangeStable?.(detail?.value ?? {}, detail?.issues ?? []);
    };
    const handleValid = (e: Event) => {
      const detail = (e as CustomEvent<FormValidDetail<T>>).detail;
      onValidStable?.(detail?.value as T, detail?.issues ?? []);
    };
    const handleInvalid = (e: Event) => {
      const detail = (e as CustomEvent<FormInvalidDetail<T>>).detail;
      onInvalidStable?.(detail?.value ?? {}, detail?.issues ?? []);
    };

    el.addEventListener("form-change", handleChange as EventListener);
    el.addEventListener("form-valid", handleValid as EventListener);
    el.addEventListener("form-invalid", handleInvalid as EventListener);
    el.addEventListener("form-left", onLeftStable as EventListener);
    el.addEventListener("form-center", onCenterStable as EventListener);
    el.addEventListener("form-right", onRightStable as EventListener);
    el.addEventListener("submit", onSubmitStable as EventListener);

    return () => {
      el.removeEventListener("form-change", handleChange as EventListener);
      el.removeEventListener("form-valid", handleValid as EventListener);
      el.removeEventListener("form-invalid", handleInvalid as EventListener);
      el.removeEventListener("form-left", onLeftStable as EventListener);
      el.removeEventListener("form-center", onCenterStable as EventListener);
      el.removeEventListener("form-right", onRightStable as EventListener);
      el.removeEventListener("submit", onSubmitStable as EventListener);
    };
  }, [
    onChangeStable,
    onValidStable,
    onInvalidStable,
    onLeftStable,
    onCenterStable,
    onRightStable,
    onSubmitStable,
  ]);

  // Expose an imperative API (validate/getValue/setValue)
  useImperativeHandle(
    ref,
    () => ({
      validate: () => hostRef.current?.validate?.() ?? false,
      getValue: () => hostRef.current?.value as any,
      setValue: (v) => {
        if (hostRef.current) hostRef.current.value = v as any;
      },
    }),
    [],
  );

  return <wavelength-form ref={hostRef as any} className={className} style={style} />;
}

const WavelengthFormForwardRef = React.forwardRef(WavelengthFormInner);
WavelengthFormForwardRef.displayName = "WavelengthForm";

export const WavelengthForm = WavelengthFormForwardRef as <T extends object = Record<string, unknown>>(
  props: WavelengthFormProps<T> & React.RefAttributes<WavelengthFormRef<T>>,
) => React.ReactElement | null;

export default WavelengthForm;
