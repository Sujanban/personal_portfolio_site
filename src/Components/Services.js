import React, { useEffect } from 'react';
import {MdWebAsset,MdDesignServices,MdContentPaste} from "react-icons/md"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Services() {
  useEffect(() => {
    AOS.init();
  },[]);
  return (
    <section id='services'  className='services'>
      <h5>What I Offer</h5><span className='highlight'></span>
      <h1>Services</h1>
      <div className='services_items'>
        <div className='services_item'  data-aos="fade-up">
          <h1><MdWebAsset/></h1>
          <h3>Frontend Development</h3>
          <p>Develop you a Professional Responsive website using HTML, CSS , and Javascript, Provide you fast, interactive sites. This also may include API's or other integrations.
          </p>
        </div>
        <div className='services_item'  data-aos="fade-up">
          <h1><MdDesignServices/></h1>
          <h3>UI/UX Design</h3>
          <p>UI/UX involves planning and iterating a site's structure and layout. Once the proper information architecture is in place, I design the visual layer to create a beautiful user experience.
          </p>
        </div>
        <div className='services_item'  data-aos="fade-up">
        <h1><MdContentPaste/></h1>
          <h3>Content Writing</h3>
          <p>Write meaningfull, high quality SEO Friendly Content for your blog website. Experienced in working with Wordpress and SEO Settings as well
          </p>
        </div>
      </div>
    </section>
  )
}
