const template = document.createElement("template");
template.innerHTML = `
  <style>
	.label {
  	display: flex;
  	justify-content: space-between;
  	font-family: Arial, sans-serif;
  	margin-bottom: 6px;
	}
	.progress-bar {
  	background-color: #e0e0e0;
  	border: 1px solid black;
  	border-radius: 12px;
  	overflow: hidden;
  	position: relative;
	}
	.progress-fill {
  	background-color: #1976d2;
  	height: 100%;
  	transition: width 0.3s ease-in-out;
  	border-right: 1px solid black;
	}
  </style>
  <div class="container">
	<div class="label">
  	<span class="name"></span>
  	<span class="status"></span>
	</div>
	<div class="progress-bar">
  	<div class="progress-fill"></div>
	</div>
  </div>
`;

export class WavelengthProgressBar extends HTMLElement {
  static get observedAttributes() {
    return ["value", "width", "height", "font-size", "font-color", "progress-border", "progress-color", "name"];
  }

  private container!: HTMLDivElement;
  private nameSpan!: HTMLSpanElement;
  private statusSpan!: HTMLSpanElement;
  private progressBar!: HTMLDivElement;
  private progressFill!: HTMLDivElement;

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(template.content.cloneNode(true));

    this.container = shadow.querySelector(".container")!;
    this.nameSpan = shadow.querySelector(".name")!;
    this.statusSpan = shadow.querySelector(".status")!;
    this.progressBar = shadow.querySelector(".progress-bar")!;
    this.progressFill = shadow.querySelector(".progress-fill")!;
  }

  connectedCallback() {
    this.updateRendering();
  }

  attributeChangedCallback() {
    this.updateRendering();
  }

  private updateRendering() {
    const value = Number(this.getAttribute("value") ?? "0");
    const width = this.getAttribute("width") ?? "425px";
    const height = this.getAttribute("height") ?? "12px";
    const fontSize = this.getAttribute("font-size") ?? "inherit";
    const fontColor = this.getAttribute("font-color") ?? "#000000";
    const progressBorder = this.getAttribute("progress-border") ?? "10px solid black";
    const progressColor = this.getAttribute("progress-color") ?? "#1976d2";
    const name = this.getAttribute("name") ?? "";

    this.container.style.width = width;
    this.progressBar.style.width = width;
    this.progressBar.style.height = height;
    this.progressBar.style.border = progressBorder;
    this.progressFill.style.width = `${Math.min(value, 100)}%`;
    this.progressFill.style.backgroundColor = progressColor;

    this.nameSpan.textContent = name;
    this.statusSpan.textContent = value === 100 ? `Complete! - ${value}%` : `Uploading - ${value}%`;

    this.nameSpan.style.fontSize = fontSize;
    this.nameSpan.style.color = fontColor;
    this.statusSpan.style.fontSize = fontSize;
    this.statusSpan.style.color = fontColor;
  }
}

if (!customElements.get("wavelength-progress-bar")) {
  customElements.define("wavelength-progress-bar", WavelengthProgressBar);
}
