import React, {Component} from 'react';
import Modal from '../../modal/modal';
import './projectBox.css';

class ProjectBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            show: false
        }
    }
    render(){
    return (
        <div className="main-box">
            <div className="box-container">
                <img className="project-image" src={this.props.name.image} />
                <div className="details-container">
                    <h2>{this.props.name.name}</h2>
                    <section>
                        {this.props.name.description}
                    </section>
                    <button className="project-button -blue" onClick={() => this.setState({show: !this.state.show})}>
                        Learning Outcomes
                    </button>
                </div>
            </div>
            {
                this.state.show ? 
                <Modal show={this.state.show} modalClosed={() => this.setState({show: !this.state.show})} footerStyle="none">
                    <div style={{color:'black', margin: "20px"}}>
                        <div style={{margin: "20px"}}>
                            {this.props.name.outcomes.map( (outcome) => (
                                <h4>{outcome}</h4>
                            ))}
                        </div>
                    </div>
                </Modal>
                : <div></div>
            }
            
        </div>
    )
    }
}

export default ProjectBox;