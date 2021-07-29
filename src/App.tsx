import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "reactstrap";
import { NavgationBar } from "./components/NavgationBar";
import { RootingPage } from "./RoutingPage";

export function App() {
  const ROUTER_BASENAME =
    process.env.NODE_ENV === "development" ? "/" : "/css-primer";

  return (
    <Router basename={ROUTER_BASENAME}>
      <NavgationBar />
      <Container className="mt-4">
        <RootingPage />
      </Container>
    </Router>
  );
}
