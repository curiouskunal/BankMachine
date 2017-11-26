import React from "react";
import Title from "../Title";
import JButton from "../JButton";
const queryString = require('query-string');
var $ = require('jquery');
//require('jquerykeyframes');

//var $ = require('jquery');

export default class ScreenNumKey extends React.Component {
//    componentWillMount(){
//        this.props.history.push('/welcome?ijustgotpushed=true');
//    }
    removeDigit(){
        $('#screen-numkey input').val($('#screen-numkey input').val().substr(0,$('#screen-numkey input').val().toString().length-1));
    }
    
    clearDigit(){
        $('#screen-numkey input').val(null);
    }
    
    enterDigit(digit){
        $('#screen-numkey input').val($('#screen-numkey input').val() + digit);
    }
    
    submit(digit){
        $('#screen-numkey input').val($('#screen-numkey input').val() + digit);
    }
    
    readInputVal(){
        return $('#screen-numkey input').val();
    }
    
    buildQuery(){
        var obj={}
        if(this.props.output!=null)
            obj[this.props.output]=this.readInputVal.bind(this)
        return $.extend(queryString.parse(this.props.location.search), this.props.output==null ? {to: this.readInputVal.bind(this)} : obj );
    }
    
    shake(selector,t){
            $(selector).addClass('shake-horizontal');
            $(selector).addClass('shake-constant');
//            $(selector).animate(
//                {
//                    'background-color':'red'
//                }, 500);
            
            setTimeout(()=>{
                $(selector).removeClass('shake-constant');
                $(selector).removeClass('shake-horizontal');
            }, t);   
    }
    
    requirements(){
        $('p.inputDiv1').css('color', 'white');
        $('p.inputDiv2').css('color', 'white');
        if(!this.readInputVal()!=""){ //blank entry
            $('.errmsg h1').text('The ' + (this.props.errmsgtarget==null ? 'number' : this.props.errmsgtarget ) + ' cannot be blank. Try again.');
            $('.errmsg h1').css('color', 'red');
            this.shake('#screen-numkey input',1000);
            return false;
        }
        
        return true;
    }

  render() {
      console.log(this.props);
    return (
      <div id="screen-numkey">
        
        <div>
         <div class = "left">
            <JButton buttonclass="headerButton" text="BACK" icon="fa-arrow-circle-left" nav="../" {...this.props}/>
          </div>
          <div class = "right">
            <JButton buttonclass="headerButton" text="EXIT" icon="fa-times-circle" nav="/" {...this.props}/>
          </div>
        </div>
        
        <Title title={this.props.title} className="errmsg" />
        
         <div class="buttons-main">
        
          
          
          <div class="col-md-6 col-md-offset-3">
             <input class="numericInput active" min="0" type="number"/>
          </div>
          
          <div class="col-md-4 col-md-offset-4">
             <div class='bouttons'>
                <JButton buttonclass="boutton tester1" text="SUBMIT" nav={this.props.redirects[0]} query={this.buildQuery.bind(this)} requirements={this.requirements.bind(this)} {...this.props}/>
            </div>
          </div>
          
          
          <div class="col-md-2 col-md-offset-3">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="1" click={this.enterDigit.bind(this)} args={[1]} {...this.props}/>
            </div>
          </div>
          <div class="col-md-2">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="2" click={this.enterDigit.bind(this)} args={[2]} {...this.props}/>
            </div>
          </div>
          <div class="col-md-2">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="3" click={this.enterDigit.bind(this)} args={[3]} {...this.props}/>
            </div>
          </div>
          
          
          
          <div class="col-md-2 col-md-offset-3">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="4" click={this.enterDigit.bind(this)} args={[4]} {...this.props}/>
            </div>
          </div>
          <div class="col-md-2">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="5" click={this.enterDigit.bind(this)} args={[5]} {...this.props}/>
            </div>
          </div>
          <div class="col-md-2">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="6" click={this.enterDigit.bind(this)} args={[6]} {...this.props}/>
            </div>
          </div>
         
          
          
          <div class="col-md-2 col-md-offset-3">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="7" click={this.enterDigit.bind(this)} args={[7]} {...this.props}/>
            </div>
          </div>
          <div class="col-md-2">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="8" click={this.enterDigit.bind(this)} args={[8]} {...this.props}/>
            </div>
          </div>
          <div class="col-md-2">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="9" click={this.enterDigit.bind(this)} args={[9]} {...this.props}/>
            </div>
          </div>
        
          
          
          <div class="col-md-2 col-md-offset-3">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="BKSP" click={this.removeDigit.bind(this)} {...this.props}/>
            </div>
          </div>
          <div class="col-md-2">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="0" click={this.enterDigit.bind(this)} args={[0]} {...this.props}/>
            </div>
          </div>
          <div class="col-md-2">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="CLEAR" click={this.clearDigit.bind(this)} {...this.props}/>
            </div>
          </div>
          
      
        </div>
      </div>
    );
  }
}