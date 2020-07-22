import React, { Component } from 'react'
import './card.scss'

export default class Card extends Component {
    constructor(props){
        super(props);
        this.state={
            game:this.props.game
        };
    }
   
    render() {
        return (
            <div className="card">
                <img className="card-img" src={this.state.game.img} alt=""></img>
                <div className="card-container">
                <h4><b>{this.state.game.name}</b></h4>
                {this.state.game.genres.map(genre =>(
                    <p>{genre}</p>
                ))}
                </div>
            </div>
        )
    }
}
