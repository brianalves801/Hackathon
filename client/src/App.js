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
import Home from "./components/Home";
import Sample from "./components/Sample";
import SpeakersPage from "./components/SpeakersPage";
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
            <Home />
          </Route>
          <Route path="/header" component={Header} />

          <Route path="/speaker">
            <SpeakersPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
