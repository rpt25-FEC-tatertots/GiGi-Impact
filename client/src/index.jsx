import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.jsx';
import Styled from 'styled-components';
import Navbar from './components/navbar.jsx';
import axios from 'axios';
import ReviewsComponent from './components/reviewsComponent.jsx';
import Footprint from './components/footprint.jsx';

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
      materials: [],
      windowSize: window.innerWidth
    }
    this.getProductById();
    this.handleResize = this.handleResize.bind(this);
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
  handleResize() {
    this.setState({ windowSize: window.innerWidth });
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.addEventListener('resize', null);
  }

  render() {
    const { locations, materials, windowSize } = this.state;
    return (
      <>
        <ReviewsComponent />
        <Wrapper>
          <Header windowSize={windowSize}></Header>
          <Navbar locations={locations} materials={materials}></Navbar>
        </Wrapper>
        <Footprint windowSize={windowSize}/>
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('sourcing'));