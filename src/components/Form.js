import React from 'react'

import './FormStyle.css'

const Form = () => {
  return (
    <div className='form'>
        <form>
            <label>Your Name</label><br/>
            <input type='text'/><br/>
            <label>Email</label><br/>
            <input type='email'/><br/>
            <label>Subject</label><br/>
            <input type='text'/><br/>
            <label>Details</label><br/>
            <textarea rows='6' placeholder='Enter your text here...'/><br/>
            <button className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default Form