import React from 'react';
import Styled from 'styled-components';

const NavDiv = Styled.div`
  position: relative;
  background: olive;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 700;
`
const NavItems = Styled.ul`
  display: flex;
  position: relative;
  width: 100%;
  height: inherit;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
`
const Marker = Styled.div`
  position: absolute;
  height: 0px;
  width: 100%;
  background: #000;
  bottom: -8px;
  transition: 0.5s;
  border-radius: 4px;
  left: 0;
`
const Nav = Styled.div`
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
  margin: 5px 20px;
  transition: transform 0.5s; 
  &:hover {
    transform: scale(1.03);
  };
`
const Box = Styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`

class Navbar extends React.Component {
  constructor() {
    super()

    this.state = {
      currentTab: '',
      left: 0,
      width: 0,
    }
    this.myRef = React.createRef();
    this.handlePick = this.handlePick.bind(this);
    this.getOffset = this.getOffset.bind(this)
  }

  
  handlePick(event) {
    event.preventDefault();
    this.setState({ currentTab: event.target.id })
  }

  getOffset(event) {
    // this.setState({ 
    //   left: this.myRef.current.offsetLeft,
    //   width: this.myRef.current.offsetWidth
    // }) 
    console.log(this.myRef.current.offsetLeft + 'px');
    console.log(this.myRef.current.offsetWidth + 'px');
  }

  

  render() {
    return <NavDiv>
      <Box>
        <NavItems >
          <Nav onClick={this.handlePick} onClick={this.getOffset} ref={this.myRef} id='materials' >
            How it's made
          </Nav>
          <Nav onClick={this.handlePick} onClick={this.getOffset} ref={this.myRef} id='locations' >
            Where it's made
          </Nav>
        <Marker></Marker>
        </NavItems>
      </Box>
    </NavDiv>
  }
}

export default Navbar;