import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { About } from "./pages/About/About";

function App() {
  const ROUTER_BASENAME =
    process.env.NODE_ENV === "development" ? "/" : "/css-primer";

  return (
    <Router basename={ROUTER_BASENAME}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Switch>
        <Route exact path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
