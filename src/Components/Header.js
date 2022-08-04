import React from 'react';
import { BiHome } from 'react-icons/bi';
import { SiAboutdotme } from 'react-icons/si';
import { GrServices, GrProjects, GrContactInfo } from "react-icons/gr";
// import { IconContext } from "react-icons";


export default function Header() {
    return (
        // <IconContext.Provider value={{ color: "rgb(12, 120, 102)", size: '1.5rem' }}>
            <header>
                <nav className="navbar">
                    <a href="#hero"><BiHome />Home</a>
                    <a href="#about"><SiAboutdotme />About</a>
                    <a href="sell.html"><GrServices />Services</a>
                    <a href="rent.html"><GrProjects />Projects</a>
                    <a href="contact.html"><GrContactInfo />Contact</a>
                </nav>
            </header>
        // </IconContext.Provider>


    )
}
