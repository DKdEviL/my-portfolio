import React , {Component} from 'react';
import './certificates.css';
import Card from '../../card/card';
import Modal from '../../modal/modal';
import links from '../../../assets/strings';

class certificates extends Component{
    constructor(props){
        super(props);
        this.state = {
            modalTrigger: false
        }
    }


    modalToggle = (e) => {
        e.preventDefault();
        this.setState({modalTrigger: true});
    }
    modalHandler = (e) => {
        e.preventDefault();
        this.setState({
            modalTrigger: !this.state.modalTrigger
        })
    }
    render() {
        return (
            <Card imageUrl={links.imageUrl.icons.certificate} headingText="Certificates/Verified Skills">
                <div className="card-item-container">
                        <a className="hacker-certificate" href={links.certificateUrl.reactBasic} target="_blank">
                            <img src={links.imageUrl.icons.certificates}/>
                            <h4 className="certi-name">React (Basic)</h4>
                        </a>
                        <a className="hacker-certificate" href={links.certificateUrl.problemSolvingBasic} target="_blank">
                            <img src={links.imageUrl.icons.certificates} />
                            <h4 className="certi-name">Problem Solving (Basic)</h4>
                        </a>
                        <a  onClick={this.modalToggle} className="hacker-certificate" target="_blank">
                            <img src={links.imageUrl.icons.certificates} />
                            <h4 className="certi-name">Android (HPE)</h4>
                        </a>
                        <a className="hacker-certificate" href={links.certificateUrl.udacity} target="_blank">
                            <img src={links.imageUrl.icons.certificates} />
                            <h4 className="certi-name">Web (Udacity)</h4>
                        </a>
                        <a className="hacker-certificate" href={links.certificateUrl.java} target="_blank">
                            <img src={links.imageUrl.icons.certificates} />
                            <h4 className="certi-name">Java (Coding Ninja)</h4>
                        </a>
                        <a className="hacker-certificate" href={links.certificateUrl.dataProcessing} target="_blank">
                            <img src={links.imageUrl.icons.certificates} />
                            <h4 className="certi-name">Data Processing Specialist</h4>
                        </a>
                        <a className="hacker-certificate" href={links.certificateUrl.htmlCSS} target="_blank">
                            <img src={links.imageUrl.icons.certificates} />
                            <h4 className="certi-name">HTML & CSS</h4>
                        </a>
                        <a className="hacker-certificate isDisabled">
                            <img src={links.imageUrl.icons.certificates} />
                            <h4 className="certi-name">More Will Come Soon...</h4>
                        </a>
                    </div>
                <Modal show={this.state.modalTrigger} modalClosed={this.modalHandler}>
                    <div style={{color:'black', margin: "20px"}}>
                        Please Copy the Certificate No.: 
                        <div style={{margin: "20px"}}>
                            <strong style={{fontWeight: "bold"}}>HPE/CoC/ET/1808-03745</strong>
                        </div>
                    </div>
                </Modal>
            </Card>
        )
    }
}

export default certificates;