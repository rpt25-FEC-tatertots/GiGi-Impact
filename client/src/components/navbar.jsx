import React from 'react';
import Styled from 'styled-components';

const NavDiv = Styled.div`
  position: relative;
  background: #fff;
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
  position: relative;
  height: 4px;
  width: 100%;
  background: #000;
  /* bottom: 2px; */
  transition: 0.5s;
  border-radius: 4px;
  opacity: 0.2;
  /* left: 4px; */
`
const MarkerSelected = Styled(Marker)`
  opacity: 1;
`
const Nav = Styled.li`
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
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  background-color: transparent;
`

class Navbar extends React.Component {
  constructor() {
    super()

    this.state = {
      currentTab: 'materials',
      isSelected: true
    }

    this.myRef = React.createRef();
    this.handlePick = this.handlePick.bind(this);
  }


  handlePick(event) {
    event.preventDefault();
    console.log(event.target.id)
    this.setState(
      { currentTab: event.target.id,
        isSelected: true
      }
    )
  }

  render() {
    const {currentTab, isSelected} = this.state
    return <NavDiv>
        <NavItems >
          <Box>
            <Nav onClick={this.handlePick} ref={this.myRef} id='materials' >
              How it's made
            </Nav>
            {currentTab === 'materials' && isSelected ? <MarkerSelected></MarkerSelected> : <Marker></Marker>}
          </Box>
          <Box>
            <Nav onClick={this.handlePick} ref={this.myRef} id='locations' >
              Where it's made
            </Nav>
            {currentTab === 'locations' && isSelected ? <MarkerSelected></MarkerSelected> : <Marker></Marker>}
          </Box>
        </NavItems>
    </NavDiv>
  }
}

export default Navbar;