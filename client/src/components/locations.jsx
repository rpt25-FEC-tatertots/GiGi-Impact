import React from 'react';
import Location from './location.jsx';
import { SliderContainer, SliderCardContainer } from './styledComponents.js';

class Locations extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <SliderContainer >
        <SliderCardContainer>
          <Location locations={this.props.locations} />
        </SliderCardContainer>
      </SliderContainer >
    )
  }
}

export default Locations;