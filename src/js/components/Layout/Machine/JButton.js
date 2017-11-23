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
      <div class={this.props.bootstrap==null? "" : this.props.bootstrap}>
       <div class={this.props.outerdiv ? null : this.props.outerdiv}>
        <button class={this.props.buttonclass==null? "" : this.props.buttonclass} onClick={(e) => {this.navigate();}}>
            <img class={this.props.img == null? "invis":""} src={this.props.img == null? "": this.props.img} alt=""/>
            <i class={this.props.icon==null? "invis" : ("fa "+ this.props.icon) } aria-hidden="true"></i>
            <span>{this.props.text == null? "default button": this.props.text}</span>
        </button>
        </div>
      </div>
    );
  }
}