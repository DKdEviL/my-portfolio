import React from 'react';
import './headerCanvas.css';

function headerCanvas() {
    return (
        <div id="canvas">
          <header id="header">
            <div id="logo" className="site-title">
              <h1 className="logo">
                <a href="#">Deepak Kumar</a>
              </h1>
            </div>
          </header>
          <div class="menuNav">
            <nav>
              <ul class="mainNav">
                <li><a href="#">About</a></li>
                <li><a href="#">Work</a></li>
              </ul>
            </nav>
          </div>
        </div>
    )
}

export default headerCanvas;