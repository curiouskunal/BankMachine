import React from "react";
import Title from "../Title";
import JButton from "../JButton";

//var $ = require('jquery');

export default class ScreenHome extends React.Component {
//    componentWillMount(){
//        this.props.history.push('/welcome?ijustgotpushed=true');
//    }

  render() {
      console.log(this.props);
    return (
      <div id="screen-home">
        <Title title="Home" />
        
         <div class="buttons-main">
          <div class="col-md-4">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="Withdraw" icon="fa-money" nav="/amountselect" {...this.props}/>
            </div>
          </div>
          <div class="col-md-4 ">
            <div class='bouttons'>
                  <JButton buttonclass="boutton" text="Deposit" icon="fa-money" nav="/insert" {...this.props}/>
            </div>         
           </div>
          <div class="col-md-4">
            <div class='bouttons'>
                  <JButton buttonclass="boutton" text="Transfer" icon="fa-paper-plane-o" nav="/transfermenu" {...this.props}/>
            </div>         
            </div>
            <div class="col-md-4">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="Check Account Balance" icon="fa-file-text-o" nav="/balance" {...this.props}/>
            </div>
          </div>
          <div class="col-md-4 ">
            <div class='bouttons'>
                  <JButton buttonclass="boutton" text="Manage Accounts" icon="fa-cog" nav="/signin/mobile" {...this.props}/>
            </div>         
           </div>
          <div class="col-md-4">
            <div class='bouttons'>
                  <JButton buttonclass="boutton" text="Sign Out" icon="fa-sign-out" nav="/logout" {...this.props}/>
            </div>         
            </div>
      
        </div>
      </div>
    );
  }
}