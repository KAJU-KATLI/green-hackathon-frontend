import React from "react";
import SignIn from "./components/SignIn";
import Checkout from "./components/SignUp/Checkout";
import Dashboard from "./components/Dashboard/Dashboard";
import Landing from "./pages/Landing/index";
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
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
