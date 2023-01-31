// Write your code here

import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {number: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onEvenOdd = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(prevState => ({
      number: prevState.number + randomNumber,
    }))
  }

  render() {
    const {number} = this.state
    const letter = number % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Count {number}</h1>

          <p className="para">Count is {letter}</p>
          <button type="button" className="button" onClick={this.onEvenOdd}>
            Increment
          </button>
          <p className="para1">Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
