import React from 'react';

const Article = (props) => {
    return (
        <article className="article">
            <a href="http://google.com" className="article__link">
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
            </a>
        </article>

    )
}

export default Article;