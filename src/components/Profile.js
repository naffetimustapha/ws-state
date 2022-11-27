import React, { Component } from 'react'
import './Profile.css'
export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.person = {
            FullName : "Mustapha Naffeti",
           Bio: "fullstack javascipt student",
            Age : 26 ,
            img :"https://i.pinimg.com/originals/25/78/61/25786134576ce0344893b33a051160b1.jpg"
        };
        this.state = {count:0}}
        componentDidMount(){
            setInterval(() => {
                this.setState(prevState =>({count : prevState.count +0.5}))
                
            }, 1000);
        }
  render() {
    return (
      <div>
        <h2>{this.person.FullName}</h2>
        <h2>{this.person.Bio}</h2>
        <h2>{this.person.Age}</h2>
    <img className='mid' src={this.person.img} alt="img" />
    <p>{this.state.count}</p>
      </div>
    )
  }
}
