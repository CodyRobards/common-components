import { goldmanFont, b612Font } from "../styles/fontBase64";
import { fontSheet } from "../styles/fontSheet";

let fontsInjected = false;

export class WavelengthTitleBar extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    if (fontSheet) {
      shadow.adoptedStyleSheets = [fontSheet];
    } else {
      const fallbackStyle = document.createElement("style");
      fallbackStyle.textContent = `
        @font-face {
          font-family: 'Goldman';
          src: url("../fonts/goldman-latin-400-normal.woff2") format("woff2");
          font-weight: 400;
          font-style: normal;
        }
        @font-face {
          font-family: 'B612';
          src: url("../fonts/b612-latin-400-normal.woff2") format("woff2");
          font-weight: 400;
          font-style: normal;
        }`;
      shadow.appendChild(fallbackStyle);
    }

    const wrapper = document.createElement("div");
    wrapper.classList.add("title-bar");

    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = this.getAttribute("title-text") || "Default Title";

    const subtitle = document.createElement("div");
    subtitle.classList.add("subtitle");
    subtitle.textContent = this.getAttribute("subtitle-text") || "Default Subtitle";

    const textColor = this.getAttribute("text-color") || "#34649b";
    const shadowColor = this.getAttribute("shadow-color");

    const style = document.createElement("style");
    style.textContent = `
  :host {
    display: block;
    font-weight: 400;
    color: ${textColor};
    text-align: left;
  }

  .title {
    font-family: "Goldman", sans-serif;
    font-size: 3.75rem;
    ${shadowColor ? `text-shadow: 0.313rem 0.313rem 0.375rem ${shadowColor};` : ""}
    -webkit-text-stroke: 1px black;
    letter-spacing: 0.07em;
    user-select: none;
  }

  .subtitle {
    font-family: "B612", sans-serif;
    font-size: 1rem;
    margin-left: 0.313rem;
    user-select: none;
  }
`;

    shadow.appendChild(style);
    wrapper.appendChild(title);
    wrapper.appendChild(subtitle);
    shadow.appendChild(wrapper);
  }

  connectedCallback() {
    if (!fontsInjected) {
      const style = document.createElement("style");
      style.textContent = `
        ${goldmanFont}
        ${b612Font}
        `;
      document.head.appendChild(style);
      fontsInjected = true;
    }
  }
  static get observedAttributes() {
    return ["title-text", "subtitle-text", "text-color", "shadow-color"];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue === newValue) return;

    const titleElement = this.shadowRoot?.querySelector(".title") as HTMLElement | null;
    const subtitleElement = this.shadowRoot?.querySelector(".subtitle") as HTMLElement | null;

    switch (name) {
      case "title-text":
        if (titleElement) titleElement.textContent = newValue;
        break;
      case "subtitle-text":
        if (subtitleElement) subtitleElement.textContent = newValue;
        break;
      case "text-color":
        if (titleElement) titleElement.style.color = newValue;
        if (subtitleElement) subtitleElement.style.color = newValue;
        break;
      case "shadow-color":
        if (titleElement) {
          if (newValue) {
            titleElement.style.textShadow = `0.313rem 0.313rem 0.375rem ${newValue}`;
          } else {
            titleElement.style.textShadow = "";
          }
        }
        break;
    }
  }
}

if (!customElements.get("wavelength-title-bar")) {
  customElements.define("wavelength-title-bar", WavelengthTitleBar);
}
