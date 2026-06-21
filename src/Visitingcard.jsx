import React from 'react'
import './Visitingcard.css'
import profileImg from '../Img.jpeg'


const Visitingcard = () => {
 return (
    <div className='body'>

      <div className='left'>
        <img src={profileImg} alt='Satvik' className='profile-img' />
      </div> 
 <div className='divider'></div>
      <div className='middle'>
        <h1 className='name'>Satvik Rathee</h1>
        <p className='title'>Software Developer</p>
       
        <p className='bio'>Passionate developer building modern web experiences.</p>
   
      </div>
 <div className='divider'></div>

      <div className='right'>
        <p>📧 satvik@email.com</p>
        <p>📱 +91 98765 43210</p>
        <p>📍 India</p>
      </div>

    </div>
  )
}

export default Visitingcard
