import React from 'react';
import Card from '../card/card';
import links from '../../assets/strings'

function Work() {
    return (
        <div>
            <p>In Development...👨‍💻👨‍💻👨‍💻</p>
            
            <Card imageUrl={links.imageUrl.icons.projects} headingText="Learning Projects"/>
            <Card imageUrl={links.imageUrl.icons.work} headingText="Work Experience">
                <div className="demo-card-content">
                    <p>Open to face your challenge for opportunity.</p>
                    <p>If you have a challenge for me. Please <a href="#">click here</a></p>
                </div>
                
            </Card>
            
        </div>
    )
}

export default Work;