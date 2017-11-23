import React from "react";
import Title from "../Title";
import JButton from "../JButton";

//var $ = require('jquery');

export default class ScreenCard extends React.Component {
//    componentWillMount(){
//        this.props.history.push('/welcome?ijustgotpushed=true');
//    }

  render() {
      console.log(this.props);
    return (
      <div id="screen-card">
        <div>
          <div class = "left">
            <JButton buttonclass="headerButton" text="BACK" icon="fa-arrow-circle-left" nav="../" {...this.props}/>
          </div>
          <div class = "right">
            <JButton buttonclass="headerButton" text="EXIT" icon="fa-times-circle" nav="/" {...this.props}/>
          </div>
        </div>
        
        <Title title="Insert Card" />

        <div class="col-md-6">
          <img src="/img/IMG_7764.GIF"/>
        </div>

        <div class="col-md-6 center">
          <i class="fa fa-long-arrow-down" aria-hidden="true"></i>
        </div>
            <div class='bouttons'>
                  <JButton buttonclass="center" text="CLICK HERE TO INSERT CARD" nav="/home" {...this.props}/>
            </div>

      </div>
    );
  }
}