const InputDatePickerTemplate = document.createElement("template");
InputDatePickerTemplate.innerHTML = `
<input
  type="date"
  id="start"
  class="datepickerinput"
  value="2018-07-22"
  min="2018-01-01"
  max="2018-12-31" />
`;
export class WLInputDatePicker extends HTMLElement {
  private inputDatePicker: HTMLInputElement;
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(InputDatePickerTemplate.content.cloneNode(true));
    this.inputDatePicker = shadow.querySelector(".datepickerinput")!;
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

customElements.define("wavelength-input-date-picker", WLInputDatePicker);
