import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, InvoicePage } from "./pages";
import moon from "./assets/icon-moon.svg";
import sun from "./assets/icon-sun.svg";
import { dark, light } from "./themes";
import { Theme } from "./themes/types";
import { useState } from "react";

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
        <Route
          path="/"
          element={<Home theme={theme} toggleTheme={toggleTheme} />}
        />
        <Route
          path="/invoice/:id"
          element={<InvoicePage theme={theme} toggleTheme={toggleTheme} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
