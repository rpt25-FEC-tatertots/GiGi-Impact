import Styled from 'styled-components';

const SliderContainer = Styled.div`
  display: flex;
  position: relative;
  overflow: visible;
  padding: 0;
  justify-content: center;
`
const SliderCardContainer = Styled.div`
  display: flex;
  margin: 0;
  position: relative;
  overflow-x: hidden;
  max-height: 400px;
  align-items: center;
  margin-top: 5px;
`
const Carousel = Styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  overflow: visible;
  height: 380px;
  overflow-x: hidden;
  /* box-sizing: content-box; */
  margin-left: 18px;
  margin-right: 18px;
  flex-shrink: 0;
`
const SliderButton = Styled.button`
  position: absolute;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  height: 2.5rem;
  width: 2.5rem;
  font-size: 200;
  background-color: #fff;
  box-shadow: 0 6px 8px 0 rgba(0,0,0,.2);
  :hover{
    box-shadow: 0 6px 8px 0 rgba(0,0,0,.2);
    transform: scale(1.02);
  };
  z-index: 100;
`

const SmallLeft = Styled.button`
  transition: 0.3s;
  border-radius: 20px;
  border: none;
  background-color: #f0f4f5;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 0.5rem;
  margin: 10%;
  padding: 5px 15px;
`
const SmallRight = Styled(SmallLeft)`
  background-color: #fff;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 0.5rem;
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

export {
  Carousel,
  SliderContainer,
  SliderCardContainer,
  SliderButton,
  SmallLeft,
  SmallRight,
  CardInfo
}