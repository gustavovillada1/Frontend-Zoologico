import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import login from '../views/LoginView';
import home from '../views/AnimalsView';

export default function App() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
            <Route exact path="/" component={login}/>       
            <Route exact path="/home" component={home}/>       
        </Switch>
    </Router>
  );
}

