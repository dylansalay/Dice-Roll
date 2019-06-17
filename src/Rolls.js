import React, { Component } from 'react';
import './App.css';

export default class Rolls extends Component {

    render () {
        const { rollArr } = this.props
        return (
        <div className="rolls-display">
            {rollArr.map(value => <p> {value} </p>)}
        </div>
      );
    }
}
