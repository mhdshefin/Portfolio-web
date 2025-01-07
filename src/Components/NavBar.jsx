import React, { useEffect, useState } from 'react'
import assets from '../assets/assets'



const NavBar = ({ mode, setMode }) => {

    const [visible, setVisible] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {

        const handleScroll = () => {

            if (window.scrollY > 1) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className={`w-full h-14 sm:h-20 fixed top-0 left-0 z-40 ${mode==='light'?'text-[#1c1c1c]':'text-white'} transition-all duration-700 overflow-hidden ${scrolled ? mode === "dark" ? 'bg-[#111111e7]' : "bg-[#f5f5f5f5]" : 'bg-transparent'} ${scrolled? 'shadow-md':''}`}>
            <div className='px-4 md:px-6 flex justify-between'>
                <div className='flex justify-center items-center text-2xl pl-[15px] sm:pl-0 sm:text-4xl font-bold '>
                    <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-[#cd0383] to-[#7729ff]'>Shefin.</h1>
                </div>
                <div className='flex h-14 sm:h-20 justify-center items-center'>
                    <ul className='gap-7 md:gap-14  sm:text-lg text-sm hidden sm:flex '>
                        <a href="#header"><li className='hover:text-[#F9007D] cursor-pointer'>Home</li></a>
                        <a href="#about"><li className='hover:text-[#F9007D] cursor-pointer'>About</li></a>
                        <a href="#service"><li className='hover:text-[#F9007D] cursor-pointer'>Services</li></a>
                        <a href="#mywork"><li className='hover:text-[#F9007D] cursor-pointer'>Portfolio</li></a>
                        <a href="#contact"><li className='hover:text-[#F9007D] cursor-pointer'>Contact</li></a>
                    </ul>
                </div>
                <div className='flex items-center justify-center pl-20 '>
                    <h1 className='cursor-pointer' onClick={() => setMode(mode === "dark" ? "light" : "dark")}>{mode === "light" ?<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M484-80q-84 0-157.5-32t-128-86.5Q144-253 112-326.5T80-484q0-146 93-257.5T410-880q-18 99 11 193.5T521-521q71 71 165.5 100T880-410q-26 144-138 237T484-80Zm0-80q88 0 163-44t118-121q-86-8-163-43.5T464-465q-61-61-97-138t-43-163q-77 43-120.5 118.5T160-484q0 135 94.5 229.5T484-160Zm-20-305Z"/></svg> :<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/></svg>}</h1>
                </div>
                <div className='flex sm:hidden items-center justify-center'>
                    <img onClick={() => setVisible(true)} className='w-[35px] h-[25px]' src={assets.menu_icon} alt="" />
                </div>
                <div className={`fixed top-0 bottom-0 right-0 overflow-hidden transition-all z-50 max-w-[200px] ${visible ? 'w-1/2' : 'w-0'}`}>
                    <div className='flex flex-col bg-[#313131] w-full h-full'>
                        <div className='flex h-8 items-center'>
                            <img onClick={() => setVisible(false)} className='h-4 rotate-180 ml-1' src={assets.dropdown_icon} alt="" />
                            <p onClick={() => setVisible(false)} className='ml-2 text-white hover:text-transparent bg-clip-text bg-gradient-to-r from-[#BE0079] to-[#7C3AED]'>Back</p>
                        </div>
                        <a href="#header"><div onClick={() => setVisible(false)} className='w-full h-10 rounded-sm text-white bg-inherit hover:bg-gradient-to-r from-[#BE0079] to-[#7C3AED] mt-4 flex items-center pl-3'>
                            <p>Home</p>
                        </div></a>
                        <a href="#about"><div onClick={() => setVisible(false)} className='w-full h-10 rounded-sm text-white bg-inherit hover:bg-gradient-to-r from-[#BE0079] to-[#7C3AED] mt-[4px] flex items-center pl-3'>
                            <p>About</p>
                        </div></a>
                        <a href="#service"><div onClick={() => setVisible(false)} className='w-full h-10 rounded-sm text-white bg-inherit hover:bg-gradient-to-r from-[#BE0079] to-[#7C3AED] mt-[4px] flex items-center pl-3'>
                            <p>Services</p>
                        </div></a>
                        <a href="#mywork"><div onClick={() => setVisible(false)} className='w-full h-10 rounded-sm text-white bg-inherit hover:bg-gradient-to-r from-[#BE0079] to-[#7C3AED] mt-[4px] flex items-center pl-3'>
                            <p>Portfolio</p>
                        </div></a>
                        <a href="#contact"><div onClick={() => setVisible(false)} className='w-full h-10 rounded-sm text-white bg-inherit hover:bg-gradient-to-r from-[#BE0079] to-[#7C3AED] mt-[4px] flex items-center pl-3'>
                            <p>Contact</p>
                        </div></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar