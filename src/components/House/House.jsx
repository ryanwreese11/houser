import React, { Component } from 'react'

export class House extends Component {



  handleDeleteClick = () => {

    this.props.deleteHouse(this.props.house.id)
      
  }
  
  
  render() {
    
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
