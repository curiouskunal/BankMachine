import React from "react";


//var $ = require('jquery');

export default class JButton extends React.Component {
    constructor(){
        super();
    }
    
  navigate(){
      if(this.props.nav.toString() == "../"){
           this.props.history.goBack();
          return;
      }
      if(this.props.nav.toString() == "/"){
           this.props.history.replace("/");
          return;
      }
      this.props.history.push(this.props.nav.toString());
  }

  render() { 
    return (
      <div>
       
        <button class="btn btn-success" onClick={(e) => {this.navigate();}}>
            <img src={this.props.img == null? "": this.props.img} alt=""/>
            <span>{this.props.text == null? "default button": this.props.text}</span>
        </button>
      </div>
    );
  }
}