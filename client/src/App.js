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
import Sample from "./components/Sample";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <Router>
        <Switch>
          <Sample />
          <Footer />
        </Switch>
      </Router>
    );
  }
}

export default App;
