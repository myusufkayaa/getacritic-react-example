import './styles/main.scss';
import {Switch, Route} from 'react-router-dom'
import Home from './homepage/Home';
import data from './games.json'
import Game from './gamepage/Game';
import React, { Component } from 'react'

export default class App extends Component {
    
  render() {
    return (
      <div>
      <Switch>
        <Route exact path="/" render={props =>(
          <Home
            {...props}
            games={data.games}        
          />
        )}></Route>
        {data.games.map(game =>
            <Route exact path={"/games/"+game.id} render={props =>(
              <Game
                {...props}
                game={game}          
              />
            )}/>
          )}
        
      </Switch>
    </div>
    )
  }
}




