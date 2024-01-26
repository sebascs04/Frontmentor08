import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar"
import {motion } from 'framer-motion'
import Logo from "../components/icons/Logo";

export default function Home() {
  const pageVariants = {
    initial: { opacity: 0, x: -10 },
    in: { opacity: 1, x: 0, transition: { duration: 0.5 }},
    out: { opacity: 0, x: 50, transition: { duration: 0.5 } },
  };
    return (
      <motion.div 
        key='home'
        variants={pageVariants}
        initial='initial'
        animate='in'
        exit='out'
        onAnimationComplete={() => window.scrollTo(0, 0)}>
          <div className="bg-[url('./assets/home/background-home-mobile.jpg')] tablet:bg-[url('./assets/home/background-home-tablet.jpg')] desktop:bg-[url('./assets/home/background-home-desktop.jpg')]  min-h-screen bg-no-repeat bg-center bg-cover transition-all duration-1000">
            <div className='p-6 w-6  tablet:pl-10 desktop:pl-[55px] desktop:pt-16'>
              <NavLink  to='/'>
                  <Logo></Logo>
              </NavLink>     
            </div>
            <Navbar/>
            <hr className='border-[#383B4B] max-desktop:hidden  mt-[46px]   relative ml-[167px] mr-[800px]' />
            <div className=' flex flex-col desktop:flex-row desktop:justify-around max-desktop:items-center pb-5 mt-[112px] desktop:mt-[251px]'>
              <div className='text-slate-300 max-desktop:text-center max-desktop:mb-[81px] tablet:w-[450px]'>
                <p className='text-[16px] desktop:text-start text-[#D0D6F9] font-con tracking-[2.7px] tablet:tracking-[3.38px] tablet:text-[20px] desktop:text-[28px]  desktop:tracking-[4.72px]'>SO, YOU WANT TO TRAVEL TO</p>
                <p className='text-white my-4 text-[80px] font-belle tablet:text-[150px] tablet:leading-[150px] tablet:my-6 desktop:[150px]'>SPACE</p>
                <p className='text-[#D0D6F9] text-[15px]   font-bar max-desktop:px-6 leading-7 tablet:text-[16px] desktop:text-[18px] desktop:text-start'>
                  Let's face it; if you want to go to space, you might as well 
                  genuinely go to space and not hover kind of on the edge of it. Well sit back, and relax because
                  we'll give you a truly out of this word experiencie!
                </p>
              </div>
                <NavLink id="nav" className='text-black transition-all duration-1000 font-belle desktop:mt-auto hover: h-[150px] w-[150px]  tablet:w-[242px]  tablet:h-[242px] desktop:w-[274px] desktop:h-[274px]  bg-white text-2xl  rounded-full flex justify-center items-center' to='/destination'>
                      <h1 className='p-0 tablet:text-[32px] tracking-[1.25px] text-[20px] tablet:tracking-[2px]'>EXPLORE</h1>
                </NavLink>
            </div>
          </div> 
      </motion.div>
      )
}