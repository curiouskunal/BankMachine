import React from "react";
import Title from "../Title";
import JButton from "../JButton";
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import VoiceModule from "./Modules/VoiceModule";

var $ = require('jquery');

export default class ScreenMobile extends React.Component {
    constructor(){
      super();
         this.state = {
             voice:{
                 accessibility:
                    [
                        {keys: ['scan', 'qr', 'code'],  msg: 'You selected QR code sign in. Please open the TD app and scan the code.', help:"QR code. Allows you to sign in by scanning a QR code using your phone. Requires the TD secure app."},
                        {keys: ['mobile', 'tap', 'nfc'], msg: 'You selected Mobile tap sign in. Please ensure NFC is on and tap your phone against the screen.', help:"Mobile tap sign in. Allows you to sign in by tapping your phone to the screen. Requires the TD secure app."},
                        {keys: ['agent','live','connect'], action: ()=>{alert('Assume a live agent connects and authenticates you.'); this.props.history.push('/home');},  msg: 'Please wait while we connect you to a live agent. Please stand directly in front of the machine.', help:"Live agent. This option Connects you to a live agent for authentication and is recommended for accessibility needs only."},
                        {keys: ['back', 'undo'], action: ()=>{$('.left button').click()},  msg: 'You selected Back. Returning to previous menu.', help:"Back. Returns you to the previous menu."},
                        {keys: ['quit', 'exit', 'logout', 'cancel'], action: ()=>{$('.right button').click()},  msg: 'You selected Exit. You have been logged out.', help:"Exit. Resets all information and returns to Welcome Screen."}
                    ],
                 help: "You are on the mobile sign in screen. From here you may select a method to sign in."
             }
         };
     }
    
    clickQR(){
     alert('assume QR code was scanned and successfully authenticated');     
    }
    
    clickPhone(){
     alert('assume phone was tapped and successfully authenticated'); 
    }

  render() { 
      console.log(this.props);
    return (
      <div id="screen-mobile">
        <div>
          <div class = "left">
            <JButton buttonclass="headerButton" text="BACK" icon="fa-arrow-circle-left" nav="../" {...this.props}/>
          </div>
          <div class = "right">
            <JButton buttonclass="headerButton" text="EXIT" icon="fa-times-circle" nav="/" {...this.props}/>
          </div>
        </div>
        
        
        <Title title=""/>
        <div class="buttons-main">
          <div class="col-md-5 center line2">
            
            <Link to="/home" > <img src={window.root+"img/qrcode.png"} onClick={this.clickQR} /></Link>
               <p class="scan">Open TD app and scan code</p> 
               <h4>OR</h4>
          </div>
        <div class="col-md-3 col-md-offset-1">
            <Link to="/home"> <i id="mobile" class="fa fa-mobile" aria-hidden="false" onClick={this.clickPhone} ></i> </Link>
            <p class="tap">Tap phone here</p>
          </div>
        </div>
    
        <div class='module-voice'>
            <VoiceModule options={this.state.voice.accessibility} help={this.state.voice.help} {...this.props}/>
        </div>
    </div>
    );
  }
}