import React, { Component } from 'react'
import House from '../House/House'
import axios from 'axios'

import { Link } from 'react-router-dom'


export class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      houses: []
    }
  }

  deleteHouse = (id) => {
    axios.delete(`/api/houses/${id}`).then(res => {
      this.getHouses()
    }).catch(err => console.log('there was an error.', err))
  }

  componentDidMount() {
    this.getHouses()
  }
  
  getHouses() {
    axios.get('/api/houses').then(res => {
      console.log(res.data)
      this.setState({
        houses: res.data
      })
    }).catch(err => console.log('we have a big problem', err))
  }



  render() {
    return (
      <div>
        Dashboard

        <Link to="/wizard">
          <button>Add New Property</button>
        </Link>
        {this.state.houses.map(item => {
          return <House key={item.id} house={item}
            houses={this.state.houses}
            deleteHouse={this.deleteHouse} />
        })}
      </div>
    )
  }
}

export default Dashboard
