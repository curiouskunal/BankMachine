import React from "react";
import Title from "../Title";
import JButton from "../JButton";
import ConfirmText from "./ScreenConfirm/ConfirmText"
const queryString = require('query-string');

//var $ = require('jquery');

export default class ScreenAccountSelect extends React.Component {
//    componentWillMount(){
//        this.props.history.push('/welcome?ijustgotpushed=true');
//    }
    
    
    queryTrParse(){
        var q = queryString.parse(this.props.location.search).tr;
        var redirect = null;
        if(q==null)
            return null;
        return '/' + q;
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

            <table>
            <tbody>
                <tr> <td>
                    <div class="buttons-main">
                        <div class='bouttons'>
                            <JButton buttonclass="boutton" text="Chequing" texttwo="$759.98" nav={this.queryTrParse()} query={{acct:'Chequing',bal:759.98}} {...this.props}/>
                        </div>
                    </div>
                </td> </tr>

                <tr> <td>
                    <div class="buttons-main">
                        <div class='bouttons'>
                            <JButton buttonclass="boutton" text="Savings" texttwo="$234.95" nav={this.queryTrParse()} query={{acct:'Savings',bal:234.95}} {...this.props}/>
                        </div>
                    </div>
                </td> </tr>

                <tr> <td>
                    <div class="buttons-main">
                        <div class='bouttons'>
                            <JButton buttonclass="boutton" text="StudentSaver" texttwo="$5.00" nav={this.queryTrParse()} query={{acct:'StudentSaver', bal:5.00}} {...this.props}/>
                        </div>
                    </div>
                </td> </tr>

                <tr> <td>
                    <div class="buttons-main">
                        <div class='bouttons'>
                            <JButton buttonclass="boutton" text="TrippleCommaClub" texttwo="$1000000000.00" nav={this.queryTrParse()} query={{acct:'TrippleCommaClub',bal:1000000000.00}} {...this.props}/>
                        </div>
                    </div>
                </td> </tr>

                <tr> <td>
                    <div class="buttons-main">
                        <div class='bouttons'>
                            <JButton buttonclass="boutton" text="Ninety Nine Cents" texttwo="$0.99" nav={this.queryTrParse()} query={{acct:'Ninety Nine Cents',bal:0.99}} {...this.props}/>
                        </div>
                    </div>
                </td> </tr>

                <tr> <td>
                    <div class="buttons-main">
                        <div class='bouttons'>
                            <JButton buttonclass="boutton" text="Master Saver" texttwo="$1930.69" nav={this.queryTrParse()} query={{acct:'Master Saver',bal:1930.69}} {...this.props}/>
                        </div>
                    </div>
                </td> </tr>

                <tr> <td>
                    <div class="buttons-main">
                        <div class='bouttons'>
                            <JButton buttonclass="boutton" text="Empty Account" texttwo="$0.01" nav={this.queryTrParse()} query={{acct:'Empty Account',bal:0.01}} {...this.props}/>
                        </div>
                    </div>
                </td> </tr>

                <tr> <td>
                    <div class="buttons-main">
                        <div class='bouttons'>
                            <JButton buttonclass="boutton" text="Legit Account" texttwo="$12" nav={this.queryTrParse()} query={{acct:'Legit Account', bal:12.00}} {...this.props}/>
                        </div>
                    </div>
                </td> </tr>


            </tbody>
            </table>
            </div>
        </div>
    </div>
    );
  }
}