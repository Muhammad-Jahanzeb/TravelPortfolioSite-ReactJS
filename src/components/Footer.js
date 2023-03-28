import React from 'react'
import {FaFacebook, FaLinkedin, FaTwitter, FaMailBulk, FaSearchLocation, FaPhone} from 'react-icons/fa'

import './FooterStyle.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaSearchLocation size={20} style={{color:'white', marginRight:'2rem'}}/>
                    <div>
                        <p>123 Acme St.</p>
                        <h4>Huston, Tx</h4>
                    </div>
                </div>
                
                <div className='phone'>
                    <h4 style={{fontSize:'1rem', letterSpacing:'2px', fontWeight:'500'}}><FaPhone size={20} style={{color:'white', marginRight:'2rem'}} />+92-1234567891</h4>
                </div>

                <div className='email'>
                    <h4 style={{fontSize:'1.2rem', letterSpacing:'3px', fontWeight:'500'}}><FaMailBulk size={20} style={{color:'white', marginRight:'2rem'}} />abc@gmail.com</h4>
                </div>
            </div>

            <div className='right'>
                <h4>About the company</h4>
                <p >Welcome to our global travel company, where we believe that travel is not just a way to escape from the routine, but an opportunity to expand horizons, connect with different cultures, and create lasting memories. Let us help you create unforgettable memories on your next adventure.</p>
                <div className='social'>
                    <FaFacebook size={30} style={{color:'white', marginRight:'1rem'}}/>
                    <FaLinkedin size={30} style={{color:'white', marginRight:'1rem'}}/>
                    <FaTwitter size={30} style={{color:'white', marginRight:'1rem'}}/>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Footer