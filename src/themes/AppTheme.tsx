import { createContext, useState } from "react";
import { dark, light } from ".";
import { Theme } from "./types";
import { ThemeProvider } from "styled-components";

export const ThemePreferencesContext = createContext(
  {} as { toggleTheme: () => void; theme: Theme }
);

export const AppTheme = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(dark);

  const toggleTheme = () => {
    theme.title === "dark" ? setTheme(light) : setTheme(dark);
  };

  return (
    <ThemePreferencesContext.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemePreferencesContext.Provider>
  );
};
