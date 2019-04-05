import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import axios from 'axios'

export class Wizard extends Component {
  constructor () {
    super()

    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zip: ''
    }

  }

  createHouse = house => {
    axios.post('/api/houses', house).then(res => {

    }).catch(err => console.log('unable to create product'))
  }

  handleClick = () => {
    let house = this.state
    this.createHouse(house)
  }

  handleChange = e => {
    let { name, value } = e.target
    this.setState({
      [name]: value
    })
    console.log(this.state)
  }
  
  
  render() {
    return (
      <div>
        <input name="name" placeholder='name' onChange={this.handleChange}></input>
        <input name="address"  placeholder='address' onChange={this.handleChange}></input>
        <input name="city"  placeholder='city' onChange={this.handleChange}></input>
        <input name="state"  placeholder='state' onChange={this.handleChange}></input>
        <input type="number" name="zip"  placeholder='zip' onChange={this.handleChange}></input>
        <button>Next Step</button>
        <button>Cancel</button>
        

      </div>
    )
  }
}

export default Wizard
