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
    <div id ='screen-balance'>
        <div >
	        <div class = "left">
            <JButton buttonclass="headerButton" text="BACK" icon="fa-arrow-circle-left" nav="../" {...this.props}/>
          </div>
          <div class = "right">
            <JButton buttonclass="headerButton" text="HOME" icon="fa-home" nav="/home" {...this.props}/>
          </div>
        </div>
      <div>
         <div class="balancetext">
          <h2>Your {this.props.acct} Balance</h2>
            <h1>{this.props.amt}</h1>
        </div>
        <div class="balancetransactions">
            <h3>This Month's Transactions</h3>
            <style>{`table{border:1px solid white;}`}</style>
            
        <table class="table-fill center scroll" id="inquiry">
                    <thead>
                       <tr>
                           <th>Date</th>
                           <th>Transaction Description</th>
                           <th>Transaction Amount</th>
                       </tr>
                   </thead>
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
                </tbody>
                </table>
           </div>
        </div>    
    </div>
    );
  }
}