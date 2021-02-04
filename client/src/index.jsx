import React from 'react';
import ReactDOM from 'react-dom';
import Materials from './components/materials.jsx';
import Locations from './components/locations.jsx';
import Header from './components/header.jsx';
import Styled from 'styled-components';
import Navbar from './components/navbar.jsx';

const Wrapper = Styled.div`
  background-color: olive;
  position: relative;
  padding-bottom: 5px;
  overflow: auto;
`

class App extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <Wrapper>
        <Header></Header>
        <Navbar></Navbar>
        <Materials />
        <Locations />
      </Wrapper>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('sourcing'));