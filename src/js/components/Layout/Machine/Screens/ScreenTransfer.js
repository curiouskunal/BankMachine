import React from "react";
import Title from "../Title";
import JButton from "../JButton";
import Dropdown from 'react-dropdown'
const queryString = require('query-string');
var $ = require('jquery');

export default class ScreenTransfer extends React.Component {
//    componentWillMount(){
//        this.props.history.push('/welcome?ijustgotpushed=true');
//    }
  constructor(){
    super();
      this.state={to:null, from:null}
  }
    
    removeDigit(){
        $('#screen-transfer input').val($('#screen-transfer input').val().substr(0,$('#screen-transfer input').val().toString().length-1));
    }
    
    clearDigit(){
        $('#screen-transfer input').val(null);
    }
    
    enterDigit(digit){
        $('#screen-transfer input').val($('#screen-transfer input').val() + digit);
    }
    
    submit(digit){
        $('#screen-transfer input').val($('#screen-transfer input').val() + digit);
    }
    
    readInputVal(){
        return $('#screen-transfer input').val();
    }
    
    readFromVal(){
        return this.state.from 
    }
    
    readToVal(){
        return this.state.to
    }
    
    _onSelectFrom(e){
        console.log(e);
        if(e.value.indexOf('-')!=-1)
            this.state.from = e.value.substr(0,e.value.indexOf(' '));
        else 
            this.state.from=e.value;
        console.log(this.state.from)
    }
    
    _onSelectTo(e){
        console.log(e);
        if(e.value.indexOf('-')!=-1)
            this.state.to = e.value.substr(0,e.value.indexOf(' '));
        else
            this.state.to = e.value;
    }
    
    shake(selector,t){
            $(selector).addClass('shake-horizontal');
            $(selector).addClass('shake-constant');
            
            setTimeout(()=>{
                $(selector).removeClass('shake-constant');
                $(selector).removeClass('shake-horizontal');
            }, t);   
    }
    
    buildQuery(){
        return $.extend(queryString.parse(this.props.location.search), {amt:this.readInputVal.bind(this), to:this.readToVal.bind(this), from:this.readFromVal.bind(this)} );
    }
    
    requirements(){
        var success = true;
        if(this.props.from!=null && this.readFromVal()==null){ //blank entry 1
            //$('.errmsg h1').text('Your pin cannot be blank. Try again.');
            $('.errmsg h1').css('color', 'red');
            $('.errmsg h1').text('You must select from the dropdown.');
            
            this.shake('.dd1',1000);
            success=false;
        }
        
        if(this.props.to!=null && this.readToVal()==null){ //blank entry 1
            //$('.errmsg h1').text('Your pin cannot be blank. Try again.');
            $('.errmsg h1').css('color', 'red');
            $('.errmsg h1').text('You must select from the dropdown.');
            
            this.shake('.dd2',1000);
            success=false;
        }
        
        if(this.readInputVal()==""){ //blank entry
            $('.errmsg h1').text('The amount cannot be blank. Try again.');
            $('.errmsg h1').css('color', 'red');
            this.shake('#screen-transfer input',1000);
            success=false;
        }
        
        if(this.props.confirm!=null && !this.props.confirm(this.readFromVal(), this.readInputVal()) ){
            $('.errmsg h1').text('The account has insufficient funds.');
            $('.errmsg h1').css('color', 'red');
            this.shake('.dd1',1000);
            return false
        }
        
        return success;
    }
    
    
    

  render() {
      console.log(this.props);
    return (
      <div id="screen-transfer">
        <div>
          <div class = "left">
            <JButton buttonclass="headerButton" text="BACK" icon="fa-arrow-circle-left" nav="../" {...this.props}/>
          </div>
          <div class = "right">
            <JButton buttonclass="headerButton" text="HOME" icon="fa-home" nav="/home" {...this.props}/>
          </div>
        </div>
        
        <Title title="Transfer" className="errmsg" />
        

       <div class="col-md-12">
           <div class={ this.props.from==null? ' invis' : (this.props.to==null ? "col-6":"col-md-5 col-md-offset-1") }>
            <h2>From:</h2>
           <Dropdown className="dd1" options={this.props.from} onChange={this._onSelectFrom.bind(this)} placeholder="Select an option" />
        </div>

          <div class={ this.props.to==null? ' invis' : (this.props.from==null ? "col-6":"col-md-5") }>
          <h2>To:</h2>
          <Dropdown className="dd2" options={this.props.to} onChange={this._onSelectTo.bind(this)} placeholder="Select an option" />
          </div>
       </div>
        
          
          
          
          <div class="buttons-main">
        
          
          
          <div class="col-md-6 col-md-offset-3">
             <input class="numericInput active" type="number" min="0" placeholder="$ Amount" />
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