import React from "react";
import Title from "../Title";
import JButton from "../JButton";

//var $ = require('jquery');

export default class ScreenSignIn extends React.Component {
//    componentWillMount(){
//        this.props.history.push('/welcome?ijustgotpushed=true');
//    }

  render() {
      console.log(this.props);
    return (
      <div id="screen-signin">
        <div>
          <div class = "left">
            <JButton buttonclass="headerButton" text="BACK" icon="fa-arrow-circle-left" nav="../" {...this.props}/>
          </div>
          <div class = "right">
            <JButton buttonclass="headerButton" text="EXIT" icon="fa-times-circle" nav="/" {...this.props}/>
          </div>
        </div>
        
        <Title title="Sign In" />
        <div class="buttonWrapper">
<<<<<<< HEAD

          
              <JButton bootstrap="col-md-4" outerdiv="bouttons" buttonclass="boutton pri" text="I have my card" img="/img/smile.png" nav="/signin/card" {...this.props}/>
          
          
              <JButton bootstrap="col-md-4" outerdiv="bouttons" buttonclass="boutton pri" text="Mobile app sign in" img="/img/smile.png" nav="/signin/mobile" {...this.props}/>
          
          
              <JButton bootstrap="col-md-4" outerdiv="bouttons" buttonclass="boutton pri" text="Account number" img="/img/smile.png" nav="/test" {...this.props}/>
          


        </div>

        
      </div>
    );
  }
}