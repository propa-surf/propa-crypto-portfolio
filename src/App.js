import React from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import SignIn from './pages/SignIn';

function App() {

  const baseUrl = 'https://api.coingecko.com/api/v3'

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path='/' element={<Homepage baseUrl={baseUrl}/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<SignIn/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
