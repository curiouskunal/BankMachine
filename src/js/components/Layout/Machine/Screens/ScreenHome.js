import React from "react";
import Title from "../Title";
import JButton from "../JButton";

//var $ = require('jquery');

export default class ScreenSignIn extends React.Component {
//    componentWillMount(){
//        this.props.history.push('/welcome?ijustgotpushed=true');
//    }

  render() {
      console.log(this.props);
    return (
      <div id="screen-signin">
        <div >
	        <div class = "left">
				<JButton text="BACK" nav="../" {...this.props}/>
			</div>
			<div class = "right">
				<JButton text="EXIT" nav="/" {...this.props}/>
			</div>
		</div>
        
        <Title title="Sign In" />
        <JButton text="I have my card" img="/img/smile.png" nav="/signin/card" {...this.props}/>
        <JButton text="Mobile app sign in" img="/img/smile.png" nav="/signin/mobile" {...this.props}/>
        <JButton text="Account number" img="/img/smile.png" nav="/test" {...this.props}/>
      </div>
    );
  }
}