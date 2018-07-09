import React from 'react';
import Article from './Article';

const Accordion = (props) => {
    return (
    <section className="news accordion">
        <header className="accordion__header">
            <div className="accordion__header__text">
                <h1 className="accordion__header__title">
                    {props.listName}
                </h1>
                <p className="accordion__header__total">
                    Total <span className="accordion__header__total__items">
                        {props.totalItems}
                    </span>
                </p>
                <p className="accordion__header__new-items">
                {props.newItems}
                </p>
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
            {Object.keys(props.articles).map((key) => {
                return (
                    <li className="accordion__item" key={key} id={key}>
                        <Article article={props.articles[key]} id={key} />
                    </li>
                )
            })}
        </ul>
        <footer className="accordion__footer">
            <button className="btn btn--link">Load more</button>
        </footer>
    </section>
    )
}

export default Accordion;