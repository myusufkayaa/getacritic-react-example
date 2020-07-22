import React, { Component } from 'react'
import "./banner.scss"
import Rating from './rating/Rating';

export default class Banner extends Component {
    constructor(props){
        super(props);
        this.state={
            game:this.props.game
        };
    }
    render() {
        return (
            <div className="banner">
                <h3>GENRE(S)</h3>
                <hr/>
                <ul>
                    {this.state.game.genres.map(genre=>(
                        <li>{genre}</li>
                    ))}
                </ul>
                <hr/>
                <Rating props={this.state.game}/>
            </div>
        )
    }
}
