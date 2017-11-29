import React from "react";
import Title from "../Title";
import JButton from "../JButton";
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

//var $ = require('jquery');

export default class ScreenMobile extends React.Component {
//    componentWillMount(){
//        this.props.history.push('/welcome?ijustgotpushed=true');
//    }

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
            <Link to="/home"> <img src={window.root+"img/qrcode.png"} /></Link>
               <p class="scan">Open app and scan code</p> 
          </div>
        <div class="col-md-3 col-md-offset-1">
            <Link to="/home"> <i id="mobile" class="fa fa-mobile" aria-hidden="false" ></i> </Link>
            <p class="tap">Tap phone here</p>
          </div>
        </div>

    </div>
    );
  }
}