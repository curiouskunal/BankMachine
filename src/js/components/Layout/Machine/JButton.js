import React from "react";


//var $ = require('jquery');

export default class JButton extends React.Component {


  render() {
    return (
      <div>
        <button class={this.props.style == null? "btn btn-success": this.props.style}> {this.props.text == null? "default button": this.props.text}</button>
      </div>
    );
  }
}