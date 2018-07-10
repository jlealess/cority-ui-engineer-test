import React from 'react';
import { truncate } from '../helpers';


const Article = (props) => {
    const text = truncate(props.article.text);
    const pathToDefaultImg = '/public/assets/thumbnail-placeholder.jpg';

    return (
        <article className={props.article.new ? "article article--new" : "article"}>
            <a href={`/articles/article-${props.id}`} className="article__link">
            <div className="article__thumbnail">
                    <img className="article__thumbnail__img" src={props.article.imgLink.length > 0 ? props.article.imgLink : pathToDefaultImg} alt={props.article.headline} onError={(e) => { e.target.src = pathToDefaultImg; }}/>
            </div>
            <div className="article__main">
                <h2 className="article__title">
                    {props.article.headline}
              </h2>
                <h3 className="article__subtitle">
                    {props.article.subhead}
              </h3>
                <p className="article__text">
                    <span className="article__text__content">
                        {text}
                    </span>
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
            </a>
            <button className="btn btn--remove article__btn" onClick={() => {props.removeItem(props.id)}}>
                <i className="material-icons">delete</i>
            </button>
        </article>
    )
}

export default Article;