import React from "react";
import Title from "../Title";
import JButton from "../JButton";

//var $ = require('jquery');

export default class ScreenETransferMenu extends React.Component {
//    componentWillMount(   //        this.props.history.push('/welcome?ijustgotpushed=true');
//    }

  render() {
      console.log(this.props);
    return (
      <div id="screen-etransfermenu">
        <div>
         <div class = "left">
            <JButton buttonclass="headerButton" text="BACK" icon="fa-arrow-circle-left" nav="../" {...this.props}/>
          </div>
          <div class = "right">
            <JButton buttonclass="headerButton" text="EXIT" icon="fa-times-circle" nav="/" {...this.props}/>
          </div>
        </div>
      <Title title="E-Transfer Menu" />
    
     
      <div class="buttons-main">
        <div class="col-md-offset-2 col-md-4 ">
            <div class='bouttons'>
                <JButton text="Request Transfer" buttonclass="boutton" img="/img/cash-payment-icon-5-f.png"  nav="/transfermenu/etransfermenu/etransfer/request" {...this.props}/>
            </div>
        </div>

        <div class="col-md-4">
            <div class='bouttons'>
                <JButton text="Send Transfer" buttonclass="boutton" img="/img/cash-payment-icon-5.png"  nav="/transfermenu/etransfermenu/etransfer/send" {...this.props}/>
            </div>
        </div>
    </div>
    
    </div>
    );
  }
}