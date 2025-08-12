import { WavelengthInput } from "../../src/web-components/wavelength-input";
declare const global: {
  mockSetFormValue: jest.Mock;
};

describe("MyCustomInput Form Integration", () => {
  beforeEach(() => {
    global.mockSetFormValue.mockClear();

    if (!window.customElements.get("wavelength-input")) {
      customElements.define("wavelength-input", WavelengthInput);
    }
    document.body.innerHTML = `
      <form>
        <wavelength-input name="customData" data-testid="custom-input"></wavelength-input>
      </form>
    `;
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("should call the mock setFormValue with the correct value when input changes", () => {
    const customInput = document.querySelector('[data-testid="custom-input"]') as WavelengthInput;
    const internalInput = customInput.shadowRoot!.querySelector("input")!;
    const testValue = "A value for the global mock";

    internalInput.value = testValue;
    internalInput.dispatchEvent(new Event("input", { bubbles: true }));

    expect(global.mockSetFormValue).toHaveBeenCalledWith(testValue);
    expect(global.mockSetFormValue).toHaveBeenCalledTimes(1);
  });
});
