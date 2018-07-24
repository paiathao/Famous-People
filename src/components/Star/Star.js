import React, { Component } from 'react';

class Star extends Component {

    constructor(props) {
        super(props)

        this.state = {
            star: {
                name: '',
                role: ''
            }
        }
    }

    render() {
        return (
            <div>
                <input placeholder="name"/>
                <input placeholder="role"/>
                <button>Submit</button>
            </div>
        )
    }
}

export default Star;