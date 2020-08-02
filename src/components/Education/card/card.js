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
                    <a className="hacker-certificate" href="www.google.com">
                        <img src={links.imageUrl.icons.certificates}/>
                        <h4 className="certi-name">React (Basic)</h4>
                    </a>
                    <a className="hacker-certificate" href="www.google.com">
                        <img src={links.imageUrl.icons.certificates} />
                    </a>
                    <a className="hacker-certificate" href="www.google.com">
                        <img src={links.imageUrl.icons.certificates} />
                    </a>
                    <a className="hacker-certificate" href="www.google.com">
                        <img src={links.imageUrl.icons.certificates} />
                    </a>
                    <a className="hacker-certificate" href="www.google.com">
                        <img src={links.imageUrl.icons.certificates} />
                    </a>
                    <a className="hacker-certificate" href="www.google.com">
                        <img src={links.imageUrl.icons.certificates} />
                    </a>
                    <a className="hacker-certificate" href="www.google.com">
                        <img src={links.imageUrl.icons.certificates} />
                    </a>
                </div>
            </div>
        </section>
    )
};

export default Card;