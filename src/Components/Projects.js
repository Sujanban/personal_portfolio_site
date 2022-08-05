import React,{ useEffect }  from 'react'
import { GrGithub } from "react-icons/gr";
import { BsGlobe } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';

import project1 from '../Images/project1.png'
import project2 from '../Images/project2.png'
import project3 from '../Images/project3.png'

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  },[]);
  return (
    <section id='projects'  className='project'>
      <h5>What Have I Designed</h5>
      <h1>My Portfolio</h1>
      <div className='project_items'>
        <div className='project_item' data-aos="fade-right">
          <div className='project_image'>
          <img src={project1} alt='Realestate Marketplace'></img>
          </div>
          
          <h3>Realestate Marketplace</h3>
          <p>
            <a href='https://github.com/Sujanban/realestate-marketplace'><GrGithub/></a>
            <a href='https://sujanban.github.io/realestate-marketplace/'><BsGlobe/></a>
          </p>
        </div>
        <div className='project_item' data-aos="fade-right">
          <img src={project2} alt='JS Snake Game'></img>
          <h3>JS Snake Game</h3>
          <p>
          <a href='https://github.com/Sujanban/js-snake-game'><GrGithub/></a>
            <a href='https://sujanban.github.io/js-snake-game/'><BsGlobe/></a>
          </p>
        </div>
        <div className='project_item' data-aos="fade-right">
          <img src={project3} alt='Business Website'></img>
          <h3>Business Website</h3>
          <p>
          <a href='https://github.com/Sujanban/portfolio-site-saroj-giri'><GrGithub/></a>
            <a href='http://sarojgiri.com.np/'><BsGlobe/></a>
          </p>
        </div>
      </div>
    </section>
  )
}
