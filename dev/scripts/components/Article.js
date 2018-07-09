import React from 'react';

const Article = (props) => {
    return (
        <article className="article">
            <a href={`/articles/${props.id}`} className="article__link">
            <div className="article__thumbnail">
                <img className="article__thumbnail__img" src={props.article.imgLink} alt={props.article.headline} />
            </div>
            <div className="article__main">
                <h2 className="article__title">
                    {props.article.headline}
              </h2>
                <h3 className="article__subtitle">
                    {props.article.subhead}
              </h3>
                <p className="article__text">
                    {props.article.text}
              </p>
                <p className="article__date">
                    <span className="article__date__icon">
                        <span className="article__date__icon">
                            <i className="material-icons">event</i>
                        </span>
                    </span>
                    <span className="article__date__text">
                        {props.article.date}
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