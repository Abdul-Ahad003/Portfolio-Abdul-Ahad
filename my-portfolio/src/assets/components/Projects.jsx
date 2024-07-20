import React, { useRef, useState, useEffect } from 'react'
import { InView, useInView } from 'react-intersection-observer'
import { VscGithub } from "react-icons/vsc";

const Projects = () => {
  const { ref, inView } = useInView();
  const [count, setCount] = useState(0)
  const title = ["PassLocker", "Intelligent Sewage Detection and Monitoring System", "Attendance System Using Face Recognition"]
  const desc = [" PassLocker is a secure credential manager web application designed to provide users with a safe and efficient platform to store their login credentials and other sensitive data. It aims to simplify the management of multiple credentials, which is especially useful for individuals who need to handle numerous accounts across various platforms. ", 'The Intelligent Sewage Detection and Monitoring System is a cutting-edge solution that revolutionizes sewage management.  By deploying advanced sensors and leveraging IoT technology, it provides continuous updates on sewage levels, flow rates, and potential blockages, helping to prevent overflows and maintain optimal functioning of  of sewage infrastructure which results in reduction of sewage management issues by 70%. ', " An automated attendance system that revolutionizes the way attendance is tracked and managed by leveraging advanced machine learning algorithms and facial recognition technology. With an accuracy of 95%,this system ensures accurate and efficient attendance recording, eliminating the need for manual processes and reducing errors."]
  const tech_stack = ["JavaScript, MongoDB, ExpressJS, NodeJS, ReactJS, Tailwind", "IoT, Android, Java, XML", " HTML, CSS, JS, ML, TensorFlow"]
  const github_repo = ["PassLocker-MERN-Application", "PassLocker-MERN-Application", "PassLocker-MERN-Application"]
  const proj_img = ["./images/about.jpg", "./images/isdms.jpeg", "./images/attendance.jpeg"]
  const proj_ref = useRef()

  const changeForward = () => {

    if (count < title.length - 1) {
      setCount(count + 1)
      console.log(count);
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
    <section ref={ref} name='projects' className='min-h-screen  md:px-20 md:py-[36px] px-7 py-4 '>
      <div >
        { inView && <div className=' heading opacity-0 flex justify-center items-center mb-16  max-w-[50vw] mx-auto'>
          <div className='font-Concer md:text-[36px] text-[30px] relative py-0 px-4 w-fit bg-black  flex justify-center items-center before:content-[" "] before:absolute before:w-[36px] before:h-[36px] before:bg-[#0ef] before:z-[-10] before:right-[-6px] before:top-[-6px] after:content-[" "]  after:absolute after:w-[36px] after:h-[36px] after:bg-[#0ef] after:z-[-10] after:left-[-6px] after:bottom-[-6px]'>
            <span className=' text-white flex justify-center items-center  gap-4'><p>Recent</p> <p className=' text-[#0ef]'>Projects</p> </span>
          </div>
        </div>}

        <div className=' md:hidden w-full flex flex-col gap-5 justify-center items-center' >{ inView && <> <div><img className='project-img opacity-0 h-64 w-[300px]' ref={proj_ref} src={'http://localhost:5173/' + proj_img[count]} /></div>
          <div className=' project-img opacity-0 flex justify-center items-center gap-6'>
            <div onClick={changeBackward} className=' bg-[#0ef]  p-[2px]'><img className=' w-6 h-6  ' src="./left-arrow.svg " /> </div>
            <div onClick={changeForward} className=' bg-[#0ef]  p-[2px]'><img className='w-6 h-6 ' src="./right-arrow.svg " /> </div>
          </div> </>}
          
        </div>
        <div className=' flex gap-3 justify-center '>
          <div className=' md:w-[60%] w-full ' >
            <div>{inView &&
              <div className=' project opacity-0 text-[#0ef] py-4 md:py-0'>
                <div className=' font-bold font-Kaushan md:text-[30px] text-[24px]'> {title[count]} </div>
                <div className=' h-[1.5px] bg-[#0ef] mb-4'></div>
                <p className=' text-white font-poppins'>{desc[count]}</p>
                <div className=' flex items-center flex-wrap py-3  font-Calistoga '>{tech_stack[count]}</div>
              </div>}
              {/* <div className=' h-[1.5px] bg-[#0ef]'> </div> */}
              {inView && <div className='icons flex items-center gap-8 tx opacity-0 md:py-5 py-3 '>
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