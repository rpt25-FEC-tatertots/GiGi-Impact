import React from 'react';
import ReactDOM from 'react-dom';
import Materials from './components/Materials.jsx';
import Locations from './components/Locations.jsx';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Materials />
        <Locations />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('sourcing'));