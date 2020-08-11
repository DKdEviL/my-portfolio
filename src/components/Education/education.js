import React, {Component} from 'react';
import './education.css';
import Certificates from './certificates/certificates';
import Universities from './universities/universities';

class education extends Component {
    render() {
        return (
            <div className="edu">
                <div>
                    <p>Latest Education is Under Development...👨‍💻👨‍💻👨‍💻</p>
                </div>
                <Universities />
                <Certificates />
                
            </div>
        )
    }
}

export default education;