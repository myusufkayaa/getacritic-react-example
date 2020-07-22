import React, { Component } from 'react'
import "./details.scss"

export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game: props.game
        };
    }
    render() {
        return (
            <div className="details-container">
                <img src={this.state.game.img} alt="" />
                <h1>{this.state.game.name}
                    <p>
                        <br />
                        {this.state.game.summary}</p>
                </h1>
                
            </div>
        )
    }
}
