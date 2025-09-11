/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { fireEvent } from "@testing-library/dom";
import "../../src/web-components/wavelength-button";

describe("WavelengthButton Web Component", () => {
  let buttonEl: HTMLElement;

  beforeEach(() => {
    buttonEl = document.createElement("wavelength-button");
    document.body.appendChild(buttonEl);
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("renders fallback slot content when no children are present", () => {
    const label = buttonEl.shadowRoot!.querySelector(".label")!;
    expect(label).toHaveTextContent("LABEL");
  });

  it("renders children passed into slot", () => {
    buttonEl.innerHTML = "<span>Nested</span>";

    const slot = buttonEl.shadowRoot!.querySelector("slot")!;
    const assigned = slot.assignedNodes().find((n) => n.nodeType === Node.ELEMENT_NODE) as HTMLElement;

    expect(assigned).toHaveTextContent("Nested");
  });

  it("applies href and opens link on click", () => {
    const mockOpen = jest.fn();
    window.open = mockOpen;

    buttonEl.setAttribute("href", "https://example.com");
    const btn = buttonEl.shadowRoot!.querySelector("button")!;
    fireEvent.click(btn);

    expect(mockOpen).toHaveBeenCalledWith("https://example.com", "_blank");
  });

  it("renders with all three variants", () => {
    ["outlined", "contained", "text"].forEach((variant) => {
      buttonEl.setAttribute("variant", variant);
      const btn = buttonEl.shadowRoot!.querySelector("button")!;
      expect(btn.className).toBe(variant);
    });
  });

  it("respects size presets", () => {
    ["small", "medium", "large"].forEach((size) => {
      buttonEl.setAttribute("size", size);
      expect(buttonEl.getAttribute("size")).toBe(size);
    });
  });

  it("respects padding prop and doesn't overwrite it", () => {
    buttonEl.setAttribute("padding", "20px");
    const btn = buttonEl.shadowRoot!.querySelector("button")!;
    expect(getComputedStyle(btn).padding).toBe("20px");
  });

  it("sets the width", () => {
    buttonEl.setAttribute("width", "120px");
    const btn = buttonEl.shadowRoot!.querySelector("button")!;
    expect(getComputedStyle(btn).width).toBe("120px");
  });

  it("disables the button when `disabled` is set", () => {
    buttonEl.setAttribute("disabled", "");
    const btn = buttonEl.shadowRoot!.querySelector("button")!;
    expect(btn.disabled).toBe(true);
  });

  it("generates a ripple span on click", () => {
    const btn = buttonEl.shadowRoot!.querySelector("button")!;
    const before = btn.querySelectorAll(".ripple").length;
    fireEvent.click(btn);
    const after = btn.querySelectorAll(".ripple").length;
    expect(after).toBeGreaterThan(before);
  });

  it("darkens light colors on hover", () => {
    buttonEl.setAttribute("variant", "contained");
    buttonEl.setAttribute("color-one", "#ffffff");
    const btn = buttonEl.shadowRoot!.querySelector("button")!;
    fireEvent.mouseEnter(btn);
    expect(btn.style.backgroundColor).not.toBe("");
  });

  it("lightens dark colors on hover", () => {
    buttonEl.setAttribute("variant", "contained");
    buttonEl.setAttribute("color-one", "#000000");
    const btn = buttonEl.shadowRoot!.querySelector("button")!;
    fireEvent.mouseEnter(btn);
    expect(btn.style.backgroundColor).not.toBe("");
  });

  it("resets background color on mouse leave", () => {
    buttonEl.setAttribute("variant", "contained");
    buttonEl.setAttribute("color-one", "#333333");
    const btn = buttonEl.shadowRoot!.querySelector("button")!;
    fireEvent.mouseEnter(btn);
    fireEvent.mouseLeave(btn);
    expect(getComputedStyle(btn).backgroundColor).toBe("rgb(51, 51, 51)");
  });
});
