const DatePickerTemplate = document.createElement("template");
DatePickerTemplate.innerHTML = `
<input
  type="date"
  id="start"
  class="date-picker-input"
  value="2018-07-22"
  min="2018-01-01"
  max="2018-12-31" />
`;
export class WavelengthDatePicker extends HTMLElement {
  private inputDatePicker: HTMLInputElement;
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(DatePickerTemplate.content.cloneNode(true));
    this.inputDatePicker = shadow.querySelector(".date-picker-input")!;
  }

  connectedCallback() {
    this.updateInput();
  }

  attributeChangedCallback() {
    this.updateInput();
  }

  updateInput() {
    const fontSize = this.getAttribute("font-size") || "0.875rem";
    this.inputDatePicker.style.fontSize = fontSize;
  }
}

if (!customElements.get("wavelength-date-picker")) {
  customElements.define("wavelength-date-picker", WavelengthDatePicker);
}
