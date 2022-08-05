import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import hero from '../Images/hero.png';
import cv from '../Images/CV.pdf';


export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);
  return (
    <section id='#' className='hero'>
      <img src={hero} alt="profile" data-aos="fade-right"></img>

      <div className='hero_info' data-aos="fade-left">
        <h5>Hello I'm</h5>
        <h1>Sujan Ban</h1>
        <h5>Frontend Developer</h5>
        <div className='cta'>
          <a href={cv} download className='btn-outline'>Download CV</a>
          <a href='#contact' className='btn'>Lets Talk</a>
        </div>
      </div>
    </section>
  )
}
