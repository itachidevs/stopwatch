import {Component} from 'react'

import './index.css'

let id

class Stopwatch extends Component {
  state = {isTimerStarted: false, minutes: 0, seconds: 0}

  onTimerStart = () => {
    this.setState(prevState => ({isTimerStarted: !prevState.isTimerStarted}))
    id = setInterval(this.increment, 1000)
  }

  incrementminutes = () => {
    this.setState(previous => ({minutes: previous.minutes + 1}))
    this.setState({seconds: 0})
  }

  increment = () => {
    this.setState(previous => ({seconds: previous.seconds + 1}))
    const {seconds, minutes} = this.state

    if (seconds > 59) {
      this.incrementminutes()
    }
    console.log(seconds, minutes)
  }

  stopTimer = () => {
    console.table(id)
    this.setState(previous => ({seconds: previous.seconds}))
    this.setState(previous => ({minutes: previous.minutes}))
    clearInterval(id)
  }

  resetTimer = () => {
    console.log(id)
    this.setState({seconds: 0})
    this.setState({minutes: 0})
    clearInterval(id)
  }

  render() {
    const {minutes, seconds} = this.state
    let minText = `${minutes}`
    let secText = `${seconds}`
    if (minutes < 10) {
      minText = `0${minutes}`
    }
    if (seconds < 10) {
      secText = `0${seconds}`
    }
    return (
      <div className="container">
        <h1 className="container-heading">Stopwatch</h1>
        <div className="card">
          <div className="timer-card">
            <div className="head-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="timer-mg"
              />
              <h1 className="head-container-name">Timer</h1>
            </div>
            <h1 className="time">
              {minText}:{secText}
            </h1>
            <div className="btn-container">
              <button
                type="button"
                className="btn green"
                onClick={this.onTimerStart}
              >
                Start
              </button>
              <button
                type="button"
                className="btn red"
                onClick={this.stopTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="btn yellow"
                onClick={this.resetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
