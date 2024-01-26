import Drop from './icons/Drop'
import Close from './icons/Close'
import { NavLink } from "react-router-dom";
import { useEffect, useState } from 'react';
 
export default function Navbar() {

    function OpenMenu() {
        const element = document.getElementById('menu')
        element.style.opacity = '1'
        element.style.pointerEvents = 'auto'
      }
    
      function CloseMenu() {
        const element = document.getElementById('menu')
        element.style.opacity = '0'
        element.style.pointerEvents = 'none'
      }
    

    document.addEventListener('mousedown',function (e) {
        const menu = document.getElementById('menu');
        if (menu && !menu.contains(e.target) && window.innerWidth < 535 ) {
          menu.style.opacity = '0';
          menu.style.pointerEvents = 'none';
        }
    });

    const [bool, setBool] = useState(false)

    useEffect(() => {
        const menu = document.getElementById('menu');
        const handleResize = () => {
          if (window.innerWidth >= 535) {
            menu.style.opacity = '1'
            menu.style.pointerEvents = 'auto'
            setBool(true)
          } else {
            menu.style.opacity = '0';
            menu.style.pointerEvents = 'none';
            setBool(false)
          }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
      
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [bool]);


    return (
        <nav className='flex sticky top-0 w-min left-full -mt-[96px] desktop:'>
            <button className='mx-6 mt-9 tablet:hidden ' onClick={OpenMenu} >
                <Drop></Drop>
            </button>
            <div className="bg-white/[0.04] tablet:opacity-100 backdrop-blur-[40px] overflow-y-auto pb-5 tablet:p-0 h-screen w-[64%] desktop:w-[830px] fixed right-0 opacity-0 tablet:h-24 pointer-events-none ease-in-out duration-[500ms] transition-opacity " id='menu'>
                <div className='flex relative mb-16 mt-9 justify-end right-[26px] tablet:hidden'>
                    <Close className="hover:cursor-pointer" onClick={CloseMenu}></Close>
                </div>
                <ol start='0' className='tablet:flex tablet:justify-around  desktop:space-x-12 desktop:justify-end desktop:pr-[120px]  tablet:h-full  font-con ml-8 tablet:ml-0 text-[1rem] tablet:text-[14px] tablet:tracking-[2.36px] tracking-[2.7px] list-inside marker:font-black text-slate-50 list-decimal '>
                    <NavLink className={({isActive})=>(`flex w-max mt-8 tablet:m-0 tablet:justify-center tablet:items-center ${isActive ? "tablet:border-b-2" : 'tablet:hover:border-b-2 tablet:hover:border-b-white/50'}`)}  to="/" >
                        {
                            (({isActive})=> (
                            <li className={isActive ? 'border-b-2 border-b-white max-w-max tablet:border-0' : 'max-w-max max-tablet:hover:border-b-2 max-tablet:hover:border-b-white/50'}>
                                HOME
                            </li>
                            ))
                        }
                    </NavLink>
                    <NavLink className={({isActive})=>(`flex w-max mt-8 tablet:m-0 tablet:justify-center tablet:items-center ${isActive ? "tablet:border-b-2" : 'tablet:hover:border-b-2 tablet:hover:border-b-white/50'}`)}   to="/destination" >
                        {
                            (({isActive})=> (
                            <li className={isActive ? 'border-b-2 border-b-white max-w-max tablet:border-0' : 'max-w-max max-tablet:hover:border-b-2 max-tablet:hover:border-b-white/50'}>
                                DESTINATION
                            </li>
                            ))
                        }
                    </NavLink>
                    <NavLink className={({isActive})=>(`flex w-max mt-8 tablet:m-0 tablet:justify-center tablet:items-center ${isActive ? "tablet:border-b-2" : 'tablet:hover:border-b-2 tablet:hover:border-b-white/50'}`)}   to="/crew" >
                        {
                            (({isActive})=> (
                            <li className={isActive ? 'border-b-2 border-b-white max-w-max tablet:border-0' : 'max-w-max max-tablet:hover:border-b-2 max-tablet:hover:border-b-white/50'}>
                                CREW
                            </li>
                            ))
                        }
                    </NavLink>
                    <NavLink className={({isActive})=>(`flex w-max mt-8 tablet:m-0 tablet:justify-center tablet:items-center ${isActive ? "tablet:border-b-2" : 'tablet:hover:border-b-2 tablet:hover:border-b-white/50'}`)}   to="/technology" >
                        {
                            (({isActive})=> (
                            <li className={isActive ? 'border-b-2 border-b-white max-w-max tablet:border-0' : 'max-w-max max-tablet:hover:border-b-2 max-tablet:hover:border-b-white/50'}>
                                TECHNOLOGY
                            </li>
                            ))
                        }
                    </NavLink>
                </ol>
            </div>
        </nav>
        
    )
}