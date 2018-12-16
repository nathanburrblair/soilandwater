import React, { Component } from "react";
import "./App.css";
import Routes from "./Routes";
import { HashRouter } from "react-router-dom";
import ScrollToTop from '../src/components/ScrollToTop';
import SiteHeader from "../src/components/SiteHeader/SiteHeader";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <ScrollToTop>
          <div className="App">
            <SiteHeader />
            {Routes}
          </div>
        </ScrollToTop>
      </HashRouter>
    );
  }
}

export default App;
