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
         <div>
          <div class = "left">
            <JButton buttonclass="headerButton" text="BACK" icon="fa-arrow-circle-left" nav="../" {...this.props}/>
          </div>
          <div class = "right">
            <JButton buttonclass="headerButton" text="EXIT" icon="fa-times-circle" nav="/" {...this.props}/>
          </div>
        </div>
                   
        <Title title="Other Languages" />
           <div class="buttons-main">
          <div class="col-md-4">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="Deutsch" img="/img/flags/germany.svg" nav="/french" {...this.props}/>
            </div>
          </div>
          <div class="col-md-4 ">
            <div class='bouttons'>
                  <JButton buttonclass="boutton" text="Español" img="/img/flags/spain.svg" nav="/french" {...this.props}/>
            </div>         
           </div>
          <div class="col-md-4">
            <div class='bouttons'>
                  <JButton buttonclass="boutton" text="Italiano" img="/img/flags/italy.svg" nav="/french" {...this.props}/>
            </div>         
            </div>
            <div class="col-md-4">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="Čeština" img="/img/flags/czech_republic.svg" nav="/french" {...this.props}/>
            </div>
          </div>
          <div class="col-md-4 ">
            <div class='bouttons'>
                  <JButton buttonclass="boutton" text="Portuguese" img="/img/flags/portugal.svg" nav="/french" {...this.props}/>
            </div>         
           </div>
          <div class="col-md-4">
            <div class='bouttons'>
                  <JButton buttonclass="boutton" text="Hindi" img="/img/flags/india.svg" nav="/french" {...this.props}/>
            </div>         
            </div>
      
        </div>
           
           
           
           
           
           
           
 
    </div>
    );
  }
}