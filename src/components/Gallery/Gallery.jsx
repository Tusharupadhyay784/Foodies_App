import React from 'react'
import './gallery.css'
import { Carousel } from 'react-responsive-carousel'



const Gallery = () => {

  return (
    <div style={{ height: '110vh', marginTop: "-6em" }} className="before_hello" id='four'>
      <h1 style={{ textAlign: 'center', fontSize: "4em" }}>GALLERY</h1>
      <div className="hello">
        <Compo />

      </div>
    </div>
  )
}
const Compo = () => (
  <Carousel showArrows={true} className='carou' infiniteLoop autoPlay>
    <div>
      <img className='image' src="/assest/2.jpg" alt="" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia maiores facere vel debitis, omnis quas iure unde soluta enim asperiores.</p>
    </div>

    {/* 2 */}
    <div>
      <img className='image' src="/assest/4.jpg" alt="" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia maiores facere vel debitis, omnis quas iure unde soluta enim asperiores.</p>
    </div>
    {/* 3 */}
    <div>
      <img className='image' src="/assest/3.jpg" alt="" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia maiores facere vel debitis, omnis quas iure unde soluta enim asperiores.</p>
    </div>





    <div>
      <img className='image' src="/assest/11.jpg" alt="" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia maiores facere vel debitis, omnis quas iure unde soluta enim asperiores.</p>
    </div>

    <div>
      <img className='image' src="/assest/100.jpg" alt="" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia maiores facere vel debitis, omnis quas iure unde soluta enim asperiores.</p>
    </div>


  </Carousel>
)
export default Gallery