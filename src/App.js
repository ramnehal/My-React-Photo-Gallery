import React, { Component } from 'react';
import "./App.css";
import SearchIcon from '@mui/icons-material/Search';
import Navbar from './Components/Navbar';
import Gallery from './Gallery';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Gallery />
    </div>
  );
}

export default App;
