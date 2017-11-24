import React from "react";
import Title from "../Title";
import JButton from "../JButton";

//var $ = require('jquery');

export default class ScreenAmountSelect extends React.Component {
//    componentWillMount(){
//        this.props.history.push('/welcome?ijustgotpushed=true');
//    }

  render() {
      console.log(this.props);
    return (
      <div id="screen-amountselect">
         <div >
	        <div class = "left">
            <JButton buttonclass="headerButton" text="BACK" icon="fa-arrow-circle-left" nav="../" {...this.props}/>
          </div>
          <div class = "right">
            <JButton buttonclass="headerButton" text="HOME" icon="fa-home" nav="/" {...this.props}/>
          </div>
        </div>
        
        <Title title={"Select an Amount to " + this.props.type} />
        
         <div class="buttons-main">
          <div class="col-md-4">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="$20" nav={"/" + this.props.type + "/confirm?amt=20"} {...this.props}/>
            </div>
          </div>
          <div class="col-md-4 ">
            <div class='bouttons'>
                  <JButton buttonclass="boutton" text="$40" nav={"/" + this.props.type + "/confirm?amt=40"} {...this.props}/>
            </div>         
           </div>
          <div class="col-md-4">
            <div class='bouttons'>
                  <JButton buttonclass="boutton" text="$60" nav={"/" + this.props.type + "/confirm?amt=60"} {...this.props}/>
            </div>         
            </div>
            <div class="col-md-4">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="$80" nav={"/" + this.props.type + "/confirm?amt=80"} {...this.props}/>
            </div>
          </div>
          <div class="col-md-4 ">
            <div class='bouttons'>
                  <JButton buttonclass="boutton" text="$100" nav={"/" + this.props.type + "/confirm?amt=100"} {...this.props}/>
            </div>         
           </div>
          <div class="col-md-4">
            <div class='bouttons'>
                  <JButton buttonclass="boutton" text="Custom" nav={"/" + this.props.type + "/custom"} {...this.props}/>
            </div>         
            </div>
      
        </div>
      </div>
    );
  }
}