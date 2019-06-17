import React, { Component } from 'react';
import './App.css';

import OneSide from './1.png';
import TwoSide from './2.png';
import ThreeSide from './3.png';
import FourSide from './4.png';
import FiveSide from './5.png';
import SixSide from './6.png';

export default class Dice extends Component {

    render () {
        const { rollArr, diceRoll } = this.props
        const dieSideImages = [OneSide, TwoSide, ThreeSide, FourSide, FiveSide, SixSide]
        return (
        <div>
            <div onClick={this.props.diceRoll} className="die">
                {rollArr[rollArr.length - 1]}
                <img src={dieSideImages[rollArr[rollArr.length - 1] - 1]} />
            </div>
        </div>
      );
    }
}
