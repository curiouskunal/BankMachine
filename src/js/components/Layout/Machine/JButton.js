import React from "react";


//var $ = require('jquery');

export default class JButton extends React.Component {
    constructor(){
        super();
        
    }
    
    handleClick(){
        console.log("button with text: " + this.props.text + "  ---  " );
        console.log(this.props);
        
        if(this.props.click!=null){
            this.props.args==null ? this.props.click() : this.props.click.apply(this,this.props.args);
        }
        
        if(this.props.nav!=null)
            if(this.props.navdelay==null)
                this.navigate();
            else{
                
                setTimeout(()=>{
                    
                    this.navigate();
                },this.props.navdelay);
            }
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
//     Querying
      var querystring="";
      if(this.props.query!=null){
          querystring="?";
      var i;
      for(i in this.props.query)
          if(typeof(this.props.query[i]) == "function")
            querystring+= i + "=" + this.props.query[i]() + "&";
          else if(typeof(this.props.query[i]) == "number")
            querystring+= i + "=" + this.props.query[i] + "&";
          else if(typeof(this.props.query[i]) == "string"){
              alert(this.props.query[i]);
            querystring+= i + "=" + this.props.query[i] + "&";
          }
        }
      querystring = querystring.substr(0,querystring.length-1);
      this.props.history.push(this.props.nav.toString() + querystring);
  }

  render() { 
    return (
       <div class={this.props.outerdiv ? null : this.props.outerdiv}>
       <span class={this.props.tooltip==null ? 'invis' : 'tooltip-text' }>{this.props.tooltip}</span>
       <div class="tooltip-icon">
           <i class={this.props.tooltip==null ? 'invis' : 'fa fa-info-circle' } aria-hidden="true"></i>
       </div>
        <button class={this.props.buttonclass==null? "" : this.props.buttonclass} onClick={(e) => {this.handleClick();}}>
            <img class={this.props.img == null? "invis":""} src={this.props.img == null? "": this.props.img} alt=""/>
            <div class="button-icon">
            <i class={this.props.icon==null? "invis" : ("fa "+ this.props.icon) } aria-hidden="true"></i>
            </div>
            <span>{this.props.text == null? "default button": this.props.text}</span>
            <span class={this.props.sym == null? "invis":"sym"}> {this.props.sym == null? "": this.props.sym}</span>
            <span class={this.props.texttwo == null? "invis":"span2"}> {this.props.texttwo == null? "": this.props.texttwo}</span>
        </button>
        </div>
    );
  }
}