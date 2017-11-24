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
            <h1>Other Languages</h1>
        </div>
           <div class="table">
               <table class="table-fill">
                <tbody class="table-hover">
                    <tr>
                        <td>Chequing</td> <td>$112.32</td>
                    </tr>
                    <tr>
                        <td>Chequing</td> <td>$112.32</td>
                    </tr>
                    <tr>
                        <td>Chequing</td> <td>$112.32</td>
                    </tr>
                    <tr>
                        <td>Chequing</td> <td>$112.32</td>
                    </tr>
                    <tr>
                        <td>Chequing</td> <td>$112.32</td>
                    </tr>
                    <tr>
                        <td>Chequing</td> <td>$112.32</td>
                    </tr>
                    <tr>
                        <td>Chequing</td> <td>$112.32</td>
                    </tr>
                    <tr>
                        <td>Chequing</td> <td>$112.32</td>
                    </tr>
                    <tr>
                        <td>Chequing</td> <td>$112.32</td>
                    </tr>
                    <tr>
                        <td>Chequing</td> <td>$112.32</td>
                    </tr>
                    
                </tbody>
                </table>
           </div>
    </div>
    );
  }
}