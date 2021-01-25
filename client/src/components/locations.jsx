import React from 'react';
import axios from 'axios';
import Location from './location.jsx';


class Locations extends React.Component {
  constructor() {
    super();
    this.state = {
      locations: []
    }
    this.getProductById = this.getProductById.bind(this);
  }

  getProductById() {
    let randIndex = Math.floor(Math.random() * 100) + 1;
    axios.get(`/api/locations?product_id=${randIndex}`)
      .then(response => this.setState({ locations: response.data }))
      // .then(response => console.log('data on client 🇹🇭', response.data))
      .catch(error => console.log(error))
  }

  componentDidMount() {
    this.getProductById();
  }

  render() {
    return (
      <div>
        <button>Where it is made</button>
        <Location locations={this.state.locations}/>
      </div>
    )
  }
}

export default Locations;