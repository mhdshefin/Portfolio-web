import React, { useEffect, useState } from 'react'
import assets from '../assets/assets'


const NavBar = () => {

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
        <div className={`w-full h-14 sm:h-20 fixed top-0 left-0 z-40 transition-all duration-700 overflow-hidden ${scrolled ? 'bg-[#0b0b0be7]' : 'bg-transparent'}`}>
            <div className='px-4 md:px-6 flex justify-between'>
                <div className='flex justify-center items-center text-2xl pl-[15px] sm:pl-0 sm:text-4xl font-bold '>
                    <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-[#cd0383] to-[#7729ff]'>Shefin.</h1>
                </div>
                <div className='flex h-14 sm:h-20 justify-center items-center text-white hover:text-gray-300'>
                    <ul className='gap-7 md:gap-14  sm:text-lg text-sm hidden sm:flex '>
                        <a href="#header"><li className='hover:text-[#F9007D] cursor-pointer'>Home</li></a>
                        <a href="#about"><li className='hover:text-[#F9007D] cursor-pointer'>About</li></a>
                        <a href="#service"><li className='hover:text-[#F9007D] cursor-pointer'>Services</li></a>
                        <a href="#mywork"><li className='hover:text-[#F9007D] cursor-pointer'>Portfolio</li></a>
                        <a href="#contact"><li className='hover:text-[#F9007D] cursor-pointer'>Contact</li></a>
                    </ul>
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