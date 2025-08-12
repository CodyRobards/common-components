// Create reusable HTML + styles via the <template> below
const template = document.createElement("template");
template.innerHTML = `
  <style>
    :host {
      display: block;
      /* Define component defaults here */
    }
  </style>
  <div class="content">
    <slot></slot> <!-- Enables user-defined inner HTML -->
  </div>
`;

// Define a custom HTML element
export class SampleComponent extends HTMLElement {
  // List of attributes to observe for changes
  static get observedAttributes() {
    return ["test-prop"]; // <-- Add more observed attributes as needed
  }

  private shadow: ShadowRoot;

  constructor() {
    super();
    // Attach Shadow DOM for style encapsulation, and then append your template to it here
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.append(template.content.cloneNode(true));
  }

  // Called when component is inserted into the DOM
  connectedCallback() {
    this.updateComponent();
  }

  // Called when observed attributes change
  attributeChangedCallback() {
    this.updateComponent();
  }

  // Main update logic; Your component's functionality will go here and/or in other methods that you have below
  updateComponent() {
    const prop = this.getAttribute("test-prop") || "";

    // Example DOM update (replace with your component logic)
    const container = this.shadow.querySelector(".content");
    if (container) container.textContent = prop;

    //////////////////////////////////////////////////////////////////
    // TODO: Add more logic here for additional props/styles/events //
    //////////////////////////////////////////////////////////////////
  }
}

// Register your tag name here; if statement is just a sanity check, but is otherwise not needed
if (!customElements.get("sample-component")) {
  customElements.define("sample-component", SampleComponent);
}
