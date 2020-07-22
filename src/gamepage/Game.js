import React, { Component } from 'react'
import Header from './header/Header';
import Banner from './banner/Banner';
import Details from './details/Details';

export default class Game extends Component {
    constructor(props){
        super(props);
        this.state={
            game:this.props.game
        };
    }
    render() {
        return (
            <div>
                <Header title={this.state.game.name}></Header>
                <Details game={this.state.game}></Details>
                <Banner game={this.state.game}/>
            </div>
        )
    }
}
