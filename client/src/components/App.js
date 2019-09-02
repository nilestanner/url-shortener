import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./header/Headers";
import Landing from "./landing/Landing";
import "./styles.css";
class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="container">
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/augmented-ui/augmented.css"></link>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/" component={Landing} />
            </Switch>
          </div>
        </BrowserRouter>
        <div className="footer">
          Built by{" "}
          <a target="_blank" href="https://nilestanner.com">
            Niles Tanner
          </a>© 2019
        </div>
      </div>
    );
  }
}

export default App;
