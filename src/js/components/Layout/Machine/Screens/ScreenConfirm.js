import React from "react";
import Title from "../Title";
import JButton from "../JButton";
import ConfirmText from "./ScreenConfirm/ConfirmText"
const queryString = require('query-string');
var $ = require('jquery');

export default class ScreenConfirm extends React.Component {
    constructor(){
        super();
    }
    
    queryFromParse(){
        return queryString.parse(this.props.location.search).from == null? (queryString.parse(this.props.location.search).input1==null ? this.props.from : queryString.parse(this.props.location.search).input1) : queryString.parse(this.props.location.search).from;
    }
    
    queryToParse(){
        //alert(queryString.parse(this.props.location.search).to);
        return queryString.parse(this.props.location.search).to == null? (queryString.parse(this.props.location.search).input1==null ? this.props.to : queryString.parse(this.props.location.search).input1) : queryString.parse(this.props.location.search).to;
    }
    
    requirements(){
        var result = this.props.update(this.props.type); //TODO MUST CHANGE FOR SUPPORT OF TWO WAY TRANSACTION
//        var result = this.props.update.apply(this, [ ( queryString.parse(this.props.location.search).from==null?queryString.parse(this.props.location.search).to:queryString.parse(this.props.location.search).from ), queryString.parse(this.props.location.search).amt ] ); //TODO MUST CHANGE FOR SUPPORT OF TWO WAY TRANSACTION
            if(!result){
                alert('If you have reached this message you are quite the debugger ;)');
                $('.confirmtext h2').addClass('hide');
                $('.confirmtext h1').text('Something appears to have gone wrong. Please return home.');
            }
        return result;
    }
    
  render() {
      
      console.log(this.props);
    return (
      <div>
          <ConfirmText {...this.props} from={this.queryFromParse()} to={this.queryToParse()}/>
      <div class="buttons-main">
        <div class="col-md-offset-2 col-md-4 ">
            <div class='bouttons'>
                <JButton {...this.props} text="Yes" buttonclass="boutton" icon="fa-check-circle" nav={this.props.yes} requirements={this.props.update == null? null : this.requirements.bind(this)} />
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