import React, { Component } from 'react';
import './App.css';

import Rolls from './Rolls.js';
import Dice from './Dice.js';

class App extends Component {
    constructor (props) {
        super(props)
        this.state = {
            rollArr: []
        }
    }

    diceRoll = () => {
        const { rollArr } = this.state
        rollArr.push(Math.floor( Math.random() * 6 + 1 ))
        this.setState({ rollArr })
    }

    render () {
        const { rollArr } = this.state
        return (
        <div className="container">
            <div className="dice">
                <h1>Dice</h1>
                    <Dice rollArr={rollArr} diceRoll={this.diceRoll}/>
                <h3 className="click-roll">Click to roll</h3>
            </div>
            <div className="rolls">
            <h1>Rolls</h1>
                <Rolls rollArr={rollArr} />
            </div>
        </div>
      );
    }
}

export default App;
