import React, { useEffect, useImperativeHandle, useRef } from "react";
import { z } from "zod";
import type { WavelengthButtonProps } from "../buttons/WavelengthButton/WavelengthButton";

export interface FormActionConfig {
  label?: string;
  buttonProps?: Partial<HTMLButtonElement>;
  onClick?: () => void;
}

// ---- Types that mirror the web component's API ----
interface WavelengthFormElement extends HTMLElement {
  schema?: unknown;
  value?: Record<string, unknown>;
  validate?: () => boolean;
  submitLabel?: string;
  submitButtonProps?: Record<string, unknown>;
  leftButton?: { label?: string; buttonProps?: Record<string, unknown> };
  centerButton?: { label?: string; buttonProps?: Record<string, unknown> };
  rightButton?: { label?: string; buttonProps?: Record<string, unknown> };
  idPrefix?: string;
  title: string;
  titleAlign?: string;
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
  /** Label for the submit button */
  submitLabel?: string;
  /** Props forwarded to the internal wavelength-button */
  submitButtonProps?: Omit<WavelengthButtonProps, "children" | "onClick">;
  /** @deprecated Use rightButton to control visibility */
  showSubmit?: boolean;
  /** @deprecated Use leftButton.label */
  backLabel?: string;
  /** @deprecated Use leftButton.buttonProps */
  backButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  /** Prefix applied to generated input IDs */
  idPrefix?: string;
  /** Optional heading text displayed above the form */
  title?: string;
  /** Alignment for the heading text (default: left) */
  titleAlign?: React.CSSProperties["textAlign"];
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
  /** @deprecated Use leftButton.onClick */
  onBack?: () => void;

  leftButton?: FormActionConfig;
  centerButton?: FormActionConfig;
  rightButton?: FormActionConfig;
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
    submitLabel,
    submitButtonProps,
    showSubmit,
    backLabel,
    backButtonProps,
    idPrefix,
    title,
    titleAlign,
    placeholders,
    formWidth,
    layout,
    onBack,
    leftButton,
    centerButton,
    rightButton,
  } = props;
  const hostRef = useRef<WavelengthFormElement | null>(null);

  const onChangeStable = useStableCallback(onChange);
  const onValidStable = useStableCallback(onValid);
  const onInvalidStable = useStableCallback(onInvalid);
  const leftClickStable = useStableCallback(leftButton?.onClick ?? onBack);
  const centerClickStable = useStableCallback(centerButton?.onClick);
  const rightClickStable = useStableCallback(rightButton?.onClick);

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
    if (submitLabel !== undefined) el.submitLabel = submitLabel;
    if (submitButtonProps) el.submitButtonProps = submitButtonProps as any;

    const derivedLeft = leftButton ?? (backLabel !== undefined || backButtonProps || onBack ? { label: backLabel, buttonProps: backButtonProps as any } : undefined);
    if (derivedLeft) el.leftButton = { label: derivedLeft.label, buttonProps: derivedLeft.buttonProps as any };
    else el.leftButton = undefined;

    if (centerButton) {
      el.centerButton = {
        label: centerButton.label,
        buttonProps: centerButton.buttonProps as any,
      };
    } else {
      el.centerButton = undefined;
    }

    const derivedRight = rightButton ?? (showSubmit === false ? undefined : { label: submitLabel, buttonProps: submitButtonProps as any });
    if (derivedRight) {
      el.rightButton = {
        label: derivedRight.label,
        buttonProps: derivedRight.buttonProps as any,
      };
    } else {
      el.rightButton = undefined;
    }
    el.idPrefix = idPrefix as any;
    if (title !== undefined) el.title = title;
    if (titleAlign !== undefined) el.titleAlign = titleAlign as any;
    if (formWidth !== undefined) el.formWidth = formWidth;
    if (layout !== undefined) el.layout = layout;
  }, [
    schema,
    value,
    submitLabel,
    submitButtonProps,
    showSubmit,
    backLabel,
    backButtonProps,
    onBack,
    leftButton,
    centerButton,
    rightButton,
    idPrefix,
    title,
    titleAlign,
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
    el.addEventListener("left-button-click", leftClickStable as EventListener);
    el.addEventListener("center-button-click", centerClickStable as EventListener);
    el.addEventListener("right-button-click", rightClickStable as EventListener);
    // Backwards compatibility
    el.addEventListener("form-back", leftClickStable as EventListener);

    return () => {
      el.removeEventListener("form-change", handleChange as EventListener);
      el.removeEventListener("form-valid", handleValid as EventListener);
      el.removeEventListener("form-invalid", handleInvalid as EventListener);
      el.removeEventListener("left-button-click", leftClickStable as EventListener);
      el.removeEventListener("center-button-click", centerClickStable as EventListener);
      el.removeEventListener("right-button-click", rightClickStable as EventListener);
      el.removeEventListener("form-back", leftClickStable as EventListener);
    };
  }, [onChangeStable, onValidStable, onInvalidStable, leftClickStable, centerClickStable, rightClickStable]);

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

export const WavelengthForm = React.forwardRef(WavelengthFormInner) as <T extends object = Record<string, unknown>>(
  props: WavelengthFormProps<T> & React.RefAttributes<WavelengthFormRef<T>>,
) => React.ReactElement | null;

export default WavelengthForm;
