import React from "react";
import Title from "../Title";
import JButton from "../JButton";
import ConfirmText from "./ScreenConfirm/ConfirmText"
const queryString = require('query-string');

//var $ = require('jquery');

export default class ScreenBalance extends React.Component {
//    componentWillMount(){
//        this.props.history.push('/welcome?ijustgotpushed=true');
//    }
    qparseAcct(){
     return queryString.parse(this.props.location.search).acct;   
    }
    qparseBal(){
     return queryString.parse(this.props.location.search).bal;   
    }
  render() {
      console.log(this.props);
    return (
    <div id ='screen-balance'>
        <div >
	        <div class = "left">
            <JButton buttonclass="headerButton" text="BACK" icon="fa-arrow-circle-left" nav="../" {...this.props}/>
          </div>
          <div class = "right">
            <JButton buttonclass="headerButton" text="HOME" icon="fa-home" nav="/home" {...this.props}/>
          </div>
        </div>
      <div class="balancetext">
          <h2>Your {this.qparseAcct()} Balance</h2>
            <h1>${this.qparseBal()}</h1>
        </div>
        <div class="balancetransactions">
            <h3>This Month's Transactions</h3>
        </div>
            <table class="scroll">
                <thead>
                    <tr>
                       <th>Date</th>
                       <th>Transaction Description</th>
                       <th>Transaction Amount</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>11/07/17</td>
                    <td>McMaster</td>
                    <td>$128</td>
                </tr>
                <tr>
                    <td>11/07/17</td>
                    <td>McMaster</td>
                    <td>$128</td>
                </tr>
                 <tr>
                    <td>11/07/17</td>
                    <td>McMaster</td>
                    <td>$128</td>
                </tr>
                <tr>
                    <td>11/07/17</td>
                    <td>McMaster</td>
                    <td>$128</td>
                </tr>
                <tr>
                    <td>11/07/17</td>
                    <td>McMaster</td>
                    <td>$128</td>
                </tr>
                 <tr>
                    <td>11/07/17</td>
                    <td>McMaster</td>
                    <td>$128</td>
                </tr>                <tr>
                    <td>11/07/17</td>
                    <td>McMaster</td>
                    <td>$128</td>
                </tr>
                <tr>
                    <td>11/07/17</td>
                    <td>McMaster</td>
                    <td>$128</td>
                </tr>
                 <tr>
                    <td>11/07/17</td>
                    <td>McMaster</td>
                    <td>$128</td>
                </tr>                <tr>
                    <td>11/07/17</td>
                    <td>McMaster</td>
                    <td>$128</td>
                </tr>
                <tr>
                    <td>11/07/17</td>
                    <td>McMaster</td>
                    <td>$128</td>
                </tr>
                 <tr>
                    <td>11/07/17</td>
                    <td>nice</td>
                    <td>$128</td>
                </tr>                
                </tbody>
            </table>
    </div>
    );
  }
}