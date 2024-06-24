import React from 'react';
import Navbar from './components/Navbar';
import './App.css'; 
import MainPageComponent from './components/MainPageComponent';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainPageComponent />
      {/* Other components go here */}
    </div>
  );
}

export default App;

