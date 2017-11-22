import React from "react";
import Title from "../../Title";
import JButton from "../../JButton";

//var $ = require('jquery');

export default class ScreenCard extends React.Component {
//    componentWillMount(){
//        this.props.history.push('/welcome?ijustgotpushed=true');
//    }

  render() {
      console.log(this.props);
    return (
      <div id="screen-card">
        <div >
	        <div class = "left">
				<JButton text="BACK" nav="../" {...this.props}/>
			</div>
			<div class = "right">
				<JButton text="EXIT" nav="/" {...this.props}/>
			</div>
		</div>
        
        <Title title="Insert Card" />
        
      </div>
    );
  }
}