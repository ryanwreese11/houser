import React, { Component } from 'react'

import store, { ADD_IMG, CANCEL } from '../../store'

import { Link } from 'react-router-dom'

export class WizardStep2 extends Component {
  constructor(props) {
    super(props)
    const reduxState = store.getState()
    this.state = {
      img: reduxState.img

    };

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
      type: ADD_IMG,
      payload: this.state.img
    })
  }


  render() {
    return (
      <div>
        <Link to='/wizard'>
          <button onClick ={() => this.saveChanges()}>Previous Step</button>
        </Link>
        <input value={this.state.img}type="text" name="img" placeholder='image URL' onChange={this.handleChange}></input>

        <Link to='/wizard3'>
          <button onClick ={() => this.saveChanges()}>Next Step</button>
        </Link>
        <Link to='/'>
          <button onClick={() => this.cancel()}>Cancel</button>
        </Link>
      </div >
    )
  }
}

export default WizardStep2
