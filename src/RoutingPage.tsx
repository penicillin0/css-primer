import React from "react";
import { Route, Switch } from "react-router-dom";
import { About } from "./pages/About/About";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { WebFont } from "./pages/WebFont/WebFont";

export const RootingPage = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/webfont" component={WebFont} />
      <Route exact path="/about" component={About} />
    </Switch>
  );
};