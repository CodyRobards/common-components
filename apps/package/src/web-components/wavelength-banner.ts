export class WavelengthBanner extends HTMLElement {
  static get observedAttributes() {
    return ["banner-text", "banner-color", "text-color", "opacity", "z-index", "id", "classification", "control"];
  }

  private container: HTMLDivElement;
  private textElement: HTMLParagraphElement;

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.textContent = `
      :host {
        display: block;
        width: 100%;
      }

      .banner {
        width: 100%;
        text-align: center;
        font-weight: normal;
        font-family: sans-serif;
        font-size: 1rem;
      }
    `;

    this.container = document.createElement("div");
    this.container.classList.add("banner");

    this.textElement = document.createElement("p");
    this.container.appendChild(this.textElement);

    shadow.appendChild(style);
    shadow.appendChild(this.container);
  }

  connectedCallback() {
    this.updateAttributes();
  }

  attributeChangedCallback() {
    this.updateAttributes();
  }

  private updateAttributes() {
    const classificationRaw = this.getAttribute("classification")?.toLowerCase() || "";
    const controlRaw = this.getAttribute("control") || "";
    const controlList = controlRaw
      .split(",")
      .map((s) => s.trim().toLowerCase())
      .filter(Boolean);

    let bannerText = this.getAttribute("banner-text");
    const bannerColor = this.getAttribute("banner-color");
    const textColor = this.getAttribute("text-color");

    const palette = {
      primary: "#4373aa",
      secondary: "#ffffff",
    };

    let effectiveClassification = classificationRaw;
    let effectiveColor = palette.primary;
    let effectiveTextColor = palette.secondary;

    switch (classificationRaw) {
      case "unclassified":
      case "u":
        if (controlRaw) {
          effectiveColor = "#502b85";
          effectiveTextColor = "white";
        } else {
          effectiveColor = "#007a33";
          effectiveTextColor = "white";
        }
        break;
      case "controlled":
      case "controlled unclassified information":
      case "cui":
        effectiveColor = "#502b85";
        effectiveTextColor = "white";
        break;
      case "confidential":
      case "c":
        effectiveColor = "#0033a0";
        effectiveTextColor = "white";
        break;
      case "secret":
      case "s":
        effectiveColor = "#c8102e";
        effectiveTextColor = "white";
        break;
      case "top secret":
      case "ts":
        if (controlList.includes("sci")) {
          effectiveColor = "#fce83a";
          effectiveTextColor = "black";
        } else {
          effectiveColor = "#ff8c00";
          effectiveTextColor = "black";
        }
        break;
      case "":
        effectiveClassification = "CLASSIFICATION//CONTROL";
        break;
      default:
        effectiveColor = palette.primary;
        effectiveTextColor = palette.secondary;
    }

    if (!bannerText) {
      if (controlList.length === 0) {
        bannerText = effectiveClassification;
      } else {
        bannerText = `${effectiveClassification}//${controlList.join("/")}`;
      }
    }

    this.container.style.backgroundColor = bannerColor || effectiveColor;
    this.textElement.style.color = textColor || effectiveTextColor;

    this.container.style.opacity = this.getAttribute("opacity") || "1";
    this.container.style.zIndex = this.getAttribute("z-index") || "10";
    if (this.getAttribute("id")) this.container.id = this.getAttribute("id")!;

    this.textElement.textContent = bannerText.toUpperCase();
  }
}

if (!customElements.get("wavelength-banner")) {
  customElements.define("wavelength-banner", WavelengthBanner);
}
