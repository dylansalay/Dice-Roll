import React, { Component } from 'react';
import './App.css';

export default class Dice extends Component {

    render () {
        const { rollArr, diceRoll } = this.props
        return (
        <div>
            <div onClick={diceRoll} className="die">
                {rollArr[rollArr.length - 1]}
            </div>
        </div>
      );
    }
}
