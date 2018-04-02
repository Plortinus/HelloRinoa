import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import "./App.css";
import CurrentColor from './cssworld/CurrentColor';
import Width from './cssworld/Width';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="all">
          <nav className="nav">
            <NavLink activeClassName="active-link" exact to="/currentColor">CSS3 currentColor</NavLink>
            <NavLink activeClassName="active-link" exact to="/width">Width</NavLink>
          </nav>
          <div className="content">
            <Switch>
              <Route path="/currentColor" component={CurrentColor} />
              <Route path="/width" component={Width} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
