import React, { Component } from 'react'

import { LINK } from 'react-router-dom'
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

handleChange = e => {
  let { name, value } = e.target
  this.setState({
    [name]: value
  })
  console.log(this.state)
}

  createHouse = house => {
    axios.post('/api/houses', house).then(res => {

    }).catch(err => console.log('unable to create product'))
  }

  handleClick = () => {
    let house = this.state
    this.createHouse(house)
  }

  render() {
    return (
      <div>
        <button>Previous Step</button>
        <input type="text" name="mortgage" placeholder='Monthly Mortgage Amount' onChange={this.handleChange}></input>
        <input type="text" name="rent" placeholder='Monthly Rent' onChange={this.handleChange}></input>

        <Link to='/'>
          <button onClick={this.handleClick}> Add Listing</button>
          <button>Cancel</button>
        </Link>
      </div>
    )
  }

}

export default WizardStepThree
