//libraries
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link
} from "react-router-dom";
import "./styles/app.scss";
import axios from "axios";

//styles
import "./styles/app.css";

//import components here
import Sample from "./components/Sample";
import Footer from "./components/Footer";
import Header from "./components/Header";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/home">
            <Sample />
          </Route>
          <Route path="/header" component={Header} />

          <Route path="/sample">
            aweaewgaew
            <Sample />
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
