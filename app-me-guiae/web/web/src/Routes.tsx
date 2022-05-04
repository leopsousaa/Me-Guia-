import { BrowserRouter as Router, Route } from "react-router-dom";

//Import Pages Project
import AuthPage from "./pages/Auth/Auth";
import HomePage from "./pages/Home/Home";


export function Routes() {
  return (
    <Router>
      <Route path="Auth">
        <AuthPage />
      </Route>
      <Route path="Home">
        <HomePage />
      </Route>
    </Router>
  );
}
