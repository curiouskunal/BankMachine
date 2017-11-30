import React from "react";
import Title from "../Title";
import JButton from "../JButton";
import VoiceModule from "./Modules/VoiceModule";
//var $ = require('jquery');

export default class ScreenSignIn extends React.Component {
    constructor(){
      super();
         this.state = {
             voice:{
                 accessibility:
                    [
                        {keys: ['card', 'debit', 'pin'], selector: '.buttons-main button:contains("Card")',  msg: 'You selected Card sign in.', help:"Card sign in. Allows you to sign in using your bank card and pin."},
                        {keys: ['mobile', 'tap', 'scan', 'app'], selector: '.buttons-main button:contains("Mobile")',  msg: 'You selected Mobile app sign in.', help:"Mobile app sign in. Allows you to sign in using the TD mobile app on your phone."},
                        {keys: ['account', 'number'], selector: '.buttons-main button:contains("Account")',  msg: 'You selected Account number sign in.', help:"Account number sign in. Allows you to sign in using your account number and password."},
                        {keys: ['back', 'undo'], selector: '.left button',  msg: 'You selected Back. Returning to previous menu.', help:"Back. Returns you to the previous menu."},
                        {keys: ['quit', 'exit', 'logout', 'cancel'], selector: '.right button',  msg: 'You selected Exit. You have been logged out.', help:"Exit. Resets all information and returns to Welcome Screen."}
                    ],         
                 help: "You are on the sign in screen. From here you may select a method to sign in."       
             }
         };
     }

  render() {
      console.log(this.props);
    return (
      <div id="screen-signin">
        <div>
          <div class = "left">
            <JButton buttonclass="headerButton" text="BACK" icon="fa-arrow-circle-left" nav="../" {...this.props}/>
          </div>
          <div class = "right">
            <JButton buttonclass="headerButton" text="EXIT" icon="fa-times-circle" nav="/" {...this.props}/>
          </div>
        </div>
        
        <Title title="Sign In" />
         <div class="buttons-main">
          <div class="col-md-4">
             <div class='bouttons'>
                 <JButton buttonclass="boutton" text="Card" texttwo = "sign in" icon="fa-credit-card-alt" nav="/signin/card" {...this.props}/>
            </div>
          </div>
          <div class="col-md-4 ">
            <div class='bouttons'>
                  <JButton buttonclass="boutton" text="Mobile app" texttwo = "sign in" icon="fa-mobile" nav="/signin/mobile" {...this.props}/>
            </div>         
           </div>
          <div class="col-md-4">
            <div class='bouttons'>
                  <JButton buttonclass="boutton" text="Account number" texttwo = "sign in" icon="fa-hashtag" nav="/signin/account" {...this.props}/>
            </div>         
            </div>
      
    

        </div>

        <div class='module-voice'>
            <VoiceModule options={this.state.voice.accessibility} help={this.state.voice.help} {...this.props}/>
        </div>
      </div>
    );
  }
}