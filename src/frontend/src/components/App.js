//import React, { Component } from "react";
//import { render } from "react-dom";
//import HomePage from "HomePage";
//import {Create} from "@material-ui/icons";
//import CreateRoomPage from "./CreateRoomPage";

import RoomJoinPage from "./RoomJoinPage";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <RoomJoinPage/>
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));


//python .\src\manage.py runserver