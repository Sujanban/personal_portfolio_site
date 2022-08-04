import React from 'react'
import { MdOutlineMail } from 'react-icons/md'
import { RiMessengerLine, RiWhatsappLine } from 'react-icons/ri'


export default function Contact() {
  return (
    <div className='contact'>
      <h5>Qny Query</h5>
      <h1>Lets Talk!</h1>
      <div className='conatact_info'>
        <div className='contact_first'>
          <div className='contact_item'>
            <h1><MdOutlineMail /></h1>
            <h3>Email</h3>
            <p>bansujan@gmail.com
            </p>
            <a href=''>Send Message</a>
          </div>
          <div className='contact_item'>
            <h1><RiMessengerLine /></h1>
            <h3>Email</h3>
            <p>bansujan@gmail.com
            </p>
            <a href=''>Send Message</a>
          </div>
          <div className='contact_item'>
            <h1><RiWhatsappLine /></h1>
            <h3>Email</h3>
            <p>bansujan@gmail.com
            </p>
            <a href=''>Send Message</a>
          </div>
        </div>
        <div className='contact_second'>
          <form>
            <div>
              <label>Full Name</label><br />
              <input type='text' placeholder='Enter Your Full Name' />
            </div>
            <div>
              <label>Email</label><br />
              <input type='text' placeholder='Enter Your Email' />
            </div>
            <div>
              <label>Message</label><br />
              <textarea rows='8' placeholder='Your Message'></textarea>
            </div>
            <a type='submit' name='submit' className='btn' > Submit</a>
          </form>
        </div>
      </div>
    </div>
  )
}
