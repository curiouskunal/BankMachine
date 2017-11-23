import React from "react";
import Title from "../Title";
import JButton from "../JButton";

//var $ = require('jquery');

export default class ScreenPrint extends React.Component {
//    componentWillMount(){
//        this.props.history.push('/welcome?ijustgotpushed=true');
//    }
ß
  render() {
      console.log(this.props);
    return (
      <div id="screen-print">
        <div>
          <div class = "left">
            <JButton buttonclass="headerButton" text="BACK" icon="fa-arrow-circle-left" nav="../" {...this.props}/>
          </div>
          <div class = "right">
            <JButton buttonclass="headerButton" text="EXIT" icon="fa-times-circle" nav="/" {...this.props}/>
          </div>
        </div>
        
        <Title title="Would you like a receipt?" />
         <div class="buttons-main">
          <div class="col-md-4">
             <div class='bouttons'>
                 <JButton buttonclass="boutton" text="Paper Copy" icon="fa-file-text-o" nav="/home" {...this.props}/>
            </div>
          </div>
          <div class="col-md-4 ">
            <div class='bouttons'>
                  <JButton buttonclass="boutton" text="Email" icon="fa-envelope-o" nav="/home" {...this.props}/>
            </div>         
           </div>
          <div class="col-md-4">
            <div class='bouttons'>
                  <JButton buttonclass="boutton" text="No Receipt" icon="fa-times-circle-o" nav="/home" {...this.props}/>
            </div>         
            </div>
      
    

        </div>

        
      </div>
    );
  }
}