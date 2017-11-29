import React from "react";
import JButton from "../JButton"
import Title from "../Title";

//var $ = require('jquery');

export default class ScreenFailed extends React.Component {


  render() {
      console.log(this.props.title);
    return (
     <div id="screen-failed">
        <div>
          <div class = "left">
            <JButton buttonclass="headerButton" text="BACK" icon="fa-arrow-circle-left" nav="/" {...this.props}/>
          </div>
          <div class = "right">
            <JButton buttonclass="headerButton" text="EXIT" icon="fa-times-circle" nav="/" {...this.props}/>
          </div>
        </div>
      <Title title="l" />
      
      
      
      <div class="buttons-main">

    </div>
    
    </div>
    );
  }
}
