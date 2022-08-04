import React from 'react'
import hero from '../Images/hero.png';
import cv from '../Images/CV.pdf';


export default function Hero() {
  return (
    <section id='/'  className='hero'>
      {/* <div className='hero_img'> */}
        {/* <img src={profile}></img> */}
        <img src={hero} alt="profile"></img>

      {/* </div> */}

      <div className='hero_info'>
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
