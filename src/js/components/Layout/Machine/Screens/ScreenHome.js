import React from "react";
import Title from "../Title";
import JButton from "../JButton";

//var $ = require('jquery');

export default class ScreenHome extends React.Component {
//    componentWillMount(){
//        this.props.history.push('/welcome?ijustgotpushed=true');
//    }

  render() {
      console.log(this.props);
    return (
      <div id="screen-home">

        <div>
          <div class = "right">
            <JButton buttonclass="headerButton" text="EXIT" icon="fa-times-circle" nav="/" {...this.props}/>
          </div>
        </div>
        
        <Title title="Home" />
        <div class="buttons-main">
            <JButton text="Withdraw" img="/img/smile.png" nav="/signin/card" {...this.props}/>
            <JButton text="Deposit" img="/img/smile.png" nav="/signin/mobile" {...this.props}/>
            <JButton text="Transfer" img="/img/smile.png" nav="/test" {...this.props}/>
            <JButton text="Check Account Balance" img="/img/smile.png" nav="/signin/card" {...this.props}/>
            <JButton text="Manage Accounts" img="/img/smile.png" nav="/signin/mobile" {...this.props}/>
            <JButton text="Sign Out" img="/img/smile.png" nav="/test" {...this.props}/>
        </div>
      </div>
    );
  }
}