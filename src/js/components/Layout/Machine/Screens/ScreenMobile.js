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
        
        <div class="buttons-main">
        
        <Title title=""/>
        <div class="col-sm-5">

        
        <i id="phone" class="fa fa-mobile" aria-hidden="false"></i>
            <p> Tap phone here </p>
        </div>
        <div class="col-md-4">
            
                    <img src="/img/qrcode.png" onClick={(e) => {this.nav();}}/>
                    <p align = 'center'> Open app and scan code </p>

          </div>
        </div>

    </div>
    );
  }
}