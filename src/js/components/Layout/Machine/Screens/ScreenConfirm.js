import React from "react";
import Title from "../Title";
import JButton from "../JButton";
import ConfirmText from "./ScreenConfirm/ConfirmText"

//var $ = require('jquery');

export default class ScreenConfirm extends React.Component {
//    componentWillMount(){
//        this.props.history.push('/welcome?ijustgotpushed=true');
//    }
ß
  render() {
      console.log(this.props);
    return (
      <div>
          <ConfirmText {...this.props}/>
          <div class="buttons-main">
          <div class="col-md-4">
             <div class='bouttons'>
                 <JButton buttonclass="boutton" text="Card sign in" icon="fa-credit-card-alt" nav="/signin/card" />
            </div>
          </div>
          <div class="col-md-4 ">
            <div class='bouttons'>
                  <JButton buttonclass="boutton" text="Mobile app sign in" icon="fa-mobile" nav="/signin/mobile" />
            </div>         
           </div>
          <div class="col-md-4">
            <div class='bouttons'>
                  <JButton buttonclass="boutton" text="Account number sign in" icon="fa-hashtag" nav="/signin/mobile" />
            </div>         
            </div>
        </div>
      </div>
    );
  }
}