import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './mobileHeader.css';

class MobileHeader extends Component{
    constructor(props){
        super(props);
        this.state = {
            display: "none",
        }
    }
    onMenuClick =( event) => {
        
        if(this.state.display === "none"){
            this.setState({display: "flex", })
        }else{
            this.setState({display: "none", })
        }
    }
    render () {
        return (
            <div className="mobileHeader">
                <div className={" mobileNav animate"} style={{display: this.state.display}}>
                    <ul className="navList">
                        <li><Link className="mobile_Anchor" to="/">About</Link></li>
                        <li><Link className="mobile_Anchor" to="/education">Education</Link></li>
                        <li><Link className="mobile_Anchor" to="/work">Work</Link></li>
                    </ul>
                </div>
                <p onClick={this.onMenuClick} className="text">Menu</p>
            </div>
        )
    }
    
}
export default MobileHeader;