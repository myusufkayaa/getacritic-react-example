import React, { Component } from 'react'
import logo from '../../homepage/header/gclogo.png'
import '../../homepage/header/header.scss'
import { Link } from 'react-router-dom';

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            title:this.props.title
        };
    }
  render() {

    return (
      <div className="navbar">
        <Link to="/"><img src={logo} alt="" height="100px" width="100px" ></img></Link>
        <h1>{this.state.title}</h1>
      </div>

    )
  }
}