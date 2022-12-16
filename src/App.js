import React from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Authentication from './pages/Authentication';
import Portfolio from './pages/Portfolio';

function App() {

  const baseUrl = 'https://api.coingecko.com/api/v3'

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path='/' element={<Homepage baseUrl={baseUrl}/>}/>
          <Route path='/auth' element={<Authentication/>}/>
          <Route path='/portfolio' element={<Portfolio baseUrl={baseUrl}/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
