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
         <div class="buttons-main">
          <div class="col-md-4">
             <div class='bouttons'>
                 <JButton buttonclass="boutton" text="Card" texttwo = "sign in" icon="fa-credit-card-alt" nav="/signin/card" {...this.props}/>
            </div>
          </div>
          <div class="col-md-4 ">
            <div class='bouttons'>
                  <JButton buttonclass="boutton" text="Mobile app" texttwo = "sign in" icon="fa-mobile" nav="/signin/mobile" {...this.props}/>
            </div>         
           </div>
          <div class="col-md-4">
            <div class='bouttons'>
                  <JButton buttonclass="boutton" text="Account number" texttwo = "sign in" icon="fa-hashtag" nav="/signin/account" {...this.props}/>
            </div>         
            </div>
      
    

        </div>

        
      </div>
    );
  }
}