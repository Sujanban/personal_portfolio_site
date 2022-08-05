import React from 'react'
import { GrLinkedin,GrInstagram,GrTwitter,GrGithub } from "react-icons/gr";
import { AiFillHeart } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer_main">
            <div className="footer_info">
                <h2>Sujan Ban</h2>
                <p>Sundarharaincha-5 Morang, Nepal 56705</p>
                <p>bansujan@gmail.com</p>
                <a href="tel-phone"><i className="fa fa-phone"></i> (+977) 9823421386</a>
            </div>
            <div className="footer_link">
                <h2>Links</h2>
                <div className="link_column">
                    <div>
                        <a href="#">Home</a>
                        <a href="#about">About</a>
                        <a href="#services">Services</a>
                    </div>
                    <div>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
            </div>
            <div className="footer_newsletter">
                <h5>Find me Fiverr</h5>
                <h2>Hire Me As Freelancer</h2>
                <a href='https://www.fiverr.com/sujan_ban' className='btn'>Visit</a>
                {/* <div>
                    <input type="checkbox" name="checkbox" className="term"/> I have read and agree to the <a
                        href="policy.html">Privacy Policy</a>
                </div> */}
            </div>
        </div>
        <div className="footer_secondary">
            <p>Developed with <i><AiFillHeart/></i> by Sujan Ban.</p>
            <p>
                <a href='https://www.linkedin.com/in/sujan-ban'><GrLinkedin/></a>
                <a href='https://www.instagram.com/sujanban1/'><GrInstagram/></a>
                <a href='https://twitter.com/ban_sujan'><GrTwitter/></a>
                <a href='https://github.com/Sujanban'><GrGithub/></a>
            </p>
        </div>
    </footer>
  )
}
