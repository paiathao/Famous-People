import React, { Component } from 'react';

class Star extends Component {

    constructor(props) {
        super(props)

        this.state = {
            stars: {
                name: '',
                role: '',
                popularity: '',
            }
        }
    }

    handleChangeFor = (propertyName) => (event) => {
        this.setState({
            stars: {
                ...this.state.stars,
                [propertyName]: event.target.value,
            }
        })
    }

    // handleNameChange = (event) => {
    //     console.log(event.target.value);

    //     this.setState({
    //         stars: {
    //             ...this.state.stars,
    //             name: event.target.value,
    //         }
    //     })
    // }

    // handleRoleChange = (event) => {
    //     console.log(event.target.value);

    //     this.setState({
    //         stars: {
    //             ...this.state.stars,
    //             role: event.target.value
    //         }
    //     })
    // }

    handleClick = () => {
        console.log(this.state.stars)
    }

    render() {
        return (
            <div>
                <p> {this.state.stars.name} is Famous for {this.state.stars.role} </p>
                <input type="text" onChange={this.handleChangeFor('name')} />
                <input type="text" onChange={this.handleChangeFor('role')} />
                <input type="text" onChange={this.handleChangeFor('popularity')} />
                <button onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
}

export default Star;