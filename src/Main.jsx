import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import { BrowserRouter } from "react-router-dom";
import { HomePage } from './HomePage.jsx';
import { Projects } from './Projects.jsx';
import { Photography } from './Photography.jsx';
import './style.css';

export function Main() {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/photography" component={Photography} />
      </Switch>
    </HashRouter>
  );
}
