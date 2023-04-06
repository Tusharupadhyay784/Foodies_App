import React from 'react'
import "./navbar.css"
import { Button } from '@chakra-ui/react'

const Navbar = () => {

  return (
    <div className='navbar_before' id='one'>
      <div className='navbar'>
        <div className={`navbar_section`}>
          <ul>
            <div>
              <a href="#one">  <li>Home</li></a>
              <a href="#id2"><li>About</li></a>
              <a href="#id"><li>Menu</li></a>
              <a href="#four"><li>Gallery</li></a>
              <a href="#five"><li>Events</li></a>
              <a href="#six"><li>Contact Us</li></a>
            </div>
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