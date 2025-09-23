declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.json" {
  const content: string;
  export default content;
}

declare module "@wavelengthusaf/web-components" {
  export class SampleComponent extends HTMLElement {}
  export class WavelengthBanner extends HTMLElement {}
  export class WavelengthButton extends HTMLElement {}
  export class WavelengthDatePicker extends HTMLElement {}
  export class WavelengthForm extends HTMLElement {}
  export class WavelengthInput extends HTMLElement {}
  export class WavelengthProgressBar extends HTMLElement {}
  export class WavelengthTitleBar extends HTMLElement {}
}
