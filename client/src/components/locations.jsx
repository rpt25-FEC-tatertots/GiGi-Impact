import React from 'react';
import axios from 'axios';
import Location from './location.jsx';
import styled from 'styled-components';

const SliderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  background-color: #fff;
  height: 6rem;
  width: 6rem;
  /* box-shadow: 0 6px 8px 0 rgba(0,0,0,.2); */
  &:hover{
    box-shadow: 0 6px 8px 0 rgba(0,0,0,.2);
  };
`

class Locations extends React.Component {
  constructor() {
    super();
    this.state = {
      locations: [],
      index: 0
    }
    this.slideRight = this.slideRight.bind(this);
    this.slideLeft = this.slideLeft.bind(this);

    this.getProductById = this.getProductById.bind(this);

  }

  getProductById() {
    let randIndex = Math.floor(Math.random() * 100) + 1;
    axios.get(`/api/locations?product_id=${randIndex}`)
      .then(response => this.setState({ locations: response.data }))
      .catch(error => console.log(error))
  }

  componentDidMount() {
    this.getProductById();
  }

  slideRight(event) {
    event.preventDefault();
    this.setState(prevState => {
      return {
        index: ((prevState.index + 1) % this.state.locations.length)
      }
    })
  }

  slideLeft(event) {
    event.preventDefault();
    if (this.state.index === 0) {
      this.setState({
        index: this.state.locations.length - 1
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
    return (
      <div>
        <button>Where it is made</button>
        <div className='container'>
          <SliderButton onClick={this.slideLeft}>
            <span className="material-icons">
              keyboard_arrow_left
          </span>
          </SliderButton>
          <Location locations={this.state.locations} />
          <SliderButton onClick={this.slideRight}>
            <span className="material-icons">
              keyboard_arrow_right
              </span>
          </SliderButton>
        </div>
      </div>
    )
  }
}

export default Locations;