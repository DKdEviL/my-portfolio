import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import HeaderCanvas from './components/headerCanvas';
import AboutMe from './components/aboutMe/aboutMeComponent'
import Education from './components/Education/education';
import Work from './components/work/work';
import Social from './components/social/social';
import Footer from './components/footer/footer';
import MobileHeader from './components/mobileHeader/mobileHeader';


function App() {
  return (
    <div className="App">
      <div>
        <p>Development is in Progress..</p>
      </div>
      <div className="mainBody">
        <MobileHeader />
        <HeaderCanvas />
        <Social />
        <Switch>
          <Route path="/education" component={Education}></Route>
          <Route path="/work" component={Work}></Route>
          <Route path="/" component={AboutMe}></Route>
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
