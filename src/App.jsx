import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Providers (simulados ou a serem implementados)
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage"

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cadastro" element={<RegisterPage />} />
          <Route path="/pagina-inicial" />
        </Routes>
    </Router>
  );
}

export default App;