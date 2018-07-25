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

    handleClick = (event) => {
        console.log(this.state.stars)

        event.preventDefault();

        this.setState({
            stars: {
                name: '',
                role: '',
                popularity: ''
            }
        })
    }

    render() {
        return (
            <div onSubmit={this.handleClick}>
                <p> {this.state.stars.name} is Famous for {this.state.stars.role} </p>
                <form>
                <input value={this.state.stars.name} type="text" onChange={this.handleChangeFor('name')} />
                <input value={this.state.stars.role} type="text" onChange={this.handleChangeFor('role')} />
                <input value={this.state.stars.popularity} type="text" onChange={this.handleChangeFor('popularity')} />
                <input type="submit" />
                </form>
            </div>
        )
    }
}

export default Star;