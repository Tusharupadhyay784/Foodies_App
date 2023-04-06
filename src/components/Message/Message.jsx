import React from 'react'
import './message.css'
import { Button } from '@chakra-ui/react'

const Message = () => {
  return (
    <div className='message_container' id='six'>
      <div className='message_data'>
        <div className='message_feed'>
          <h2>WRITE US</h2>
          <span>
            <label htmlFor="name">Name:</label>
            <input type="text" id='name' />
          </span>
          <span>
            <label htmlFor="mail">Email:</label>
            <input type="text" id='mail' />
          </span>
          <span className='message'>
            <label htmlFor="msg">Message</label>
          </span>
          <textarea style={{ resize: 'none' }} name="text" id="msg" cols="65" rows="5" />
          <Button>SEND MESSAGE</Button>
        </div>
        <div className='message_map'>
          <div className='p'>
            <iframe title='xmen' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13997.858973808667!2d77.06786633955078!3d28.70565400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d07a503da4d01%3A0x941cca49ecb091e3!2z4KS14KS-4KS5IOCknOClgCDgpLXgpL7gpLk!5e0!3m2!1shi!2sin!4v1674035360478!5m2!1shi!2sin" width="850" height="630" style={{ border: '0;' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Message