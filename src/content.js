import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './main.css';

class Bacon extends Component {
  constructor(){
    super();
    this.state={edit:false}
  }

  edit(){
    this.setState({edit:true});
  }

  remove(){
    this.setState({edit:false});
    this.props.removeComm(this.props.index);
  }

  save(){
    var val = ReactDOM.findDOMNode(this.refs.newText).value;
    console.log(val)
    this.props.addComm(val,this.props.index);
    this.setState({edit:false});
  }

  renderNormal(){
    return(
      <div className="commentContainer container-background">
        <div className="commentText">{this.props.children}</div>
        <button onClick={this.edit.bind(this)} className="button-primary">Edit</button>
        <button onClick={this.remove.bind(this)} className="button-danger">Delete</button>
      </div>
    );
  }

  renderForm(){
    return(
      <div className="commentContainer">
        <textarea ref="newText" defaultValue={this.props.children} ></textarea>
        <button onClick={this.save.bind(this)} className="button-success">Save</button>
      </div>
    );
  }

  render(){
      if(this.state.edit)
        return this.renderForm();
      else
        return this.renderNormal();
  }

}


export default Bacon;
