import React, {Component} from 'react';
import './universities.css';
import Card from '../../card/card';
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
                    <Header course={"Bachelor's"} clicked={this.clickHandler} show={this.state.show}>
                    <div className="degree">
                    <div>
                        <img style={{padding: 0, width: "100%", height: "100%"}} src={links.imageUrl.icons.student}/>
                    </div>
                    <div>
                        <strong>
                            <a href={links.urls.dcrust} className="big-screen clg">Deenbandhu Chhotu Ram University of Science and Technology</a>
                            <a href={links.urls.dcrust} className="small-screen clg">DCRUST</a>
                            <p style={{margin: 0}}>(2016 - 2020)</p>
                        </strong>
                        <div class="pointer">
                            <h5>CGPA:</h5>
                            <h5>6.85</h5>
                        </div>
                        <div class="pointer">
                            <h5>Course:</h5>
                            <h5 className="big-screen">Bachelor of Technology</h5>
                            <h5 className="small-screen">B.Tech</h5>
                        </div>
                        <div class="pointer">
                            <h5>Major:</h5>
                            <h5 className="big-screen">Computer Science and Engineering</h5>
                            <h5 className="small-screen">CSE</h5>
                        </div>
                    </div>
                </div>
                    </Header>
                </div>
            </Card>
        )
    }
}

export default Universities;