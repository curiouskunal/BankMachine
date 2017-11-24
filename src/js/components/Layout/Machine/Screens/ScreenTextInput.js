import React from "react";
import Title from "../Title";
import JButton from "../JButton";

var $ = require('jquery');

export default class ScreenTextInput extends React.Component {
    constructor(){
     super();
        this.state={active: null};
    }
    
    componentDidMount(){
        this.state.active=$('#screen-textinput input').get(0);
    }
    inputHandle(e){
        this.state.active=e.target;
    }
    
    removeDigit(){
        $(this.state.active).val($(this.state.active).val().substr(0,$(this.state.active).val().toString().length-1));
    }
    
    clearDigit(){
        $(this.state.active).val(null);
    }
    
    enterDigit(digit){
        $(this.state.active).val($(this.state.active).val() + digit);
    }
    
    submit(digit){
        $(this.state.active).val($(this.state.active).val() + digit);
    }
    
  render() {
      console.log(this.props);
    return (
    <div id="screen-textinput">
      
        <div class="buttons-main">
        
              
         
          <div class="col-md-3">
              <p class="inputDiv1">ACCOUNT NUMBER</p>
          </div>
          <div class="col-md-9">
             <input class="numericInput inputDiv1 active" type="number" onClick={this.inputHandle.bind(this)} min="0"/>
          </div>
 

          <div class="col-md-3">
              <p class="inputDiv2">PASSWORD</p>
          </div>
          <div class="col-md-9">
             <input class="numericInput inputDiv2" type="password" onClick={this.inputHandle.bind(this)} min="0"/>
          </div>
   

       
       
       
       
       
       
        <div class="col-md-12">
           <div class="col-md-1 col-md-offset-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="0" click={this.enterDigit.bind(this)} args={[0]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="1" click={this.enterDigit.bind(this)} args={[1]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="2" click={this.enterDigit.bind(this)} args={[2]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="3" click={this.enterDigit.bind(this)} args={[3]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="4" click={this.enterDigit.bind(this)} args={[4]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="5" click={this.enterDigit.bind(this)} args={[5]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="6" click={this.enterDigit.bind(this)} args={[6]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="7" click={this.enterDigit.bind(this)} args={[7]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="8" click={this.enterDigit.bind(this)} args={[8]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="9" click={this.enterDigit.bind(this)} args={[9]} {...this.props}/>
            </div>
        </div>
       </div>
      
      
      
      
      
      
      
      
       <div class="col-md-12">
           <div class="col-md-1 col-md-offset-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="Q" click={this.enterDigit.bind(this)} args={['Q']} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="W" click={this.enterDigit.bind(this)} args={['W']} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="E" click={this.enterDigit.bind(this)} args={['E']} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="R" click={this.enterDigit.bind(this)} args={['R']} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="T" click={this.enterDigit.bind(this)} args={['T']} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="Y" click={this.enterDigit.bind(this)} args={['Y']} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="U" click={this.enterDigit.bind(this)} args={['U']} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="I" click={this.enterDigit.bind(this)} args={['I']} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="O" click={this.enterDigit.bind(this)} args={['O']} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="P" click={this.enterDigit.bind(this)} args={['P']} {...this.props}/>
            </div>
        </div>
       </div>
        
        
        
        <div class="col-md-12 secondRow">
           <div class="col-md-1 col-md-offset-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="A" click={this.enterDigit.bind(this)} args={['A']} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="S" click={this.enterDigit.bind(this)} args={['S']} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="D" click={this.enterDigit.bind(this)} args={['D']} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="F" click={this.enterDigit.bind(this)} args={['F']} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="G" click={this.enterDigit.bind(this)} args={['G']} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="H" click={this.enterDigit.bind(this)} args={['H']} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="J" click={this.enterDigit.bind(this)} args={['J']} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="K" click={this.enterDigit.bind(this)} args={['K']} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="L" click={this.enterDigit.bind(this)} args={['L']} {...this.props}/>
            </div>
        </div>
       </div>
        
        
        
        
        
        <div class="col-md-12 ">
           <div class="col-md-1 col-md-offset-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton shiftKey" text="shift" {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton thirdRow" text="Z" click={this.enterDigit.bind(this)} args={['Z']} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton thirdRow" text="X" click={this.enterDigit.bind(this)} args={['Z']} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton thirdRow" text="C" click={this.enterDigit.bind(this)} args={['C']} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton thirdRow" text="V" click={this.enterDigit.bind(this)} args={['V']} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton thirdRow" text="B" click={this.enterDigit.bind(this)} args={['B']} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton thirdRow" text="N" click={this.enterDigit.bind(this)} args={['N']} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton thirdRow" text="M" click={this.enterDigit.bind(this)} args={['M']} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton thirdRow backspaceKey" text="delete" click={this.removeDigit.bind(this)} {...this.props}/>
            </div>
        </div>
        
       </div>
        
        
        
        
        
        
        
        <div class="col-md-12 ">
           <div class="col-md-1 col-md-offset-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="@" click={this.enterDigit.bind(this)} args={['@']} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="." click={this.enterDigit.bind(this)} args={['.']} {...this.props}/>
            </div>
        </div>
        <div class="col-md-6">
             <div class='bouttons'>
                <JButton buttonclass="boutton space" text="" click={this.enterDigit.bind(this)} args={[' ']} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton enterKey" text="enter" nav={this.props.redirects[0]} {...this.props}/>
            </div>
        </div>        
       </div>
      
       </div>
        
         
    </div>
    );
  }
}