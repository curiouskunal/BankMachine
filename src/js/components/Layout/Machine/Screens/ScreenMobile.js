import React from "react";
import Title from "../Title";
import JButton from "../JButton";

//var $ = require('jquery');

export default class ScreenMobile extends React.Component {
//    componentWillMount(){
//        this.props.history.push('/welcome?ijustgotpushed=true');
//    }
    nav(){
		console.log(window.location.pathname);
		if (window.location.pathname == "/signin/mobile"){
			window.location.href = '/home';
		}
		
	}

  render() {
      console.log(this.props);
    return (
      <div id="screen-mobile">
        <div>
          <div class = "left">
            <JButton buttonclass="headerButton" text="BACK" icon="fa-arrow-circle-left" nav="../" {...this.props}/>
          </div>
          <div class = "right">
            <JButton buttonclass="headerButton" text="EXIT" icon="fa-times-circle" nav="/" {...this.props}/>
          </div>
        </div>
        
        
        <Title title=""/>
        <div class="buttons-main">
          <div class="col-md-5 center line2">
            <img src="/img/qrcode.png" onClick={(e) => {this.nav();}}/>
            <p class="scan">Open app and scan code</p>
          </div>
        <div class="col-md-3 col-md-offset-1">
            <i id="mobile" class="fa fa-mobile" aria-hidden="false" onClick={(e) => {this.nav();}}></i>
            <p class="tap">Tap phone here</p>
          </div>
        </div>

    </div>
    );
  }
}