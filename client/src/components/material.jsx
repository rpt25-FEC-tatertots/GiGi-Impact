import React from 'react';
import Styled from 'styled-components';
import { Carousel, SmallLeft, SmallRight } from './styledComponents';

const Blob = Styled.div`
  margin: 0;
  padding: 0;
  grid-area: blob;
  width: 170px;
  height: 150px;
  background: url("https://www.patagonia.com/dw/image/v2/bdjb_PRD/on/demandware.static/-/Library-Sites-PatagoniaShared/default/dw6fbb2428/fpc/programs/brewer_c_0001_cc_WEB-1200x1200.jpg?q=60&amp;sw=600&amp");
  background-size: cover;
  animation: animate 20s linear infinite;
  @keyframes animate {
    0%, 100% {
    border-radius: 44% 36% 27% 73% / 55% 58% 42% 45%;
    }
    25% {
      border-radius: 63% 37% 26% 38% / 73% 36% 64% 27%
    }
    50% {
      border-radius: 28% 72% 44% 56% / 49% 40% 60% 51%
    }
    75% {
      border-radius: 40% 60% 70% 30% / 47% 62% 38% 53%
    }
  }
`
const MatName = Styled.p`
  font-family: 'Nunito Sans', sans-serif;
  grid-area: MatName;
  font-size: 1.5rem;
  font-weight: bold; 
  margin-left: 5%;
`
const MatDesc = Styled(MatName)`
  font-family: 'Nunito Sans', sans-serif;
  grid-area: MatDesc;
  font-size: .75rem;
  font-weight: normal;
`

const Program = Styled(SmallLeft)`
  grid-area: LeftButton;
  grid-column-start: 1;
  margin: 0px 25px 45px 25px;
  padding: 5px 20px;
`
const LearnMore = Styled(SmallRight)`
  grid-area = RightButton;
  grid-column-start: 2;
  grid-row-start: 4;
  margin: 0px 25px 45px 25px;
  padding: 5px 20px;
`
const MatInfo = Styled.div`
  font-family: 'Nunito Sans', sans-serif;
  font-size: 0.82rem;
  color: #fff;
  transition: .5s ease;
  opacity: 0;
  text-align: center;
`

const Card = Styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1.6fr 0.4fr 1.25fr 0.75fr;
  gap: 0px 0px;
  overflow: hidden;
  grid-template-areas:
    ". blob"
    "MatName MatName"
    "MatDesc MatDesc"
    "LeftButton RightButton";
  background-color: #f0f4f5;
  font-family: 'Nunito Sans', sans-serif;
  cursor: pointer;
  border-radius: 5%;
  margin: 10px;
  width: 320px;
  height: 450px;
  &&:hover ${LearnMore} {
    background-color: #000;
    color: #fff;
    z-index: 10;
  }
  &&:hover ${MatInfo} {
    opacity: 1;
    z-index: 10;
  }

  &&:hover {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    background: url("https://www.patagonia.com/dw/image/v2/bdjb_PRD/on/demandware.static/-/Library-Sites-PatagoniaShared/default/dw6fbb2428/fpc/programs/brewer_c_0001_cc_WEB-1200x1200.jpg?q=60&amp;sw=600&amp");
    z-index: 10;
    opacity: .8;
    ${MatDesc} {
      opacity: 0;
    };
    ${MatName} {
      opacity: 0;
    };
    ${Blob} {
      opacity: 0;
    };
    ${Program} {
      background: transparent;
      color: #fff;
    }
  }
`

class Material extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false
    }

    this.handleHover = this.handleHover.bind(this);
  }


  handleHover(event) {
    event.preventDefault();
    console.log(event.target.id)
    this.setState(prevState => {
      return {
        isHovered: !prevState.isHovered
      }
    })
  }

  render() {
    const materials = this.props.materials;
    let matDisplay = materials.map(material => {
      const { id, mat_desc, mat_info, mat_name } = material;
      return <Card key={id} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
        {this.state.isHovered ? <MatInfo>{mat_info.slice(0, 250)}</MatInfo> : null }
        <Blob></Blob>
        <MatName>{mat_name}</MatName>
        <MatDesc>{mat_desc}</MatDesc>
        <Program>Program</Program>
        <LearnMore>Learn More</LearnMore>
      </Card>
    })
    return (
      <Carousel>
        {matDisplay}
      </Carousel>
    )
  }
}


export default Material;