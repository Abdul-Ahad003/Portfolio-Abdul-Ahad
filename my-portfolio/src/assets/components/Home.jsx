import React, { useState, useEffect } from 'react'
import { VscGithub } from "react-icons/vsc";
import { MdEmail } from "react-icons/md";
import { TiSocialLinkedin } from "react-icons/ti"
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { InView, useInView } from "react-intersection-observer";



const Home = () => {

  const { ref, inView } = useInView();

  const [text] = useTypewriter({
    words: ['Software Engineer', 'Full Stack Developer', 'Problem Solver'],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 90
  })

  return (
    <section ref={ref} name='home' className=' min-h-screen md:px-32 md:py-[52px] px-6 py-8'>
      <div className=' flex justify-center items-center md:hidden h-[240px] relative w-full z-[-10] py-12'>
        {inView && <div className='photo  absolute  bottom-0 bg-transparent border-[3px] border-[#0ef] md:w-64 md:h-64 w-52 h-52 rounded-full box shadow-[0_0_20px_8px_#0ef]  '><img className=' md:w-[254px] md:h-[254px] w-[204px] h-[204px] rounded-full' src='./images/Profile_Abdul-Ahad.jpg' /></div>}
      </div>
      <div className='flex md:flex-row flex-col md:space-x-28 items-center md:py-6 py-2 md:mt-0 mt-[52px] '>
        <div className=' text-white md:w-full '>{inView && <div><h3 className=' md:text-[21px] text-[17px]  tx opacity-0'>Hello, My Name is</h3>
          <h1 className=' md:text-[36px] text-[28px]  tx opacity-0  font-Calistoga '>Abdul Ahad</h1>
          <h1 className=' flex gap-3 md:text-[36px] text-[30px] tx opacity-0' ><p>I'm a </p><p className=' text-[#0ef] font-extrabold  font-Great'>{text}</p> <Cursor cursorColor='#0ef' /></h1>
          <div className='tx md:text-[18px] text-[16px] md:py-2 py-1 opacity-0 font-poppins'><p>As an enthusiast Web Developer, I excel in Frontend Development as well as Full-Stack Development. With a strong foundation in problem solving i can build robust web applications . My ultimate goal is to contribute to projects that leverage technology for meaningful and impactful solutions.</p> </div></div>}

          {inView && <div className='icons flex items-center gap-8 tx opacity-0 md:py-5 py-3 '>
            <a href="https://github.com/Abdul-Ahad003" target='_blank'><div className=' home-icons text-[#0ef] hover:shadow-[0_0_10px_2px_#0ef] w-[45px] h-[45px] rounded-full '><VscGithub style={{ fontSize: "45px" }} /></div></a>
            <a href="mailto:abdul10102001@gmail.com"><div className='home-icons text-[#0ef] hover:shadow-[0_0_10px_2px_#0ef] w-[42.5px] h-[42.5px] flex justify-center items-center border-[3.5px] border-[#0ef]  rounded-full'><MdEmail style={{ fontSize: "30px" }} /></div></a>
            <a href="https://www.linkedin.com/in/abdul-ahad003" target='_blank'><div className='home-icons text-[#0ef] hover:shadow-[0_0_10px_2px_#0ef]  w-[42.5px] h-[42.5px] flex justify-center items-center border-[3.5px] border-[#0ef]  rounded-full'><TiSocialLinkedin style={{ fontSize: "45px" }} /></div></a>
          </div>}
        </div>
        <div className=' hidden md:flex md:h-[265px] h-[250px]  relative md:w-1/2 w-full z-[-10]'>{inView && <div className='photo absolute bottom-0 bg-transparent border-[3px] border-[#0ef] md:w-64 md:h-64 w-52 h-52 rounded-full box shadow-[0_0_20px_8px_#0ef]  '><img className=' md:w-[254px] md:h-[254px] w-[204px] h-[204px] rounded-full' src='./images/Profile_Abdul-Ahad.jpg' /></div>}

        </div>
      </div>

      <div className='md:py-0 py-2'>{inView && <a href="./Resume_Abdul-Ahad.pdf" download="Resume_Abdul-Ahad.pdf"><button  className=' hover:shadow-[0_0_15px_2px_#0ef] resume opacity-0  bg-[#0ef] px-5 font-bold py-2.5 rounded-full md:text-[16px] text-[18px] '> Resume</button></a>}</div>

    </section>
  )
}

export default Home