// This file is set up to let TypeScript understand custom Web Components used in JSX.
// For each component, we declare a corresponding tag under JSX.IntrinsicElements
// so you can use it like <wavelength-button> in React with full type support.

declare namespace JSX {
  interface IntrinsicElements {
    /**
     * Custom element example for reference.
     * Use this format when defining new components:
     * - Use kebab-case for the tag name and props.
     * - Use quoted attribute names for kebab-case attributes (e.g., "test-prop").
     */
    "sample-component": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      "test-prop"?: string;
      children?: React.ReactNode;
    };

    "wavelength-input-date-picker": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

    "wavelength-button": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      variant?: "contained" | "outlined" | "text";
      size?: "small" | "medium" | "large";
      margin?: string;
      padding?: string;
      "color-one"?: string;
      "color-two"?: string;
      disabled?: boolean;
      "border-radius"?: string;
      href?: string;
      width?: string;
      height?: string;
      "box-shadow"?: string;
      target?: string;
    };

    "wavelength-banner": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      "banner-text"?: string;
      "banner-color"?: string;
      "text-color"?: string;
      opacity?: string | number;
      "z-index"?: string | number;
      id?: string;
    };

    "wavelength-form": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      "id-prefix"?: string;
      title?: string;
      "title-align"?: string;
      "title-color"?: string;
      "form-width"?: string;
    };

    "wavelength-progress-bar": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

    "wavelength-input": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

    "wavelength-title-bar": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      "title-text"?: string;
      "subtitle-text"?: string;
      "text-color"?: string;
      "has-shadow"?: boolean;
    };
  }
}
