import React, {useState} from 'react'
import { SiBitcoin } from "react-icons/si";
import {Link} from "react-router-dom"
import '../stylesheets/Header.css'
import ContactModal from './ContactModal';

function Header() {

  const[modalIsOpen, setModalIsOpen] = useState(false)

  function openModal(){
    setModalIsOpen(true)
  }

  function closeModal(){
    setModalIsOpen(false)
  }


  return (
    <div className='header-container'>
        <div className='icon-title-container'>
            <SiBitcoin className='bitcoin-icon'/>
            <h1>Propa Crypto Portfolio</h1>
        </div>
        <div className='nav-container'>
            <Link className='link' to='/'>Home</Link>
            <Link className='link' to='/register'>Register</Link>
            <Link className='link' to='/login'>Login</Link>
            <ContactModal className='contact-overlay' modalIsOpen={modalIsOpen} closeModal={closeModal}/>
            <p onClick={openModal}>Contact</p>
        </div>
    </div>
  )
}

export default Header