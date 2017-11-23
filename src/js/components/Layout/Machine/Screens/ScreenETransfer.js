import React from "react";
import Title from "../Title";
import JButton from "../JButton";
import Dropdown from 'react-dropdown'

//var $ = require('jquery');

export default class ScreenETransfer extends React.Component {
//    componentWillMount(){
//        this.props.history.push('/welcome?ijustgotpushed=true');
//    }
  constructor(){
    super();
    this.options = ['Savings', 'Checking']
  }

  render() {
      console.log(this.props);
    return (
      <div id="screen-etransfer">
        <div>
          <div class = "left">
            <JButton buttonclass="headerButton" text="BACK" icon="fa-arrow-circle-left" nav="../" {...this.props}/>
          </div>
          <div class = "right">
            <JButton buttonclass="headerButton" text="HOME" icon="fa-home" nav="/" {...this.props}/>
          </div>
        </div>
        
        <Title title="eTransfer" />
        <div class="buttons-main">

        <div class="col-md-6">
           <Dropdown options={this.options} onChange={this._onSelect} placeholder="Select an option" />
        </div>

          <div class="col-md-6 center">
          <Dropdown options={this.options} onChange={this._onSelect} placeholder="Select an option" />
          </div>

        </div>
      </div>
    );
  }
}