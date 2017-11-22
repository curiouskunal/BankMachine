import React from "react";
import Title from "./Title";
import JButton from "./JButton";

//var $ = require('jquery');

export default class ScreenWelcome extends React.Component {


  render() {
    return (
      <div>
        <Title title="Welcome to RBC" />
        <JButton text="Welcome"/>
        <JButton text="Francais"/>
      </div>
    );
  }
}