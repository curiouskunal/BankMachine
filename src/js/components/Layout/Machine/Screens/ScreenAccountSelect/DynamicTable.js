import React from "react";
import JButton from "../../JButton";
const queryString = require('query-string');

//var $ = require('jquery');

export default class DynamicTable extends React.Component {
    constructor() {
    super();
    
  }
    
    
    componentWillMount(){
     console.log(this.props.accounts);
        this.state = {accounts: this.props.accounts};   
    }

    

  render() {
    let rows = this.state.accounts.map(account => {
      return <PersonRow key = {account.name}  data = {account} {...this.props}/>
    })
    return (<table >
      < tbody > {
        rows
      } < /tbody> < /table>)
  }

}




const PersonRow = (props) => {
  return (
    <tr>
      <td>
        <JButton buttonclass="boutton" text={props.data.name} texttwo={'$' + props.data.balance} nav={queryString.parse(props.location.search).tr} query={{acct:props.data.name,bal:props.data.balance}} {...props}/>
      </td>

    </tr>
  );
}