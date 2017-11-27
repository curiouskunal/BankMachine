import React from "react";
import Title from "../Title";
import JButton from "../JButton";
import DynamicTable from "./ScreenAccountSelect/DynamicTable"
const queryString = require('query-string');

//var $ = require('jquery');

export default class ScreenAccountSelect extends React.Component {
    constructor(){
        super();
        
    }
    
  render() {
      console.log(this.props);
    return (
      <div id="screen-accountselect">
        <div>
          <div class = "left">
            <JButton buttonclass="headerButton" text="BACK" icon="fa-arrow-circle-left" nav="../" {...this.props}/>
          </div>
          <div class = "right">
            <JButton buttonclass="headerButton" text="HOME" icon="fa-home" nav="/home" {...this.props}/>
          </div>
        </div>

         <div class="tabletext">
            <h1>Select Account</h1>
        </div>

        <div class="table-round">
                <div class="table-data">

           <div class="buttons-main">
                        <div class='bouttons'>
           
           
            
              
              
               
            <DynamicTable  {...this.props} /> 
           
              

           
            
            </div>
                    </div>
            </div>
        </div>
    </div>
    );
  }
}