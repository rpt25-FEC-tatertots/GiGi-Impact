import React from 'react';
import Styled from 'styled-components';

const NavDiv = Styled.div`
  position: relative;
  background: transparent;
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
  }
`

class Navbar extends React.Component {
  constructor() {
    super()

    this.state = {
      currentTab: 'materials'
    }

    this.handlePick = this.handlePick.bind(this);
  }

  handlePick(event) {
    event.preventDefault();
    this.setState({ currentTab: event.target.id })
  }

  render() {
    return <NavDiv>
      <NavItems>
        <Nav onClick={this.handlePick} id='materials'>
          How it's made
        </Nav>
        <Nav onClick={this.handlePick} id='locations'>
          Where it's made
        </Nav>
      </NavItems>
    </NavDiv>
  }
}

export default Navbar;