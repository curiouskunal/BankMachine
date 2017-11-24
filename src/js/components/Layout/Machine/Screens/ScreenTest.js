import React from "react";

//var $ = require('jquery');

export default class Test extends React.Component {


  render() {
      console.log(this.props.title);
    return (
      <div >
        
        

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
