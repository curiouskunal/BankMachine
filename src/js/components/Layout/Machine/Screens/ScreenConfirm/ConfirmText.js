import React from "react";


//var $ = require('jquery');

export default class JButton extends React.Component {

  render() { 
    return (
      <div class="confirmtext">
          <h2>{this.props.text}</h2>
              <h1>{this.props.amt}</h1>
          <h2>{this.props.textalt}</h2>
    </div>
    );
  }
}