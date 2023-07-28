// Write your code here
import './index.css'
import {Component} from 'react'

const HeadsImg = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TailsImg = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    headsOrTails: HeadsImg,
    heads: 0,
    tails: 0,
  }

  onClickButton = () => {
    const {heads, tails} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let headsCount = heads
    let tailsCount = tails
    let newTossImg = ''

    if (tossResult === 0) {
      headsCount += 1
      newTossImg = HeadsImg
    } else {
      tailsCount += 1
      newTossImg = TailsImg
    }

    this.setState({
      headsOrTails: {newTossImg},
      heads: {headsCount},
      tails: {tailsCount},
    })
  }

  render() {
    const {headsOrTails, heads, tails} = this.state
    const total = heads + tails

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="sub-heading">Heads (or) Tails</p>
          <img className="toss-img" src={headsOrTails} alt="toss result" />
          <button className="btn" type="button" onClick={this.onClickButton}>
            Toss Coin
          </button>
          <div className="flex-container">
            <p>Total: {total}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
