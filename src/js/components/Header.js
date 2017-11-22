import React from "react";
import JButton from "./Layout/Machine/JButton";


//var $ = require('jquery');

export default class Header extends React.Component {
  

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}
