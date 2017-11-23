import React from "react";
import Title from "../Title";
import JButton from "../JButton";
import ConfirmText from "./ScreenConfirm/ConfirmText"

//var $ = require('jquery');

export default class ScreenConfirm extends React.Component {
//    componentWillMount(){
//        this.props.history.push('/welcome?ijustgotpushed=true');
//    }
  render() {
      console.log(this.props);
    return (
      <div>
          <ConfirmText {...this.props}/>
      <div class="buttons-main">
        <div class="col-md-offset-2 col-md-4 ">
            <div class='bouttons'>
                <JButton {...this.props} text="Yes" buttonclass="boutton" icon="fa-check-circle" nav="/home" />
            </div>
        </div>

        <div class="col-md-4">
            <div class='bouttons'>
                <JButton {...this.props} text="No" buttonclass="boutton" icon="fa-times-circle" nav="/home" />
            </div>
        </div>
    </div>
    
    </div>
    );
  }
}