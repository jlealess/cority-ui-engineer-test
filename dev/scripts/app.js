import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './components/Accordion';
import articles from './articles';
import { generateLipsum, today, randomImg } from "./helpers";

class App extends React.Component {
  constructor() {
    super();

    const newItems = this.calculateNewItems();
    const totalItems = Object.keys(articles).length;

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
    const newArticles = Object.keys(articles).forEach(key => {
      if (articles[key].new === true) {
        newItems++;
      }
    });
    return newItems;
  }

  loadMore() {
    // get set of articles currently stored in state
    const currentArticles = this.state.articles;
    // find current key with highest number
    const currentArticlesKeys = Object.keys(currentArticles).map((key) => key.substring(7,));
    let max = Math.max(...currentArticlesKeys);
    // create three new articles and add them to the set of articles retrieved from state
    for (let i = 1; i <= 3; i++) {
      const imgLink = randomImg();
      const index = max + i;
      const date = today();
      const newArticle = {};
      newArticle.date = date;
      newArticle.headline = generateLipsum(3);
      newArticle.imgLink = imgLink;
      newArticle.new = true;
      newArticle.subhead = generateLipsum(5);
      newArticle.text = generateLipsum(10);
      currentArticles[`article${index}`] = newArticle;
    }
    // find number of items stored in currentArticles, then set state with modified object and total
    const totalItems = Object.keys(currentArticles).length;
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
    delete currentArticles[id];
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
