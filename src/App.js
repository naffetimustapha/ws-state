import React, { Component } from 'react'
import Profile from './components/Profile'
import'./App.css'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {show : false};
  }
handleclick=() => this.setState({show : !this.state.show})

  render() {
    return (
      <div className='top'>
        <button onClick={this.handleclick}>show/hide</button>
        {this.state.show &&<Profile/>}
        </div>
    )
  }
}
