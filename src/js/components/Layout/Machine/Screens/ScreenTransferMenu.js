import React from "react";
import Title from "../Title";
import JButton from "../JButton";

//var $ = require('jquery');

export default class TransferMenu extends React.Component {
//    componentWillMount(){
//        this.props.history.push('/welcome?ijustgotpushed=true');
//    }

  render() {
      console.log(this.props);
    return (
      <div id="screen-transfermenu">
        <div >
	        <div class = "left">
            <JButton buttonclass="headerButton" text="BACK" icon="fa-arrow-circle-left" nav="../" {...this.props}/>
          </div>
          <div class = "right">
            <JButton buttonclass="headerButton" text="HOME" icon="fa-home" nav="/home" {...this.props}/>
          </div>
		</div>
        
        <Title title="Transfer Menu" />
        <div class="buttons-main">

          <div class="col-md-4 col-md-offset-2">
             <div class='bouttons'>
                 <JButton buttonclass="boutton" text="Between your Accounts" icon="fa-exchange" nav="/transfermenu/betweenacct" query={{tr:'between'}} {...this.props}/>
            </div>
          </div>
          <div class="col-md-4">
            <div class='bouttons'>
                  <JButton buttonclass="boutton" text="e-Transfer" icon="fa-envelope-o" nav="/transfermenu/etransfermenu" {...this.props}/>
            </div>         
           </div>
          <div class="col-md-4 col-md-offset-2">
            <div class='bouttons'>
                  <JButton buttonclass="boutton" text="To another TD Member" icon="fa-user-o" nav="/transfermenu/othermember" {...this.props}/>
            </div>         
            </div>
            <div class="col-md-4">
            <div class='bouttons'>
                  <JButton buttonclass="boutton" text="Pay Bills" icon="fa-money" nav="/transfermenu/paybills" {...this.props}/>
            </div>         
            </div>
      
    

        </div>
        
      </div>
    );
  }
}