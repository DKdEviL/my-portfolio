import React from 'react';
import './headerComponent.css';
import links from '../../../../assets/strings'
function Header(props) {
    return (
        <div className="degree-header" >
            <h4 className="card-content-header" onClick={props.clicked}><span>{props.course}</span></h4>
            <div className="image-button-container" onClick={props.clicked}>
                {
                    props.show ?
                        <img className="section-card-icon ui-svg-icon" viewBox="0 0 24 24" width="24px" height="24px" src="https://image.flaticon.com/icons/svg/659/659892.svg" /> :
                    
                        <img className="section-card-icon ui-svg-icon" viewBox="0 0 24 24" width="24px" height="24px" src="https://image.flaticon.com/icons/svg/709/709484.svg" />
                }
            </div>
            {
                props.show ?
                    props.children :
                <div style={{display: "none"}}></div>
            }
            
        </div>
    )
}

export default Header;