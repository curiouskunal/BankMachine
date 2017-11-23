import React from "react";
import Title from "../Title";
import JButton from "../JButton";

//var $ = require('jquery');

export default class ScreenNumKey extends React.Component {
//    componentWillMount(){
//        this.props.history.push('/welcome?ijustgotpushed=true');
//    }

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
        
        <Title title="Enter" />
        
         <div class="buttons-main">
        
          
          
          <div class="col-md-6 col-md-offset-3">
             <input class="numericInput" type="number"/>
          </div>
          
          <div class="col-md-4 col-md-offset-4">
             <div class='bouttons'>
                <JButton buttonclass="boutton tester1" text="SUBMIT" nav="/transfermenu/betweenacct/confirm" {...this.props}/>
            </div>
          </div>
          
          
          <div class="col-md-2 col-md-offset-3">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="1" nav="/transfermenu/betweenacct/confirm" {...this.props}/>
            </div>
          </div>
          <div class="col-md-2">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="2" nav="/transfermenu/betweenacct/confirm" {...this.props}/>
            </div>
          </div>
          <div class="col-md-2">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="3" nav="/transfermenu/betweenacct/confirm" {...this.props}/>
            </div>
          </div>
          
          
          
          <div class="col-md-2 col-md-offset-3">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="4" nav="/transfermenu/betweenacct/confirm" {...this.props}/>
            </div>
          </div>
          <div class="col-md-2">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="5" nav="/transfermenu/betweenacct/confirm" {...this.props}/>
            </div>
          </div>
          <div class="col-md-2">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="6" nav="/transfermenu/betweenacct/confirm" {...this.props}/>
            </div>
          </div>
         
          
          
          <div class="col-md-2 col-md-offset-3">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="7" nav="/transfermenu/betweenacct/confirm" {...this.props}/>
            </div>
          </div>
          <div class="col-md-2">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="8" nav="/transfermenu/betweenacct/confirm" {...this.props}/>
            </div>
          </div>
          <div class="col-md-2">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="9" nav="/transfermenu/betweenacct/confirm" {...this.props}/>
            </div>
          </div>
        
          
          
          <div class="col-md-2 col-md-offset-3">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="BKSP" nav="/transfermenu/betweenacct/confirm" {...this.props}/>
            </div>
          </div>
          <div class="col-md-2">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="0" nav="/transfermenu/betweenacct/confirm" {...this.props}/>
            </div>
          </div>
          <div class="col-md-2">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="CLEAR" nav="/transfermenu/betweenacct/confirm" {...this.props}/>
            </div>
          </div>
          
      
        </div>
      </div>
    );
  }
}