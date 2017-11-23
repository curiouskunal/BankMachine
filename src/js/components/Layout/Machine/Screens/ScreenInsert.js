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
            <JButton buttonclass="headerButton" text="EXIT" icon="fa-times-circle" nav="/" {...this.props}/>
          </div>
        </div>
        
        <Title title="Insert Card" />
        <div class="buttons-main">
          <div class="col-md-6 center">
            <img src="/img/IMG_7764.GIF"/>
          </div>
        <div class="col-md-4">
            <i id="arrow" class="fa fa-long-arrow-down" aria-hidden="true"></i>
            <p> Click on card reader below to "insert your card" </p>
          </div>
        </div>


      </div>
    );
  }
}