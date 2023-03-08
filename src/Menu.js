import React, { Component } from 'react'
import { withtoggler } from './Hocs/withtoggler'



class Menu extends Component {
    


    render() {
        return (
            <div>
                <button onClick={this.props.toggle }>{this.props.on ? "Hide" : "Show"} Menu</button>
                <nav style={{ display: this.props.on ? "block" : "none" }}></nav>
                <a>Your Profile</a>
                <a>Your Repositories</a>
                <a>Your stars</a>
            </div>
        )
    }
}

const superchargedMenu = withtoggler(Menu)
export default superchargedMenu