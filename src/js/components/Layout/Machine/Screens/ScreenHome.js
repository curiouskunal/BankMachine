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
         <div class="col-md-4 ">
            <div class='bouttons'>
                  <JButton buttonclass="boutton" text="My Common Transactions" icon="fa-star" nav="/common"  {...this.props}/>
            </div>         
           </div>
          <div class="col-md-4">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="Withdraw" icon="fa-money" nav="/accountselect" query={{tr:'withdraw'}} {...this.props}/>
            </div>
          </div>
          <div class="col-md-4 ">
            <div class='bouttons'>
                  <JButton buttonclass="boutton" text="Deposit" icon="fa-money" nav="/accountselect" query={{tr:'deposit'}} {...this.props}/>
            </div>         
           </div>
          <div class="col-md-4">
            <div class='bouttons'>
                  <JButton buttonclass="boutton" text="Transfer" icon="fa-paper-plane-o" nav="/transfermenu" {...this.props}/>
            </div>         
            </div>
            <div class="col-md-4">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="Check Account Balance" icon="fa-file-text-o" nav="/accountselect" query={{tr:'balance'}} {...this.props}/>
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