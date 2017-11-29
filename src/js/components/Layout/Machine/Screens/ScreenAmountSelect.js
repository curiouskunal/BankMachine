import React from "react";
import Title from "../Title";
import JButton from "../JButton";
const queryString = require('query-string');
var $ = require('jquery');

export default class ScreenAmountSelect extends React.Component {
//    componentDidMount(){
//    }
    
    qparseAcct(){
        return queryString.parse(this.props.location.search).acct;
    }
    
    shake(selector,t){
            $(selector).addClass('shake-horizontal');
            $(selector).addClass('shake-constant');        
            setTimeout(()=>{
                $(selector).removeClass('shake-constant');
                $(selector).removeClass('shake-horizontal');
            }, t);   
    }
    
    requirements(val){
        if(this.props.confirm!=null && !this.props.confirm(queryString.parse(this.props.location.search).acct, val) ){
            $('.errmsg h1').text('The account has insufficient funds.');
            $('.errmsg h1').css('color', 'red');
            this.shake('#screen-amountselect span:contains("'+'$'+val+'")',1000);
            return false
        }
        
        return true;
    }

  render() {
      console.log(this.props);
    return (
      <div id="screen-amountselect">
         <div >
	        <div class = "left">
            <JButton buttonclass="headerButton" text="BACK" icon="fa-arrow-circle-left" nav="../" {...this.props}/>
          </div>
          <div class = "right">
            <JButton buttonclass="headerButton" text="HOME" icon="fa-home" nav="/home" {...this.props}/>
          </div>
        </div>
        
        <Title title={"Select an Amount to " + this.props.type} className = 'errmsg' />
        
         <div class="buttons-main">
          <div class="col-md-4">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="$20" nav={"/" + this.props.type + "/confirm" } query={this.props.type=='withdraw' ? {amt:20,from:this.qparseAcct()} : {amt:20,to:this.qparseAcct()}} requirements={this.requirements.bind(this)} reqargs={[20]} {...this.props}/>
            </div>
          </div>
          <div class="col-md-4 ">
            <div class='bouttons'>
                  <JButton buttonclass="boutton" text="$40" nav={"/" + this.props.type + "/confirm"} query={this.props.type=='withdraw' ? {amt:40,from:this.qparseAcct()} : {amt:40,to:this.qparseAcct()}} requirements={this.requirements.bind(this)} reqargs={[40]} {...this.props}/>
            </div>         
           </div>
          <div class="col-md-4">
            <div class='bouttons'>
                  <JButton buttonclass="boutton" text="$60" nav={"/" + this.props.type + "/confirm"} query={this.props.type=='withdraw' ? {amt:60,from:this.qparseAcct()} : {amt:60,to:this.qparseAcct()}} requirements={this.requirements.bind(this)} reqargs={[60]} {...this.props}/>
            </div>         
            </div>
            <div class="col-md-4">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="$80" nav={"/" + this.props.type + "/confirm"} query={this.props.type=='withdraw' ? {amt:80,from:this.qparseAcct()} : {amt:80,to:this.qparseAcct()}} requirements={this.requirements.bind(this)} reqargs={[80]} {...this.props}/>
            </div>
          </div>
          <div class="col-md-4 ">
            <div class='bouttons'>
                  <JButton buttonclass="boutton" text="$100" nav={"/" + this.props.type + "/confirm"} query={this.props.type=='withdraw' ? {amt:100,from:this.qparseAcct()} : {amt:100,to:this.qparseAcct()}} requirements={this.requirements.bind(this)} reqargs={[100]} {...this.props}/>
            </div>         
           </div>
          <div class="col-md-4">
            <div class='bouttons'>
                  <JButton buttonclass="boutton" text="Custom" nav={"/" + this.props.type + "/custom"} query={this.props.type=='withdraw' ? {from:this.qparseAcct()} : {to:this.qparseAcct()}} {...this.props}/>
            </div>         
            </div>
      
        </div>
      </div>
    );
  }
}