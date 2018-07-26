import React, { Component } from 'react';

class Star extends Component {

    render() {
        
        return (
            <li> {this.props.star.name} is Famous for {this.props.star.role}. Their popularity is {this.props.star.popularity} </li>
        )
    }
}

export default Star;