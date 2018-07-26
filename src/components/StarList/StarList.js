import React, { Component } from 'react';
import Star from '../Star/Star'

class StarList extends Component {

    render() {

        let starListItemArray = this.props.listOfStar.map((star, index) => {
            return <Star star={star} key={index}/>
        })

        return (
            <ul>
                {starListItemArray}
            </ul>
        )
    }
}

export default StarList;
