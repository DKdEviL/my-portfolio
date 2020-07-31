import React from 'react';
import links from '../../assets/strings';
import Quote from './quote/quote'
import './aboutMeComponent.css';

function aboutMe() {
    return (
        <div id="container">
            <img className="img" src={links.imageUrl.myImage}></img>
            <div className="about me">
                <h1>Hi! I'm Deepak.</h1>
                <p>
                    I am a 2020 B.Tech Computer Science Graduate from <a href={links.urls.uniLink} target="_blank">DCRUST</a>.
                </p>
                <p>
                    I spent my time learning new things, coding at <a href={links.urls.hckrUrl} target="_blank">Hackerearth</a>.
                </p>
                <p> 
                    The following line describes me best:
                </p>
                <Quote />
            </div>
            
        </div>
    )
}

export default aboutMe;