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
    this.addItem = this.addItem.bind(this);
    this.loadMore = this.loadMore.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }
  addItem() {
    /* NOTE: since requirements don't specify behaviour of 'add', I've mocked up this demo to illustrate that the add button works, and to illustrate how the new items counter could work */

    // get set of articles currently stored in state
    const currentArticles = this.state.articles;
    // create new articles and add to the set of articles retrieved from state
    const newArticle = this.createNewArticle(true);
    currentArticles.push(newArticle);
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

  createNewArticle(newTrue) {
    const imgLink = randomImg();
    const date = today();
    const newArticle = {};
    newArticle.date = date;
    newArticle.headline = generateLipsum(3);
    newArticle.imgLink = imgLink;
    newArticle.new = newTrue;
    newArticle.subhead = generateLipsum(5);
    newArticle.text = generateLipsum(10);
    return newArticle;
  }

  loadMore() {
    /* NOTE: I wanted to try adding functionality to the "load more" button; without being certain what the intended functionality is for this component, I am assuming it would load older items. */
    
    // get set of articles currently stored in state
    const currentArticles = this.state.articles;
    // create three new articles and add them to the set of articles retrieved from state
    for (let i = 1; i <= 3; i++) {
      const newArticle = this.createNewArticle(false);
      currentArticles.unshift(newArticle);
    }
    // find number of items stored in currentArticles, then set state with modified array and total
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
              addItem={this.addItem}
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
