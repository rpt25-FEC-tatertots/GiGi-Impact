import React from 'react';
import Styled from 'styled-components';

const Carousel = Styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  overflow: visible;
`
const FactMill = Styled.button`
  border-radius: 10px;
  border: none;
  background-color: transparent;
  font-family: 'Nunito Sans', sans-serif;
`

const LearnMore = Styled(FactMill)`
  background-color: #fff;
  padding: 5px 10px;
  font-family: 'Nunito Sans', sans-serif;
`

const CardContainer = Styled.div`
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 350px;
  border-radius: 5%;  
  margin: 10px;
  &:hover {
    transform: scale(1.025);
  }
  &&:hover ${LearnMore} {
    background-color: #000;
    color: #fff;
  }
`
const CardInfo = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: none;
  background-color: #f9f9f9;
  transition: all 0.2s ease-in-out; 
  padding: 50% 20% 10% 20%;
  height: 67%;
  top: 33%;
`
const Img = Styled.img`
  height: 33%;
  width: 100%;
  border-radius: 5% 5% 0px 0px;
`

class Location extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    let locations = this.props.locations;
    let pics = locations.length > 2 
      ? locations.slice(0,2).map(location => {
        return <CardContainer>
            <Img src={location.loc_pic}></Img>
            <CardInfo>
              <FactMill>Factory</FactMill>
              <LearnMore>Learn More</LearnMore>
            </CardInfo>
          </CardContainer>
        })
      : locations.map(location => {
        return <CardContainer>
            <Img src={location.loc_pic}></Img>
            <CardInfo>
              <FactMill>Factory</FactMill>
              <LearnMore>Learn More</LearnMore>
            </CardInfo>
          </CardContainer>
        })
   
    return (
      locations.length > 0 && (
        <Carousel>
          {pics}
        </Carousel>
      )
    )
  }
}


export default Location;