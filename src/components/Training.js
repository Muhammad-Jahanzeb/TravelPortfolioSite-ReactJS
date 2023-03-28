import React from 'react'
import { Link } from 'react-router-dom'

import './Training.css'

import train from '../assets/train_inside.jpg'
import island from '../assets/island.jpg'

const Trainingsection = () => {
  return (
    <div className='training'>
        <div className='left'>
            <h1>Training</h1>
            <p>Thorough training is necessary when traveling to a new place expecially if it's your first time traveling at all.</p>
            <Link to='/contact'><button className='btn'>Contact</button></Link>
        </div>
        <div className='right'>
            <div className='image-container'>
                <div className='top'>
                    <img src={island} className='img _1' alt='Island'/>
                </div>
                <div className='bottom'>
                    <img src={train} className='img _2' alt='Train'/>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Trainingsection