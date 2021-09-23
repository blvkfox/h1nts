import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./assets/css/main.css";
import Index from "./pages/index";
import MarkUp from "./pages/markup";
import Styles from "./pages/styles";
import Javascript from "./pages/javascript";

function App() {
  return (
    <Router>
      <div className="w-4/5 mx-auto">
        <header className="flex justify-between my-4">
          <div className="navbar-brand">
            <Link to="/">h1nts</Link>
          </div>
          <nav>
            <ul className="flex">
              <li className="mr-2">Github</li>
              <li>Twitter</li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact render={(props) => <Index />} />
        <Route path="/mark-up" render={(props) => <MarkUp />} />
        <Route path="/styles" render={(props) => <Styles />} />
        <Route path="/javascript" render={(props) => <Javascript />} />
      </div>
    </Router>
  );
}

export default App;
