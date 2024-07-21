import React from 'react'
import { Link } from 'react-scroll';
import { InView, useInView } from "react-intersection-observer";


const About = () => {
    const { ref, inView } = useInView()


    return (
        <section name='about' className=' min-h-screen md:px-32 md:py-[52px] px-5 py-4  '>
            <div ref={ref} className='flex md:flex-row flex-col md:gap-12  gap-8 justify-center items-center'>{inView && <div className=' md:h-[265px] h-[27vh] md:block flex justify-center relative md:w-1/2 w-full z-[-10]'>
                <div className='aboutimg absolute opacity-0  bottom-0 bg-transparent border-[4.5px] border-[#0ef] md:w-64 md:h-64 w-52 h-52 rounded-full flex justify-center items-center box shadow-[0_0_20px_8px_#0ef] '><img className='md:w-[254px] md:h-[254px] w-[204px] h-[204px] rounded-full' src='./images/about.jpg' /></div>
            </div>}

                {inView && <div className=' text-white md:w-3/4 w-full md:py-0 py-4 about  opacity-0'>
                    {/* <div className='flex gap-2 md:text-[36px] text-[30px] heading opacity-0 font-Concer'> <p >About</p> <p className=' text-[#0ef]'>Me</p> </div> */}
                    <div className=' heading py-3 ml-[5px]'>
                        <div className='font-Concer  md:text-[36px] text-[30px] relative py-0 px-4 w-fit bg-black  flex justify-center items-center before:content-[" "] before:absolute before:w-[36px] before:h-[36px] before:bg-[#0ef] before:z-[-10] before:right-[-6px] before:top-[-6px] after:content-[" "]  after:absolute after:w-[36px] after:h-[36px] after:bg-[#0ef] after:z-[-10] after:left-[-6px] after:bottom-[-6px]'>
                            <span className=' text-white flex justify-center items-center  gap-2'><p>About</p> <p className=' text-[#0ef]'>Me</p> </span>
                        </div>
                    </div>
                    <div className=' bg-[#0ef] h-[1.5px] mt-4'></div>
                    <div className=' md:text-[17px]  text-[15.5px] md:py-3 font-poppins'>
                        <p className=' py-2'>I am a B.Tech.  graduate in Computer Science and Engineering from Pranveer Singh Institute of Technology, Kanpur. With a deep passion for web development, along with proficiency in various programming languages, I'm dedicated to building innovative and user-centric digital solutions.</p>
                        <p className=' py-2'>I am passionate about turning ideas into reality through code. Let's connect to bring your digital ideas to life!</p>
                    </div>
                </div>}
            </div>
            {inView && <div className=' py-4 flex justify-center'> <Link to='skills' activeClass="active" offset={-70} smooth={true} duration={500}>  <button className=' hover:shadow-[0_0_15px_2px_#0ef]  resume opacity-0  bg-[#0ef] px-5  font-bold py-2.5 rounded-full '>Read More</button> </Link></div>}
        </section>
    )
}

export default About