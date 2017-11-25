import React from "react";
import Title from "../Title";
import JButton from "../JButton";
import ConfirmText from "./ScreenConfirm/ConfirmText"
const queryString = require('query-string');

//var $ = require('jquery');

export default class ScreenConfirm extends React.Component {
    constructor(){
        super();
    }
    
    
  render() {
      
      console.log(this.props);
    return (
      <div>
          <ConfirmText {...this.props} from={queryString.parse(this.props.location.search).from == null? this.props.from : queryString.parse(this.props.location.search).from} to={queryString.parse(this.props.location.search).to == null? this.props.to : queryString.parse(this.props.location.search).to}/>
      <div class="buttons-main">
        <div class="col-md-offset-2 col-md-4 ">
            <div class='bouttons'>
                <JButton {...this.props} text="Yes" buttonclass="boutton" icon="fa-check-circle" nav={this.props.yes} />
            </div>
        </div>

        <div class="col-md-4">
            <div class='bouttons'>
                <JButton {...this.props} text="No, return home" buttonclass="boutton" icon="fa-times-circle" nav={this.props.no} />
            </div>
        </div>
    </div>
    
    </div>
    );
  }
}