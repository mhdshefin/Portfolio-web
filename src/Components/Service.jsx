import React from 'react'
import assets from '../assets/assets'

const Service = () => {
    return (
        <div id='service' className='w-full flex flex-col sm:mt-16 mt-[-8vh] pt-20'>
            <div className='flex items-center justify-center text-white '>
                <h1 className='font-bold sm:text-5xl text-4xl z-0 transition-all duration-500 hover:text-transparent bg-clip-text bg-gradient-to-r from-[#cd0383] to-[#7729ff]'>My services</h1>
            </div>
            <div className='w-full text-gray-400 text-sm flex items-center justify-center mt-8'>
                <div className='max-w-[60%]'>
                    <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingrediants and culinary expertise.
                        Our mission is to satisfy your cravings and  elevate your dinning exprerience.</p>
                </div>
            </div>
            <div className='w-full h-auto flex flex-col'>
                <div className='w-full flex items-end justify-end mt-[-35vh]'>
                    <img className='rotate-180 sm:w-[40vh] w-[25vh] opacity-[.3]' src={assets.bg_shape} alt="" />
                </div>
                <div className='flex sm:flex-row flex-col lg:px-30 px-10 justify-between w-full mt-[-2vh] sm:mt-[-10vh] text-white sm:gap-20 gap-14'>
                    <div className='flex flex-col items-center gap-6 sm:max-w-[40%] text-justify'>
                        <img className='sm:w-80 w-64  invert hover:invert-0 contrast-0 brightness-200 hover:brightness-100 hover:contrast-100 transition-all duration-500 lg:h-[40vh] sm:h-[30vh] h-[35vh]' src={assets.ui} alt="" />
                        <p className='font-semibold text-xl sm:text-3xl transition-all duration-500 hover:text-transparent bg-clip-text bg-gradient-to-r from-[#cd0383] to-[#7729ff]'>User Interface Design</p>
                        <p className='text-gray-400'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingrediants and culinary expertise. Our mission is to satisfy your cravings and  elevate your dinning exprerience. One delicious meel at a time</p>
                    </div>
                    <div className='flex flex-col items-center gap-6 sm:max-w-[40%] text-justify'>
                        <img className='sm:w-80 w-64 invert hover:invert-0 contrast-0 brightness-200 hover:brightness-100 hover:contrast-100 transition-all duration-500 lg:h-[40vh] sm:h-[30vh] h-[30vh]' src={assets.web} alt="" />
                        <p className='font-semibold text-xl lg:text-3xl transition-all duration-500 hover:text-transparent bg-clip-text bg-gradient-to-r from-[#cd0383] to-[#7729ff]'>Full Stack Developer</p>
                        <p className='text-gray-400'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingrediants and culinary expertise. Our mission is to satisfy your cravings and  elevate your dinning exprerience. One delicious meel at a time</p>
                    </div>
                    <div className='flex flex-col items-center gap-6 sm:max-w-[40%] text-justify'>
                        <img className='sm:w-80 w-64 invert hover:invert-0 contrast-0 brightness-200 hover:brightness-100 hover:contrast-100 transition-all duration-500 lg:h-[40vh] sm:h-[30vh] h-[33vh]' src={assets.art} alt="" />
                        <p className='font-semibold text-xl sm:text-3xl transition-all duration-500 hover:text-transparent bg-clip-text bg-gradient-to-r from-[#cd0383] to-[#7729ff]'>Artist</p>
                        <p className='text-gray-400 mt-[-2px]'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingrediants and culinary expertise. Our mission is to satisfy your cravings and  elevate your dinning exprerience. One delicious meel at a time</p>
                    </div>
                </div>
                <div id='mywork' className='w-full flex items-start justify-start'>
                    <img className='sm:w-[40vh] w-[25vh] opacity-[.3]' src={assets.bg_shape} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Service