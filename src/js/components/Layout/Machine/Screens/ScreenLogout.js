import React from "react";
import Title from "../Title";
import JButton from "../JButton";

//var $ = require('jquery');

export default class ScreenLogout extends React.Component {
//    componentWillMount(){
//        this.props.history.push('/welcome?ijustgotpushed=true');
//    }

  render() {
      console.log(this.props);
    return (
      <div id="screen-logout">
        
        
        <Title title="Welcome to RBC" />
        <JButton text="Welcome" nav="/signin" {...this.props}/>
        <JButton text="Francais" nav="/french" {...this.props}/>
      </div>
    );
  }
}