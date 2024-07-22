import React, { useRef, useState, useEffect } from 'react'
import { InView, useInView } from 'react-intersection-observer'
import { VscGithub } from "react-icons/vsc";

const Projects = () => {
  const { ref, inView } = useInView();
  const [count, setCount] = useState(0)
  const title = ["PassLocker", "Intelligent Sewage Detection and Monitoring System", "Attendance System Using Face Recognition"]
  const desc = [" Developed PassLocker a full-stack web application designed to provide users with a safe and efficient platform to store their login credentials and other sensitive data.", ' Developed the Intelligent Sewage Detection and Monitoring System, an Iot hardware backed-up by an Android App which provides continuous updates on sewage levels, flow rates, and potential blockages.  ', " Developed an automated attendance system that records the  attendance through facial recognition by leveraging advanced machine learning algorithms and facial recognition technology."]
  const tech_stack = ["JavaScript, MongoDB, ExpressJS, NodeJS, ReactJS, Tailwind", "IoT, Android, Java, XML", " HTML, CSS, JS, ML, TensorFlow"]
  const github_repo = ["PassLocker-MERN-Application", "PassLocker-MERN-Application", "PassLocker-MERN-Application"]
  const proj_img = ["./images/passlocker.JPG", "./images/isdms.jpeg", "./images/attendance.jpeg"]
  const proj_ref = useRef()

  const changeForward = () => {

    if (count < title.length - 1) {
      setCount(count + 1)
    }
    else {
      setCount(0)
    }
  }

  const changeBackward = () => {
    if (count > 0) {
      setCount(count - 1)
    }
    else {
      setCount(title.length - 1)
    }
  }

  return (
    <section ref={ref} name='projects' className='min-h-screen  md:px-20 md:py-[36px] px-4 py-4 '>
      <div >
        { inView && <div className=' heading opacity-0 flex justify-center items-center md:mb-16 mb-10  max-w-[50vw] mx-auto'>
          <div className='font-Concer md:text-[36px] text-[28px] relative py-0 px-4 w-fit bg-black  flex justify-center items-center before:content-[" "] before:absolute before:w-[36px] before:h-[36px] before:bg-[#0ef] before:z-[-10] before:right-[-6px] before:top-[-6px] after:content-[" "]  after:absolute after:w-[36px] after:h-[36px] after:bg-[#0ef] after:z-[-10] after:left-[-6px] after:bottom-[-6px]'>
            <span className=' text-white flex justify-center items-center  gap-4'><p>Recent</p> <p className=' text-[#0ef]'>Projects</p> </span>
          </div>
        </div>}

        <div className=' md:hidden w-full flex flex-col gap-5 justify-center items-center' >{ inView && <> <div><img className='project-img opacity-0 h-[25vh] w-[77vw]' ref={proj_ref} src={proj_img[count]} /></div>
          <div className=' project-img opacity-0 flex justify-center items-center gap-6'>
            <div onClick={changeBackward} className=' bg-[#0ef]  p-[2px]'><img className=' w-6 h-6  ' src="./left-arrow.svg " /> </div>
            <div onClick={changeForward} className=' bg-[#0ef]  p-[2px]'><img className='w-6 h-6 ' src="./right-arrow.svg " /> </div>
          </div> </>}
          
        </div>
        <div className=' flex gap-3 justify-center '>
          <div className=' md:w-[60%] w-full ' >
            <div>{inView &&
              <div className=' project opacity-0 text-[#0ef] py-2.5 md:py-0'>
                <div className=' font-bold font-Kaushan md:text-[30px] text-[23px]'> {title[count]} </div>
                <div className=' h-[1.5px] bg-[#0ef] md:mb-4 mb-2.5'></div>
                <p className=' text-white font-poppins md:text-[16px] text-[15px]'>{desc[count]}</p>
                <div className=' flex items-center flex-wrap py-3  font-Calistoga '>{tech_stack[count]}</div>
              </div>}
              {/* <div className=' h-[1.5px] bg-[#0ef]'> </div> */}
              {inView && <div className='icons flex items-center gap-8 tx opacity-0 md:py-5 py-1 '>
                <a href={"https://github.com/Abdul-Ahad003/" + github_repo[count]} target='_blank'><div className=' home-icons text-[#0ef] hover:shadow-[0_0_10px_2px_#0ef] w-[45px] h-[45px] rounded-full '><VscGithub style={{ fontSize: "45px" }} /></div></a>
                <a href={"#"} target='_blank'><div className=' home-icons text-[#0ef] hover:shadow-[0_0_10px_2px_#0ef] w-[45px] h-[45px] rounded-full '><img className=' w-[45px] h-[45px] border-[3px] border-[#0ef] rounded-full' src='./arrow-up-right.svg' /></div></a>
              </div>}
            </div>
          </div>
          { inView && <div className=' hidden w-[40%] md:flex flex-col gap-5 justify-center items-center' >
            <div><img className='project-img opacity-0 h-80 w-[366px] ' ref={proj_ref} src={proj_img[count]} /></div>
            <div className=' project-img opacity-0 flex justify-center items-center gap-6'>
              <div onClick={changeBackward} className=' bg-[#0ef] p-1'><img className=' w-9 h-9 ' src="./left-arrow.svg " /> </div>
              <div onClick={changeForward} className=' bg-[#0ef] p-1'><img className=' w-9 h-9 ' src="./right-arrow.svg " /> </div>
            </div>
          </div>}
        </div>
      </div>
    </section>
  )
}

export default Projects