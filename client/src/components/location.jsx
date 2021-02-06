import React from 'react';
import Styled from 'styled-components';

const Carousel = Styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  overflow: visible;
  /* background-color: tomato; */
  height: 500px;
`
const FactMill = Styled.button`
  border-radius: 20px;
  border: none;
  background-color: transparent;
  font-family: 'Nunito Sans', sans-serif;
  margin: 15px;
  padding: 5px 20px;
`

const LearnMore = Styled(FactMill)`
  background-color: #fff;
  font-family: 'Nunito Sans', sans-serif;
`

const CardContainer = Styled.div`
  background-color: #f9f9f9;
  font-family: 'Nunito Sans', sans-serif;
  cursor: pointer;
  height: 100%;
  display: grid;
  grid-template-columns: 0.5fr 1.5fr 1.5fr 0.5fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "img img img img"
    "company company company company"
    "footer footer footer footer";
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 350px;
  border-radius: 5%;  
  overflow: hidden;
  /* border: 2px solid black; */
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
  grid-area: footer;
  align-self: start;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: none;
  transition: all 0.2s ease-in-out; 
  border-radius: 0 0 5% 5%;
`
const Img = Styled.img`
  grid-area: img;
  height: 75%; 
  width: 100%; 
  /* object-fit: contain; */
  /* max-width:100%;
  max-height:100%; */
  /* width: 100%; */
  border-radius: 5% 5% 0px 0px;
`
const Company = Styled.div`
  grid-area: company; 
  background-color: #f9f9f9;
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
            <Company>{location.loc_company}</Company>
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