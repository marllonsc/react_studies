import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndfooter/Navbar';
import { ExplorerTopBooks } from './layouts/HomePage/ExplorerTopBooks';
import { Carousel } from './layouts/HomePage/Carousel';
import { Heros } from './layouts/HomePage/Heros';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <ExplorerTopBooks></ExplorerTopBooks>
      <Carousel></Carousel>
      <Heros></Heros>
    </div>
  );
}

export default App;
