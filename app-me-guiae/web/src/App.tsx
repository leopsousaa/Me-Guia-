import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AuthContextProvider } from "./context/AuthContext";

import { Home } from "./pages/Home";
import { Auth } from "./pages/Auth";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/painel" element={<Home />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
