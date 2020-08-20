import React from 'react';
import './headerCanvas.css';
import {Switch, Route, Link} from 'react-router-dom';

function headerCanvas() {
    return (
        <div id="canvas">
          <header id="header">
            <div id="logo" className="site-title">
              <h1 className="logo">
                <Link className="anchor" to="/">Deepak Kumar</Link>
              </h1>
            </div>
          </header>
          <div class="menuNav">
            <nav>
              <ul class="mainNav">
                <li><Link className="anchor" to="/">About</Link></li>
                <li><Link className="anchor" to="/education">Education</Link></li>
                <li><Link className="anchor" to="/work">Work</Link></li>
              </ul>
            </nav>
            
          </div>
        </div>
    )
}

export default headerCanvas;