import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './components/Accordion';
import articles from './articles';
import { generateLipsum, today } from "./helpers";

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

  collapseAccordion() {
    console.log('collapsing');
  }

  calculateNewItems() {
    let newItems = 0;
    const newArticles = Object.keys(articles).forEach(key => {
      if (articles[key].new === true) {
        newItems++;
      }
    });
    return newItems;
  }

  loadMore() {
    const currentArticles = this.state.articles;
    const currentArticlesKeys = Object.keys(currentArticles).map((key) => key.substring(7,));
    let max = Math.max(...currentArticlesKeys);
    for (let i = 1; i <= 3; i++) {
      const index = max + i;
      const date = today();
      const newArticle = {};
      newArticle.date = date;
      newArticle.headline = generateLipsum(3);
      newArticle.imgLink = "https://picsum.photos/150/150/?random";
      newArticle.new = true;
      newArticle.subhead = generateLipsum(5);
      newArticle.text = generateLipsum(10);
      currentArticles[`article${index}`] = newArticle;
    }
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
    const currentArticles = this.state.articles;
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
