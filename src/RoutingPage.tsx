import React from "react";
import { Route, Switch } from "react-router-dom";
import { About } from "./pages/About/About";

export const RootingPage = () => {
  return (
    <Switch>
      <Route exact path="/about" component={About} />
    </Switch>
  );
};
