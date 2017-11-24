import React from "react";
import Title from "../Title";
import JButton from "../JButton";

var $ = require('jquery');

export default class ScreenPrint extends React.Component {
    constructor(){
     super();
        this.state = {text1: "Would you Like a Receipt?", text2: ""}
    }
    buttonClicked(type){
        var text="";
        if(type=='paper')
            text="Printing Paper Receipt";
        else if (type=='email')
            text="Emailing you a Copy";
        else
            text="No Receipt Selected"
            
        console.log(text);
        text = text;
        this.setState({text1: text, text2: "Returning to Home Screen"});
        $('#screen-print button').css('display', 'none');
        $('#screen-print h1').css('margin-bottom', '300px');
    }

  render() {
      console.log(this.props);
    return (
      <div id="screen-print">
        <div>
          <div class = "left">
            <JButton buttonclass="headerButton" text="BACK" icon="fa-arrow-circle-left" nav="../" {...this.props}/>
          </div>
          <div class = "right">
            <JButton buttonclass="headerButton" text="HOME" icon="fa-home" nav="/home" {...this.props}/>
          </div>
        </div>
        
        <Title title={this.state.text1} />
        <Title title={this.state.text2} />
         <div class="buttons-main">
          <div class="col-md-4">
             <div class='bouttons'>
                 <JButton buttonclass="boutton" text="Paper Copy" icon="fa-file-text-o" nav="/home" navdelay='5000' click={this.buttonClicked.bind(this)} args={['paper']} {...this.props}/>
            </div>
          </div>
          <div class="col-md-4 ">
            <div class='bouttons'>
                  <JButton buttonclass="boutton" text="Email" icon="fa-envelope-o" nav="/home" navdelay='5000' click={this.buttonClicked.bind(this)} args={['email']} {...this.props}/>
            </div>         
           </div>
          <div class="col-md-4">
            <div class='bouttons'>
                  <JButton buttonclass="boutton" text="No Receipt" icon="fa-times-circle-o" nav="/home" navdelay='5000' click={this.buttonClicked.bind(this)} args={['none']} {...this.props}/>
            </div>         
            </div>
      
    

        </div>

        
      </div>
    );
  }
}