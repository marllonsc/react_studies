import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndfooter/Navbar';
import { ExplorerTopBooks } from './layouts/HomePage/ExplorerTopBooks';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <ExplorerTopBooks></ExplorerTopBooks>
    </div>
  );
}

export default App;
