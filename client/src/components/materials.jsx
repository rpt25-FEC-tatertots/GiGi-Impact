import React from 'react';
import { Carousel, SliderContainer, SliderCardContainer, SliderButton } from './styledComponents.js';
import Material from './material.jsx';

class Materials extends React.Component {
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
        index: ((prevState.index + 1) % this.props.materials.length)
      }
    })
  }

  slideLeft(event) {
    event.preventDefault();
    if (this.state.index === 0) {
      this.setState({
        index: this.state.materials.length - 1
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
    const { materials } = this.props;
    const { index } = this.state;
    
    return (
      <SliderContainer >
        <SliderCardContainer>
          {materials.length > 4 && index ? 
            <SliderButton onClick={this.slideLeft} style={{left: "10px"}}>
              <span className="material-icons">
                keyboard_arrow_left
              </span>
            </SliderButton>
          : null}
          <Carousel>
              <Material materials={materials.slice(index, index + 5)}/>
          </Carousel>
          {materials.length > 4 && (materials.slice(index, index + 5).length > 4) ?
            <SliderButton onClick={this.slideRight} style={{right: "10px"}}>
              <span className="material-icons">
                keyboard_arrow_right
              </span>
            </SliderButton>
          : null}
        </SliderCardContainer>
      </SliderContainer >
    )
  }
}

export default Materials;

