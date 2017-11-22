import React from "react";
import Title from "./Machine/Title";
import JButton from "./Machine/JButton";

//var $ = require('jquery');

export default class Machine extends React.Component {
    
  render() { 
    return (
      <div id="content-wrapper">
        <div id="buttons">
	        <div class = "left">
				<JButton text="HOME"/>
			</div>
			<div class = "right">
				<JButton text="EXIT"/>
			</div>
		</div>
        
        <Title title="Welcome to RBC" />
        
        <div class = "center">
        	<JButton text="Welcome"/>
        </div>
        <div class = "center">
        	<JButton text="Francais"/>
        </div>
        <div id="otherLanguages" class="left">
        	<JButton text="Other Languages"/>
        </div>
      </div>
    );
  }
}
