import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Recipe from './components/Recipe';
import Profile from './pages/Profile'
import Header from './components/Header'
import Footer from './components/Footer'

import Homepage from './components/Homepage'
import './App.css'
import Cancel from './pages/Cancel'
import Success from './pages/Success'
import CartProvider from './utils/cartContext';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <CartProvider>
     <ApolloProvider client={client}>
      <Router>
        <div>
          <Header />
          <Homepage />
          
          <div>
            <Routes>
              <Route
                path='/'
                element={<Home />}
              />
              <Route
                path='/login'
                element={<Login />}
              />
              <Route
                path='/signup'
                element={<Signup />}
              />
              <Route
                path='/Profile'
                element={<Profile />}
              /> 
               <Route
                path='/success'
                element={<Success />}
              />
               <Route
                path='/cancel'
                element={<Cancel />}
              />
              <Route
              path='/recipes'
              element={<Recipe />}
              />

            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
     </ApolloProvider>
    </CartProvider>
  )
}

export default App
