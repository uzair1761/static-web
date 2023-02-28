import React from 'react'
import Navbars from './Navbars.css'
import  {Button}  from 'bootstrap'



const MyNavbar = () => {
   
  return (
    <>
   <nav   className='main-nav'>
    <div   className='logo'>
    <img src='/images-removebg-preview.png'  className='image'></img>
    </div>
    <div className='menu-link'>
   <ul>
        <li>
            <a href=' #'>product</a>
        </li>
        <li>
            <a href='# '>company</a>
        </li>
        <li>
            <a href=' #'>services</a>
        </li>
        <li>
            <a href=' #'>product</a>
        </li>
        <li>
            <a href='# '>company</a>
        </li>
        <li>
            <a href=' #'>services</a>
        </li>
        </ul>
    </div>
    <div  className='btn-main'>
        <div>
            <button variant="light" className='nav-button-sm'>sign-in</button>
            </div>
            <div>
            <button variant="light" size='lg' className='nav-button-lg'>start my business</button>
            </div> 
   </div>
    
    <div  className='social-media'>
        <ul className='social-media-desktop'>
        <li>
        <a href='#'>Home</a>
    </li>
    <li>
        <a href='#'>about</a>
    </li>
    <li>
        <a href='#'>services</a>
    </li>

        </ul>


    </div>
    </nav>
    <div className='paragraph-section'>
     <div className='h1-tags'>
    <h1 className='hone'>Start</h1>
    <h1> Your own business</h1>
    </div>
    <p className='paragraph'>The simplest way for anyone to launch and run a US business. Incorporate 
    <br/>your company, access one-click growth tools, stay compliant, and manage
    <br/>everything your business needs — all online, from anywhere.</p>
    <button className='bottom-1'>Start business</button>
    <button className='bottom-2'>Already incorporated</button>
    <div className='h4-classes'>
    <h6 className='h6_1'>163452<br/> comapny</h6>
    <h6 className='h6_2'>trusted pilot <img src='icon8-star-67.png'></img></h6>
    <h6 className='h6_3'>189 <br/>countries</h6>
    </div>
  
   
    </div>
    </>
  
  )
}

export default MyNavbar