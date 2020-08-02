import React from 'react';
import './modal.css';


const Backdrop =(props) => {
    return (
        props.show ? <div className="Backdrop" onClick={props.clicked}></div> : null
    )
}

export default Backdrop;