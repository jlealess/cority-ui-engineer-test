import React from 'react';
import Article from './Article';

const Accordion = (props) => {
    return (
    <section className="news accordion">
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
                <Article />
            </li>
        </ul>
        <footer className="accordion__footer">
            <button className="btn btn--link">Load more</button>
        </footer>
    </section>
    )
}

export default Accordion;