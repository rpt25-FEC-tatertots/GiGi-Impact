import React from 'react';
import Styled from 'styled-components';
import { Carousel, SmallLeft, SmallRight, CardInfo } from './styledComponents.js';

const Company = Styled.div`
  background-color: #f0f4f5;
  transition: 0.3s;
  grid-area: company; 
  margin: 20px 20px 0 20px;
`
const Country = Styled(Company)`
  grid-area: country;
  opacity: 0;
`
const CardContainer = Styled.div`
  background-color: #f0f4f5;
  font-family: 'Nunito Sans', sans-serif;
  cursor: pointer;
  flex-shrink: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.3fr 0.3fr 1.7fr 1.7fr;
  gap: 0px 0px;
  grid-template-areas:
    "img"
    "company"
    "country"
    "footer";
  transition: 0.3s;
  max-width: 260px;
  height: 370px;
  border-radius: 9px;
  margin: 0 10px;
  :hover {
    transform: scale(1.015);
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  }
  :hover ${SmallRight} {
    background-color: #000;
    color: #fff;
  }
  :hover ${Country} {
    opacity: 1;
  }
`
const Img = Styled.img`
  grid-area: img;
  height: 100%; 
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
          <Img src="https://images.all-free-download.com/images/graphicthumb/cute_puppy_photo_picture_11_168839.jpg"></Img>
          <Company>Tater Tots Co., Ltd.</Company>
          <Country>Hack Reactor</Country>
          <CardInfo>
            <SmallLeft>Factory</SmallLeft>
            <SmallRight>Learn More</SmallRight>
          </CardInfo>
        </CardContainer>
      </Carousel>
    }

    let pics = locations.map(location => {
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
          {pics.slice(0,2)}
        </Carousel>
      )
    )
  }
}


export default Location;