import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAcceleration = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => {
        console.log('speed increase')
        return {speed: prevState.speed + 10}
      })
    }
  }

  //   onClickApplyBrakeButton = () => {         solution model
  //     const {speed} = this.state
  //     if (speed > 0) {
  //       this.setState(prevState => ({speed: prevState.speed - 10}))
  //     }
  //   }

  //   onClickAccelerateButton = () => {
  //     const {speed} = this.state
  //     if (speed < 200) {
  //       this.setState(prevState => ({speed: prevState.speed + 10}))
  //     }
  //   }

  onBreak = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => {
        console.log('speed decreasing')
        return {speed: prevState.speed - 10}
      })
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          alt="Speedometer"
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
        />
        <h1 className="heading-2">Speed is {speed}mph</h1>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button-container">
          <button
            className="button acc"
            type="button"
            onClick={this.onAcceleration}
          >
            Accelerate
          </button>
          <button className="button break" type="button" onClick={this.onBreak}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
