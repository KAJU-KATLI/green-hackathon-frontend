import React from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";
import Landing from "./pages/Landing/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route key = "home" exact path="/">
          <Landing />
        </Route>
        <Route key="signin" exact path="/signin">
          <SignIn />
        </Route>
        <Route key="signup" exact path="/signup">
          <SignUp />
        </Route>
        <Route key="dashboard" exact path="/dashboard">
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
