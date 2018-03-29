import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import CurrentColor from './cssworld/CurrentColor.jsx';
import Width from './cssworld/Width.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="Site">
         <header>
          <nav className="nav">
            <ul>
              <li>
                <Link to="/currentColor">CSS3 currentColor</Link>
              </li>
              <li>
                <Link to="/width">Width</Link>
              </li>
            </ul>
          </nav>
         </header>
          <div className="Site-content">
            <Route path="/currentColor" component={CurrentColor} />
            <Route path="/width" component={Width} />
          </div>
          <footer>页脚</footer>
        </div>
      </Router>
    );
  }
}

export default App;
