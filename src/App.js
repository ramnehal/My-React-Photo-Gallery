import React, { Component } from 'react';
import "./App.css";
import SearchIcon from '@mui/icons-material/Search';
import Navbar from './Components/Navbar';
import Gallery from './Gallery';
import Filter from './Filter';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Filter />
        <Gallery />
    </div>
  );
}

export default App;
