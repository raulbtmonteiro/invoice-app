import { InvoicesDisplay, SetupBar } from "../components";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../themes/globalStyle";
import { Theme } from "../App";

export interface IPage {
  theme: Theme;
  toggleTheme: () => void;
}

export const Home = ({theme, toggleTheme}: IPage) => {
  return (
    <ThemeProvider theme={theme.template}>
      <GlobalStyle />
      <SetupBar toggleTheme={toggleTheme} themeIcon={theme.icon} />
      <InvoicesDisplay />
    </ThemeProvider>
  );
};