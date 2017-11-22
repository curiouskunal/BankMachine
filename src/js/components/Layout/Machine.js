import React from "react";
import Title from "./Machine/Title";
import JButton from "./Machine/JButton";

//var $ = require('jquery');

export default class Machine extends React.Component {
    
  render() { 
    return (
      <div id="content-wrapper">
        <Title title="Welcome to RBC" />
        <JButton text="Francais"/>
        <JButton text="Francais"/>
      </div>
    );
  }
}
