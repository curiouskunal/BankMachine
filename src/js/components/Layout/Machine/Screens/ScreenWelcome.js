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
                        {keys: ['english'], selector: '.buttons-main button:contains("English")',  msg: 'You selected English.', help:"English. Sets the menu language to English."},
                        {keys: ['francais', 'french'], selector: '.buttons-main button:contains("Français")',  msg: 'You selected French.', help:"French. Sets the menu language to French."},
                        {keys: ['other', 'language'], selector: '.buttons-secondary button:contains("Other")',  msg: 'You selected Other Languages.', help:"Other Languages. Brings you to a screen where you may select from a list of languages."}
                    ],         
                 intro: "Welcome to TD Canada Trust. If you need help at any time please say ... help. If you would like text to speech accessibility features, please say ... accessibility.",
                 help: "You are on the welcome screen. From here you may select a language to proceed. If you say ... accessibility, you may navigate the menus with your voice. You may say ... options at any time to explain your options."       
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
        <VoiceModule options={this.state.voice.accessibility} intro={this.state.voice.intro} help={this.state.voice.help} {...this.props}/>
    </div>
    </div>
    );
  }
}