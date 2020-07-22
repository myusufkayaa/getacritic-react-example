import React, { Component } from 'react'
import Card from "./card/Card"
import Header from './header/Header'
import {Link} from "react-router-dom"

export default class home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            games: this.props.games,
            searchValue: ""
        }
        
    }
    changeText=(text)=>{
        this.setState({searchValue: text})
      }
    
    render() {
        return (
            <div>
                <Header changeText={this.changeText}/>
                <div className="container">
                    {this.state.games.map(game => {
                        if(game.name.toLowerCase().includes(this.state.searchValue.toLowerCase())){
                            return(<Link style={{textDecoration: 'none'}} to={"/games/"+game.id}>
                            <Card game={game} />
                            </Link>)
                        }
                        
                    })}
                </div>
            </div>
        )
    }
}
