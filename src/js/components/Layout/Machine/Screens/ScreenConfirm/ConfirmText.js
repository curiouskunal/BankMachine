import React from "react";
const queryString = require('query-string');

//var $ = require('jquery');

export default class ConfirmText extends React.Component {
    constructor(){
     super();
        this.state = {amt:"0"};
    }
    
    componentDidMount(){
        
    }

  render() { 
       this.state.amt = queryString.parse(this.props.location.search).amt == null ? this.props.amt : queryString.parse(this.props.location.search).amt;
         console.log(this.state.amt);
    return (
      <div class="confirmtext">
          <h2>{this.props.text}</h2>
              <h1>{'$'+this.state.amt}</h1>
          <h2 class={(this.props.to==null&&this.props.from==null ) ? 'invis' : null}>
              <span class={this.props.from==null ? 'invis' : null}>{"From " + this.props.from}</span>
              <span class={(this.props.to==null || this.props.to==undefined ) ? 'invis' : null}>{" to " + this.props.to}</span>
          </h2>
    </div>
    );
  }
}