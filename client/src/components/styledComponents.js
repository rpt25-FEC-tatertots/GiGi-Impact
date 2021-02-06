import Styled from 'styled-components';

const SliderContainer = Styled.div`
  display: block;
  position: relative;
  overflow-x: hidden;
  overflow: visible;
  margin-top: 10px;
  padding: 0;
`
const SliderCardContainer = Styled.div`
  display: block;
  margin: 0;
  position: relative;
  padding-left: 8rem;
  padding-right: 8rem;
  overflow: visible;
`
const Carousel = Styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  /* overflow: visible; */
  height: 500px;
`
const SliderButton = Styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  background-color: #e3ebe8;
  height: 4rem;
  width: 4rem;
  /* box-shadow: 0 6px 8px 0 rgba(0,0,0,.2); */
  &:hover{
    box-shadow: 0 6px 8px 0 rgba(0,0,0,.2);
  };
`

const SmallLeft = Styled.button`
  transition: 0.3s;
  border-radius: 20px;
  border: none;
  background-color: #f0f4f5;
  font-family: 'Nunito Sans', sans-serif;
  margin: 15px;
  padding: 5px 20px;
`
const SmallRight = Styled(SmallLeft)`
  background-color: #fff;
  font-family: 'Nunito Sans', sans-serif;
`

export {
  Carousel,
  SliderContainer,
  SliderCardContainer,
  SliderButton,
  SmallLeft,
  SmallRight
}