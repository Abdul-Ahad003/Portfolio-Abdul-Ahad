import React from 'react'
import { Link } from 'react-scroll';
import { useState, useRef } from 'react';
import { useInView } from "react-intersection-observer";







const Navbar = () => {

  const [menubar, setmenubar] = useState(true)

  const handleMenu = () => {
    setmenubar(!menubar)
  }
  const handleClose = () => {
    setmenubar(true)
  }

  return (
    <header className=' sticky top-0  bg-black text-[17px] font-bold z-30 '>
      <nav className=' flex items-center  justify-between text-[#0ef]  md:py-2.5 py-2 md:px-14 px-2 ge'>
        <div className='logo opacity-0'><img className=' md:w-[110px] w-[86px]' src='../images/Capture.JPG' />  </div>

        <ul className=' hidden md:flex md:items-center md:gap-6'>
          <Link to='home' activeClass="active" offset={-70} smooth={true} duration={500}><li className='opacity-0 navigate hover:text-purple-700 cursor-pointer ' >Home</li></Link>
          <Link to='about' activeClass="active" offset={-70} smooth={true} duration={500}><li className='opacity-0 navigate hover:text-purple-700 cursor-pointer '>About</li></Link>
          <Link to='skills' activeClass="active" offset={-70} smooth={true} duration={500}><li className='opacity-0 navigate hover:text-purple-700 cursor-pointer'>Skills</li></Link>
          <Link to='projects' activeClass="active" offset={-70} smooth={true} duration={500}><li className='opacity-0 navigate hover:text-purple-700 cursor-pointer'>Projects</li></Link>
          <Link to='contact' activeClass="active" offset={-70} smooth={true} duration={500}><li className='opacity-0 navigate hover:text-purple-700 cursor-pointer'>Contact</li></Link>
        </ul>




        <div className=' md:hidden block'>
          <div onClick={handleMenu} className={`${menubar}?"block":"hidden" `}>{<img className='text-[#0ef] w-8 h-8 ' src='./menu.svg' />}
          </div>

          <div className='relative'>
            {menubar == false &&
              <div className=' fixed right-0 top-0  bg-black w-48 h-screen'>
                <div onClick={handleMenu} className='py-6 '>
                  <img className='  mx-3 my-3 absolute top-0 right-0 w-6 h-6' src='./close.svg' />
                </div>
                <ul className=' flex flex-col gap-4 px-8 text-[#0ef]'>
                  <Link to='home' activeClass="active" offset={-70} smooth={true} duration={500}><li onClick={handleClose} className=' hover:text-purple-700 cursor-pointer ' >Home</li></Link>
                  <Link to='about' activeClass="active" offset={-70} smooth={true} duration={500}><li onClick={handleClose} className='  hover:text-purple-700 cursor-pointer '>About</li></Link>
                  <Link to='skills' activeClass="active" offset={-70} smooth={true} duration={500}><li onClick={handleClose} className='  hover:text-purple-700 cursor-pointer'>Skills</li></Link>
                  <Link to='projects' activeClass="active" offset={-70} smooth={true} duration={500}><li onClick={handleClose} className='  hover:text-purple-700 cursor-pointer'>Projects</li></Link>
                  <Link to='contact' activeClass="active" offset={-70} smooth={true} duration={500}><li onClick={handleClose} className=' hover:text-purple-700 cursor-pointer'>Contact</li></Link>
                </ul>
              </div>}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar