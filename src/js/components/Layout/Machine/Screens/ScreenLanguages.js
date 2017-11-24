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
      <div id="screen-languages">
         <div class="tabletext">
            <h1>Other Languages</h1>
        </div>
                    
           <div class="buttons-main">
          <div class="col-md-4">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="Deutsch" img="/img/flags/germany.svg" nav="/withdraw" {...this.props}/>
            </div>
          </div>
          <div class="col-md-4 ">
            <div class='bouttons'>
                  <JButton buttonclass="boutton" text="Español" img="/img/flags/spain.svg" nav="/deposit" {...this.props}/>
            </div>         
           </div>
          <div class="col-md-4">
            <div class='bouttons'>
                  <JButton buttonclass="boutton" text="Italiano" img="/img/flags/italy.svg" nav="/transfermenu" {...this.props}/>
            </div>         
            </div>
            <div class="col-md-4">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="Čeština" img="/img/flags/czech_republic.svg" nav="/balance" {...this.props}/>
            </div>
          </div>
          <div class="col-md-4 ">
            <div class='bouttons'>
                  <JButton buttonclass="boutton" text="Portuguese" img="/img/flags/portugal.svg" nav="/signin/mobile" {...this.props}/>
            </div>         
           </div>
          <div class="col-md-4">
            <div class='bouttons'>
                  <JButton buttonclass="boutton" text="Hindi" img="/img/flags/india.svg" nav="/logout" {...this.props}/>
            </div>         
            </div>
      
        </div>
           
           
           
           
           
           
           
 
    </div>
    );
  }
}