// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {key1: 0, key2: 0}

  onIncrementMango = () => {
    this.setState(prevState => ({
      key1: prevState.key1 + 1,
      key2: prevState.key2,
    }))
  }

  onIncrementBanana = () => {
    this.setState(prevState => ({
      key1: prevState.key1,
      key2: prevState.key2 + 1,
    }))
  }

  render() {
    const {key1, key2} = this.state
    return (
      <div className="background-container">
        <div className="card-container">
          <h1>
            Bob ate <span className="span">{key1}</span> mangoes{' '}
            <span className="span">{key2}</span> bananas
          </h1>
          <div className="fruits-container">
            <div className="mango-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <div className="button-container">
                <button
                  onClick={this.onIncrementMango}
                  type="button"
                  className="button"
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="banana-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <div className="button-container">
                <button
                  onClick={this.onIncrementBanana}
                  type="button"
                  className="button"
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
