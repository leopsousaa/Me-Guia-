import { BrowserRouter, Route, Routes } from "react-router-dom";

//Import Pages Project
import AuthPage from "./pages/Auth/Auth";
import HomePage from "./pages/Home/Home";

export function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/painel" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
