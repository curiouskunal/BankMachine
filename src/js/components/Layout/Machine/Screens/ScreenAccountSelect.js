import React from "react";
import Title from "../Title";
import JButton from "../JButton";
import ConfirmText from "./ScreenConfirm/ConfirmText"

//var $ = require('jquery');

export default class ScreenAccountSelect extends React.Component {
//    componentWillMount(){
//        this.props.history.push('/welcome?ijustgotpushed=true');
//    }
  render() {
      console.log(this.props);
    return (
      <div id="screen-accountselect">
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
                            <JButton buttonclass="boutton" text="Chequing" sym="||" texttwo="$99999.000" nav="/home" {...this.props}/>
                        </div>
                    </div>
                </td> </tr>
                <tr> <td>
                    <div class="buttons-main">
                        <div class='bouttons'>
                            <JButton buttonclass="boutton" text="Savings" sym="||" texttwo="$234.99" nav="/home" {...this.props}/>
                        </div>
                    </div>
                </td> </tr>
                <tr> <td>
                    <div class="buttons-main">
                        <div class='bouttons'>
                            <JButton buttonclass="boutton" text="Ninety Nine" sym="||" texttwo="$0.99" nav="/home" {...this.props}/>
                        </div>
                    </div>
                </td> </tr>

                <tr> <td>
                    <div class="buttons-main">
                        <div class='bouttons'>
                            <JButton buttonclass="boutton" text="Master Saver" sym="||" texttwo="$1930.99" nav="/home" {...this.props}/>
                        </div>
                    </div>
                </td> </tr>

                <tr> <td>
                    <div class="buttons-main">
                        <div class='bouttons'>
                            <JButton buttonclass="boutton" text="Damnnn You Poor" sym="||" texttwo="$0.00" nav="/home" {...this.props}/>
                        </div>
                    </div>
                </td> </tr>

                <tr> <td>
                    <div class="buttons-main">
                        <div class='bouttons'>
                            <JButton buttonclass="boutton" text="TrippleCommaClub" sym="||" texttwo="$1000000000.00" nav="/home" {...this.props}/>
                        </div>
                    </div>
                </td> </tr>

                <tr> <td>
                    <div class="buttons-main">
                        <div class='bouttons'>
                            <JButton buttonclass="boutton" text="n/a" sym="||" texttwo="$N/A" nav="/home" {...this.props}/>
                        </div>
                    </div>
                </td> </tr>

                <tr> <td>
                    <div class="buttons-main">
                        <div class='bouttons'>
                            <JButton buttonclass="boutton" text="StudentSaver" sym="||" texttwo="$5.00" nav="/home" {...this.props}/>
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