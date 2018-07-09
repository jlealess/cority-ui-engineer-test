import React from 'react';
import Article from './Article';

class Accordion extends React.Component {
    constructor() {
        super();

        this.state = {
            accordionOpen: true
        }

        this.collapseAccordion = this.collapseAccordion.bind(this);
    }

    collapseAccordion() {
        console.log('collapsing');
        const accordionOpen = !this.state.accordionOpen;
        this.setState({
            accordionOpen
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
                    {this.props.newItems}
                    </p>
                </div>
                <div className="accordion__header__controls">
                    <button className="btn btn--add-item">
                        <i className="material-icons">add</i>
                    </button>
                    <button className="btn btn--show-hide" onClick={this.collapseAccordion}>
                            {this.state.accordionOpen ? <i className="material-icons">arrow_drop_down</i> : 
                                <i className="material-icons">arrow_right</i>}
                        
                    </button>
                </div>
            </header>
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