import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Login from "../pages/Login";

export const Routes = () => {
  //   const [checking, setChecking] = useState();
  //   const [isLoggedIn, setIsLoggedIn] = useState();
  //   useEffect(()=>{
  //       function is consult firebase
  //   },[])

  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
};
