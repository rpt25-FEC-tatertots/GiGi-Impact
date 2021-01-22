import React from 'react';
import ReactDOM from 'react-dom';
import Materials from './components/materials.jsx';
import Locations from './components/locations.jsx';

class App extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <Materials />
        <Locations />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('sourcing'));