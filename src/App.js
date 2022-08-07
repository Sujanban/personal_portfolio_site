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
import ReactDOM from 'react-dom';
import { MessengerChat } from 'react-messenger-chat-plugin';


function App() {
  return (
    <>
      <Header />
      <Socials />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
      <MessengerChat
        pageId='111101931699753'
        language='en_US'
        themeColor={'#0c7866'}
        height={24}
        loggedInGreeting='Hello logged in user!'
        loggedOutGreeting='Hello stranger!'
        autoExpand={true}
        debugMode={false}
        onMessengerShow={() => { console.log('onMessengerShow') }}
        onMessengerHide={() => { console.log('onMessengerHide') }}
        onMessengerDialogShow={() => { console.log('onMessengerDialogShow') }}
        onMessengerDialogHide={() => { console.log('onMessengerDialogHide') }}
        appId='1025988994676813'
      />
    </>
  );
}

export default App;
