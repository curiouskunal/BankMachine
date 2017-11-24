import React from "react";
import Title from "../Title";
import JButton from "../JButton";

//var $ = require('jquery');

export default class ScreenFrench extends React.Component {
//    componentWillMount(){
//        this.props.history.push('/welcome?ijustgotpushed=true');
//    }
  render() {
      console.log(this.props);
    return (
      <div id="screen-french">
        <div>
          <div class = "left">
            <JButton buttonclass="headerButton" text="BACK" icon="fa-arrow-circle-left" nav="/" {...this.props}/>
          </div>
          <div class = "right">
            <JButton buttonclass="headerButton" text="EXIT" icon="fa-times-circle" nav="/" {...this.props}/>
          </div>
        </div>
      <Title title="UI Same as English Interface." />
      <div class="buttons-main">
        <div class="col-md-12">
            <div class='bouttons'>
                <JButton text="English" buttonclass="boutton" nav="/signin" {...this.props}/>
            </div>
        </div>
    </div>
    
    </div>
    );
  }
}