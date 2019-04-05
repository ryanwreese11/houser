import React, { Component } from 'react'

export class House extends Component {
  constructor(props) {
    super(props)

    // this.state = {
    //   id: props.house.id,
    //   name: props.house.name,
    //   address: props.house.address,
    //   city: props.house.city,
    //   state: props.house.state,
    //   zip: props.house.zip
    // }
  }


  handleDeleteClick = () => {
    console.log('asdfasdfas', this.props.house.id)
    this.props.deleteHouse(this.props.house.id)
      
  }
  
  
  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.house.name}
        {this.props.house.address}
        {this.props.house.city}
        {this.props.house.state}
        {this.props.house.zip}
        <button onClick={this.handleDeleteClick}>Delete</button>
      </div>
    )
  }
}

export default House
