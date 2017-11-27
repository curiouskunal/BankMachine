import React from "react";
import JButton from "../JButton"
import Title from "../Title";

//var $ = require('jquery');

export default class Test extends React.Component {


  render() {
      setTimeout(()=>{
        this.props.history.push(this.props.redirects[0]);
      },2000);
      console.log(this.props.title);
    return (
     <div id="screen-test">
      <Title title="l" />
      <div class="buttons-main">
         
         <div class="col-md-12">
             <div class="col-md-2 col-md-offset-5">
             <i class="fa fa-spinner fa-pulse spinningIcon"></i>
         </div>
         </div>
         <div class="col-md-12">
             <div class="col-md-2 col-md-offset-5">
                 <h3>Processing...</h3>
             </div>
         </div>

    </div>
    
    </div>
    );
  }
}
