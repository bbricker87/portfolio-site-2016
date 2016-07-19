import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import MainLayout from "./app/layout";
import Home from "./app/home/home-container";
import About from "./app/about/about";
import Work from "./app/employers/employers-container";
import Skills from "./app/skills/skills-container";
import Portfolio from "./app/portfolio/portfolio-container";

const appRoot = document.getElementById('root');

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute title="Home" component={Home} />
      <Route path="/About" title="About" component={About} />
      <Route path="/Work" title="Work" component={Work} />
      <Route path="/Skills" title="Skills" component={Skills} />
      <Route path="/Portfolio" title="Portfolio" component={Portfolio} />
    </Route>
  </Router>
), appRoot);
