import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, InvoicePage } from "./views";
import { GlobalStyle } from "./themes";
import invoicesData from "./data.json";
import { AppTheme } from "./themes";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    localStorage.setItem("invoices", JSON.stringify(invoicesData));
  }, []);

  return (
    <AppTheme>
      <GlobalStyle />

      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/invoice/:id" element={<InvoicePage />} />
        </Routes>
      </Router>
    </AppTheme>
  );
}

export default App;
