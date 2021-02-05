import React from 'react';
import Styled from 'styled-components';

const FactMill = Styled.button`
  display: flex;
  border-radius: 10px;
  border: none;
  background-color: transparent;
`

const LearnMore = Styled(FactMill)`
  background-color: #fff;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`

class Location extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    let locations = this.props.locations;
    let pics = locations.map(location => {
      const { loc_pic, loc_company, loc_name, id } = location;
      return (
        <div className='card' key={id}>
          <img src={loc_pic} />
          <div>{loc_name}</div>
          <div>{loc_company}., Ltd</div>
          <div className='two-buttons'>
            <FactMill>Factory</FactMill>
            <LearnMore>Learn More</LearnMore>
          </div>
        </div>
      )
    })
    console.log(locations);
    return (
      locations.length > 0 && (
        <div className='carousel'>
          {pics}
        </div>
      )
    )
  }
}


export default Location;