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
          <div class="col-md-4">
             <div class='bouttons'>
                  <div class='set blue'>
                        <JButton buttonclass="boutton pri" text="Mobile app sign in" img="/img/smile.png" nav="/signin/mobile" {...this.props}/>
                  </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class='bouttons'>
                  <JButton buttonclass="boutton pri" text="Mobile app sign in" img="/img/smile.png" nav="/signin/mobile" {...this.props}/>
            </div>         
           </div>
          <div class="col-md-4">
            <div class='bouttons'>
                  <JButton buttonclass="boutton pri" text="Mobile app sign in" img="/img/smile.png" nav="/signin/mobile" {...this.props}/>
            </div>         
            </div>

        </div>

        
      </div>
    );
  }
}