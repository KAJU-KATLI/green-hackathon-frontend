import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing/index";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
