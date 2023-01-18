import React from 'react'
import "./navbar.css"
import { Button } from '@chakra-ui/react'

const Navbar = () => {
  // console.log(document.body.scrollTop || document.documentElement.scrollTop)

  // window.onscroll = function(){
  //   let currscrollposi = document.body.scrollTop || document.documentElement.scrollTop;
  //   if(currscrollposi)console.log(currscrollposi)
  // }
  // const excss = {
  //     position:'fixed',
  //     backgroundColor:'gray',
  //     zIndex:999,

  // }
  
  
  
  
  return (
    <div className='navbar_before '>
      <div className='navbar'>
      <div className={`navbar_section scrolls`}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Gallery</li>
            <li>Events</li>
            <li>Contact Us</li>
          </ul>
          <div className="navbar_button ">
            <Button id='btn1'>Log In</Button>
            <Button color="black" css={{ ":hover": { backgroundColor: 'white' } }} id='btn2' >Sign In</Button>
          </div>
        </div>
        <div className='icon'>
          <img src="/assest/384135.svg" alt="" />
        </div>
        <div className='navbar_heading'>
          <h1>The Lean Restaurant</h1>
          <p>Enjoy a healthy Life by eating healthy foods that have extraordinary flavours which make your life healthier day by day, prepared by our top chefs with extra care and LOVE especially for you!!

          </p>
        </div>
        <div className='navbar_last_button'>
          <Button variant={'solid'} color={'blackAlpha.800'} >Reserve a Table</Button>
        </div>
      </div>

    </div>



  )
}

export default Navbar