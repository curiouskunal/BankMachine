import React from "react";



//var $ = require('jquery');

export default class Header extends React.Component {

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>

       	<div id="MobileMsg">
       		<h1>Bank Machine UI Demo Only Viewable on Desktop</h1>
	    </div>

      </div>
    );
  }
}
