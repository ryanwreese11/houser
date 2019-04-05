import React, { Component } from 'react'

export class WizardStep2 extends Component {
  constructor(props) {
    super(props)
    const reduxState = store.getState()
    this.state = {
      img: reduxState.img,
      
    };


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
        <button>Previous Step</button>
        <input type="text" name="img" placeholder='image URL' onChange={this.handleChange}></input>

        <button>Next Step</button>
        <button>Cancel</button>
      </div>
    )
  }
}

export default WizardStep2
