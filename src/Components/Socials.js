import React from 'react'
import { GrLinkedin,GrInstagram,GrTwitter,GrGithub } from "react-icons/gr";
import { IconContext } from "react-icons";

export default function Socials() {
  return (
    
    <IconContext.Provider value={{color:"rgb(12, 120, 102)", size:'1.5rem'}}>
        <div>
        <div className='socials'>
        <a href='https://www.linkedin.com/in/sujan-ban/'><GrLinkedin/></a>
        <a href='https://www.instagram.com/sujanban1'><GrInstagram/></a>
        <a href='https://twitter.com/ban_sujan'><GrTwitter/></a>
        <a href='https://github.com/Sujanban'><GrGithub/></a>
      </div>
    </div>
    </IconContext.Provider>
  )
}
