import React from "react";
import JButton from "../../JButton"

var $ = require('jquery');

export default class VoiceModule extends React.Component {
    componentDidMount(){
        var sr = this.createSST();
        if(sr!=null && sr!=undefined)
            this.startSTT(sr);
        this.playIntro();
    }
    
    toggleAccessibility(){
        window.accessibility = !window.accessibility;
        var say = new SpeechSynthesisUtterance('Accessibility Mode '+(window.accessibility ? 'enabled' : 'disabled')+', say ... options to list all available options at any time. ' + (window.accessibility ? 'You may say an option to select it and proceed.':''));
        window.synthesis.speak(say);
    }
    
    playIntro(){
        var say = new SpeechSynthesisUtterance(this.props.intro);
            window.synthesis.speak(say);
    }
    
    createSST(){
        if(!('webkitSpeechRecognition' in window)){
					alert('Your browser does not support speech recognition. Accessibility features will be disabled until you upgrade. Try Google Chrome.');
                    return;   
                }
					var speechRecognizer = new webkitSpeechRecognition();
					speechRecognizer.continuous = true;
					speechRecognizer.interimResults = true;
					speechRecognizer.lang = 'en-CA';
                    return speechRecognizer;
    }
    
    startSTT (speechRecognizer) {
        
                    var r = document.getElementById('result');
                    r.innerHTML="";
					speechRecognizer.start();
                    speechRecognizer.onend = function () {
	                   speechRecognizer.start();
                    }
					var finalTranscripts = '';

					speechRecognizer.onresult = (event)=>{
						var interimTranscripts = '';
						for(var i = event.resultIndex; i < event.results.length; i++){
							var transcript = event.results[i][0].transcript;
							transcript.replace("\n", "<br>");
							if(event.results[i].isFinal){
								finalTranscripts += transcript;
                                this.handleInput(transcript);
							}else{
								interimTranscripts += transcript;
							}
						}
						r.innerHTML = finalTranscripts + '<span class="span-stt">' + interimTranscripts + '</span>';
					};
					speechRecognizer.onerror = function (event) {
					};
				
    }
    
    handleInput(transcript){
        if(transcript.toLowerCase().indexOf('accessibility')!=-1){
            window.accessibility = !window.accessibility;
            var say = new SpeechSynthesisUtterance('Accessibility Mode '+(window.accessibility ? 'enabled' : 'disabled')+', say ... options to list all available options at any time. ' + (window.accessibility ? 'You may say an option to select it and proceed.':''));
                    window.synthesis.speak(say);
        }
        
        if(transcript.toLowerCase().indexOf('help')!=-1){
            var say = new SpeechSynthesisUtterance(this.props.help);
                    window.synthesis.speak(say);
        }
        
        if(transcript.toLowerCase().indexOf('options')!=-1){
            for(var i=0; i<this.props.options.length; i++){
                var say = new SpeechSynthesisUtterance("Option " + (i+1) + ":" +this.props.options[i].help);
                    window.synthesis.speak(say);
            }
        }
        
        if(!window.accessibility)
            return false;
        
        this.props.options.forEach((i)=>{
            for( var j=0; j<i.keys.length; j++){//i.key.forEach((j)=>{
                if(transcript.toLowerCase().indexOf(i.keys[j])!=-1){
                    var say = new SpeechSynthesisUtterance(i.msg);
                    window.synthesis.speak(say);
                    say.onend = function(e){
                        $(i.selector).click();
                        console.log(e.elapsedTime);
                    };
                    break;
                }
            }
        });
            
    }


  render() {
      console.log(this.props.title);
    return (
        <div id="module-voice">
            <JButton buttonclass="smallButton" icon="fa-microphone" click={this.toggleAccessibility.bind(this)} {...this.props}/>
        </div>
    );
  }
}
