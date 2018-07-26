import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import NewStar from '../NewStar/NewStar'
import StarList from '../StarList/StarList'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
        starList: [
            {
                name: 'Beauty',
                role: 'Beauty and the Beast',
                popularity: 8,
            },
            {
                name: 'Beast',
                role: 'Beauty and the Beast',
                popularity: 10,
            },
            {
                name: 'Aurora',
                role: 'Sleeping Beauty',
                popularity: 5,
            },
        ],

        newStar : {
            name: '',
            role: '',
            popularity: ''
        }
    }
}

handleChangeFor = (propertyName) => (event) => {
    this.setState({
        newStar: {
            ...this.state.newStar,
            [propertyName]: event.target.value,
        }
    })
}

handleSubmit = (event) => {
    console.log(this.state)

    event.preventDefault();

    this.setState({
        starList: [
            ...this.state.starList,
            this.state.newStar
          ],
          newStar : {
            name: '',
            role: '',
            popularity: ''
          }
        })
}

  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
        </p>
        <NewStar 
        newStar={this.state.newStar} 
        handleChangeFor={this.handleChangeFor}
        handleSubmit={this.handleSubmit}
        />
        <StarList listOfStar={this.state.starList}/>
      </div>
    );
  }
}

export default App;
