import React, { useState } from 'react'

import './menu.css'
import { Button } from '@chakra-ui/react'
import { data } from './food'
import { data2 } from './drink'
import { data3 } from './salad'



const Menu = () => {
  const [current, setCurrent] = useState(data);
  return (
    <div className='menu_heading' id='id'>
      <h1>MENU</h1>
      <div className='btn_box'>
        <Button className='btn1' margin={'2'} variant={'outline'} borderColor={current === data ? 'black' : '#e2e8f0'} onClick={() => setCurrent(data)}>FOOD</Button>
        <Button className='btn2' marginRight={'2'} variant={'outline'} onClick={() => setCurrent(data2)} borderColor={current === data2 ? 'black' : '#e2e8f0'}>DRINKS</Button>
        <Button className='btn3' variant={'outline'} onClick={() => setCurrent(data3)} borderColor={current === data3 ? 'black' : '#e2e8f0'}>SALADS</Button>
      </div>
      {/* animated fadeIn */}
      <div className={`before`}>
        {current.map((item, idx) => (
          <MenuBox key={idx} menu_box={'menu_box'} menu_sub_box={'menu_sub_box'} fooditem={item.fooditem} foodheading={item.foodheading} foodmoney={item.foodmoney} />
        ))}
      </div>

      <div className='menu_image_before'>
        <div className='menu_image'>
          <h2>Delicious & Nutricious</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, quaerat neque. Quas quisquam accusamus, recusandae voluptatem pariatur soluta molestiae accusantium?</p>
        </div>

      </div>


    </div>

  )
}
function MenuBox({ menu_box, menu_sub_box, fooditem, foodheading, foodmoney }) {
  return (

    <div className={menu_box}>
      <div className={menu_sub_box}>
        <h3>{fooditem}</h3>
        <p>{foodheading}</p>
      </div>
      <p>₹{foodmoney}</p>
    </div>

  )
}
export default Menu