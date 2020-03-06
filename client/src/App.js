//libraries
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link
} from "react-router-dom";
import axios from "axios";

//styles
import "./styles/app.css";

//import components here
import Home from "./components/Home";
import SpeakersPage from "./components/SpeakersPage";
import Footer from "./components/Footer";
import Insights from "./components/Insights";

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
          <Route path="/search">
            <SpeakersPage />
          </Route>
          <Route path="/insights/video">
            <Insights />
          </Route>
          <Route path="/insights/general">
            <Insights />
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
