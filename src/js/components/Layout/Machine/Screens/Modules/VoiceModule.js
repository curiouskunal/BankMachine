import React from "react";
import JButton from "../../JButton"

var $ = require('jquery');

export default class VoiceModule extends React.Component {
    componentDidMount(){
        
        if(speechRecognizer != null && speechRecognizer != undefined){
            this.processSTT(window.speechRecognizer);
            this.playIntro();
        }
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
    
    processSTT (speechRecognizer) {
        
        
                    var r = document.getElementById('result');
                    r.innerHTML="";
                    
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
    
    cancelSayDo(phrase, thenDo, timeout){
        phrase = phrase || null;
        timeout = timeout || 1000;
        thenDo = thenDo || null;
        window.synthesis.cancel();
            setTimeout(()=>{
                
                if(phrase!=null){
                    var say = new SpeechSynthesisUtterance(phrase);
                    window.synthesis.speak(say);
                    if(thenDo!=null)
                        say.onend = thenDo;
                }
                else if(thenDo!=null)
                    thenDo();
                
            },timeout);
    }
    
    handleInput(transcript){
        if(transcript.toLowerCase().indexOf('shut up')!=-1){
            this.cancelSayDo('alright, I am your bitch now.');
            
        }
        
        if(transcript.toLowerCase().indexOf('accessibility')!=-1){
            window.accessibility = !window.accessibility;
            this.cancelSayDo('Accessibility Mode '+(window.accessibility ? 'enabled' : 'disabled')+', say ... options to list all available options at any time. ' + (window.accessibility ? 'You may say an option to select it and proceed.':''));
            
        }
        
        if(transcript.toLowerCase().indexOf('help')!=-1){
            this.cancelSayDo(this.props.help + ' '+(window.accessibility ? 'Say an option to select it.' : 'If you say ... accessibility, you may navigate the menus with your voice.')+' You may say ... options at any time to explain your options.');
        }
        
        if(transcript.toLowerCase().indexOf('options')!=-1){
            this.cancelSayDo(null, ()=>{
                for(var i=0; i<this.props.options.length; i++){
                    var say = new SpeechSynthesisUtterance("Option " + (i+1) + ":" +this.props.options[i].help);
                        window.synthesis.speak(say);
                    }
            }, 1500 );
        }
        
        if(!window.accessibility)
            return false;
        
        this.props.options.forEach((i)=>{
            for( var j=0; j<i.keys.length; j++){//i.key.forEach((j)=>{
                if(transcript.toLowerCase().indexOf(i.keys[j])!=-1){
                    this.cancelSayDo(i.msg, 
                                        ()=> {
                                            $(i.selector).click();
                                        }, 1500);
                    break;
                }
            }
        });
            
    }


  render() {
      console.log(this.props.title);
    return (
        <div id="module-voice">
            <JButton buttonclass={"smallButton" + ( (speechRecognizer != null && speechRecognizer != undefined)?'':' invis') } icon="fa-microphone" click={this.toggleAccessibility.bind(this)} {...this.props}/>
        </div>
    );
  }
}
