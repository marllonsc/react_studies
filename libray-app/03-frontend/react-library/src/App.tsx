import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndfooter/Navbar';
import { Footer } from './layouts/NavbarAndfooter/Footer';
import { HomePage } from './layouts/HomePage/HomePage';
import { SearchBook } from './layouts/SearchBooksPage/components/SeachBook';
import { SearchBooksPages } from './layouts/SearchBooksPage/SearchBooksPages';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import ReactSwitch from 'react-switch';

export const  App = () => {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Navbar></Navbar>
      <div className='flex-grow-1'>
        <Routes> 
          
          <Route path="/" element={<HomePage />} />

          <Route path="/home" element={<HomePage />} />

          <Route  path="/search" element={<SearchBooksPages />} />

        </Routes> 

      </div>
      <Footer></Footer>
    </div>
  );
}


