import React from "react";
import Title from "../Title";
import JButton from "../JButton";

//var $ = require('jquery');

export default class ScreenDropdown extends React.Component {
//    componentWillMount(){
//        this.props.history.push('/welcome?ijustgotpushed=true');
//    }

  render() {
      console.log(this.props);
    return (
      <div id="screen-dropdown">
        <div>
          <div class = "left">
            <JButton buttonclass="headerButton" text="BACK" icon="fa-arrow-circle-left" nav="../" {...this.props}/>
          </div>
          <div class = "right">
            <JButton buttonclass="headerButton" text="HOME" icon="fa-home" nav="/" {...this.props}/>
          </div>
        </div>
        
        <Title title="DropDown" />
        <div class="buttons-main">

        <div class="col-md-4">
            <i id="arrowdown" class="fa fa-long-arrow-down" aria-hidden="true"></i>
            <p> Click on deposit window below to "insert your card" </p>
          </div>

          <div class="col-md-6 center">
            <img src="/img/Image-3.gif"/>
          </div>

        </div>
      </div>
    );
  }
}