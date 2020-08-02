import React from 'react';
import './card.css';
import links from '../../../assets/strings';


function Card() {
    return (
        <section className="section-card">
            <header className="section-card-header">
                <img src={links.imageUrl.icons.certificate}  viewBox="0 0 24 24" width="24px" height="24px" className="section-card-icon ui-svg-icon" fill="currentColor" />
                <h2 className="section-card-heading">Certificates/Verified Skills</h2> 
            </header>
            <div className="section-card-content">
                <div className="hacker-certificates">
                    <a className="hacker-certificate" href={links.certificateUrl.reactBasic} target="_blank">
                        <img src={links.imageUrl.icons.certificates}/>
                        <h4 className="certi-name">React (Basic)</h4>
                    </a>
                    <a className="hacker-certificate" href={links.certificateUrl.problemSolvingBasic} target="_blank">
                        <img src={links.imageUrl.icons.certificates} />
                        <h4 className="certi-name">Problem Solving (Basic)</h4>
                    </a>
                    <a className="hacker-certificate" href="https://www.hpepro.com/everify/?certificate_number=HPE/CoC/ET/1808-03745" target="_blank">
                        <img src={links.imageUrl.icons.certificates} />
                        <h4 className="certi-name">Android Development(HPE)</h4>
                    </a>
                    <a className="hacker-certificate" href={links.certificateUrl.udacity} target="_blank">
                        <img src={links.imageUrl.icons.certificates} />
                        <h4 className="certi-name">Front-End Nanodegree (Udacity)</h4>
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
            </div>
        </section>
    )
};

export default Card;