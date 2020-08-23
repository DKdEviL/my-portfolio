import React, { Component } from 'react';
import Card from '../card/card';
import CardHeader from '../Education/universities/headerComponent/headerComponent'
import links from '../../assets/strings';
import ProjectBox from './projectBox/projectBox'

class Work extends Component {
    constructor(props){
        super(props);
        this.state = {
            show : false,
            showWeb: false
        }
    }
    clickhandlerAndroid = () => {
        this.setState({show: !this.state.show})
    }
    clickhandlerWeb = () => {
        this.setState({showWeb: !this.state.showWeb})
    }
    render(){

    return (
        <div>
            <p>In Development...👨‍💻👨‍💻👨‍💻</p>
            
            <Card imageUrl={links.imageUrl.icons.projects} headingText="Learning Projects">
                <div className="demo-card-content">
                    <CardHeader
                        course="Android Projects"
                        clicked={this.clickhandlerAndroid}
                        show={this.state.show} 
                    >
                        <ProjectBox name={links.textValues.androidProject} /> 
                    </CardHeader>
                    <CardHeader
                        course="Front-end Projects"
                        clicked={this.clickhandlerWeb}
                        show={this.state.showWeb} 
                    >
                        <div>
                            <ProjectBox name={links.textValues.burgerBuilder} />
                            <ProjectBox name={links.textValues.portfolio} />
                        </div>
                    </CardHeader>
                </div>
            </Card>

            <Card imageUrl={links.imageUrl.icons.work} headingText="Work Experience">
                <div className="demo-card-content">
                    <p>Open to face your challenge for opportunity.</p>
                    <p>If you have a challenge for me. Please <a href="#">click here</a></p>
                </div>
                
            </Card>
            
        </div>
    )
    }
}

export default Work;