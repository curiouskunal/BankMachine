import React from "react";
import Title from "../Title";
import JButton from "../JButton";
import VoiceModule from "./Modules/VoiceModule";

//var $ = require('jquery');

export default class ScreenCard extends React.Component {
    constructor(){
      super();
         this.state = {
             voice:{
                 accessibility:
                    [
                        {keys: ['card', 'insert'],  msg: 'Insert your card now. The slot is at the bottom right of the machine, marked by a green blinking light.', help:"Insert your card."},
                        {keys: ['agent','live','connect', 'operator'], action: ()=>{alert('Assume a live agent connects and authenticates you.'); this.props.history.push('/home');},  msg: 'Please wait while we connect you to a live agent. Please stand directly in front of the machine.', help:"Live agent. This option Connects you to a live agent for authentication and is recommended for accessibility needs only."},
                        {keys: ['back', 'undo'], action: ()=>{$('.left button').click()},  msg: 'You selected Back. Returning to previous menu.', help:"Back. Returns you to the previous menu."},
                        {keys: ['quit', 'exit', 'logout', 'cancel'], action: ()=>{$('.right button').click()},  msg: 'You selected Exit. You have been logged out.', help:"Exit. Resets all information and returns to Welcome Screen."}
                    ],
                 intro: "Please insert your card now, or say options to hear all available options. Say ... help ... if you need help.",
                 help: "You are on the card insert screen. You may now insert your card in the slot at the bottom right. The slot is marked with a green blinking light and braille lettering."
             }
         };
     }

  render() {
      console.log(this.props);
    return (
      <div id="screen-card">
        <div>
          <div class = "left">
            <JButton buttonclass="headerButton" text="BACK" icon="fa-arrow-circle-left" nav="../" {...this.props}/>
          </div>
          <div class = "right">
            <JButton buttonclass="headerButton" text="EXIT" icon="fa-times-circle" nav="/" {...this.props}/>
          </div>
        </div>
        
        <Title title="Insert Card" />
        <div class="buttons-main">
          <div class="col-md-5 center line">
            <img src={window.root+"img/IMG_7764.GIF"}/>
          </div>
        <div class="col-md-3 col-md-offset-1">
            <i id="arrowdown" class="fa fa-long-arrow-down"></i>s
            <p> Click on card reader below to "insert your card" </p>
          </div>
        </div>
        
        <div class='module-voice'>
            <VoiceModule options={this.state.voice.accessibility} help={this.state.voice.help} intro={this.state.voice.intro} {...this.props}/>
        </div>
        
      </div>
    );
  }
}