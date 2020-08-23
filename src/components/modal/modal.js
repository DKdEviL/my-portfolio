import React, {Component} from 'react';
import './modal.css';
import Backdrop from './backdrop';
import links from '../../assets/strings'

const Modal = props => {
    return (
        <div>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
            <div 
                className="Modal"
                style={{
                transform:props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity : props.show ? 1 : 0
            }}>
                <header className="modal-Header">
                    <div className="close">
                        <img src={links.imageUrl.icons.close} alt="Close Button" onClick={props.modalClosed}/>
                    </div>
                </header>
                <div>
                    {props.children}
                </div>
                <footer className="modal-Footer" style={{display: props.footerStyle}}>
                    <div className="okay">
                        <a href={props.navigation} target="_blank">
                            <img src={links.imageUrl.icons.okay} alt="Okay Button" />
                        </a>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Modal;