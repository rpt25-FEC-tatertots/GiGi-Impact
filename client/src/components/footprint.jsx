import React from 'react';
import Styled, { css } from 'styled-components';


const FootprintButton = Styled.button`
  background-color: black;
  color: white;
  padding: 12px 35px;
  border-color: transparent;
  border-radius: 3rem;
  font-family: 'Nunito Sans';
  font-size: 12px;
  font-weight: bold;
  justify-content: center;
  width: 150px;
  :hover {
    transform: scale(1.015);
  }
`;

const LargeButton = Styled(FootprintButton)`
  width: 420px;
` 

const FootprintDiv = Styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100vw;
  margin-top: 2rem;
  margin-bottom: 3rem;
  max-height: 200px;
 
`
export default function Footprint(props) {
  console.log('🚴🏽‍♂️', props.windowSize);
  const {windowSize} = props;

  let btn;
  windowSize > 520 ? btn = <FootprintButton>Our Footprint</FootprintButton> : btn = <LargeButton>Our Footprint</LargeButton>


  return (
    
    <FootprintDiv>
      {btn}
    </FootprintDiv>
  )
};