import React from 'react';


export default function Header() {
    return (
        // <IconContext.Provider value={{ color: "rgb(12, 120, 102)", size: '1.5rem' }}>
            <header>
                <nav className="navbar">
                    {/* <a href="#"><BiHome />Home</a>
                    <a href="#about"><SiAboutdotme />About</a>
                    <a href="#services"><GrServices />Services</a>
                    <a href="#projects"><GrProjects />Projects</a>
                    <a href="#contact"><GrContactInfo />Contact</a> */}

                    <a href="/">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>
        // </IconContext.Provider>


    )
}
