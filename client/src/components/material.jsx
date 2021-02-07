import React from 'react';
import Styled from 'styled-components';
import { Carousel, SmallLeft, SmallRight } from './styledComponents';

const Card = Styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1.6fr 0.4fr 1.5fr 0.5fr;
  gap: 0px 0px;
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
`
const Blob = Styled.div`
  margin: 0;
  padding: 0;
  grid-area: blob;
  width: 170px;
  height: 150px;
  background: url("https://www.patagonia.com/dw/image/v2/bdjb_PRD/on/demandware.static/-/Library-Sites-PatagoniaShared/default/dw6fbb2428/fpc/programs/brewer_c_0001_cc_WEB-1200x1200.jpg?q=60&amp;sw=600&amp");
  background-size: cover;
  animation: animate 30s linear infinite;
  @keyframes animate {
    0%, 100% {
    border-radius: 64% 36% 27% 73% / 55% 58% 42% 45%;
    }
    25% {
      border-radius: 73% 27% 26% 38% / 73% 36% 64% 27%
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
  grid-area: MatName;
  font-size: 1.5rem;
  font-weight: bold; 
  margin-left: 5%;
`
const MatDesc = Styled(MatName)`
  grid-area: MatDesc;
  font-size: .75rem;
  font-weight: normal;
`

const Program = Styled(SmallLeft)`
  grid-area: LeftButton;
  grid-column-start: 1;
`
const LearnMore = Styled(SmallRight)`
  grid-area = RightButton;
  grid-column-start: 2;
  grid-row-start: 4;
`

class Material extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const materials = this.props.materials;
  
    let matDisplay = materials.map(material => {
      const { id, mat_desc, mat_info, mat_name } = material;
      return <Card key={id}>
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