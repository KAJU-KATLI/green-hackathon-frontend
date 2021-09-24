import React from "react";
import SignIn from "./Components/SignIn";
import Checkout from "./Components/SignUp/Checkout";
import Dashboard from "./Components/Dashboard/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route key="signin" path="/signin/farmer">
          <SignIn />
        </Route>
        <Route key="signup" path="/signup/farmer">
          <Checkout />
        </Route>
        <Route key="dashboard" path="/dashboard/farmer">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
