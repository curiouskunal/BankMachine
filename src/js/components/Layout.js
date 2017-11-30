import React from "react";
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
        
import Footer from "./Footer";
import Header from "./Header";
import Machine from "./Layout/Machine";
import MachineHardware from "./MachineHardware";

export default class Layout extends React.Component {
    
    componentWillMount(){
        window.root="/";
        window.accessibility=false;
        window.synthesis = speechSynthesis;
         window.speechRecognizer = this.createSST();
        this.populateVoiceList();
        document.getElementById("voiceSelect").onchange=function(e){
            //TODO select a voice
        }
        if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
          speechSynthesis.onvoiceschanged = this.populateVoiceList;
        }
    }
    
//    componentWillMount(){
//       
//    }
    
    
    createSST(){
        if(!('webkitSpeechRecognition' in window)){
					alert('Your browser does not support speech recognition. Accessibility features will be disabled until you upgrade. Try Google Chrome.');
                    return;   
                }
					var speechRecognizer = new webkitSpeechRecognition();
					speechRecognizer.continuous = true;
					speechRecognizer.interimResults = true;
					speechRecognizer.lang = 'en-CA';
                    speechRecognizer.onend = function () {
	                   speechRecognizer.start();
                    }
                    speechRecognizer.start();
                    return speechRecognizer;
    }
    
  constructor() {
    super(); 
    this.state = {
      title: "Welcome to our Bank Machine Interface",
    };
  }

  changeTitle(title) {
    this.setState({title: title});
  }
    
    
    populateVoiceList() {
          if(typeof speechSynthesis === 'undefined') {
            return;
          }

          var voices = speechSynthesis.getVoices();

          for(var i = 0; i < voices.length ; i++) {
            var option = document.createElement('option');
            option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

            if(voices[i].default) {
              option.textContent += ' -- DEFAULT';
            }

            option.setAttribute('data-lang', voices[i].lang);
            option.setAttribute('data-name', voices[i].name);
            document.getElementById("voiceSelect").appendChild(option);
          }
    }

    

  render() {
    return (
      <div>
       <BrowserRouter>
       <div>
            <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
            
            <Switch>
                <Route render={props => <Machine {...props}/> }/>
            </Switch>
        
            <MachineHardware />
            <Footer />
        </div>
        </BrowserRouter>
      </div>
    );
  }
}
