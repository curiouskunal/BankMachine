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
                            <JButton buttonclass="boutton" text="Chequing" sym="||" texttwo="$99999.000" nav={this.queryTrParse()} query={{acct:'Chequing',bal:150}} {...this.props}/>
                        </div>
                    </div>
                </td> </tr>
                <tr> <td>
                    <div class="buttons-main">
                        <div class='bouttons'>
                            <JButton buttonclass="boutton" text="Savings" sym="||" texttwo="$234.99" nav={this.queryTrParse()} query={{acct:'Savings',bal:150}} {...this.props}/>
                        </div>
                    </div>
                </td> </tr>
                <tr> <td>
                    <div class="buttons-main">
                        <div class='bouttons'>
                            <JButton buttonclass="boutton" text="Ninety Nine" sym="||" texttwo="$0.99" nav={this.queryTrParse()} query={{acct:'Ninety Nine',bal:150}} {...this.props}/>
                        </div>
                    </div>
                </td> </tr>

                <tr> <td>
                    <div class="buttons-main">
                        <div class='bouttons'>
                            <JButton buttonclass="boutton" text="Master Saver" sym="||" texttwo="$1930.99" nav={this.queryTrParse()} query={{acct:'Master Saver',bal:150}} {...this.props}/>
                        </div>
                    </div>
                </td> </tr>

                <tr> <td>
                    <div class="buttons-main">
                        <div class='bouttons'>
                            <JButton buttonclass="boutton" text="Damnnn You Poor" sym="||" texttwo="$0.00" nav={this.queryTrParse()} query={{acct:'Damnnn You Poor',bal:0}} {...this.props}/>
                        </div>
                    </div>
                </td> </tr>

                <tr> <td>
                    <div class="buttons-main">
                        <div class='bouttons'>
                            <JButton buttonclass="boutton" text="TrippleCommaClub" sym="||" texttwo="$1000000000.00" nav={this.queryTrParse()} query={{acct:'TrippleCommaClub',bal:150}} {...this.props}/>
                        </div>
                    </div>
                </td> </tr>

                <tr> <td>
                    <div class="buttons-main">
                        <div class='bouttons'>
                            <JButton buttonclass="boutton" text="legitaccount" sym="||" texttwo="$12" nav={this.queryTrParse()} query={{acct:'legitaccount'}} {...this.props}/>
                        </div>
                    </div>
                </td> </tr>

                <tr> <td>
                    <div class="buttons-main">
                        <div class='bouttons'>
                            <JButton buttonclass="boutton" text="StudentSaver" sym="||" texttwo="$5.00" nav={this.queryTrParse()} query={{acct:'Chequing'}} {...this.props}/>
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