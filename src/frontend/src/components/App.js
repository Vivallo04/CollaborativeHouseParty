import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "HomePage";
import {Create} from "@material-ui/icons";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HomePage />
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);


//python .\src\manage.py runserver