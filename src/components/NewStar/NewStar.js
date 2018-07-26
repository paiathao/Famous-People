import React, { Component } from 'react';

class NewStar extends Component {

    render() {

        return (
            <form onSubmit={this.props.handleSubmit}>
                <input value={this.props.name} type="text" onChange={this.props.handleChangeFor('name')} />
                <input value={this.props.role} type="text" onChange={this.props.handleChangeFor('role')} />
                <input value={this.props.popularity} type="text" onChange={this.props.handleChangeFor('popularity')} />
                <input type="submit" />
            </form>
        )
    }
}

export default NewStar;