import React, { useEffect } from 'react';
import profile from '../Images/hero.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  },[]);
  return (
    <section id='about' className='about' 
    data-aos="fade-right"
    // data-aos-easing="ease-in-out"
    >
      <h5>Get To Know</h5><span className='highlight'></span>
      <h1>About Me</h1>
      <div className='about_main'>
        <img src={profile} alt="profile"></img>
        <div className='about_info'>
          <h5>Hello there,</h5>
          <h1>I am Sujan Ban</h1>
          <p>Hard-working programmer From Nepal with a great Collaborative and Problem Solving skills.
            Capable of working with a variety of technology and software solutions. Talented
            leader with unique ideas and a history of successful contributions in the field.</p>
          <a href='#contact' className='btn-outline'>Let's Talk</a>
          <div className='about_skill'>
            <h1>My Skills</h1>
            <div className='items'>
              <div className='item item_one' data-aos="flip-left">
                <h3>HTML</h3>
              </div>
              <div className='item item_two' data-aos="fade-right">
                <h3>CSS</h3>
              </div>
              <div className='item item_three' data-aos="fade-right">
                <h3>JAVASCRIPT</h3>
              </div>
              <div className='item item_four' data-aos="flip-left">
                <h3>REACT</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
