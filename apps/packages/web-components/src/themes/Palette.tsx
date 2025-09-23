import { useThemeContext } from "./WavelengthAppTheme";

export type ColorPalette = {
  primary: string;
  secondary: string;
};

//#region Default Palette

const defaultPalette: ColorPalette = {
  primary: `#4373AA`,
  secondary: `#FFFFFF`,
};

//#endregion

const arrowPalette: ColorPalette = {
  primary: "#46D8EC",
  secondary: "#F7F7F9",
};

const breweryPalette: ColorPalette = {
  primary: "#D16A2F",
  secondary: "#FDFCFB",
};

const rapidRefPalette: ColorPalette = {
  primary: "#12141A",
  secondary: "#26BABE",
};

const swarmPalette: ColorPalette = {
  primary: "#000613",
  secondary: "#FCD82F",
};

/**
 * Retrieves a palette for the current application
 * @returns
 */
export function getPalette() {
  // Retrieves the App Theme
  const { name } = useThemeContext();

  // Add App Specific Palettes Here
  if (name !== undefined) {
    if (name.toLowerCase() === "arrow") {
      return arrowPalette;
    }
    if (name.toLowerCase() === "brewery") {
      return breweryPalette;
    }
    if (name.toLowerCase() === "rapidref") {
      return rapidRefPalette;
    }
    if (name.toLowerCase() === "swarm") {
      return swarmPalette;
    }
  }

  return defaultPalette;
}
