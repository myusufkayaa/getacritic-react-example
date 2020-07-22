import React, { Component } from 'react'
import logo from './gclogo.png'
import './header.scss'
import { Link } from 'react-router-dom';

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state={
      value:""
    }
  }
  handleChange=(e)=>{
    this.setState({value: e.target.value});
    this.props.changeText(e.target.value);
  }
  render() {
    return (
      <div className="navbar">
        <Link to="/"><img src={logo} alt="" height="100px" width="100px" ></img></Link>
        
        <input placeholder="Search.." onChange={this.handleChange  }type="text"></input>
      </div>

    )
  }
}
