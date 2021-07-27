import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { About } from "./pages/About/About";

function App() {
  return (
    <Router>
      <Route path="/about" render={() => <About />} />
    </Router>
  );
}

export default App;
