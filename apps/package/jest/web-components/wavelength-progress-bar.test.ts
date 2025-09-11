import "@testing-library/jest-dom";
import { WavelengthProgressBar } from "../../src/web-components/wavelength-progress-bar";

if (!customElements.get("wavelength-progress-bar")) {
  customElements.define("wavelength-progress-bar", WavelengthProgressBar);
}

describe("WavelengthProgressBar", () => {
  function renderComponent(attrs: Record<string, string> = {}) {
    document.body.innerHTML = "";

    const el = document.createElement("wavelength-progress-bar");

    Object.entries(attrs).forEach(([key, value]) => {
      el.setAttribute(key, value);
    });

    document.body.appendChild(el);
    return el.shadowRoot!;
  }

  it("renders with default values", () => {
    const shadow = renderComponent();

    const name = shadow.querySelector(".name")!;
    const status = shadow.querySelector(".status")!;
    const fill = shadow.querySelector(".progress-fill")!;

    expect(name).toHaveTextContent("");
    expect(status).toHaveTextContent("Uploading - 0%");
    expect(fill).toHaveStyle("width: 0%");
  });

  it("respects value and shows 'Complete' at 100%", () => {
    const shadow = renderComponent({ value: "100" });

    const status = shadow.querySelector(".status")!;
    const fill = shadow.querySelector(".progress-fill")!;

    expect(status).toHaveTextContent("Complete! - 100%");
    expect(fill).toHaveStyle("width: 100%");
  });

  it("renders with custom width, height, and color", () => {
    const shadow = renderComponent({
      value: "75",
      width: "500px",
      height: "20px",
      "progress-color": "rgb(255, 0, 0)",
    });

    const progressBar = shadow.querySelector(".progress-bar")!;
    const fill = shadow.querySelector(".progress-fill")!;

    expect(progressBar).toHaveStyle("width: 500px");
    expect(progressBar).toHaveStyle("height: 20px");
    expect(fill).toHaveStyle("background-color: rgb(255, 0, 0)");
    expect(fill).toHaveStyle("width: 75%");
  });

  it("applies font size and color to name and status", () => {
    const shadow = renderComponent({
      name: "test.txt",
      value: "20",
      "font-size": "18px",
      "font-color": "#ffcc00",
    });

    const name = shadow.querySelector(".name")!;
    const status = shadow.querySelector(".status")!;

    expect(name).toHaveTextContent("test.txt");
    expect(name).toHaveStyle("font-size: 18px");
    expect(name).toHaveStyle("color: #ffcc00");

    expect(status).toHaveTextContent("Uploading - 20%");
    expect(status).toHaveStyle("font-size: 18px");
    expect(status).toHaveStyle("color: #ffcc00");
  });

  it("applies a custom border to the progress bar", () => {
    const shadow = renderComponent({
      "progress-border": "3px dashed red",
    });

    const progressBar = shadow.querySelector(".progress-bar")!;
    expect(progressBar).toHaveStyle("border: 3px dashed red");
  });
});
