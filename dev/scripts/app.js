import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './components/Accordion';
import articles from './articles';
import { generateLipsum, today, randomImg } from "./helpers";

class App extends React.Component {
  constructor() {
    super();

    const newItems = this.calculateNewItems();
    const totalItems = articles.length;

    this.state = {
      articles,
      newItems,
      totalItems
    }
    this.loadMore = this.loadMore.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  calculateNewItems() {
    // calculate number of articles stored in state that have the property of 'new' set to true
    let newItems = 0;
    const newArticles = articles.forEach(article => {
      if (article['new'] === true) {
        newItems++;
      }
    });
    return newItems;
  }

  loadMore() {
    /* NOTE: I wanted to try adding functionality to the "load more" button; without being certain what the intended functionality is for this component, I wasn't sure if it woud load newer items or older ones. For demo purposes, I have set them all to new in order to keep updating the new items counter. */
    
    // get set of articles currently stored in state
    const currentArticles = this.state.articles;
    // create three new articles and add them to the set of articles retrieved from state
    for (let i = 1; i <= 3; i++) {
      const imgLink = randomImg();
      const date = today();
      const newArticle = {};
      newArticle.date = date;
      newArticle.headline = generateLipsum(3);
      newArticle.imgLink = imgLink;
      newArticle.new = true;
      newArticle.subhead = generateLipsum(5);
      newArticle.text = generateLipsum(10);
      currentArticles.push(newArticle);
    }
    // find number of items stored in currentArticles, then set state with modified object and total
    const totalItems = currentArticles.length;
    this.setState(
      {
        articles: currentArticles,
        totalItems
      },
      () => {
        const newItems = this.calculateNewItems();
        this.setState({
          newItems
        });
      }
    );
  }

  removeItem(id) {
    // take copy of articles currently stored in state
    const currentArticles = this.state.articles;
    // use id of the article whose remove button was clicked to remove that article from articles array, then set state with modified array
    currentArticles.splice(id, 1);
    this.setState({
      articles: currentArticles
    })
  }
  
  render() {
    return <Accordion 
              articles={this.state.articles} 
              collapseAccordion={this.collapseAccordion}
              listName='List Name' 
              loadMore={this.loadMore}
              newItems={this.state.newItems} 
              removeItem={this.removeItem} 
              totalItems={this.state.totalItems} 
            />
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
