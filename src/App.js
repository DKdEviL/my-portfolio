import React from 'react';
import './App.css';
import HeaderCanvas from './components/headerCanvas';
import AboutMe from './components/aboutMe/aboutMeComponent'


function App() {
  return (
    <div className="App">
      <div>
        <p>Development is in Progress..</p>
      </div>
      <div className="mainBody">
        <HeaderCanvas />
        <AboutMe />
      </div>
      
      
    </div>
  );
}

export default App;
