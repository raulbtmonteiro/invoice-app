import { SetupBar } from "../components";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../themes/globalStyle";
import { Theme } from "../App";
import { useParams } from "react-router-dom";

interface IPage {
  theme: Theme;
  toggleTheme: () => void;
}

export const InvoicePage = ({theme, toggleTheme}: IPage) => {
  const params = useParams();
  console.log('ESSE É O PARAMS', params)
  
  return (
    <ThemeProvider theme={theme.template}>
      <GlobalStyle />
      <SetupBar toggleTheme={toggleTheme} themeIcon={theme.icon} />
    </ThemeProvider>
  );
};