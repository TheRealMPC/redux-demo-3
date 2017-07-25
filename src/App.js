import React, { Component } from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';

import {addName} from './ducks/user'
import {fetchCharacter} from './ducks/cart'
import {getCharacter} from './characterService'

class App extends Component {
   constructor() {
      super()

   }
   componentDidMount() {
     console.log(this.props)
      this.props.addName("Brian")
      const promise = getCharacter()
      this.props.fetchCharacter(promise)
   }
   componentWillReceiveProps(nextProps){
      console.log("New Props: ", nextProps)
   }
  render() {
     
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Name: {this.props.name}</h2>

        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {
           this.props.cart.fetching
           ? 
           <div> Please wait, we're fetching your character</div>
           :
           null
        }

        {
           this.props.cart.character 
           ? 
           <h1>Name: {this.props.cart.character.name}</h1>
           :
           null
        }
      </div>
    );
  }
}
function mapStateToProps(state) {
   return {
      name: state.user.name,
      cart: state.cart
   }
}
const mapDispatchToProps = {
   addName,
   fetchCharacter
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
