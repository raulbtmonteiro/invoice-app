import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { InvoiceDisplay, SetupBar } from "./components";
import { dark, GlobalStyle, light } from "./themes";
import sun from "./assets/icon-sun.svg";
import moon from "./assets/icon-moon.svg";

interface Theme {
  template: Template;
  icon: string;
}

function App() {
  const [theme, setTheme] = useState<Theme>({
    template: dark,
    icon: moon,
  });

  const toggleTheme = () => {
    theme.template.title == "dark"
      ? setTheme({ template: light, icon: sun })
      : setTheme({ template: dark, icon: moon });
  };

  return (
    <ThemeProvider theme={theme.template}>
      <GlobalStyle />
      <SetupBar toggleTheme={toggleTheme} themeIcon={theme.icon} />
      <InvoiceDisplay />
    </ThemeProvider>
  );
}

export default App;
