import { createContext, useContext } from "react";

export type ThemeProperties = {
  name?: string;
};

export const WavelengthAppTheme = createContext<ThemeProperties>({});

export const useThemeContext = () => useContext(WavelengthAppTheme);
