import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return <section className="news accordion">
        <header className="accordion__header">
          <div className="accordion__header__text">
            <h1 className="accordion__header__title">List Name</h1>
            <p className="accordion__header__total">
          Total <span className="accordion__header__total__items">
          3
          </span>
          </p>
            <p className="accordion__header__new-items">1</p>
          </div>
          <div className="accordion__header__controls">
          <button className="btn btn--add-item">
            <i className="material-icons">add</i>
          </button>
          <button className="btn btn--show-hide">
            <i className="material-icons">arrow_drop_down</i>
          </button>
          </div>
        </header>
        <ul className="accordion__items">
          <li className="accordion__item">
            <a href="http://google.com" className="article__link">
            <article className="article">
              <div className="article__thumbnail">
              <img className="article__thumbnail__img" src="https://placeimg.com/150/150/nature" alt="Item 1" />
              </div>
              <div className="article__main">
              <h2 className="article__title">
                  Curabitur rutrum ut
              </h2>
              <h3 className="article__subtitle">
                  Vivamus quis enim vitae est
              </h3>
              <p className="article__text">
                Proin maximus magna accumsan nulla lobortis, nec aliquet
                nibh pulvinar...
              </p>
              <p className="article__date">
                <span className="article__date__icon">
                  <span className="article__date__icon">
                    <i className="material-icons">event</i>
                  </span>
                </span>
                <span className="article__date__text">
                  Monday, July 9, 2018
                </span>
              </p>
              </div>
              <button className="btn btn--remove">
                <i className="material-icons">delete</i>
              </button>
            </article>
          </a>
          </li>
        </ul>
        <footer className="accordion__footer">
          <button className="btn btn--link">Load more</button>
        </footer>
      </section>;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
