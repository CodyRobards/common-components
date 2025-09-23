const buttonTemplate = document.createElement("template");
buttonTemplate.innerHTML = `
  <style>
	:host {
  	display: inline-flex;
	}

	button {
  	display: inline-flex;
  	align-items: center;
  	justify-content: center;
  	position: relative;
  	overflow: hidden;
  	border: none;
  	border-radius: 0.25rem;
  	cursor: pointer;
  	font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  	font-weight: 500;
  	font-size: 0.875rem;
  	letter-spacing: 0.02857rem;
  	text-transform: uppercase;
  	user-select: none;
  	white-space: normal;
  	word-break: break-word;
  	text-align: center;
  	height: auto;
	}

	button .ripple {
  	position: absolute;
  	border-radius: 50%;
  	transform: scale(0);
  	animation: ripple 600ms linear;
  	pointer-events: none;
  	z-index: 0;
	}

	button .label {
  	position: relative;
  	z-index: 1;
  	display: block;
  	width: 100%;
	}

	@keyframes ripple {
  	to {
    	transform: scale(4);
    	opacity: 0;
  	}
	}

	button.contained {
  	box-shadow: 0rem 0.125rem 0.25rem -0.063rem #000000;
	}

	button.contained:hover,
	button.outlined:hover,
	button.text:hover {
  	opacity: 0.96;
  	transition: background-color 300ms ease-in-out;
	}

	button:disabled {
  	opacity: 0.5;
  	pointer-events: none;
	}
  </style>

  <button>
	<span class="label"><slot>SPUNGO</slot></span>
  </button>
`;

export class WavelengthButton extends HTMLElement {
  static get observedAttributes() {
    return ["variant", "size", "margin", "padding", "color-one", "color-two", "font-size", "disabled", "border-radius", "href", "width", "height", "box-shadow", "target"];
  }

  private button: HTMLButtonElement;

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(buttonTemplate.content.cloneNode(true));
    this.button = shadow.querySelector("button")!;
    this.button.addEventListener("click", (event) => {
      if (this.button.disabled || this.hasAttribute("disabled")) {
        event.preventDefault();
        event.stopImmediatePropagation();
        return;
      }

      this.handleRipple(event);
    });
  }

  connectedCallback() {
    this.updateButton();
  }

  attributeChangedCallback() {
    this.updateButton();
  }

  updateButton() {
    const variant = this.getAttribute("variant") || "outlined";
    const size = this.getAttribute("size") || "medium";
    const margin = this.getAttribute("margin") || "0rem";
    const padding = this.getAttribute("padding");
    const colorOne = this.getAttribute("color-one") || "#1976D2";
    const colorTwo = this.getAttribute("color-two") || "#FFFFFF";
    const fontSize = this.getAttribute("font-size") || "0.875rem";
    const disabled = this.hasAttribute("disabled");
    const borderRadius = this.getAttribute("border-radius") || "0.25rem";
    const boxShadow = this.getAttribute("box-shadow");
    const href = this.getAttribute("href");
    const target = this.getAttribute("target") || "_blank";
    const width = this.getAttribute("width");
    const height = this.getAttribute("height") || "auto";

    this.button.className = variant;
    this.button.style.margin = margin;
    this.button.style.borderRadius = borderRadius;
    this.button.style.fontSize = fontSize;
    this.button.style.minWidth = "";
    this.button.disabled = disabled;

    if (this.hasAttribute("padding") && padding && padding.trim() !== "") {
      this.button.style.padding = padding;
    } else {
      this.applyPresetSize(size);
    }

    if (width) this.button.style.width = width;
    this.button.style.height = height;

    if (variant === "contained") {
      this.button.style.backgroundColor = colorOne;
      this.button.style.color = colorTwo;
      this.button.style.border = `0.063rem solid ${colorOne}`;
      this.button.style.boxShadow = boxShadow || "0rem 0.125rem 0.25rem -0.063rem #000000";
    } else if (variant === "outlined") {
      this.button.style.backgroundColor = "transparent";
      this.button.style.color = colorOne;
      this.button.style.border = `0.063rem solid ${colorOne}`;
      this.button.style.boxShadow = boxShadow || "none";
    } else {
      this.button.style.backgroundColor = "transparent";
      this.button.style.color = colorOne;
      this.button.style.border = "none";
      this.button.style.boxShadow = boxShadow || "none";
    }

    if (href && !disabled) {
      this.button.onclick = () => window.open(href, target);
      this.button.style.cursor = "pointer";
    } else {
      this.button.onclick = null;
    }

    this.button.removeEventListener("mouseenter", this.handleHoverIn);
    this.button.removeEventListener("mouseleave", this.handleHoverOut);

    this.handleHoverIn = () => {
      if (variant === "contained") {
        this.button.style.backgroundColor = this.shadeColor(colorOne, -15);
      } else {
        this.button.style.backgroundColor = this.hexToRgba(colorOne, 0.05);
      }
    };

    this.handleHoverOut = () => {
      if (variant === "contained") {
        this.button.style.backgroundColor = colorOne;
      } else {
        this.button.style.backgroundColor = "transparent";
      }
    };

    this.button.addEventListener("mouseenter", this.handleHoverIn);
    this.button.addEventListener("mouseleave", this.handleHoverOut);
  }

  private applyPresetSize(size: string) {
    if (size === "small") {
      this.button.style.padding = "0.5rem";
    } else if (size === "medium") {
      this.button.style.padding = "0.6875rem 0.75rem";
    } else if (size === "large") {
      this.button.style.padding = "0.875rem 1rem";
    }
  }

  private handleHoverIn = () => {};
  private handleHoverOut = () => {};

  private hexToRgba(hex: string, alpha: number) {
    let r = 0,
      g = 0,
      b = 0;
    if (hex.length === 4) {
      r = parseInt(hex[1] + hex[1], 16);
      g = parseInt(hex[2] + hex[2], 16);
      b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length === 7) {
      r = parseInt(hex[1] + hex[2], 16);
      g = parseInt(hex[3] + hex[4], 16);
      b = parseInt(hex[5] + hex[6], 16);
    }
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  private shadeColor(hex: string, percent: number) {
    let R = parseInt(hex.substring(1, 3), 16);
    let G = parseInt(hex.substring(3, 5), 16);
    let B = parseInt(hex.substring(5, 7), 16);

    R = Math.min(255, Math.max(0, R + (R * percent) / 100));
    G = Math.min(255, Math.max(0, G + (G * percent) / 100));
    B = Math.min(255, Math.max(0, B + (B * percent) / 100));

    const toHex = (c: number) => {
      const hex = Math.round(c).toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };

    return `#${toHex(R)}${toHex(G)}${toHex(B)}`;
  }

  private handleRipple(event: MouseEvent) {
    if (this.button.disabled) return;

    const variant = this.getAttribute("variant") || "outlined";
    const colorOne = this.getAttribute("color-one") || "#1976D2";

    const ripple = document.createElement("span");
    ripple.className = "ripple";

    const color = variant === "contained" ? this.hexToRgba(this.shadeColor(colorOne, 40), 0.6) : this.hexToRgba(this.shadeColor(colorOne, -40), 0.3);

    ripple.style.backgroundColor = color;

    const rect = this.button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${event.clientY - rect.top - size / 2}px`;

    this.button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  }
}

if (!customElements.get("wavelength-button")) {
  customElements.define("wavelength-button", WavelengthButton);
}
