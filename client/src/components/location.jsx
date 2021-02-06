import React from 'react';
import Styled from 'styled-components';
import { Carousel, SmallLeft, SmallRight } from './styledComponents.js';

const Company = Styled.div`
  background-color: #f0f4f5;
  transition: 0.3s;
  grid-area: company; 
  margin-left: 20px;
`
const Country = Styled(Company)`
  grid-area: country;
  opacity: 0;
`
const CardContainer = Styled.div`
  background-color: #f0f4f5;
  font-family: 'Nunito Sans', sans-serif;
  cursor: pointer;
  height: 100%;
  display: grid;
  grid-template-columns: 0.2fr 1.5fr 1.5fr 0.7fr;
  grid-template-rows: 0.3fr 0.3fr 1.7fr 1.7fr;
  gap: 0px 0px;
  grid-template-areas:
    "img img img img"
    "company company company company"
    "country country country country"
    "footer footer footer footer";
  transition: 0.3s;
  width: 350px;
  border-radius: 5%; 
  margin: 10px;
  &:hover {
    transform: scale(1.015);
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  }
  &&:hover ${SmallRight} {
    background-color: #000;
    color: #fff;
  }
  &&:hover ${Country} {
    opacity: 1;
  }
`
const CardInfo = Styled.div`
  background-color: #f0f4f5;
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
  height: 85%; 
  width: 100%; 
  border-radius: 5% 5% 0px 0px;
`

class Location extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let locations = this.props.locations;
    if(!locations.length) {
      return <Carousel>
        <CardContainer key='no'>
          <Img src="https://pixabay.com/get/ge9ac0a1608e17c9cdcec58ce2b3d814b6d579bdca6d849b5fe516e52d21a367338f7db585786311f105f9e6de559fb9c_640.jpg"></Img>
          <Company>Tater Tots Co., Ltd.</Company>
          <Country>Hack Reactor</Country>
          <CardInfo>
            <SmallLeft>Factory</SmallLeft>
            <SmallRight>Learn More</SmallRight>
          </CardInfo>
        </CardContainer>
      </Carousel>
    }
    let pics = locations.length > 2 
      ? locations.slice(0,2).map(location => {
          const {id, loc_company, loc_name, loc_pic} = location;
          return <CardContainer key={id}>
              <Img src={loc_pic}></Img>
              <Company>{loc_company.toUpperCase()+" Co., Ltd."}</Company>
              <Country>{loc_name}</Country>
              <CardInfo>
                <SmallLeft>Factory</SmallLeft>
                <SmallRight>Learn More</SmallRight>
              </CardInfo>
            </CardContainer>
          })
      : locations.map(location => {
        const {id, loc_company, loc_name, loc_pic} = location;
        return <CardContainer key={id}>
            <Img src={loc_pic}></Img>
            <Company>{loc_company.toUpperCase()+" Co., Ltd."}</Company>
            <Country>{loc_name}</Country>
            <CardInfo>
              <SmallLeft>Factory</SmallLeft>
              <SmallRight>Learn More</SmallRight>
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