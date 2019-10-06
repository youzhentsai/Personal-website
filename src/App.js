import React from 'react';
// import logo from './logo.svg';
import './Home.css';
import './About.css';
import './Work.css';
import './App.css'
import selfpic from './IMG_6234.JPG';
import About from './About.js'
import Home from './Home.js'
import Work from './Work.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        < Home />
        <img src={selfpic} className="App-image" alt="image"/>
        < About />
        < Work />
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
