import datas from '../data.json'
import Navbar from "../components/Navbar"
import {motion } from 'framer-motion'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../components/icons/Logo';

export default function Crew() {
    const [page,setPage] = useState(0)

    const pageVariants = {
        initial: { opacity: 0, x: -10 },
        in: { opacity: 1, x: 0, transition: { duration: 0.5 } },
        out: { opacity: 0, x: 50, transition: { duration: 0.5 } },
      };
    
    const All = {
        initial: { opacity: 0, x: 0 },
        in: { opacity: 1, x: 0, transition: { duration: 0.2 } },
    };

    function crew(e) {
        const id = e.target.id;
        switch (id) {
            case 1:
                setPage(id)
                break;
            case 2:
                setPage(id)
                break;
            case 3:
                setPage(id)
                break;
            default:
                setPage(id)
                break;
        }
    }
    
    return (
        <motion.div 
            key='crew'
            variants={pageVariants}
            initial='initial'
            animate='in'
            exit='out'
            onAnimationComplete={() => window.scrollTo(0, 0)}>
            <div className="bg-[url('./assets/crew/background-crew-mobile.jpg')] tablet:bg-[url('./assets/crew/background-crew-tablet.jpg')] desktop:bg-[url('./assets/crew/background-crew-desktop.jpg')]  bg-cover min-h-screen overflow-hidden bg-no-repeat bg-center transition-all duration-1000" >
                <div className='p-6 w-6 tablet:pl-10  desktop:pl-[55px] desktop:pt-16'>
                    <NavLink  to='/'>
                        <Logo></Logo>
                    </NavLink>     
                </div>
                <Navbar/>
                <hr className='border-[#383B4B] max-desktop:hidden  mt-[46px]  relative ml-[167px] mr-[800px]' />
                <div className='flex flex-col  pb-5 tablet:pb-0  h-full mt-8 tablet:mt-40' >
                    <p className='text-white desktop:ml-[165px] font-con tracking-[2.7px] tablet:tracking-[3.38px] desktop:tracking-[4.72px] mb-8 desktop:mb-0 tablet:mb-[60px] tablet:text-[20px] desktop:text-[28px] max-desktop:text-center tablet:text-start tablet:ml-10 '> <span className='text-white/[0.25] font-semibold pr-[18px]'>02</span>MEET YOUR CREW</p>
                    <div className='tablet:flex tablet:flex-col-reverse  desktop:flex-row-reverse desktop:justify-center '>
                        <center className='desktop:w-[680px]  ' >
                            <motion.div 
                                key={datas.crew[page].name}
                                variants={All}
                                initial='initial'
                                animate='in'
                                className="border-b border-[#383B4B] w-[90%] flex justify-center tablet:border-0">
                                <img src={datas.crew[page].images.png} className=' h-[223px] tablet:h-[572px] desktop:h-[743px]  tablet:max-w-min transition-all duration-1000'  alt={datas.crew[page].name} />
                            </motion.div>
                        </center>
                        <div className='tablet:flex tablet:flex-col-reverse  desktop:h-[500px] desktop:mt-[70px] desktop:ml-[252px] '>
                            <div className="flex my-8 tablet:my-10 desktop:my-0 space-x-4 justify-center desktop:justify-start desktop:mt-[120px]">
                                <div onClick={crew} id='0' className={`hover:cursor-pointer w-[10px] desktop:w-[15px] desktop:h-[15px] h-[10px] ${page == 0 ? 'bg-white rounded-full' : 'bg-white/15 rounded-full hover:bg-[#979797]'}`}></div>
                                <div onClick={crew} id='1'  className={`hover:cursor-pointer w-[10px] h-[10px] desktop:w-[15px] desktop:h-[15px] ${page == 1 ? 'bg-white rounded-full' : 'bg-white/15 rounded-full hover:bg-[#979797]'}`}></div>
                                <div onClick={crew} id='2'  className={`hover:cursor-pointer w-[10px] h-[10px] desktop:w-[15px] desktop:h-[15px] ${page == 2 ? 'bg-white rounded-full' : 'bg-white/15 rounded-full hover:bg-[#979797]'}`}></div>
                                <div onClick={crew} id='3'  className={`hover:cursor-pointer w-[10px] h-[10px] desktop:w-[15px] desktop:h-[15px] ${page == 3 ? 'bg-white rounded-full' : 'bg-white/15 rounded-full hover:bg-[#979797]'}`}></div>
                            </div>
                            <div className='desktop:w-[490px] desktop:mr-[60px] tablet:flex tablet:flex-col tablet:items-center desktop:block '>
                                <p className='text-white/40 text-[16px] tablet:text-[24px] desktop:text-[32px] text-center desktop:text-start font-belle '>{datas.crew[page].role.toUpperCase()} </p>
                                <p className='text-white text-2xl tablet:text-[40px] desktop:text-[56px] text-center desktop:text-start desktop:leading-none font-belle mt-2 mb-4 desktop:mt-3 desktop:mb-5'>{datas.crew[page].name.toUpperCase()} </p>
                                <motion.p 
                                    key={datas.crew[page].bio}
                                    variants={All}
                                    initial='initial'
                                    animate='in'
                                    className='font-bar desktop:h-[160px] desktop:w-[444px] desktop:text-start text-center text-[#D0D6F9] text-[15px] tablet:text-[16px] desktop:text-[18px] max-tablet:mx-6 tablet:w-[458px]  desktop:leading-[32px] leading-[25px]'>{datas.crew[page].bio} </motion.p>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}