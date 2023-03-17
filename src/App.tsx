import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { dark, light } from "./themes";
import sun from "./assets/icon-sun.svg";
import moon from "./assets/icon-moon.svg";
import { Home, InvoicePage } from "./pages";

export interface Theme {
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
    <Router>
      <Routes>
        <Route path="/" element={<Home theme={theme} toggleTheme={toggleTheme}/>} />
        <Route path="/invoice/:id" element={<InvoicePage theme={theme} toggleTheme={toggleTheme}/>} />
      </Routes>
    </Router>
  );
}

export default App;
