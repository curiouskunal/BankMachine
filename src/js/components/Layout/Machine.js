import React from "react";
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
        
import Title from "./Machine/Title";
import JButton from "./Machine/JButton";
import ScreenWelcome from "./Machine/Screens/ScreenWelcome";
import ScreenSignIn from "./Machine/Screens/ScreenSignIn";
import ScreenCard from "./Machine/Screens/ScreenCard";
import ScreenMobile from "./Machine/Screens/ScreenMobile";
import ScreenHome from "./Machine/Screens/ScreenHome";
import ScreenTransferMenu from "./Machine/Screens/ScreenTransferMenu";
import ScreenETransferMenu from "./Machine/Screens/ScreenETransferMenu";
import ScreenAmountSelect from "./Machine/Screens/ScreenAmountSelect";
import ScreenLogout from "./Machine/Screens/ScreenLogout";
import ScreenInsert from "./Machine/Screens/ScreenInsert";
import ScreenPrint from "./Machine/Screens/ScreenPrint";
import ScreenConfirm from "./Machine/Screens/ScreenConfirm";
import ScreenTest from "./Machine/Screens/ScreenTest";
import ScreenFrench from "./Machine/Screens/ScreenFrench";
import ScreenTransfer from "./Machine/Screens/ScreenTransfer";
import ScreenBalance from "./Machine/Screens/ScreenBalance";
import ScreenNumKey from "./Machine/Screens/ScreenNumKey";
import ScreenLanguages from "./Machine/Screens/ScreenLanguages";
import ScreenLoading from "./Machine/Screens/ScreenLoading";
import ScreenSettings from "./Machine/Screens/ScreenSettings";
import ScreenTextInput from "./Machine/Screens/ScreenTextInput";
import ScreenAccountSelect from "./Machine/Screens/ScreenAccountSelect";
import ScreenCommon from "./Machine/Screens/ScreenCommon";
import ScreenFailed from "./Machine/Screens/ScreenFailed";
//var $ = require('jquery');

export default class Machine extends React.Component {
    
  render() { 
    return (
      <div id="content-wrapper">
           <Switch>
                <Route path="/" exact render={props => <ScreenWelcome {...props} />}/>
                <Route path="/signin" exact render={props => <ScreenSignIn {...props} />}/>
                <Route path="/signin/card" exact render={props => <ScreenCard {...props} />}/>
                <Route path="/signin/mobile" exact render={props => <ScreenMobile {...props} />}/>
                <Route path="/signin/number" exact render={props => <ScreenSignIn {...props} />}/>
                <Route path="/home" exact render={props => <ScreenHome {...props} />}/>
                <Route path="/transfermenu" exact render={props => <ScreenTransferMenu {...props} />}/>
                <Route path="/transfermenu/etransfermenu" exact render={props => <ScreenETransferMenu {...props} />}/>
                <Route path="/withdraw" exact render={props => <ScreenAmountSelect type="withdraw" {...props} />}/>
                <Route path="/logout" exact render={props => <ScreenLogout {...props} />}/>
                <Route path="/insert" exact render={props => <ScreenInsert {...props} />}/>
                <Route path="/print" exact render={props => <ScreenPrint {...props} />}/>
                <Route path="/transfermenu/etransfermenu/etransfer/send/confirm" exact render={props => <ScreenConfirm text="Send eTransfer" from="savings" yes="/home" no="/home"{...props} />}/>
                <Route path="/transfermenu/etransfermenu/etransfer/request/confirm" exact render={props => <ScreenConfirm text="Request eTransfer of" to="savings" {...props} />}/>
                <Route path="/test" exact render={props => <ScreenTest {...props} />}/>
                <Route path="/french" exact render={props => <ScreenFrench {...props} />}/>        
                <Route path="/transfermenu/etransfermenu/etransfer/send" exact render={props => <ScreenTransfer to={['email1', 'email2']} from={['Savings', 'Checking']} redirects={["/transfermenu/etransfermenu/etransfer/send/confirm"]} {...props} />}/> 
                <Route path="/transfermenu/etransfermenu/etransfer/request" exact render={props => <ScreenTransfer to={['Savings', 'Checking']} from={['email1', 'email2']} redirects={["/transfermenu/etransfermenu/etransfer/request/confirm"]} {...props} />}/>
                <Route path="/balance" exact render={props => <ScreenBalance {...props} />}/>           
                <Route path="/languages" exact render={props => <ScreenLanguages {...props} />}/> 
                <Route path="/signin/account" exact render={props => <ScreenTextInput title="Enter your PIN" redirects={["/home"]} {...props} />}/>
                <Route path="/loading" exact render={props => <ScreenLoading redirects={["/home"]} {...props} />}/>
                <Route path="/settings" exact render={props => <ScreenSettings {...props} />}/>
                <Route path="/pin" exact render={props => <ScreenNumKey title="Enter your PIN" redirects={["/home"]} {...props} />}/>
                <Route path="/withdraw/confirm" exact render={props => <ScreenConfirm text="Withdraw?" from="undefined" no="/home" yes="/print" {...props} />}/>
                <Route path="/pass" exact render={props => <ScreenTextInput {...props} />}/>
                <Route path="/deposit" exact render={props => <ScreenAmountSelect type="deposit" {...props} />}/>
                <Route path="/deposit/confirm" exact render={props => <ScreenConfirm text="Deposit?" to="undefined" no="/home" yes="/insert" {...props} />}/>
                <Route path="/accountselect" exact render={props => <ScreenAccountSelect {...props} />}/>
                <Route path="/transfermenu/betweenacct" exact render={props => <ScreenTransfer from={['Savings', 'Checking']} to={['Checking', 'Savings']} redirects={["/transfermenu/betweenacct/confirm"]} {...props} />}/>
                <Route path="/transfermenu/betweenacct/confirm" exact render={props => <ScreenConfirm text="Transfer" amt="$20" from="chequing" to="savings" yes="/print" no="/home" {...props} />}/>
                <Route path="/transfermenu/paybills" exact render={props => <ScreenTransfer from={['Savings', 'Checking']} to={['McMaster', 'Landlord']} redirects={["/transfermenu/paybills/confirm"]} {...props} />}/>
                <Route path="/transfermenu/paybills/confirm" exact render={props => <ScreenConfirm text="Transfer" amt="$20" from="chequing" to="savings" yes="/print" no="/home" {...props} />}/>
                <Route path="/common" exact render={props => <ScreenCommon {...props} />}/>
                <Route path="/failed" exact render={props => <ScreenFailed {...props} />}/>
           </Switch>
        
      </div>
    );
  }
}
