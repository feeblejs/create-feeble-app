import React, { Component } from 'react';
import { connect } from 'feeble';
import Count from '../../models/count';
import logo from './logo.svg';
import './style.css';
import Counter from '../../components/Counter'

class App extends Component {
  handleIncrement = () => {
    this.props.dispatch(Count.increment())
  }

  handleDecrement = () => {
    this.props.dispatch(Count.decrement())
  }

  render() {
    const { count } = this.props

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <Counter
            count={count}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default connect(
  () => ({
    count: Count.getState()
  })
)(App);
