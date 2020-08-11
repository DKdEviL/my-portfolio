import React, {Component} from 'react';
import './universities.css';
import Card from '../card/card';
import links from '../../../assets/strings';
import Header from './headerComponent/headerComponent';




class Universities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show : false,
            
        }
    }
    clickHandler = () => {
        this.setState({show: !this.state.show})
    }

    render() {
        return (
            <Card imageUrl={links.imageUrl.icons.university} headingText="Education">
                <div className="card-item-container">
                    <Header course={"Bachelor's"} clicked={this.clickHandler} show={this.state.show}/>
                </div>
            </Card>
        )
    }
}

export default Universities;