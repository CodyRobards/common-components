import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

// Define your custom dark theme
const myDarkTheme = create({
  base: "dark", // Set as dark mode

  // UI Backgrounds
  appBg: "#121212", // Sidebar and main UI background
  appContentBg: "#1e1e1e", // Component preview background
  appBorderColor: "#444",
  appBorderRadius: 8,

  // Typography
  fontBase: '"Inter", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "#ffffff",
  textInverseColor: "#333333",

  // Toolbar colors
  barBg: "#181818",
  barTextColor: "#bbbbbb",
  barSelectedColor: "#ffffff",

  // Form colors
  inputBg: "#333333",
  inputBorder: "#666666",
  inputTextColor: "#ffffff",
  inputBorderRadius: 4,

  // Branding (Optional: Customize Storybook's logo)
  brandTitle: "My Custom Dark Storybook",
  brandUrl: "https://yourwebsite.com",
  brandImage: "https://yourwebsite.com/logo.png", // Custom logo (optional)
});

// Apply custom theme to Storybook UI
addons.setConfig({
  theme: myDarkTheme,
});
