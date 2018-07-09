import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './components/Accordion';
import articles from './articles';

class App extends React.Component {
  constructor() {
    super();

    let newItems = 0;
    const newArticles = Object.keys(articles).forEach((key) => {
      if (articles[key].new === true) {
        newItems++;
      }
    });
    const totalItems = Object.keys(articles).length;

    this.state = {
      articles,
      newItems,
      totalItems
    }
  }
  
  render() {
    return <Accordion articles={this.state.articles} listName='List Name' newItems={this.state.newItems} totalItems={this.state.totalItems} />
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
