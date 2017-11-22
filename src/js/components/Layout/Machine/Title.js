import React from "react";


//var $ = require('jquery');

export default class Title extends React.Component {


  render() {
      console.log(this.props.title);
    return (
      <div >
        <h1>{this.props.title == null ? "default" : this.props.title}</h1>
      </div>
    );
  }
}
