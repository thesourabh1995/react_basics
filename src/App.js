import React, { Component } from 'react';
import Bacon from './content.js';

class App extends Component {
  constructor(){
    super();
    this.state={
                comments:[]
               }
  }

  removeComment(i){
    var arr = this.state.comments;
    arr.splice(i,1);
    this.setState({comments:arr});
  }

  addComment(newText,i){
    var arr = this.state.comments
    arr[i] = newText;
    this.setState({comments:arr});
  }

  renderComment(text,i){
    return (<Bacon key={i} index={i} removeComm={this.removeComment.bind(this)} addComm={this.addComment.bind(this)}>
              {text}
            </Bacon>);
  }

  newComment(text){
    var arr = this.state.comments;
    arr.push(text);
    console.log(text)
    this.setState({comments:arr});
  }

  render() {
    return (
      <div className="main">
        <div onClick={this.newComment.bind(this,'Default Text')} className="button-info button-new">Add New</div>
        <div className="board board-background">
        {
          this.state.comments.map(this.renderComment.bind(this))
        }
        </div>
      </div>
    );
  }
}


export default App;
