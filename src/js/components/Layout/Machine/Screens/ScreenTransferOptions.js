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
      <div id="screen-trasnferoptions">
        <div >
	        <div class = "left">
				<JButton text="BACK" nav="../" {...this.props}/>
			</div>
		</div>
        
        <Title title="Transfer Options" />
        <div class="buttons-main">
            <JButton text="Between your Accounts" img="/img/smile.png" nav="/signin/card" {...this.props}/>
            <JButton text="e-Transfer" img="/img/smile.png" nav="/signin/mobile" {...this.props}/>
            <JButton text="To another RBC Member" img="/img/smile.png" nav="/test" {...this.props}/>
            <JButton text="Pay Bills" img="/img/smile.png" nav="/signin/card" {...this.props}/>
        </div>
      </div>
    );
  }
}6j8cc8