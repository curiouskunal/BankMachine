import React from "react";
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
        
import Title from "./Machine/Title";
import JButton from "./Machine/JButton";
import ScreenWelcome from "./Machine/Screens/ScreenWelcome";
import ScreenSignIn from "./Machine/Screens/ScreenSignIn";
import ScreenCard from "./Machine/Screens/ScreenCard";
import ScreenRemoveCard from "./Machine/Screens/ScreenRemoveCard";
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
import ScreenTake from "./Machine/Screens/ScreenTake";

const queryString = require('query-string');
//var $ = require('jquery');

export default class Machine extends React.Component {
    
    constructor(){
        super();
        this.state={
            accounts: [{name: 'Chequing', balance: 250}, {name: 'Savings', balance: 1}, {name: 'Student', balance: 1337}, {name: 'RRSP', balance: 1900}, {name: 'RESP', balance: 1000}, {name: 'Zero', balance: 0}],
            payees: [{name: 'Bob', balance:0}, {name: 'Joe', balance:0}, {name: 'McMaster', balance:0}, {name: 'Frank the drug dealer', balance:0}]
        };
    }
    
    confirmTransaction(account, deltabalance){
        var i;
        for (i=0; i<this.state.accounts.length; i++){
            if(this.state.accounts[i].name==account){
                
                if(this.state.accounts[i].balance >= deltabalance)
                    return true;
            }
            
        }
               
        return false;
    }
    
    
    accountNames(){
        var accs = this.state.accounts;
        return accs.map(function(a) {return a.name + "        -       " + a.balance;});
    }
    
    payeeNames(){
        var accs = this.state.payees;
        return accs.map(function(a) {return a.name;});
    }
    
    update(type){
        var queries=queryString.parse(this.props.location.search);
        if(type=='withdraw' || type=='etsend' || type=='bills' || type=='othermember')
           return this.updateWithdraw(queries.from, queries.amt);
        if(type=='deposit')
           return this.updateDeposit(queries.to, queries.amt);
        if(type=='between')
            return this.updateTransfer(queries.from, queries.to, queries.amt);
        if(type=='etrequest')
            return true;
        if(type=='common1')
            return this.updateDeposit('Savings', 1099);
        if(type=='common2')
            return this.updateWithdraw('Chequing', 410);
        if(type=='common3')
            return this.updateWithdraw('Chequing', 40);
        if(type=='common4')
            return this.updateTransfer('Chequing','Savings' , 500);
        if(type=='common6')
            return this.updateTransfer('Savings','RRSP' , 300);
    }
    
    updateWithdraw(account, deltabalance){
        var i;
        for (i=0; i<this.state.accounts.length; i++)
            if(this.state.accounts[i].name==account){
                this.state.accounts[i].balance -= deltabalance;
                return true;
            }
        
        return false;
    }
    
    updateDeposit(account, deltabalance){
        
        var i;
        for (i=0; i<this.state.accounts.length; i++)
            if(this.state.accounts[i].name==account){
                this.state.accounts[i].balance = parseFloat(this.state.accounts[i].balance) + parseFloat(deltabalance);
                return true;
            }
        
        return false;
    }
    
    updateTransfer(from, to, deltabalance){
        
        var i;
        for (i=0; i<this.state.accounts.length; i++)
            if(this.state.accounts[i].name==from){
                        var j;
                        for (j=0; j<this.state.accounts.length; j++)
                            if(this.state.accounts[j].name==to){
                                this.state.accounts[i].balance -= deltabalance;
                                this.state.accounts[j].balance = parseFloat(this.state.accounts[j].balance) + parseFloat(deltabalance) ;
                                return true;
                            }
            }
        return false;
    }
    
  render() { 
    return (
      <div id="content-wrapper">
           <Switch>
                <Route path="/" exact render={props => <ScreenWelcome {...props} />}/>
                <Route path="/signin" exact render={props => <ScreenSignIn {...props} />}/>
                <Route path="/signin/card" exact render={props => <ScreenCard {...props} />}/>
                
                <Route path="/removecard" exact render={props => <ScreenRemoveCard {...props} />}/>
                
                <Route path="/signin/mobile" exact render={props => <ScreenMobile {...props} />}/>
                <Route path="/signin/number" exact render={props => <ScreenSignIn {...props} />}/>
                <Route path="/home" exact render={props => <ScreenHome {...props} />}/>
                <Route path="/transfermenu" exact render={props => <ScreenTransferMenu {...props} />}/>
                <Route path="/transfermenu/etransfermenu" exact render={props => <ScreenETransferMenu {...props} />}/>
                <Route path="/withdraw" exact render={props => <ScreenAmountSelect type="withdraw" confirm={this.confirmTransaction.bind(this)} {...props} />}/>
                <Route path="/logout" exact render={props => <ScreenLogout {...props} />}/>
                <Route path="/insert" exact render={props => <ScreenInsert {...props} />}/>
                <Route path="/print" exact render={props => <ScreenPrint {...props} />}/>
                <Route path="/transfermenu/etransfermenu/etransfer/send/confirm" exact render={props => <ScreenConfirm text="Send eTransfer" from="savings" yes="/home" no="/home" {...props} />}/>
                <Route path="/transfermenu/etransfermenu/etransfer/request/confirm" exact render={props => <ScreenConfirm text="Request eTransfer of" to="savings" {...props} />}/>
                <Route path="/test" exact render={props => <ScreenTest {...props} />}/>
                <Route path="/french" exact render={props => <ScreenFrench {...props} />}/>        
                <Route path="/balance" exact render={props => <ScreenBalance {...props} />}/>           
                <Route path="/languages" exact render={props => <ScreenLanguages {...props} />}/> 
                <Route path="/signin/account" exact render={props => <ScreenTextInput title="Enter your PIN" redirects={["/home"]} input1={{text:"ACCOUNT NUMBER",type:"number"}} input2={{text:"PASSWORD",type:"password"}} {...props} />}/>
                <Route path="/loading" exact render={props => <ScreenLoading redirects={["/home"]} {...props} />}/>
                <Route path="/settings" exact render={props => <ScreenSettings {...props} />}/>
                
                <Route path="/pin" exact render={props => <ScreenNumKey title="Enter your PIN" redirects={["/removecard"]} errmsgtarget='pin' {...props} />}/>
                
                <Route path="/withdraw/confirm" exact render={props => <ScreenConfirm text="Withdraw?" type="withdraw" from="undefined" no="/home" yes="/withdraw/loading" update={this.update.bind(this)} {...props} />}/>
                <Route path="/deposit" exact render={props => <ScreenAmountSelect type="deposit" {...props} />}/>
                <Route path="/deposit/confirm" exact render={props => <ScreenConfirm text="Deposit?" type="deposit" to="undefined" no="/home" yes="/insert" update={this.update.bind(this)} {...props} />}/>
                <Route path="/accountselect" exact render={props => <ScreenAccountSelect accounts={this.state.accounts} {...props} />}/>
                <Route path="/transfermenu/betweenacct" exact render={props => <ScreenTransfer from={this.accountNames()} to={this.accountNames()} confirm={this.confirmTransaction.bind(this)} redirects={["/transfermenu/betweenacct/confirm"]} {...props} />}/>
                <Route path="/transfermenu/betweenacct/confirm" exact render={props => <ScreenConfirm text="Transfer" type="between" yes="/transfermenu/betweenacct/loading" no="/home" update={this.update.bind(this)} {...props} />}/>
                <Route path="/transfermenu/betweenacct/loading" exact render={props => <ScreenLoading redirects={["/print"]} {...props} />}/>
                <Route path="/transfermenu/paybills" exact render={props => <ScreenTransfer from={this.accountNames()} to={this.payeeNames()} confirm={this.confirmTransaction.bind(this)} redirects={["/transfermenu/paybills/confirm"]} {...props} />}/>
                <Route path="/transfermenu/paybills/confirm" exact render={props => <ScreenConfirm text="Transfer" yes="/transfermenu/paybills/loading" no="/home" type="bills" update={this.update.bind(this)} {...props} />}/>
                <Route path="/transfermenu/paybills/loading" exact render={props => <ScreenLoading redirects={["/print"]} {...props} />}/>
                <Route path="/common" exact render={props => <ScreenCommon {...props} />}/>
                <Route path="/transfermenu/etransfermenu/send" exact render={props => <ScreenTransfer from={this.accountNames()} redirects={["/transfermenu/etransfermenu/send/email"]} confirm={this.confirmTransaction.bind(this)} {...props} />}/> 
                <Route path="/transfermenu/etransfermenu/request" exact render={props => <ScreenTransfer to={this.accountNames()} redirects={["/transfermenu/etransfermenu/request/email"]} {...props} />}/> 
                <Route path="/transfermenu/etransfermenu/send/email" exact render={props => <ScreenTextInput title="Enter the email to send to" input1={{text:"EMAIL",type:"email"}} headerbutton="home" redirects={["/transfermenu/etransfermenu/send/confirm"]} {...props} />}/>
                <Route path="/transfermenu/etransfermenu/request/email" exact render={props => <ScreenTextInput title="Enter the email to send a request to" input1={{text:"EMAIL",type:"email"}} headerbutton="home" redirects={["/transfermenu/etransfermenu/request/confirm"]} {...props} />}/>
                <Route path="/transfermenu/etransfermenu/send/confirm" exact render={props => <ScreenConfirm text="Would you like to send" to="undefined" no="/home" yes="/transfermenu/etransfermenu/send/loading" type="etsend" update={this.update.bind(this)} {...props} />}/>
                <Route path="/transfermenu/etransfermenu/request/confirm" exact render={props => <ScreenConfirm text="Would you like to send a request for" to="undefined" no="/home" yes="/transfermenu/etransfermenu/send/loading" type="etrequest" update={this.update.bind(this)} {...props} />}/>
                <Route path="/transfermenu/etransfermenu/send/loading" exact render={props => <ScreenLoading redirects={["/print"]} {...props} />}/>
                <Route path="/transfermenu/etransfermenu/request/loading" exact render={props => <ScreenLoading redirects={["/print"]} {...props} />}/>
                <Route path="/transfermenu/othermember" exact render={props => <ScreenTransfer from={this.accountNames()} confirm={this.confirmTransaction.bind(this)} redirects={["/transfermenu/othermember/number"]} {...props} />}/> 
                <Route path="/transfermenu/othermember/number" exact render={props => <ScreenNumKey title="Enter the account number of the recipient" headerbutton="home" errmsgtarget="account number" redirects={["/transfermenu/othermember/confirm"]} {...props} />}/>
                <Route path="/transfermenu/othermember/confirm" exact render={props => <ScreenConfirm text="Would you like to send " to="undefined" no="/home" yes="/transfermenu/othermember/loading" type="othermember" update={this.update.bind(this)} {...props} />}/>
                <Route path="/transfermenu/othermember/loading" exact render={props => <ScreenLoading redirects={["/print"]} {...props} />}/>
                <Route path="/withdraw/custom" exact render={props => <ScreenNumKey output="amt" title="Enter the withdrawal amount" headerbutton="home" redirects={["/withdraw/confirm"]} errmsgtarget='amount' confirm={this.confirmTransaction.bind(this)} {...props} />}/>
                <Route path="/deposit/custom" exact render={props => <ScreenNumKey output="amt" title="Enter the deposit amount" headerbutton="home" redirects={["/deposit/confirm"]} errmsgtarget='amount' {...props} />}/>
                <Route path="/take" exact render={props => <ScreenTake {...props} />}/>
                <Route path="/withdraw/loading" exact render={props => <ScreenLoading redirects={["/take"]} {...props} />}/>
                <Route path="/deposit/loading" exact render={props => <ScreenLoading redirects={["/print"]} {...props} />}/>
                
                <Route path="/common/confirm/1" exact render={props => <ScreenConfirm text="Deposit?" type="common1" to="Savings" amt="1099" no="/home" yes="/insert" update={this.update.bind(this)} {...props} />}/>
                <Route path="/common/confirm/2" exact render={props => <ScreenConfirm text="e-Transfer" confirm={this.confirmTransaction.bind(this)} type="common2" from="Chequing" to="weekkunal@gmail.com" amt="410" no="/home" yes="/print" update={this.update.bind(this)} {...props} />}/>
                <Route path="/common/confirm/3" exact render={props => <ScreenConfirm text="Withdraw?" confirm={this.confirmTransaction.bind(this)} type="common3" from="Chequing" amt="40" no="/home" yes="/take" update={this.update.bind(this)} {...props} />}/>
                <Route path="/common/confirm/4" exact render={props => <ScreenConfirm text="Transfer" confirm={this.confirmTransaction.bind(this)} type="common4" from="Chequing" to="Savings" amt="500" no="/home" yes="/print" update={this.update.bind(this)} {...props} />}/>
                <Route path="/common/confirm/5" exact render={props => <ScreenBalance acct="savings" bal={this.state.accounts[1].balance} {...props} />}/>  
                <Route path="/common/confirm/6" exact render={props => <ScreenConfirm text="Transfer" confirm={this.confirmTransaction.bind(this)} type="common6" from="Savings" to="RRSP" amt="300" no="/home" yes="/print" update={this.update.bind(this)} {...props} />}/>
            </Switch>
        
      </div>
    );
  }
}
