import React from 'react';

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
    this.slideRight = this.slideRight.bind(this);
    this.slideLeft = this.slideLeft.bind(this);
  }

  slideRight(event) {
    event.preventDefault();
    this.setState(prevState => {
      return {
        index: ((prevState.index + 1) % this.props.locations.length)
      }
    })
  }

  slideLeft(event) {
    event.preventDefault();
    if (this.state.index === 0) {
      this.setState({
        index: this.props.locations.length - 1
      })
    } else {
      this.setState(prevState => {
        return {
          index: prevState.index - 1
        }
      })
    }
  }

  render() {
    let locations = this.props.locations;
    console.log(locations);
    return (
      locations.length > 0 && (
        <div>
          <button onClick={this.slideLeft}>{'<'}</button>
          <img src={locations[this.state.index].loc_pic}/>
          <button onClick={this.slideRight}>{'>'}</button>
        </div>
      )
    )
  }
}


export default Location;