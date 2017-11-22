import React from "react";
import Title from "../Title";
import JButton from "../JButton";

//var $ = require('jquery');

export default class ScreenWelcome extends React.Component {
//    componentWillMount(){
//        this.props.history.push('/welcome?ijustgotpushed=true');
//    }

  render() {
      console.log(this.props);
    return (
      <div id="screen-welcome">
        
        
        <Title title="Welcome to RBC" />
        <div class="buttons-main">
            <JButton text="Welcome" nav="/signin" {...this.props}/>
            <JButton text="Francais" nav="/french" {...this.props}/>
        </div>
        
        <div class="buttons-secondary">
            <JButton buttonclass= "type2" text="Francais" nav="/french" {...this.props}/>
        </div>
        
      </div>
    );
  }
}