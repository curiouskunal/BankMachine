import React from "react";
import Title from "../Title";
import JButton from "../JButton";

//var $ = require('jquery');

export default class ScreenInsert extends React.Component {
//    componentWillMount(){
//        this.props.history.push('/welcome?ijustgotpushed=true');
//    }

  render() {
      console.log(this.props);
    return (
      <div id="screen-insert">
        <div>
          <div class = "left">
            <JButton buttonclass="headerButton" text="BACK" icon="fa-arrow-circle-left" nav="../" {...this.props}/>
          </div>
          <div class = "right">
            <JButton buttonclass="headerButton" text="HOME" icon="fa-home" nav="/home" {...this.props}/>
          </div>
        </div>
        
        <Title title="Insert Cash or Cheque" />
        <div class="buttons-main">
          <div class="col-md-5 center line">
          <div class="padCashInsert">
           <i id="arrowdown" class="fa fa-long-arrow-down"></i>s
            <p> Click On Deposit Slot Below To Insert Cash Or Cheque </p>
            </div>
          </div>
        <div class="col-md-3 col-md-offset-1">
            <img src={window.root+"/img/Image-3.GIF"}/>
          </div>
        </div>
        
      </div>
    );
  }
}