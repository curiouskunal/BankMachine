import React from "react";


//var $ = require('jquery');

export default class JButton extends React.Component {

  render() { 
      console.log("yghkkjn " );
      console.log(this.props.location.search);
    return (
      <div class="confirmtext">
          <h2>{this.props.text}</h2>
              <h1>{this.props.amt}</h1>
          <h2>{"From " + this.props.from + " to " + this.props.to} </h2>
    </div>
    );
  }
}