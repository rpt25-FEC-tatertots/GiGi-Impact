import React from 'react';
import axios from 'axios';
import Location from './location.jsx';
import Styled from 'styled-components';

const SliderTab = Styled.div`
  display: block;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-weight: 400;
  vertical-align: baseline;
  background: 0 0;
  background-color: grey;
`
const SliderContainer = Styled.div`
  position: relative;
  overflow-x: hidden;
`

const SliderButton = Styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  background-color: #e3ebe8;
  height: 4rem;
  width: 4rem;
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
      <SliderTab>
        <div className='container'>
          {/* <SliderButton onClick={this.slideLeft}>
            <span className="material-icons">
              keyboard_arrow_left
          </span>
          </SliderButton> */}
          <Location locations={this.state.locations} />
          {/* <SliderButton onClick={this.slideRight}>
            <span className="material-icons">
              keyboard_arrow_right
              </span>
          </SliderButton> */}
        </div>  
      </SliderTab>
     
    )
  }
}

export default Locations;