import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './assets/components/Navbar'
import Home from './assets/components/Home'
import About from './assets/components/About'
import Skills from './assets/components/Skills'
import Projects from './assets/components/Projects'
import Contact from './assets/components/Contact'
import { useInView } from "react-intersection-observer";


function App() {
  const { ref, inView } = useInView();
  return (
    <>
    
    <Navbar />
    <Home  />
    <About />
    <Skills />
    <Projects/>
    <Contact/>
    </>
  )
}

export default App
