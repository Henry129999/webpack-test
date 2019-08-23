import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { createBrowserHistory as createHistory } from "history";

import Main from './containers/Main.jsx';
import Footer from './containers/Footer.jsx';
import Test_page from './containers/Test_page.jsx';
import React from "react";

export default function Routers() {
  console.log('createBrowserHistory', createHistory);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/footer" component={Footer}/>
        <Route path="/test_page" component={Test_page}/>
      </Switch>
    </Router>
  );
};
