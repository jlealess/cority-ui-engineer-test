import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './components/Accordion';

class App extends React.Component {
  render() {
    return <Accordion />
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
