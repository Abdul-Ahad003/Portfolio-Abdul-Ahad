import React from 'react'
import { InView, useInView } from 'react-intersection-observer';
import Swal from 'sweetalert2'

const Contact = () => {

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "edc76486-f322-4830-a54a-99a5621174b1");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    })
    // const data = await res.json()
    Swal.fire("Success!", "Sent Successfully", "success")
  }


  return (
    <section ref={ref} name='contact' className='min-h-screen md:px-32 md:py-[52px] py-5'>
      <div className=' flex md:flex-row flex-col md:items-center md:gap-3  relative gap-6 '>
        <div className=' md:w-1/2 md:px-0 px-7'>
          {inView &&
            <div className=' py-3  absolute top-0 '>
              <h1 className=' heading opacity-0 flex gap-4 md:text-[36px] text-[30px]  text-white font-Concer'>
                <p >CONTACT</p> <p className=' text-[#0ef]'>ME</p> </h1>
              <div className=' heading opacity-0 mb-1.5 rounded-2xl w-28 h-1.5 bg-[#0ef]'></div> <div className=' heading opacity-0 w-20 rounded-2xl h-1.5 bg-[#0ef]'></div>
            </div>}
          {inView && <div className='cont-info opacity-0 flex flex-col md:gap-5 gap-2.5 md:mt-10 mt-24 py-1'>
            <div className='text-[#0ef] flex items-center gap-5'><a href="tel:+916394030673"><img className=' w-[28px] md:w-[60px] ' src='../phone-svgrepo-com.svg' /></a> <a href="tel:+916394030673"> <span className='font-Pacifico md:text-[26px] text-[20px] '>+91-6394030673</span></a> </div>
            <div className='text-[#0ef] flex items-center gap-5'><a href="mailto:abdul10102001@gmail.com"><img className=' w-[28px] md:w-[60px] ' src='../email-svgrepo-com.svg' /></a> <a href="mailto:abdul10102001@gmail.com"> <span className=' font-Pacifico md:text-[26px] text-[20px] '> abdul10102001@gmail.com</span></a></div>
            <div className='text-[#0ef] flex items-center gap-5'><a href="https://www.linkedin.com/in/abdul-ahad003" target='_blank'><img className=' w-[28px] md:w-[60px] ' src='../linkedin-svgrepo-com.svg' /></a> <a href="https://www.linkedin.com/in/abdul-ahad003" target='_blank'><span className='font-Pacifico md:text-[26px] text-[20px]'>abdul-ahad003</span></a></div>
          </div>}
        </div>
        <div className=' md:px-0 px-7 md:w-1/2 md:py-3 py-1.5 '>
          {inView && <form onSubmit={handleSubmit} className=' font-Kaushan opacity-0 form bg-[#0f0f0f] text-white flex flex-col py-7 md:px-5 px-2.5 gap-4'>
            <div className=' flex md:gap-6 gap-4 justify-between '>
              <input name='name' className=' rounded-xl py-2.5 px-3 w-full outline-none bg-black border-2 border-[#0ef]' type='text' placeholder='Full Name' required />
              <input name='subject' className=' rounded-xl py-2.5 px-3 w-full outline-none bg-black border-2 border-[#0ef]' type='text' placeholder='Subject' required />
            </div>

            <div className=' flex md:gap-6 gap-4 justify-between '>
              <input name='email' className='rounded-xl py-2.5 px-3 w-full outline-none bg-black border-2 border-[#0ef]' type='email' placeholder='Email' required />
              <input name='phone' className='rounded-xl py-2.5 px-3 w-full outline-none bg-black border-2 border-[#0ef]' type='tel' placeholder='Phone Number' required />
            </div>

            <div>
              <textarea name='message' className=' w-full h-[200px] rounded-xl py-2.5 px-3 outline-none bg-black border-2 border-[#0ef]' type='text' placeholder='Your Message' required />
            </div>

            <div className=' text-black flex justify-center items-center'> <input type='submit' className=' cursor-pointer text-[19px] hover:shadow-[0_0_15px_1px_#0ef] bg-[#0ef] py-2 px-7 rounded-full font-bold ' value={"Send"} /> </div>

          </form>}
        </div>
      </div>
    </section>
  )
}

export default Contact