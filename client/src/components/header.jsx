import React from 'react';
import Styled from 'styled-components';

const HeaderInfo = Styled.div`
  @media (min-width: 769px) {
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0 8rem;
  }
`
const Impact = Styled.div`
  @media (min-width: 769px){
    display: block;
    flex-basis: 25.390625%;
    background: 0 0;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: bold;
    margin-bottom: 3.2rem;
    font-size: 100%;
    font-weight: 400;
    letter-spacing: -.16px;
    line-height: 2rem;
    margin-top: .8rem;
  }
`
const ImpactH2 = Styled.h2`
  display: block;
  margin-bottom: 2.2rem;
  font-size: 1rem;
  letter-spacing: -.16px;
  line-height: 2rem;
  margin-top: .8rem;
`

const HeaderP = Styled.p`
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-weight: 700;
  vertical-align: baseline;
  background: transparent;
`

const HeadParagraph = Styled.div`
  @media (min-width: 769px) {
    font-size: 1.5rem;
    line-height: 4rem;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: bold;
  }
`

function Header(props) {
  return <HeaderInfo>
    <Impact>
      <ImpactH2>Impact</ImpactH2>
    </Impact>
    <HeadParagraph>
      <HeaderP>Everything we make has an impact on the planet.</HeaderP>
    </HeadParagraph>
  </HeaderInfo>
}

export default Header;