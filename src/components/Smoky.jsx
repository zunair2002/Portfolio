// src/App.js

import React from 'react';
import SmokyHoverBox from './components/SmokyHoverBox';
import './App.css'; // Make sure you have some basic styles

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Smoky Hover Effect</h1>
        <p>This is an example of adding a colorful smoke effect on hover.</p>
        
        {/* Here is your new component! */}
        <SmokyHoverBox />
        
      </header>
    </div>
  );
}

export default App;