import React from 'react';
import ReactDOM from 'react-dom';
import Materials from './components/materials.jsx';
import Locations from './components/locations.jsx';
import Header from './components/header.jsx';

class App extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <div>
        <Header></Header>
        <Materials />
        <Locations />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('sourcing'));