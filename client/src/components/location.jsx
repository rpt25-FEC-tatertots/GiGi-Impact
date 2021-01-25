import React from 'react';

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
          <img src={loc_pic}/>
          <div>{loc_name}</div>
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