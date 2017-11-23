import React from "react";
import Title from "../Title";
import JButton from "../JButton";

//var $ = require('jquery');

export default class ScreenWelcome extends React.Component {
//    componentWillMount(){
//        this.props.history.push('/welcome?ijustgotpushed=true');
//    }
ß
  render() {
      console.log(this.props);
    return (
      <div id="screen-welcome">
        
        
        <Title title="Welcome to RBC" />
        <div class="buttons-main">
            <JButton text="Engish" buttonclass="HomeButton" nav="/signin" {...this.props}/>
            <JButton text="Français" buttonclass="HomeButton" nav="/french" {...this.props}/>
        </div>
        
        <div class="buttons-secondary">
            <JButton buttonclass= "smallButton" text="More Languages" icon="fa-globe" nav="/french" {...this.props}/>
        </div>

      </div>
    );
  }
}