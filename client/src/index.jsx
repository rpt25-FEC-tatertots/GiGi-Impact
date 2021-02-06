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
    this.getProductById = this.getProductById.bind(this);
  }
  
  getProductById() {
    let id = window.location.pathname;
    axios.get(`/locations${id}`)
      .then(response => this.setState({ locations: response.data }))
      .catch(error => console.log(error))
    axios.get(`/materials${id}`)
      .then(response => this.setState({ locations: response.data }))
      .catch(error => console.log(error))
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