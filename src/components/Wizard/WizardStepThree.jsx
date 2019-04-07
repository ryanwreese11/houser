import React, { Component } from 'react'

import store, { ADD_MORTGAGE, ADD_RENT, ADD_HOUSE, CANCEL } from '../../store'

import { Link } from 'react-router-dom'
import axios from 'axios'

export class WizardStepThree extends Component {
  constructor(props) {
    super(props)

    const reduxState = store.getState()
    this.state = {
      mortgage: reduxState.mortgage,
      rent: reduxState.rent

    }
  }

  cancel() {
    store.dispatch({
      type: CANCEL
    })
  }

  handleChange = e => {
    let { name, value } = e.target
    this.setState({
      [name]: value
    })
   
  }

  saveChanges() {
    store.dispatch({
      type: ADD_MORTGAGE,
      payload: this.state.mortgage
    })
    store.dispatch({
      type: ADD_RENT,
      payload: this.state.rent
    })
  }

  createHouse = house => {
    axios.post('/api/houses', house).then(res => {

    }).catch(err => console.log('unable to create product'))

  }

  createHouse(){
    store.dispatch({
      type: ADD_HOUSE
    })
  }

  handleClick = () => {
    let house = this.state
    this.createHouse(house)
  }

  render() {
    return (
      <div>
        <Link to='/wizard2'>
          <button onClick ={() => this.saveChanges()}>Previous Step</button>
        </Link>
        <input value={this.state.mortgage} type="text" name="mortgage" placeholder='Monthly Mortgage Amount' onChange={this.handleChange}></input>
        <input value={this.state.rent} type="text" name="rent" placeholder='Monthly Rent' onChange={this.handleChange}></input>

        <Link to='/'>
          <button onClick={() => this.createHouse()} onClick ={() => this.saveChanges()} onClick={this.handleClick}> Add Listing</button>
          <button onClick={() => this.cancel()}>Cancel</button>
        </Link>
      </div>
    )
  }

}

export default WizardStepThree
