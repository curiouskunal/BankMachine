import React from "react";


//var $ = require('jquery');

export default class JButton extends React.Component {


  render() {
    return (
      <div>
        <button class="btn btn-success">{this.props.text == null? "default button": this.props.text}</button>
      </div>
    );
  }
}