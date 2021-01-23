import React from 'react';
import axios from 'axios';


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
    let display = this.state.locations.map(location => {
      return <div key={location.id}>
        <div className="card">
          <div>
            <h3>{location.loc_name}</h3>
          </div>
          <img src={location.loc_pic} alt="" />
        </div>
      </div>
    })
    return (
      <div>
        <h2>Where it is made</h2>
        <br/>
        {display}
      </div>
    )
  }
}

export default Locations;