import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndfooter/Navbar';
import { Footer } from './layouts/NavbarAndfooter/Footer';
import { HomePage } from './layouts/HomePage/HomePage';
import { SearchBook } from './layouts/SearchBooksPage/components/SeachBook';
import { SearchBooksPages } from './layouts/SearchBooksPage/SearchBooksPages';

export const  App = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* <HomePage></HomePage> */}
      <SearchBooksPages></SearchBooksPages>
      <Footer></Footer>
    </div>
  );
}


