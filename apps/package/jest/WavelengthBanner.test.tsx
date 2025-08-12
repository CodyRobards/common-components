import "@testing-library/jest-dom";
import { screen } from "@testing-library/dom";
import { WavelengthBanner } from "../src/web-components/wavelength-banner";

if (!customElements.get("wavelength-banner")) {
  customElements.define("wavelength-banner", WavelengthBanner);
}

describe("WavelengthBanner", () => {
  function renderBanner(attrs: Record<string, string> = {}) {
    document.body.innerHTML = "";
    const banner = document.createElement("wavelength-banner");

    for (const [key, value] of Object.entries(attrs)) {
      banner.setAttribute(key, value);
    }

    document.body.appendChild(banner);
    return banner.shadowRoot!;
  }

  it("renders default banner with fallback palette and text", () => {
    const shadow = renderBanner();
    const container = shadow.querySelector(".banner")!;
    const text = shadow.querySelector("p")!;

    expect(container).toHaveStyle("background-color: #4373aa");
    expect(text).toHaveStyle("color: #ffffff");
    expect(text).toHaveTextContent("CLASSIFICATION//CONTROL");
  });

  it("renders UNCLASSIFIED without control using green", () => {
    const shadow = renderBanner({ classification: "unclassified" });
    const container = shadow.querySelector(".banner")!;
    const text = shadow.querySelector("p")!;

    expect(container).toHaveStyle("background-color: #007a33");
    expect(text).toHaveStyle("color: white");
    expect(text).toHaveTextContent("UNCLASSIFIED");
  });

  it("renders UNCLASSIFIED with CUI using purple", () => {
    const shadow = renderBanner({ classification: "unclassified", control: "cui" });
    const container = shadow.querySelector(".banner")!;
    const text = shadow.querySelector("p")!;

    expect(container).toHaveStyle("background-color: #502b85");
    expect(text).toHaveStyle("color: white");
    expect(text).toHaveTextContent("UNCLASSIFIED//CUI");
  });

  it("renders CUI without control using purple", () => {
    const shadow = renderBanner({ classification: "cui" });
    const container = shadow.querySelector(".banner")!;
    const text = shadow.querySelector("p")!;

    expect(container).toHaveStyle("background-color: #502b85");
    expect(text).toHaveStyle("color: white");
    expect(text).toHaveTextContent("CUI");
  });

  it("renders CONFIDENTIAL without control using blue", () => {
    const shadow = renderBanner({ classification: "confidential" });
    const container = shadow.querySelector(".banner")!;
    const text = shadow.querySelector("p")!;

    expect(container).toHaveStyle("background-color: #0033a0");
    expect(text).toHaveStyle("color: white");
    expect(text).toHaveTextContent("CONFIDENTIAL");
  });

  it("renders TOP SECRET//SCI with correct yellow background and black text", () => {
    const shadow = renderBanner({ classification: "top secret", control: "sci" });
    const container = shadow.querySelector(".banner")!;
    const text = shadow.querySelector("p")!;

    expect(container).toHaveStyle("background-color: #fce83a");
    expect(text).toHaveStyle("color: black");
    expect(text).toHaveTextContent("TOP SECRET//SCI");
  });

  it("allows overriding banner text and colors", () => {
    const shadow = renderBanner({
      "banner-text": "CUSTOM//LABEL",
      "banner-color": "#111111",
      "text-color": "#00ff00",
    });

    const container = shadow.querySelector(".banner")!;
    const text = shadow.querySelector("p")!;

    expect(container).toHaveStyle("background-color: #111111");
    expect(text).toHaveStyle("color: #00ff00");
    expect(text).toHaveTextContent("CUSTOM//LABEL");
  });

  it("renders with a custom ID, zIndex, and opacity", () => {
    const element = renderBanner({
      id: "classified-banner",
      "z-index": "99",
      opacity: "0.5",
    }).host as HTMLElement;

    const container = element.shadowRoot!.querySelector(".banner")!;
    expect(container.id).toBe("classified-banner");
    expect(container).toHaveStyle("z-index: 99");
    expect(container).toHaveStyle("opacity: 0.5");
  });

  it("reacts to attribute changes", () => {
    const element = document.createElement("wavelength-banner");
    document.body.appendChild(element);

    element.setAttribute("classification", "secret");
    const shadow = element.shadowRoot!;
    const text = shadow.querySelector("p")!;
    const container = shadow.querySelector(".banner")!;

    expect(container).toHaveStyle("background-color: #c8102e");
    expect(text).toHaveTextContent("SECRET");

    element.setAttribute("control", "RELIDO");
    expect(text).toHaveTextContent("SECRET//RELIDO");
  });
});
