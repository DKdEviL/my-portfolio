import React,{Component} from 'react';
import './card.css';


class Card extends Component {
    
    render() {
        return (
            <section className="section-card">
                <header className="section-card-header">
                    <img src={this.props.imageUrl}  viewBox="0 0 24 24" width="24px" height="24px" className="section-card-icon ui-svg-icon" fill="currentColor" />
                    <h2 className="section-card-heading">{this.props.headingText}</h2> 
                </header>
                {this.props.children}                    
            </section>
        )
    }
};

export default Card;