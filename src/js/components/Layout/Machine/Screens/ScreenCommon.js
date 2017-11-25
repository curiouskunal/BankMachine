import React from "react";
import Title from "../Title";
import JButton from "../JButton";

//var $ = require('jquery');

export default class ScreenCommon extends React.Component {
//    componentWillMount(){
//        this.props.history.push('/welcome?ijustgotpushed=true');
//    }

  render() {
      console.log(this.props);
    return (
      <div id="screen-common">
       <div >
	        <div class = "left">
            <JButton buttonclass="headerButton" text="BACK" icon="fa-arrow-circle-left" nav="../" {...this.props}/>
          </div>
          <div class = "right">
            <JButton buttonclass="headerButton" text="HOME" icon="fa-home" nav="/home" {...this.props}/>
          </div>
		</div>
       
       
        <Title title="My Common Transfers" />
        
         <div class="buttons-main">
            <div class="col-md-4 ">
            <div class='bouttons'>
                  <JButton buttonclass="boutton" text="Deposit $1099 into Savings Account" icon="fa-money" nav="/confirm" {...this.props}/>
            </div>         
           </div>
          <div class="col-md-4">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="e-Transfer $410 to Bob Weeks" icon="fa-paper-plane-o" nav="/confirm" {...this.props}/>
            </div>
          </div>
          <div class="col-md-4">
            <div class='bouttons'>
                  <JButton buttonclass="boutton" text="Withdraw $40 from Checking Account" icon="fa-money" nav="/confirm" {...this.props}/>
            </div>         
            </div>
            <div class="col-md-4">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="Transfer $500 from Checking to Savings Account" icon="fa-exchange" nav="/confirm" {...this.props}/>
            </div>
          </div>
          <div class="col-md-4 ">
            <div class='bouttons'>
                  <JButton buttonclass="boutton" text="Check Savings Account for Blood Money from Nigerian Prince" icon="fa-blind" nav="/confirm" {...this.props}/>
            </div>         
           </div>
          <div class="col-md-4">
            <div class='bouttons'>
                  <JButton buttonclass="boutton" text="Transfer $300 into RRSP Account from Savings Account" icon="fa-exchange" nav="/confirm" {...this.props}/>
            </div>         
            </div>
      
        </div>
      </div>
    );
  }
}