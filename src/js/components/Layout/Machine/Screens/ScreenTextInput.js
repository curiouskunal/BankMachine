import React from "react";
import Title from "../Title";
import JButton from "../JButton";
import ConfirmText from "./ScreenConfirm/ConfirmText"

//var $ = require('jquery');

export default class ScreenLanguages extends React.Component {
//    componentWillMount(){
//        this.props.history.push('/welcome?ijustgotpushed=true');
//    }
  render() {
      console.log(this.props);
    return (
    <div id="screen-textinput">
      
        <div class="buttons-main">
        
              
         
          <div class="col-md-3">
              <p class="inputDiv1">ACCOUNT NUMBER</p>
          </div>
          <div class="col-md-9">
             <input class="numericInput inputDiv1" type="number" min="0"/>
          </div>
 

          <div class="col-md-3">
              <p class="inputDiv2">PASSWORD</p>
          </div>
          <div class="col-md-9">
             <input class="numericInput inputDiv2" type="text" min="0"/>
          </div>
   
      
      
      
      
      
        <div class="col-md-12">
           <div class="col-md-1 col-md-offset-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="0" {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="1" {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="2" {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="3" {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="4" {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="5" {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="6" {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="7" {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="8" {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="9" {...this.props}/>
            </div>
        </div>
       </div>
      
      
      
      
      
      
      
      
       <div class="col-md-12">
           <div class="col-md-1 col-md-offset-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="Q" {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="W" {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="E" {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="R" {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="T" {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="Y" {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="U" {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="I" {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="O" {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="P" {...this.props}/>
            </div>
        </div>
       </div>
        
        
        
        <div class="col-md-12 secondRow">
           <div class="col-md-1 col-md-offset-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="A" {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="S" {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="D" {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="F" {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="G" {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="H" {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="J" {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="K" {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="L" {...this.props}/>
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
                <JButton buttonclass="boutton thirdRow" text="Z" {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton thirdRow" text="X" {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton thirdRow" text="C" {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton thirdRow" text="V" {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton thirdRow" text="B" {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton thirdRow" text="N" {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton thirdRow" text="M" {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton thirdRow backspaceKey" text="delete" {...this.props}/>
            </div>
        </div>
        
       </div>
        
        
        
        
        
        
        
        <div class="col-md-12 ">
           <div class="col-md-1 col-md-offset-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="@" {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="." {...this.props}/>
            </div>
        </div>
        <div class="col-md-6">
             <div class='bouttons'>
                <JButton buttonclass="boutton space" text="" {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton enterKey" text="enter" {...this.props}/>
            </div>
        </div>        
       </div>
      
       </div>
        
         
    </div>
    );
  }
}