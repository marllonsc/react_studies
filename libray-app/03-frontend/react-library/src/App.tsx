import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndfooter/Navbar';
import { Footer } from './layouts/NavbarAndfooter/Footer';
import { HomePage } from './layouts/HomePage/HomePage';

export const  App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HomePage></HomePage>
      <Footer></Footer>
    </div>
  );
}


