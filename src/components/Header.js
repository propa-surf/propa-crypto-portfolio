import React, {useState} from 'react'
import { SiBitcoin } from "react-icons/si";
import {Link, useNavigate} from "react-router-dom"
import '../stylesheets/Header.css'
import ContactModal from './ContactModal';
import { auth } from '../config/FirebaseConfig'
import {useAuthState} from 'react-firebase-hooks/auth'
import {signOut} from 'firebase/auth'


function Header() {

  const [user]=useAuthState(auth)

  const[modalIsOpen, setModalIsOpen] = useState(false)
  let navigate=useNavigate()

  function openModal(){
    setModalIsOpen(true)
  }

  function closeModal(){
    setModalIsOpen(false)
  }


  return (
    <div className='header-container'>
        <div className='icon-title-container' onClick={()=>navigate('/')}>
            <SiBitcoin className='bitcoin-icon'/>
            <h1>Propa Crypto Portfolio</h1>
        </div>
        <div className='nav-container'>
            <Link className='link' to='/'>Home</Link>
            {
              user
              ?<div>
                <Link className='link' to='/portfolio'>User Portfolio</Link>
                <Link className='link' to='/' onClick={()=>signOut(auth)}>Logout</Link>
              </div>
              :<Link className='link' to='/auth'>Login</Link>
            }
            <ContactModal className='contact-overlay' modalIsOpen={modalIsOpen} closeModal={closeModal}/>
            <p onClick={openModal}>Contact</p>
        </div>
        <div className="burger-container">
          <label htmlFor="burger" className="burger">&#9776;</label>
          <input id="burger" type="checkbox"/>
          <div className="nav-section">
            <Link className='link' to='/'>Home</Link>
              {
                user
                ?<div className='nav-section-user-logged-in'>
                  <Link className='link' to='/portfolio'>User Portfolio</Link>
                  <Link className='link' to='/' onClick={()=>signOut(auth)}>Logout</Link>
                </div>
                :<Link className='link' to='/auth'>Login</Link>
              }
            <p className='link' onClick={openModal}>Contact</p>
          </div>
        </div>
    </div>
  )
}

export default Header