import React from 'react'
import './about.css'
import { Button, Image } from '@chakra-ui/react'
import Menu from '../Menu/Menu'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className='about_section' id = 'id2'>
            <img src="/assest/6.jpg" alt="" />
            <img src="/assest/5.jpg" alt="" />
            <div className='about_section_para'>
                <h1>THE RESTAURANT</h1>
                <p>Organic Food is grown without the usage of synthetic chemicals and preservatives such as human made pesticides and fertilizers and do not contain genetically modified preservatives (GMO's) Organic food produces fresh meat, dairy products which can be used in your daily routine. Our clients have been with us since decade and never got any complain in the terms of product quality , taste or cost. We are one ideal producers of organic foods and fruits right now in India.

                </p>
              <a href="#id"><Button variant={'outline'} width='12em' margin='0 auto' color={'red'}  >See Curr Menu</Button></a>
            </div>
        </div>
    )
}

export default About