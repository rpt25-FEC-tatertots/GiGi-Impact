import React from 'react';
import axios from 'axios';
import Location from './location.jsx';
import Styled from 'styled-components';
import { SliderContainer, SliderCardContainer } from './styledComponents.js';

class Locations extends React.Component {
  constructor() {
    super();
    this.state = {
      locations: []
    }
    this.getProductById = this.getProductById.bind(this);
  }

  getProductById() {
    let id = window.location.pathname;
    axios.get(`/locations${id}`)
      .then(response => this.setState({ locations: response.data }))
      .catch(error => console.log(error))
  }

  componentDidMount() {
    this.getProductById();
  }

  render() {
    return (
      <SliderContainer >
        <SliderCardContainer>
          <Location locations={this.state.locations} />
        </SliderCardContainer>
      </SliderContainer >
    )
  }
}

export default Locations;