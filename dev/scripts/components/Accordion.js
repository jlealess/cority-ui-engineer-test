import React from 'react';
import Article from './Article';

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
                {this.state.accordionOpen === true && Object.keys(this.props.articles).sort().reverse().map((key) => {
                    return (
                        <li className="accordion__item" key={key} id={key}>
                            <Article article={this.props.articles[key]} id={key} removeItem={this.props.removeItem} />
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