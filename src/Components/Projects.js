import React from 'react'
import { GrGithub } from "react-icons/gr";
import { BsGlobe } from "react-icons/bs";

import project1 from '../Images/project1.png'
import project2 from '../Images/project2.png'
import project3 from '../Images/project3.png'

export default function Projects() {
  return (
    <div className='project'>
      <h5>What Have I Designed</h5>
      <h1>My Portfolio</h1>
      <div className='project_items'>
        <div className='project_item'>
          <img src={project1}></img>
          <h3>Realestate Marketplace</h3>
          <p>
            <a href=''><GrGithub/></a>
            <a href=''><BsGlobe/></a>
          </p>
        </div>
        <div className='project_item'>
          <img src={project2}></img>
          <h3>JS Snake Game</h3>
          <p>
          <a href=''><GrGithub/></a>
            <a href=''><BsGlobe/></a>
          </p>
        </div>
        <div className='project_item'>
          <img src={project3}></img>
          <h3>Business Website</h3>
          <p>
          <a href=''><GrGithub/></a>
            <a href=''><BsGlobe/></a>
          </p>
        </div>
      </div>
    </div>
  )
}
