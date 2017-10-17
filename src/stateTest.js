import React, { Component } from 'react';

class Bacon extends Component {

  constructor(){
    super();
    this.state={checked:true};
  }

  changeState(){
    this.setState({checked:!this.state.checked});
  }

  render() {
    var msg;
    if(this.state.checked)
      msg = "checked";
    else
      msg = "unchecked";

    return (
      <div>
        <input type="checkbox" defaultChecked={this.state.checked} onChange={this.changeState.bind(this)}/>
        <h1>{msg}</h1>
      </div>
    );
  }
}


export default Bacon;
