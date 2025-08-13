import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { z } from "zod";

import WavelengthForm from "../src/components/forms/WavelengthForm";
import "../src/web-components/wavelength-form";

// This test focuses on the React wrapper receiving the correct
// detail payloads from the custom events.
describe("WavelengthForm (React Wrapper)", () => {
  test("callbacks receive value and issues", () => {
    const onChange = jest.fn();
    const onValid = jest.fn();
    const onInvalid = jest.fn();

    const schema = z.object({ name: z.string() });

    render(<WavelengthForm schema={schema} onChange={onChange} onValid={onValid} onInvalid={onInvalid} />);

    const host = document.querySelector("wavelength-form")!;

    host.dispatchEvent(
      new CustomEvent("form-change", {
        detail: { value: { name: "Hello" }, issues: [] },
      }),
    );
    expect(onChange).toHaveBeenCalledWith({ name: "Hello" }, []);

    const issues = [{ message: "Required", path: ["name"], code: "custom" } as any];
    host.dispatchEvent(
      new CustomEvent("form-invalid", {
        detail: { value: {}, issues },
      }),
    );
    expect(onInvalid).toHaveBeenCalledWith({}, issues);

    host.dispatchEvent(
      new CustomEvent("form-valid", {
        detail: { value: { name: "Hello" }, issues: [] },
      }),
    );
    expect(onValid).toHaveBeenCalledWith({ name: "Hello" }, []);
  });
});
