import React from 'react';
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Services from './Components/Services';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Socials from "./Components/Socials";
import Toggle from "./Components/Toggle";

function App() {
  return (
    <>
      <Header/>
      <Toggle/>
      <Socials/>
      <Hero/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
