import React from "react";
import Title from "../Title";
import JButton from "../JButton";
import VoiceModule from "./Modules/VoiceModule";
var $ = require('jquery');

export default class ScreenWelcome extends React.Component {
     constructor(){
      super();
         this.state = {
             voice:{
                 accessibility:
                    [
                        {keys: ['english'], action: ()=>{$('.buttons-main button:contains("English")').click()},  msg: 'You selected English.', help:"English. Sets the menu language to English."},
                        {keys: ['francais', 'french'], action: ()=>{$('.buttons-main button:contains("Français")').click()},  msg: 'You selected French.', help:"French. Sets the menu language to French."},
                        {keys: ['other', 'language'], action: ()=>{$('.buttons-main button:contains("English")').click()},  msg: 'You selected Other Languages.', help:"Other Languages. Brings you to a screen where you may select from a list of languages."}
                    ],         
                 forcedintro: "Welcome to TD Canada Trust. You can say ... use my voice ... to enable voice navigation and accessibility features.",
                 help: "You are on the welcome screen. From here you may select a language to proceed."       
             }
         };
     }
    componentDidMount(){
//        if(window.accessibility)
//          googleTTS('Welcome to TD. To get help at any time, please say help. To turn on text to speech accessibility, please say accessibility.', 'en', 1).then(function (url) { // speed normal = 1 (default), slow = 0.24
//                var audio = new Audio(url);
//                audio.play();
//                console.log(url); // https://translate.google.com/translate_tts?...
//            }).catch(function (err) {
//                console.error(err.stack);
//            });
    }
    
    
    
    
  render() {
      
    return (
      <div id="screen-welcome">
      <Title title="Welcome to TD Canada Trust" />
      <div class="buttons-secondary">

        

    </div>
      <div class="buttons-main">
        <div class="col-md-offset-2 col-md-4 ">
            <div class='bouttons'>
                <JButton text="English" buttonclass="boutton welcomeFlag" img="img/flags/gb.svg" nav="/signin" {...this.props}/>
            </div>
        </div>

        <div class="col-md-4">
            <div class='bouttons'>
                <JButton text="Français" buttonclass="boutton welcomeFlag" img="img/flags/france.svg" nav="/french" {...this.props}/>
            </div>
        </div>
    </div>
    <div class="buttons-secondary">
    <div class="col-md-12">
        <div class="col-md-2 col-md-offset-10">
            <JButton buttonclass= "smallButton" text="Other Languages" icon="fa-globe" nav="/languages" {...this.props}/>
        </div>
    </div>
    </div>
    
    <div class='module-voice'>
    <div class="buttons-secondary">
    <div class="col-md-12">
        <VoiceModule options={this.state.voice.accessibility} forcedintro={this.state.voice.forcedintro} help={this.state.voice.help} {...this.props}/>
      </div>
      </div>
    </div>
    </div>
    );
  }
}