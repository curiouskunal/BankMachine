import React from "react";
import Title from "../Title";
import JButton from "../JButton";
import ConfirmText from "./ScreenConfirm/ConfirmText"

//var $ = require('jquery');

export default class ScreenBalance extends React.Component {
//    componentWillMount(){
//        this.props.history.push('/welcome?ijustgotpushed=true');
//    }
  render() {
      console.log(this.props);
    return (
      <div>
         <div class="balancetext">
          <h2>Your {this.props.acct} Balance</h2>
            <h1>{this.props.amt}</h1>
        </div>
           <div class="balancetransactions">
               <h3>This Month's Transactions</h3>
               <table class="table-fill" id="inquiry">
                <tbody class="table-hover">
                    <tr>
                        <td>11/24/17</td>
                        <td>McMaster</td>
                        <td>$100</td>
                    </tr>
                    <tr>
                        <td>11/22/17</td>
                        <td>McMaster</td>
                        <td>$32</td>
                    </tr>
                    <tr>
                        <td>11/07/17</td>
                        <td>McMaster</td>
                        <td>$128</td>
                    </tr>
                </tbody>
                </table>
           </div>
            
    </div>
    );
  }
}