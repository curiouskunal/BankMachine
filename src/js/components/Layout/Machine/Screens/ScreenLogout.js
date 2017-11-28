import React from "react";
import Title from "../Title";
import JButton from "../JButton";

//var $ = require('jquery');

export default class ScreenLogout extends React.Component {
//    componentWillMount(){
//        this.props.history.push('/welcome?ijustgotpushed=true');
//    }

  render() {
    setTimeout(() =>{
      window.location.href = '/';
    }, 5000)
      console.log(this.props);
    
    return (
      <div id="screen-logout">
        
        
        <Title title="Thank you for banking with TD" />
        <div class="buttons-main">
            <div class="logoutIMG">
               <img src={window.root+"/img/TDguy.jpg"}/>
            </div>
        </div>
       </div>
    );
  }
}