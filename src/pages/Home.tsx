import { InvoicesDisplay, SetupBar } from "../components";
import { GlobalStyle } from "../themes/globalStyle";
import { ThemeProvider } from "styled-components";
import { IPage } from "./types";

export const Home = ({theme, toggleTheme}: IPage) => {
  return (
    <ThemeProvider theme={theme.template}>
      <GlobalStyle />
      <SetupBar toggleTheme={toggleTheme} themeIcon={theme.icon} />
      <InvoicesDisplay />
    </ThemeProvider>
  );
};