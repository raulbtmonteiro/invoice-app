import { InvoiceCard, SetupBar } from "../components";
import { GlobalStyle } from "../themes/globalStyle";
import { ThemeProvider } from "styled-components";
import { useParams } from "react-router-dom";
import { IPage } from "./types";

export const InvoicePage = ({ theme, toggleTheme }: IPage) => {
  const params = useParams();

  if (params.id === undefined) {
    return null;
  }

  return (
    <ThemeProvider theme={theme.template}>
      <GlobalStyle />
      <SetupBar toggleTheme={toggleTheme} themeIcon={theme.icon} />
      <InvoiceCard id={params.id} />
    </ThemeProvider>
  );
};
