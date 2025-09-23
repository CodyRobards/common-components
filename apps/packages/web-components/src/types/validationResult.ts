import { ZodIssue } from "zod";

export type ValidationResult<T> = { isValid: true; value: T } | { isValid: false; issues: ZodIssue[] };

export type ValidationFunction<T> = (payload: unknown) => ValidationResult<T>;
