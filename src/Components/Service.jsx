import React from 'react'
import assets from '../assets/assets'
import {motion } from 'motion/react'

const Service = ({ mode }) => {
    return (
        <div id='service' className={`w-full flex flex-col sm:mt-16 mt-[-8vh] pt-24 ${mode === 'light' ? 'text-[#1c1c1c]' : 'text-white'}`}>
            <div className='flex items-center justify-center '>
                <motion.h1
                initial={{y:-20,opacity:0}}
                whileInView={{y:0,opacity:1}}
                transition={{duration:1}}
                className='font-bold sm:text-5xl text-4xl z-0 transition-all duration-500 hover:text-transparent bg-clip-text bg-gradient-to-r from-[#cd0383] to-[#7729ff]'>My services</motion.h1>
            </div>
            <div className='w-full text-sm flex items-center justify-center mt-8'>
                <div className='max-w-[60%]'>
                    <motion.p
                    initial={{y:-25,opacity:0}}
                    whileInView={{y:0,opacity:1}}
                    transition={{duration:0.8,delay:0.6}}
                    >Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingrediants and culinary expertise.
                        Our mission is to satisfy your cravings and  elevate your dinning exprerience.</motion.p>
                </div>
            </div>
            <div className='w-full h-auto flex flex-col'>
            <div className='w-full flex items-end justify-end mt-[-35vh] overflow-hidden'>
                    <img className={`rotate-180 sm:w-[40vh] w-[25vh] object-contain] ${mode === 'dark' ? 'opacity-[.3]' : 'opacity-[.7]'}`} src={assets.bg_shape} alt="" />
                </div>
                <div className='flex sm:flex-row flex-col lg:px-30 px-10 justify-between w-full mt-[-2vh] sm:mt-[-5vh] sm:gap-16 gap-14 z-10'>
                    <motion.div
                    initial={{y:30,opacity:0}}
                    whileInView={{y:0,opacity:1}}
                    transition={{duration:0.6}}
                    className={`flex flex-col items-center gap-6 sm:max-w-[40%] text-justify ${mode==='light'?'bg-[#f9f9f9]':'bg-[#262626]'} rounded-lg p-4 shadow-lg hover:scale-105 duration-500 transition-all`}>
                        <motion.img
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        transition={{duration:3,delay:.1}}
                        className='sm:w-80 w-64  invert hover:invert-0 contrast-0 brightness-200 hover:brightness-100 hover:contrast-100 transition-all duration-500 lg:h-[40vh] sm:h-[30vh] h-[35vh]' src={assets.ui} alt="" />
                        <motion.p
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        transition={{duration:2,delay:.2}}
                        className='font-semibold text-xl sm:text-3xl transition-all duration-500 hover:text-transparent bg-clip-text bg-gradient-to-r from-[#cd0383] to-[#7729ff]'>User Interface Design</motion.p>
                        <motion.p
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        transition={{duration:2,delay:.2}}
                        >Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingrediants and culinary expertise. Our mission is to satisfy your cravings and  elevate your dinning exprerience. One delicious meel at a time</motion.p>
                    </motion.div>
                    <motion.div
                    initial={{y:30,opacity:0}}
                    whileInView={{y:0,opacity:1}}
                    transition={{duration:0.6}}
                    className={`flex flex-col items-center gap-6 sm:max-w-[40%] text-justify ${mode==='light'?'bg-[#f9f9f9]':'bg-[#262626]'} rounded-lg p-4 shadow-lg hover:scale-105 duration-500 transition-all`}>
                        <motion.img
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        transition={{duration:3,delay:.1}}
                        className='sm:w-80 w-64 invert hover:invert-0 contrast-0 brightness-200 hover:brightness-100 hover:contrast-100 transition-all duration-500 lg:h-[40vh] sm:h-[30vh] h-[30vh]' src={assets.web} alt="" />
                        <motion.p
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        transition={{duration:2,delay:.2}}
                        className='font-semibold text-xl lg:text-3xl transition-all duration-500 hover:text-transparent bg-clip-text bg-gradient-to-r from-[#cd0383] to-[#7729ff]'>Full Stack Developer</motion.p>
                        <motion.p
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        transition={{duration:2,delay:.3}}
                        >Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingrediants and culinary expertise. Our mission is to satisfy your cravings and  elevate your dinning exprerience. One delicious meel at a time</motion.p>
                    </motion.div>
                    <motion.div
                    initial={{y:30,opacity:0}}
                    whileInView={{y:0,opacity:1}}
                    transition={{duration:0.6}}
                    className={`flex flex-col items-center gap-6 sm:max-w-[40%] text-justify ${mode==='light'?'bg-[#f9f9f9]':'bg-[#262626]'} rounded-lg p-4 shadow-lg hover:scale-105 duration-500 transition-all`}>
                        <motion.img
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        transition={{duration:3,delay:.1}}
                        className='sm:w-80 w-64 invert hover:invert-0 contrast-0 brightness-200 hover:brightness-100 hover:contrast-100 transition-all duration-500 lg:h-[40vh] sm:h-[30vh] h-[33vh]' src={assets.art} alt="" />
                        <motion.p
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        transition={{duration:2,delay:.2}}
                        className='font-semibold text-xl sm:text-3xl transition-all duration-500 hover:text-transparent bg-clip-text bg-gradient-to-r from-[#cd0383] to-[#7729ff]'>Artist</motion.p>
                        <motion.p
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        transition={{duration:2,delay:.3}}
                        className=' mt-[-2px]'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingrediants and culinary expertise. Our mission is to satisfy your cravings and  elevate your dinning exprerience. One delicious meel at a time</motion.p>
                    </motion.div>
                </div>
                <div id='mywork' className='w-full flex items-start justify-start'>
                    <img className={` sm:w-[40vh] w-[25vh] ${mode==='dark'?'opacity-[.3]':'opacity-[.7]'} `} src={assets.bg_shape} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Service