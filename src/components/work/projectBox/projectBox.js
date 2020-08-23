import React from 'react';
import './projectBox.css';

function ProjectBox(props) {
    return (
        <div className="main-box">
            <div className="box-container">
                <img className="project-image" src={props.name.image} />
                <div className="details-container">
                    <h2>{props.name.name}</h2>
                    <section>
                        {props.name.description}
                    </section>
                    <button className="project-button -blue" onClick={() => alert("Clicked")}>
                        Learning Outcomes
                    </button>
                    
                </div>
            </div>
            
        </div>
    )
}

export default ProjectBox;