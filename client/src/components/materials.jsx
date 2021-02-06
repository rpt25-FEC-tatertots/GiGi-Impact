import React from 'react';
import { Carousel, SliderContainer, SliderCardContainer } from './styledComponents.js';

class Materials extends React.Component {
  constructor() {
    super();
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
      <SliderContainer >
        <SliderCardContainer>
          <Carousel>
            {/* <SliderButton onClick={this.slideLeft}>
              <span className="material-icons">
                keyboard_arrow_left
            </span>
            </SliderButton> */}
              <h2>Helloooo I am the materials</h2>
            {/* <SliderButton onClick={this.slideRight}>
              <span className="material-icons">
                keyboard_arrow_right
                </span>
            // </SliderButton> */}
          </Carousel>
        </SliderCardContainer>
      </SliderContainer >
    )
  }
}

export default Materials;