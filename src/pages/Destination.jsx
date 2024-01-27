import datas from '../data.json'
import Navbar from "../components/Navbar"
import {motion } from 'framer-motion'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../components/icons/Logo';
import moon from '../assets/destination/image-moon.png'
import mars from '../assets/destination/image-mars.png'
import europa from '../assets/destination/image-europa.png'
import titan from '../assets/destination/image-titan.png'



export default function Destination() {
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
    
    function desti(e) {
        const textoBoton = e.target.textContent.trim();
        switch (textoBoton) {
            case 'MARS':
                setPage(1)
                break;
            case 'EUROPA':
                setPage(2)

                break;
            case 'TITAN':
                setPage(3)
                break;
            default:
                setPage(0)
                break;
        }
    }

    function img() {
        switch (page) {
            case 1:
                return mars
            case 2:
                return europa
            case 3:
                 return titan

            default:
                 return moon  
        }
     }

    return (
        <motion.div 
            key='destination'
            variants={pageVariants}
            initial='initial'
            animate='in'
            exit='out'
            onAnimationComplete={() => window.scrollTo(0, 0)}>
            <div className="bg-[url('./assets/destination/background-destination-mobile.jpg')] tablet:bg-[url('./assets/destination/background-destination-tablet.jpg')] desktop:bg-[url('./assets/destination/background-destination-desktop.jpg')]  min-h-screen bg-no-repeat bg-center bg-cover transition-all duration-1000">
                <div className='p-6 w-6 tablet:pl-10 desktop:pl-[55px] desktop:pt-16'>
                    <NavLink  to='/'>
                        <Logo></Logo>
                    </NavLink>     
                </div>
                <Navbar/>
                <hr className='border-[#383B4B] max-desktop:hidden  mt-[46px]   relative ml-[167px] mr-[800px]' />
                <div className=' flex flex-col  pb-5 mt-8 tablet:mt-40'>
                    <p className='text-white  desktop:ml-[165px] font-con tracking-[2.7px] tablet:tracking-[3.38px] desktop:tracking-[4.72px] mb-8 tablet:mb-[60px] tablet:text-[20px] desktop:text-[28px] max-desktop:text-center tablet:text-start tablet:ml-10 '> <span className='text-white/[0.25] font-semibold pr-[18px]'>01</span>PICK YOUR DESTINATION</p>
                    <div className='desktop:w-full desktop:flex  desktop:justify-center'>
                        <div className='desktop:flex desktop:flex-row desktop:items-center'>
                            <center>
                                <motion.img 
                                    key={datas.destinations[page].name}
                                    variants={All}
                                    initial='initial'
                                    animate='in'
                                    src={img()} 
                                    className='mb-[26px] desktop:mb-auto desktop:mt-auto tablet:mb-[53px] w-[150px] h-[150px] tablet:w-[300px]  tablet:h-[300px] desktop:w-[445px] desktop:h-[445px] desktop:mr-[157px] transition-all duration-1000'  
                                    alt={datas.destinations[page].name} />
                            </center>
                            
                            <div className='desktop:flex desktop:flex-col tablet:w- desktop:w-[445px]'>
                                <nav className='mb-5 tablet:mb-8 desktop:mb-5'>
                                    <ul className='text-[14px]  tablet:text-[16px] flex max-desktop:justify-center space-x-[27px] font-con tracking-[2.36px] text-[#D0D6F9]'>
                                        <li onClick={desti} className={`hover:cursor-pointer ${page == 0 ?'text-white pb-2 border-b-[3px]' : 'hover:border-b-2 hover:border-b-white/50'}`}>
                                                MOON
                                        </li>
                                        <li onClick={desti} className={`hover:cursor-pointer ${page == 1 ?'text-white pb-2 border-b-[3px]' : 'hover:border-b-2 hover:border-b-white/50'}`}>    
                                                MARS
                                        </li>
                                        <li onClick={desti} className={`hover:cursor-pointer ${page == 2 ?'text-white pb-2 border-b-[3px]' : 'hover:border-b-2 hover:border-b-white/50'}`}>
                                                EUROPA
                                        </li>
                                        <li onClick={desti} className={`hover:cursor-pointer ${page == 3 ?'text-white pb-2 border-b-[3px] ' : 'hover:border-b-2 hover:border-b-white/50'}`}>
                                                TITAN
                                        </li>
                                    </ul>
                                </nav>
                                <div className='flex flex-col max-desktop:items-center'>
                                    <p className='text-white desktop:-my-2 text-[56px] font-belle tablet:text-[80px] desktop:text-[100px] max-desktop:text-center'>{datas.destinations[page].name.toUpperCase()} </p>
                                    <div className='flex items-center flex-col' >
                                        <div className='mx-6 tablet:mx-[98px] desktop:mx-0' >
                                            <motion.p 
                                                key={datas.destinations[page].description}
                                                variants={All}
                                                initial='initial'
                                                animate='in'
                                                className='font-bar text-center desktop:text-start text-[#D0D6F9] text-[15px] tablet:text-[16px]  leading-[25px] desktop:text-[18px] desktop:leading-[32px]'>{datas.destinations[page].description} </motion.p>
                                                <hr className=' border-[#383B4B]  my-8' />
                                        </div>
                                        <div className='tablet:flex tablet:flex-row tablet:justify-evenly desktop:justify-start w-[90%]' >
                                            <div className='text-white font-belle text-[28px] max-desktop:text-center mb-8 desktop:mr-[79px]'>
                                                <p className='text-[#D0D6F9] font-con text-[14px] tracking-[2.36px] mb-3'>AVG. DISTANCE</p>
                                                <p>{datas.destinations[page].distance.toLocaleUpperCase()}</p>     
                                            </div>
                                            <div className='text-white font-belle text-[28px] max-desktop:text-center'>
                                                <p className='text-[#D0D6F9] font-con text-[14px] tracking-[2.36px] mb-3'>EST. TRAVEL TIME</p>
                                                {datas.destinations[page].travel.toUpperCase()}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}