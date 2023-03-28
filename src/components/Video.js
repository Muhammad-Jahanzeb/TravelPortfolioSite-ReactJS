import React from 'react'
import {Link} from 'react-router-dom'

import './VideoStyle.css'

import spaceVid from '../assets/earth.mp4'

const Video = () => {
  return (
    <div className='hero'>
        <video  loop muted autoPlay id='video' >
            <source src={spaceVid} type='video/mp4'/>
        </video>
        <div className='content'>
            <h1>World Travel.</h1>
            <p>World's fist instantaneous world travel</p>
            <div>
              <Link to='/training' className='btn'>Training</Link>
              <Link to='/contact' className='btn btn-launch'>Launch</Link>
           </div>
        </div>
    </div>
  )
}

export default Video