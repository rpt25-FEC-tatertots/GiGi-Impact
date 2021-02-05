import React from 'react';
import Styled from 'styled-components';

const HeaderInfo = Styled.div`
  position: relative;
  background-color: green;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 8rem;
`
const Impact = Styled.div`
  display: block;
  flex-basis: 25.390625%;
  background: 0 0;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: bold;
  margin-bottom: 3.2rem;
  font-size: 1.2rem;
  letter-spacing: -.16px;
  line-height: 2rem;
  margin-top: .8rem;
  
`
const HeadParagraph = Styled.div`
  font-size: 2rem;
  line-height: 4rem;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: bold;
`

function Header() {
  return <HeaderInfo>
    <Impact>Impact</Impact>
    <HeadParagraph>Everything we make has an impact on the planet.</HeadParagraph>
  </HeaderInfo>
}

export default Header;