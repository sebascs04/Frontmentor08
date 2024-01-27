import datas from '../data.json'
import Navbar from "../components/Navbar"
import {motion } from 'framer-motion'
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../components/icons/Logo';
import vehicleportrait from '../assets/technology/image-launch-vehicle-portrait.jpg'
import spaceportportrait from '../assets/technology/image-spaceport-portrait.jpg'
import capsuleportrait from '../assets/technology/image-space-capsule-portrait.jpg'
import vehiclelandscape from '../assets/technology/image-launch-vehicle-landscape.jpg'
import spaceportlandscape from '../assets/technology/image-spaceport-landscape.jpg'
import capsulelandscape from '../assets/technology/image-space-capsule-landscape.jpg'

export default function Tech() {
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
    
    function launch(e) {
        const text = e.target.textContent.trim()-1;
        switch (text) {
            case 1:
                setPage(text)
                break;
            case 2:
                setPage(text)
                break;
            default:
                setPage(text)
                break;
        }
    }


    const [type,setType] = useState('landscape')
    var [img,setImg] = useState('')

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth >= 1024) {
            setType('portrait');
          } else {
            setType('landscape');
          }
        };

        const setImage = () => {
            switch (page) {
                case 0:
                    setImg(type === 'portrait' ? vehicleportrait : vehiclelandscape);
                    break;
                case 1:
                    setImg(type === 'portrait' ? spaceportportrait : spaceportlandscape);
                    break;
                case 2:
                    setImg(type === 'portrait' ? capsuleportrait : capsulelandscape);
                    break;
                default:
                    setImg('');
                    break;
            }
        };

        setImage();
        handleResize();
        window.addEventListener('resize', handleResize);
      
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [page, type]);
      
      useEffect(() => {
        console.log(img);
      }, [img]);

    return (
        <motion.div 
            key='tech'
            variants={pageVariants}
            initial='initial'
            animate='in'
            exit='out'
            onAnimationComplete={() => window.scrollTo(0, 0)}>
            <div className="bg-[url('./assets/technology/background-technology-mobile.jpg')] tablet:bg-[url('./assets/technology/background-technology-tablet.jpg')] desktop:bg-[url('./assets/technology/background-technology-desktop.jpg')] bg-cover overflow-hidden bg-center bg-no-repeat min-h-screen transition-all duration-1000">
                <div className='p-6 w-6 tablet:pl-10  desktop:pl-[55px] desktop:pt-16'>
                    <NavLink  to='/'>
                        <Logo></Logo>
                    </NavLink>     
                </div>
                <Navbar/>
                <hr className='border-[#383B4B] max-desktop:hidden   mt-[46px]   relative ml-[167px] mr-[800px]' />
                <div className='flex flex-col pb-5 tablet:mt-40 mt-8'>
                    <p className='text-white desktop:ml-[165px] font-con tracking-[2.7px] tablet:tracking-[3.38px] desktop:tracking-[4.72px] mb-8 tablet:mb-[60px] tablet:text-[20px] desktop:text-[28px] max-desktop:text-center tablet:text-start tablet:ml-10 '> <span className='text-white/[0.25] font-semibold pr-[18px]'>03</span>SPACE LAUNCH 101</p>
                    <div className='desktop:flex desktop:flex-row-reverse desktop:justify-center' >
                            <motion.img 
                                key={datas.technology[page].name}
                                variants={All}
                                initial='initial'
                                animate='in'
                                src={img} 
                                className=' h-[223px] max-desktop:w-full desktop:w-auto desktop:h-[527px] transition-all duration-1000'  
                                alt={datas.technology[page].name} />
                        <div className='desktop:flex desktop:mt-[80px]  desktop:mr-[130px] ' >
                            <div className="flex desktop:flex-col mt-[34px] desktop:ml-[250px] mb-[26px] desktop:text-[32px] tablet:mb-[44px] tablet:mt-[56px]  desktop:mt-0 justify-center desktop:justify-start desktop:mr-20">
                                <div onClick={launch} className={`flex hover:cursor-pointer desktop:w-20 desktop:h-20 justify-center items-center w-[40px] h-[40px] font-belle rounded-full ${page == 0 ? 'bg-white ' : 'text-white  border bg-transparent border-white/25  hover:border-white/90'}`}>1</div>
                                <div  onClick={launch} className={`flex hover:cursor-pointer desktop:w-20 desktop:h-20 max-desktop:mr-4 max-desktop:ml-4 desktop:mt-8 desktop:mb-8 justify-center items-center w-[40px] h-[40px] font-belle rounded-full ${page == 1 ? 'bg-white ' : 'text-white  border bg-transparent border-white/25  hover:border-white/90'}`}>2</div>
                                <div  onClick={launch} className={`flex hover:cursor-pointer desktop:w-20 desktop:h-20 justify-center items-center w-[40px] h-[40px] font-belle rounded-full ${page == 2 ? 'bg-white ' : 'text-white  border bg-transparent border-white/25  hover:border-white/90'}`}>3</div>
                            </div>
                            <div className='desktop:w-[470px] desktop:h-[330px]  tablet:flex tablet:flex-col tablet:items-center  desktop:block  ' >
                                <p className='text-[#D0D6F9] text-[14px] tablet:text-[16px] font-con tracking-[2.36px] desktop:tracking-[2.7px] text-center desktop:text-start desktop:mb-6 '>THE TERMINOLOGY...</p>
                                <p className='text-white text-2xl font-belle mt-2 mb-4 tablet:my-4 text-center tablet:text-[40px] desktop:text-start desktop:text-[56px] desktop:mb-6 '>{datas.technology[page].name.toUpperCase()} </p>
                                <motion.p 
                                    key={datas.technology[page].description}
                                    variants={All}
                                    initial='initial'
                                    animate='in'
                                    className='font-bar text-center text-[#D0D6F9] text-[15px] tablet:w-[458px] tablet:text-[16px] desktop:text-[18px] desktop:leading-8 mx-6 desktop:mx-0 leading-[25px] tablet:leading-7 desktop:text-start '>{datas.technology[page].description} </motion.p>            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
