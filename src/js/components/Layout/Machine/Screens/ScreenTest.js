import React from "react";
import Title from "../Title";
import JButton from "../JButton";

//var $ = require('jquery');

export default class ScreenHome extends React.Component {
//    componentWillMount(){
//        this.props.history.push('/welcome?ijustgotpushed=true');
//    }

  render() {
      console.log(this.props);
    return (
      <div id="screen-test">

        <div>
         <div class = "left">
            <JButton buttonclass="headerButton" text="BACK" icon="fa-arrow-circle-left" nav="../" {...this.props}/>
          </div>
          <div class = "right">
            <JButton buttonclass="headerButton" text="EXIT" icon="fa-times-circle" nav="/" {...this.props}/>
          </div>
        </div>
        
        <Title title="Home" />
        
         <div class="buttons-main">
          
          <div class="col-md-2">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="CLEAR" nav="/transfermenu/betweenacct/confirm" {...this.props}/>
            </div>
          </div>
          
      
        </div>
      </div>
    );
  }
}