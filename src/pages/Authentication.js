import React, {useState} from 'react'
import '../stylesheets/Authentication.css'
import { auth, db } from '../config/FirebaseConfig'
import {createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword} from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import {useNavigate} from 'react-router-dom'

function Authentication() {

  let navigate = useNavigate()
  const [existingUser, setExistingUser] = useState(false)
  const [nickname, setNickname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp=(e)=>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then(res=>{
      updateProfile(auth.currentUser, {displayName:nickname})
      setDoc(doc(db, 'portfolios', `${auth.currentUser?.uid}`),{})
      navigate('/')
    })
    .catch(err=>{alert(err.code)})
  }

  const handleLogin=(e)=>{
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then(res=>{
      navigate('/')
    })
    .catch(err=>{alert(err.code)})
  }

  return (
    <div className='authentication-container'>
      <div className='authentication-background'>
        {
          existingUser === false
          ? <form className='authentication-form' onSubmit={handleSignUp}>
              <h2 className='authentication-header'>Please Sign-Up</h2>
              <div className='authentication-form-input'>
                <input type='text' className='authentication-nickname' placeholder='Nickname' onChange={(e)=>setNickname(e.target.value)} required/>
                <input type='email' className='authentication-email' placeholder='E-Mail' onChange={(e)=>setEmail(e.target.value)} required/>
                <input type='password' className='authentication-password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)} required/>
                <div className='authentication-terms-and-conditions'>
                  <input type='checkbox' className='authentication-checkbox' required/>
                  <label htmlFor='authentication-checkbox' className='authentication-terms'>Terms and Conditions</label>
                </div>
              </div>
              <button className='authentication-form-button' type='submit'>Sign-Up</button>
              <p>You already got an account?<span className='authentication-right-form-check' onClick={()=>setExistingUser(true)}>Login</span></p>
          </form>
          : <form className='authentication-form' onSubmit={handleLogin}>
              <h2 className='authentication-header'>Login</h2>
              <div className='authentication-form-input'>
                <input type='email' className='authentication-email' placeholder='E-Mail' onChange={(e)=>setEmail(e.target.value)} required/>
                <input type='password' className='authentication-password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)} required/>
              </div>
              <button className='authentication-form-button' type='submit'>Login</button>
              <p>You do not have an account yet?<span className='authentication-right-form-check' onClick={()=>setExistingUser(false)}>Sign-Up</span></p>
          </form>
        }
      </div>
    </div>
  )
}

export default Authentication