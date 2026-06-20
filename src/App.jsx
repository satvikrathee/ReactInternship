import React from 'react'
import Card from './Components/Card'
import Navbar from './Components/Navbar'
// import './Visitingcard.css'
// import profileImg from '../Img.jpeg'

const App = () => {
//   return (
//     <div className='body'>

//       <div className='left'>
//         <img src={profileImg} alt='Satvik' className='profile-img' />
//       </div> 
//  <div className='divider'></div>
//       <div className='middle'>
//         <h1 className='name'>Satvik Rathee</h1>
//         <p className='title'>Software Developer</p>
       
//         <p className='bio'>Passionate developer building modern web experiences.</p>
   
//       </div>
//  <div className='divider'></div>

//       <div className='right'>
//         <p>📧 satvik@email.com</p>
//         <p>📱 +91 98765 43210</p>
//         <p>📍 India</p>
//       </div>

//     </div>
//   )


return(


<div>
  <Navbar/>
<div  style={{
  display:"flex"
}}>
 <Card/>    
   <Card/> 
</div>
  

</div>


)
}



export default App
