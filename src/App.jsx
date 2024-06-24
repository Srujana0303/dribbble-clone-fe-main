import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css'; 
import MainPageComponent from './components/MainPageComponent';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="App">
      <Navbar onSearch={setSearchQuery} />
      <MainPageComponent searchQuery={searchQuery} />
      {/* Other components go here */}
    </div>
  );
}

export default App;
