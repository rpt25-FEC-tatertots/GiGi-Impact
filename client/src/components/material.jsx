import React from 'react';
import Styled from 'styled-components';
import { Carousel, SmallLeft, SmallRight } from './styledComponents';

const Blob = Styled.div`
  margin: 0;
  padding: 0;
  grid-area: blob;
  grid-column-start: 2;
  width: 140px;
  height: 120px;
  background: url(${props => props.url});
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
  margin: 5%;
  max-width: 90%;
`
const MatDesc = Styled(MatName)`
  font-family: 'Nunito Sans', sans-serif;
  grid-area: MatDesc;
  font-size: .75rem;
  font-weight: normal;
  max-width: 90%;
`
const Program = Styled(SmallLeft)`
  grid-area: LeftButton;
  grid-column-start: 1;
  margin: 15%;
  padding: 5px;
  background-color: transparent;
`
const LearnMore = Styled(SmallRight)`
  grid-area = RightButton;
  grid-column-start: 2;
  grid-row-start: 4;
  margin: 15%;
  padding: 5px;
`
const MatInfo = Styled.div`
  font-family: 'Nunito Sans', sans-serif;
  font-size: 0.82rem;
  font-weight: 400;
  color: #fff;
  transition: .5s ease;
  opacity: 0;
  text-align: center;
  grid-area: blob;
  margin-top: 0 5px 20px 5px;
  max-width: 80%;
  margin: 5%;
`
const Card = Styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1.4fr 0.6fr 1.25fr 0.75fr;
  gap: 0px 0px;
  overflow: hidden;
  grid-template-areas:
    "blob blob"
    "MatName MatName"
    "MatDesc MatDesc"
    "LeftButton RightButton";
  background-color: #f0f4f5;
  font-family: 'Nunito Sans', sans-serif;
  cursor: pointer;
  border-radius: 9px;
  margin: 10px;
  height: 370px;
  max-width: 260px;
  flex: 1 0 22%;
  :hover ${LearnMore} {
    background-color: #000;
    color: #fff;
    z-index: 10;
  }
  :hover ${MatInfo} {
    opacity: 1;
    z-index: 15;
  }
  :hover {
    grid-template-rows: 1fr;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
    background: url(${props => props.url});
    z-index: 10;
    transform: scale(1.02);
    transition: all 0.3s ease-in-out; 
    opacity: 0.8;
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
    this.setState(prevState => {
      return {
        isHovered: !prevState.isHovered
      }
    })
  }

  render() {
    const materials = this.props.materials;
    const { isHovered } = this.state;
    const { handleHover } = this;
    if(!materials.length) {
      return <Carousel>
          <Card key='none' onMouseEnter={handleHover} onMouseLeave={handleHover} style={{backgroundColor: "#f5d90a"}}>
          {isHovered ? <MatInfo style={{color: "black", fontSize: "2rem"}}>Let’s quack this case 🐣.</MatInfo> : null }
          <Blob url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2EGNOn0R__P2Bv_oIzb2EIRAQCAYKO7xQaw&usqp=CAU"></Blob>
          <MatName>100% vegan, range free rubber duck</MatName>
          <MatDesc>What did the duck detective say to his partner?</MatDesc>
          <Program>Program</Program>
          <LearnMore>Learn More</LearnMore>
        </Card>
      </Carousel>
    }

    let matDisplay = materials.map(material => {
      const { id, mat_desc, mat_info, mat_name, mat_img } = material;
      return <Card key={id} onMouseEnter={handleHover} onMouseLeave={handleHover} url={mat_img}>
        {isHovered ? <MatInfo>{mat_info.slice(0, 250)}</MatInfo> : null }
        <Blob url={mat_img}></Blob>
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