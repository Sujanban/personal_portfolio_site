import React from 'react'
import { MdOutlineMail } from 'react-icons/md'
import { RiMessengerLine, RiWhatsappLine } from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


export default function Contact() {

  // emailjs
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2cj6jav', 'template_09yq072', form.current, 'n7Rl6tWh3bXIJBQLY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  // emailjs
  return (
    <section id='contact' className='contact'>
      <h5>Qny Query</h5>
      <h1>Lets Talk!</h1>
      <div className='conatact_info'>
        <div className='contact_first'>
          <div className='contact_item'>
            <h1><MdOutlineMail /></h1>
            <h3>Email</h3>
            <p>bansujan@gmail.com
            </p>
            <a href='mailto: bansujan@gmail.com'>Send Message</a>
          </div>
          <div className='contact_item'>
            <h1><RiMessengerLine /></h1>
            <h3>Messanger</h3>
            <p>Sujan Ban
            </p>
            <a href='https://www.facebook.com/profile.php?id=100008615196537'>Send Message</a>
          </div>
          <div className='contact_item'>
            <h1><RiWhatsappLine /></h1>
            <h3>WhatsApp</h3>
            <p>(977) 9823421386
            </p>
            <a href='mailto: bansujan@gmail.com'>Send Message</a>
          </div>
        </div>
        <div className='contact_second'>
          <form ref={form} onSubmit={sendEmail}>
            <div>
              <label>Full Name</label><br />
              <input type='text' name='name' placeholder='Enter Your Full Name' />
            </div>
            <div>
              <label>Email</label><br />
              <input type='text' name='email' placeholder='Enter Your Email' />
            </div>
            <div>
              <label>Message</label><br />
              <textarea rows='8' name='message' placeholder='Your Message'></textarea>
            </div>
            <input type='submit' name='submit' className='btn' id='submit'/>
          </form>
        </div>
      </div>
    </section>
  )
}
