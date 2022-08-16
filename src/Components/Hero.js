import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import hi from '../Images/hi.gif';
import cv from '../Images/CV.pdf';


export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);
  return (
    <section id='#' className='hero'>
      <img src={hi} alt="profile" data-aos="fade-right"></img>
    
      <div className='blob'>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#0C7866" d="M33.8,-53.5C45,-45.3,56.4,-38.1,64.3,-27.4C72.2,-16.7,76.7,-2.5,74.2,10.3C71.8,23.1,62.3,34.5,53.4,48.1C44.5,61.8,36,77.8,23,84.4C10,91,-7.6,88.3,-21.2,80.5C-34.8,72.7,-44.5,59.8,-53,47.4C-61.5,34.9,-68.8,22.9,-70,10.4C-71.2,-2,-66.3,-15,-61.8,-29.6C-57.3,-44.2,-53.2,-60.3,-43,-69C-32.8,-77.7,-16.4,-79,-2.6,-75C11.2,-71,22.5,-61.7,33.8,-53.5Z" transform="translate(100 100)" />
        </svg>
      </div>

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
