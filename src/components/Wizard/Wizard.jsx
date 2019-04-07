import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import axios from 'axios'

import store, { ADD_NAME, ADD_STATE, ADD_ADDRESS, ADD_CITY, ADD_ZIP, CANCEL } from '../../store'

export class Wizard extends Component {
  constructor(props) {
    super(props)
    const reduxState = store.getState()
    this.state = {
      name: reduxState.name,
      address: reduxState.address,
      city: reduxState.city,
      state: reduxState.state,
      zip: reduxState.zip

    };


  }

  createHouse = house => {
    axios.post('/api/houses', house).then(res => {

    }).catch(err => console.log('unable to create product'))
  }

  handleChange = e => {
    let { name, value } = e.target
    this.setState({
      [name]: value
    })
  
  }

  cancel() {
    store.dispatch({
      type: CANCEL
    })
  }

  saveChanges() {
    store.dispatch({
      type: ADD_NAME,
      payload: this.state.name
    })
    store.dispatch({
      type: ADD_ADDRESS,
      payload: this.state.address
    })
    store.dispatch({
      type: ADD_CITY,
      payload: this.state.city
    })
    store.dispatch({
      type: ADD_STATE,
      payload: this.state.state
    })
    store.dispatch({
      type: ADD_ZIP,
      payload: this.state.zip
    })
  }


  render() {
    return (
      <div>
        <input value={this.state.name} name="name" placeholder='name' onChange={this.handleChange}></input>
        <input value={this.state.address} name="address" placeholder='address' onChange={this.handleChange}></input>
        <input value={this.state.city} name="city" placeholder='city' onChange={this.handleChange}></input>
        <input value={this.state.state} name="state" placeholder='state' onChange={this.handleChange}></input>
        <input value={this.state.zip} type="number" name="zip" placeholder='zip' onChange={this.handleChange}></input>
        <Link to='/wizard2'>
          <button onClick={() => this.saveChanges()}>Next Step</button>
        </Link>
        <Link to='/'>
          <button onClick={() => this.cancel()}>Cancel</button>
        </Link>


      </div>
    )
  }
}

export default Wizard
