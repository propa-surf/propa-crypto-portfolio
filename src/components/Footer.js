import React from 'react'
import '../stylesheets/Footer.css'
import { FaTelegramPlane, FaTwitter, FaGithub, FaDiscord } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer-container'>
        <a href='https://www.telegram.org'><FaTelegramPlane className='footer-icon'/></a>
        <a href='https://www.twitter.com'><FaTwitter className='footer-icon'/></a>
        <a href='https://www.github.com'><FaGithub className='footer-icon'/></a>
        <a href='https://www.discord.com'><FaDiscord className='footer-icon'/></a>
    </div>
  )
}

export default Footer