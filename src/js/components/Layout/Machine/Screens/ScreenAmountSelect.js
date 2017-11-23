import React from "react";
import Title from "../Title";
import JButton from "../JButton";

//var $ = require('jquery');

export default class ScreenAmountSelect extends React.Component {
//    componentWillMount(){
//        this.props.history.push('/welcome?ijustgotpushed=true');
//    }

  render() {
      console.log(this.props);
    return (
      <div id="screen-amountselect">

        <div>
         <div class = "left">
            <JButton buttonclass="headerButton" text="BACK" icon="fa-arrow-circle-left" nav="../" {...this.props}/>
          </div>
          <div class = "right">
            <JButton buttonclass="headerButton" text="EXIT" icon="fa-times-circle" nav="/" {...this.props}/>
          </div>
        </div>
        
        <Title title="Home" />
        
         <div class="buttons-main">
          <div class="col-md-4">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="Withdraw" icon="fa-money" nav="/withdraw" {...this.props}/>
            </div>
          </div>
          <div class="col-md-4 ">
            <div class='bouttons'>
                  <JButton buttonclass="boutton" text="Deposit" icon="fa-money" nav="/deposit" {...this.props}/>
            </div>         
           </div>
          <div class="col-md-4">
            <div class='bouttons'>
                  <JButton buttonclass="boutton" text="Transfer" icon="fa-paper-plane-o" nav="/transfermenu" {...this.props}/>
            </div>         
            </div>
            <div class="col-md-4">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="Check Account Balance" icon="fa-file-text-o" nav="/signin/card" {...this.props}/>
            </div>
          </div>
          <div class="col-md-4 ">
            <div class='bouttons'>
                  <JButton buttonclass="boutton" text="Manage Accounts" icon="fa-cog" nav="/signin/mobile" {...this.props}/>
            </div>         
           </div>
          <div class="col-md-4">
            <div class='bouttons'>
                  <JButton buttonclass="boutton" text="Sign Out" icon="fa-sign-out" nav="/test" {...this.props}/>
            </div>         
            </div>
      
        </div>
      </div>
    );
  }
}