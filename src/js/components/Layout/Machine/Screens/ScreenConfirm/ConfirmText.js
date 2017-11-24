import React from "react";
const queryString = require('query-string');

//var $ = require('jquery');

export default class JButton extends React.Component {
    constructor(){
     super();
        this.state = {amt:"0"};
    }

  render() { 
       this.state.amt = queryString.parse(this.props.location.search).amt;
         console.log(this.state.amt);
    return (
      <div class="confirmtext">
          <h2>{this.props.text}</h2>
              <h1>{this.state.amt}</h1>
          <h2 class={(this.props.to==null&&this.props.from==null ) ? 'invis' : null}>{"From " + this.props.from + " to " + this.props.to} </h2>
    </div>
    );
  }
}