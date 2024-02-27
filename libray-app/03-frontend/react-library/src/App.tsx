import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndfooter/Navbar';
import { Footer } from './layouts/NavbarAndfooter/Footer';
import { HomePage } from './layouts/HomePage/HomePage';
import { SearchBook } from './layouts/SearchBooksPage/components/SeachBook';
import { SearchBooksPages } from './layouts/SearchBooksPage/SearchBooksPages';
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import ReactSwitch from 'react-switch';
import { BookCheckoutPage } from './layouts/BookkCheckoutPage/BookCheckoutPage';
import { oktaConfig } from './lib/oktaConfig';
import { OktaAuth } from '@okta/okta-auth-js';
import { Security, SecureRoute, LoginCallback, useOktaAuth } from '@okta/okta-react';
import LoginWidget from './Auth/LoginWidget';
import { ReviewListPage } from './layouts/BookkCheckoutPage/ReviewListPage/ReviewListPage';
import { ShelfPage } from './layouts/ShelfPage/ShelfPage';
import { MessagePage } from './layouts/MessagesPage/MessagePage';



const oktaAuth = new OktaAuth(oktaConfig);

export const App = () => {


  const navigate = useNavigate();

  const customAuthHandler = () => {
    navigate('/login', { replace: true });
  }

  const oktaAuth = new OktaAuth(oktaConfig);

  function restoreOriginalUri(oktaAuth: OktaAuth, originalUri: string): void | Promise<void> {
    //history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
    navigate('/', { replace: true });
  }

  let token = oktaAuth.getIdToken();
  
  return (
    <div className='d-flex flex-column min-vh-100'>

      <Security oktaAuth={oktaAuth}
        restoreOriginalUri={restoreOriginalUri} onAuthRequired={customAuthHandler}>


        <Navbar></Navbar>
        <div className='flex-grow-1'>

          <Routes>

            <Route path="/" element={<HomePage />} />

            <Route path="/home" element={<HomePage />} />

            <Route path="/search" element={<SearchBooksPages />} />

            <Route path='/reviewList/:bookId' element={<ReviewListPage />} />

            <Route path="/checkout/:bookId" element={<BookCheckoutPage />} />

            <Route path="/login" element={<LoginWidget config={oktaConfig} />} />

            <Route path="/login/callback" element={<LoginWidget config={LoginCallback} />} />

            <Route path="/shelf"  element={token != null ? <ShelfPage /> : <LoginWidget config={oktaConfig} />} />

            <Route path="/messages"  element={token != null ? <MessagePage /> : <LoginWidget config={oktaConfig} />} />


          </Routes>



        </div>
        <Footer></Footer>

      </Security>
    </div>
  );
}


