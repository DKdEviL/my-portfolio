import React from 'react';
import './headerComponent.css';
import links from '../../../../assets/strings'
function Header(props) {
    return (
        <div className="degree-header" >
            <h4 onClick={props.clicked}><span>{props.course}</span></h4>
            <div className="image-button-container" onClick={props.clicked}>
                {
                    props.show ?
                        <img className="section-card-icon ui-svg-icon" viewBox="0 0 24 24" width="24px" height="24px" src="https://image.flaticon.com/icons/svg/659/659892.svg" /> :
                    
                        <img className="section-card-icon ui-svg-icon" viewBox="0 0 24 24" width="24px" height="24px" src="https://image.flaticon.com/icons/svg/709/709484.svg" />
                }
            </div>
            {
                props.show ?
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
                </div> :
                <div style={{display: "none"}}></div>
            }
            
        </div>
    )
}

export default Header;