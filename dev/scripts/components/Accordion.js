import React from 'react';
import Article from './Article';
import { compareNumbers } from '../helpers';

class Accordion extends React.Component {
    constructor() {
        super();

        this.state = {
            accordionOpen: true,
            addContentOpen: false
        }

        this.addItem = this.addItem.bind(this);
        this.collapseAccordion = this.collapseAccordion.bind(this);
    }

    addItem() {
        const addContentOpen = !this.state.addContentOpen;
        this.setState({
            addContentOpen
        })
        // additional code would go here that would perform adding functionality; since requirements don't specify behaviour of add, I've mockep up this demo to illustrate that the add button works
    }

    collapseAccordion() {
        const accordionOpen = !this.state.accordionOpen;
        this.setState({
            accordionOpen,
            addContentOpen: false
        })
    }

    render() {
        const statusClass = this.state.accordionOpen ? "open" : "closed";
        const articlesNewestFirst = Array.from(this.props.articles).reverse();

        return (
        <section className={`accordion ${statusClass}`}>
            <header className="accordion__header">
                <div className="accordion__header__text">
                    <h1 className="accordion__header__title">
                        {this.props.listName}
                    </h1>
                    <p className="accordion__header__total">
                        Total <span className="accordion__header__total__items">
                            {this.props.totalItems}
                        </span>
                    </p>
                    <p className="accordion__header__new-items">
                        <span className="visually-hidden">New items</span>
                        {this.props.newItems}
                    </p>
                </div>
                <div className="accordion__header__controls">
                    <button className="btn btn--add-item" onClick={this.addItem}>
                            {!this.state.addContentOpen ? <i className="material-icons">add</i> : <i className="material-icons">remove</i>}
                        
                    </button>
                    <button className="btn btn--show-hide" onClick={this.collapseAccordion}>
                        {this.state.accordionOpen ? <i className="material-icons">arrow_drop_down</i> : 
                            <i className="material-icons">arrow_right</i>}                        
                    </button>
                </div>
            </header>
            {this.state.addContentOpen && <div className="add-content"><p className="add-content__text">Adding content</p></div>}
            <ul className="accordion__items">
                    {(this.state.accordionOpen === true && this.props.articles.length === 0) && <p className="accordion__items__empty-message">No items to display right now</p> }
                    {this.state.accordionOpen === true && articlesNewestFirst.map((article, i) => {
                    return (
                        <li className="accordion__item" key={i} id={i}>
                            <Article article={article} id={i} removeItem={this.props.removeItem} />
                        </li>
                    )
                })}
            </ul>
            <footer className="accordion__footer">
                <button className="btn btn--link" onClick={this.props.loadMore}>Load more</button>
            </footer>
        </section>
        )
    }
}

export default Accordion;