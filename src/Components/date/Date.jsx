import React, { Component } from 'react'
import './date.css'

export default class CurrDate extends Component {
    state = {
        CurrDT : new Date().toLocaleString()
    }
  render() {
    return (
      <div className="date">
        <p>{this.state.CurrDT}</p>
      </div>
    );
  }
}
