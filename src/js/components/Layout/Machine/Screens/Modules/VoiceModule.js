import React from "react";
import JButton from "../../JButton"

var $ = require('jquery');

export default class VoiceModule extends React.Component {
    componentDidMount(){
        
        if(speechRecognizer != null && speechRecognizer != undefined){
            this.processSTT(window.speechRecognizer);
            this.playIntro(window.accessibility);
        }
    }
    
    toggleAccessibility(){
        window.accessibility = !window.accessibility;
        this.cancelSayDo('Voice control mode '+(window.accessibility ?
                                                'enabled. Say ... help to explain the screen you are on. Say ... options to list all available options. You can select an option by saying it.' 
                                                : 
                                                'disabled.') );
    }
    
    playIntro(accessibility){
        if(this.props.intro==null && this.props.forcedintro==null)
            return;
        var say = new SpeechSynthesisUtterance((window.accessibility? this.props.intro : this.props.forcedintro));
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
        
        if(transcript.toLowerCase().indexOf('my name is')!=-1){
            this.cancelSayDo('Your name is Fuck Boy. Get lost kid.');
        }
        
        if(transcript.toLowerCase().indexOf('lost')!=-1){
            this.cancelSayDo('Where the fuck I am?');
        }
        
        if(transcript.toLowerCase().indexOf('voice')!=-1)
            this.toggleAccessibility();
        
        if(!window.accessibility)
            return;
        
        if(transcript.toLowerCase().indexOf('help')!=-1){
            this.cancelSayDo(this.props.help + ' Say ... options at any time to explain your options.');
        }
        
        if(transcript.toLowerCase().indexOf('options')!=-1){
            this.cancelSayDo(null, ()=>{
                for(var i=0; i<this.props.options.length; i++){
                    var say = new SpeechSynthesisUtterance("Option " + (i+1) + ":" +this.props.options[i].help);
                        window.synthesis.speak(say);
                    }
            }, 1500 );
        }
        
        this.props.options.forEach((i)=>{
            for( var j=0; j<i.keys.length; j++){//i.key.forEach((j)=>{
                if(transcript.toLowerCase().indexOf(i.keys[j])!=-1){
                    this.cancelSayDo(i.msg, i.action, 1500);
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
