import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import MainLayout from "./app/Layout.js";
import Home from "./app/Home/Home.js";

const appRoot = document.getElementById('root');

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute title="Home" component={Home} />
      <Route path="/About" title="About" component={Home} />
      <Route path="/Work" title="Work" component={Home} />
      <Route path="/Skills" title="Skills" component={Home} />
      <Route path="/Portfolio" title="Portfolio" component={Home} />
    </Route>
  </Router>
), appRoot);
