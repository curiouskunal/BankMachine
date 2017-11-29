import React from "react";


//var $ = require('jquery');

export default class Title extends React.Component {


  render() {
      console.log(this.props.title);
    return (
      <div class={this.props.className}>
        <h1 >{this.props.title == null ? "default" : this.props.title}</h1>
      </div>
    );
  }
}
