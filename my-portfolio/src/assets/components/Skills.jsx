import React, { useState, useRef } from 'react'
import { InView, useInView } from "react-intersection-observer";

const Skills = () => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true
      });

    return (
        <section ref={ref} name='skills' className=' min-h-screen md:px-32 md:py-[48px] py-10 pb-8'>
            <div >
                {/* <div  className='   flex justify-center items-center  max-w-[50vw] mx-auto'>{inView &&<h1 className=' heading opacity-0 flex gap-4 md:text-[36px] text-[30px] border-b-2 border-[#0ef] py-1.5 text-white font-Concer'> <p >MY</p> <p className=' text-[#0ef]'>SKILLS</p> </h1>}</div> */}
                {inView && <div className=' heading opacity-0 flex justify-center items-center  max-w-[50vw] mx-auto md:mb-8 mb-9'>
                    <div className='font-Concer  md:text-[36px] text-[30px] relative py-0 px-4 w-fit bg-black  flex justify-center items-center before:content-[" "] before:absolute before:w-[36px] before:h-[36px] before:bg-[#0ef] before:z-[-10] before:right-[-6px] before:top-[-6px] after:content-[" "]  after:absolute after:w-[36px] after:h-[36px] after:bg-[#0ef] after:z-[-10] after:left-[-6px] after:bottom-[-6px]'>
                        <span className=' text-white flex justify-center items-center  gap-4'><p>My</p> <p className=' text-[#0ef]'>Skills</p> </span>
                    </div>
                </div>}
                {inView && <div className=' flex flex-col  md:gap-10  gap-6 py-[16px] md:mt-3 mt-5'>
                    <div className=' tskill opacity-0 flex  flex-wrap md:gap-8 gap-4 justify-center relative'>
                        <div className='skillcard-contianer  flex justify-center relative items-center bg-black rounded-3xl md:w-[145px] md:h-[145px] w-[125px] h-[125px] border-[2px]  border-t-[#3e7bac] border-l-[#3e7bac] border-b-[#ffd847] border-r-[#ffd847] shadow-[0_0_13px_2px_#3e7bac]  '>
                            <div className=' skillcard absolute '><img className=' md:w-[100px] w-[80px]' src='../python-original.svg' /></div>
                        </div>

                        <div className='skillcard-contianer flex justify-center relative items-center bg-black rounded-3xl md:w-[145px] md:h-[145px] w-[125px] h-[125px] border-[2px] border-[#e44d26] shadow-[0_0_13px_2px_#e44d26]'>
                            <div className=' skillcard absolute '><img className=' md:w-[100px] w-[80px]' src='../html5-original.svg' /></div>
                        </div>
                        <div className=' skillcard-contianer flex justify-center relative items-center bg-black rounded-3xl md:w-[145px] md:h-[145px] w-[125px] h-[125px] border-[2px] border-[#1572b6] shadow-[0_0_13px_2px_#1572b6]'>
                            <div className=' skillcard absolute '><img className=' md:w-[100px] w-[80px]' src='../css3-original.svg' /></div>
                        </div>
                        <div className='skillcard-contianer flex justify-center relative items-center bg-black rounded-3xl md:w-[145px] md:h-[145px] w-[125px] h-[125px] border-[2px] border-[#f0db4f] shadow-[0_0_13px_2px_#f0db4f]'>
                            <div className=' skillcard absolute '><img className=' md:w-[100px] w-[80px]' src='../javascript-plain.svg' /></div>
                        </div>
                        <div className=' skillcard-contianer flex justify-center relative items-center bg-black rounded-3xl md:w-[145px] md:h-[145px] w-[125px] h-[125px] border-[2px] border-[#38bdf8] shadow-[0_0_13px_2px_#38bdf8]'>
                            <div className=' skillcard absolute '><img className=' md:w-[100px] w-[80px]' src='../tailwindcss-original.svg' /></div>
                        </div>
                        <div className=' skillcard-contianer flex justify-center relative items-center bg-black rounded-3xl md:w-[145px] md:h-[145px] w-[125px] h-[125px] border-[2px] border-[#00618A] shadow-[0_0_13px_2px_#38bdf8]'>
                            <div className=' skillcard absolute '><img className=' md:w-[100px] w-[80px]' src='../mysql-original.svg' /></div>
                        </div>
                    </div>
                    <div className=' bskill opacity-0  flex flex-wrap md:gap-8 gap-4 justify-center'>
                        <div className='skillcard-contianer flex justify-center relative items-center bg-black rounded-3xl md:w-[145px] md:h-[145px] w-[125px] h-[125px] border-[2px] border-[#46a037] shadow-[0_0_13px_2px_#46a037]'>
                            <div className=' skillcard absolute '><img className=' md:w-[100px] w-[80px]' src='../mongodb-original.svg' /></div>
                        </div>
                        <div className='skillcard-contianer flex justify-center  relative items-center bg-black rounded-3xl md:w-[145px] md:h-[145px] w-[125px] h-[125px] border-[2px] border-[#61dafb] shadow-[0_0_13px_2px_#61dafb]'>
                            <div className=' skillcard absolute '><img className=' md:w-[100px] w-[80px]' src='../react-original.svg' /></div>
                        </div>
                        <div className='skillcard-contianer flex justify-center relative items-center bg-black rounded-3xl md:w-[145px] md:h-[145px] w-[125px] h-[125px] border-[2px] border-[#54a344] shadow-[0_0_13px_2px_#54a344]'>
                            <div className=' skillcard absolute '><img className=' md:w-[100px] w-[80px]' src='../nodejs-original.svg' /></div>
                        </div>
                        <div className='skillcard-contianer flex justify-center relative items-center bg-black rounded-3xl md:w-[145px] md:h-[145px] w-[125px] h-[125px] border-[2px] border-[#eab308] shadow-[0_0_13px_2px_#eab308]'>
                            <div className=' skillcard absolute '><img className=' md:w-[98px]  w-[80px]  bg-yellow-500 rounded-full' src='../express-original.svg' /></div>
                        </div>
                        <div className='skillcard-contianer flex justify-center relative items-center bg-black rounded-3xl md:w-[145px] md:h-[145px] w-[125px] h-[125px] border-[2px] border-[#764abc] shadow-[0_0_13px_2px_#764abc]'>
                            <div className=' skillcard absolute '><img className=' md:w-[100px] w-[80px]' src='../redux-original.svg' /></div>
                        </div>
                        <div className='skillcard-contianer flex justify-center relative items-center  rounded-3xl md:w-[145px] md:h-[145px] w-[125px] h-[125px] border-[2px] border-[#ffffff] shadow-[0_0_13px_2px_#ffffff]'>
                            <div className=' skillcard absolute bg-transparent '><img className='  figma-logo md:w-[100px] w-[80px]' src='../github-mark.svg' /></div>
                        </div>

                    </div>
                </div>}
            </div>
        </section>
    )
}

export default Skills 