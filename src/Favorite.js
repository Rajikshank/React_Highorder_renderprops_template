import React, { Component } from 'react'
import { withtoggler } from './Hocs/withtoggler'

  class Favorite extends Component {
 

  render() {
    return (
      <div>
        <h3>Click Here to favorite</h3>
        <h1>
          <span onClick={this.props.toggle}>
            {this.props.on ? "🤍" :"❤️"}
              
          </span>
        </h1>
      </div>
    )
  }
}

const superchargedFavoriteComponen=withtoggler(Favorite)
export default superchargedFavoriteComponen