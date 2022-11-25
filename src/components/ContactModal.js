import React from 'react'
import Modal from 'react-modal';
import '../stylesheets/ContactModal.css'
import bitcoinflower from '../assets/bitcoinflower.png'

function ContactModal({modalIsOpen, closeModal}) {
  return (
    <div>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className='modal-container'>
            <div className='contact-details-container'>
                <h2>Contact</h2>
                <div className='contact-details'>
                    <p className='company-name'>Propa Digital Ltd.</p>
                    <p className='company-email'>e-mail: office@propadigital.io</p>
                    <button className='close-btn' onClick={closeModal}>Close</button>
                </div>
            </div>
            <img className='contact-image' src={bitcoinflower} alt='Bitcoin Flower'/>
        </Modal>
    </div>

  )
}

export default ContactModal