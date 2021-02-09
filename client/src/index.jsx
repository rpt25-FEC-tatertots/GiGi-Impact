import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.jsx';
import Styled from 'styled-components';
import Navbar from './components/navbar.jsx';
import axios from 'axios';

const Wrapper = Styled.div`
  background-color: #fff;
  position: relative;
  padding-bottom: 5px;
  overflow: auto;
`

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      locations: [],
      materials: []
    }
    this.getProductById();
  }
  
  getProductById() {
    let id = window.location.pathname;
    Promise.all([
      axios.get(`/locations${id}`),
      axios.get(`/materials${id}`)
    ])
      .then(responses => {
        let locations = responses[0].data;
        let materials = responses[1].data;
        this.setState({
          locations: locations,
          materials: materials
        })
      })
      .catch(error => console.log('error in index.js for Promise all', error))
  }

  componentDidMount() {
    this.getProductById();
  }

  render() {
    const { locations, materials } = this.state
    return (
      <Wrapper>
        <Header></Header>
        <Navbar locations={ locations } materials={ materials }></Navbar>
      </Wrapper>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('sourcing'));