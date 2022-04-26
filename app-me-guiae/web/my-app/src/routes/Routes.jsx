import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";

export const RoutesDOM = () => {
  //   const [checking, setChecking] = useState();
  //   const [isLoggedIn, setIsLoggedIn] = useState();
  //   useEffect(()=>{
  //       function is consult firebase
  //   },[])

  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};
