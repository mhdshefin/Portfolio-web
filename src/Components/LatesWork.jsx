import React, { useState } from 'react'
import assets from '../assets/assets'
import { motion } from 'motion/react'

const LatesWork = ({ mode }) => {

    const [showmore, setShowmore] = useState(false)

    return (
        <div className={`w-full flex flex-col ${mode === 'light' ? 'text-[#1c1c1c]' : 'text-white'} `}>
            <div className='flex items-center justify-center sm:text-5xl text-4xl sm:mt-[-40vh] mt-[-30vh] z-10'>
                <motion.h1
                    initial={{ y: -30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className=' font-bold z-10 transition-all duration-500 hover:text-transparent bg-clip-text bg-gradient-to-r from-[#cd0383] to-[#7729ff]'>My latest works</motion.h1>
            </div>
            <div className='w-full text-sm flex items-center justify-center mt-8'>
                <div className='sm:max-w-[60%] max-w-[80%]'>
                    <motion.p
                        initial={{ y: -30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                    >Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingrediants and culinary expertise.
                        Our mission is to satisfy your cravings</motion.p>
                </div>
            </div>

            <div className='flex flex-col gap-10'>

                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className='grid max-w-[100%] px-10 sm:px-20 gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-20 z-20'>
                    {[assets.my_work2, assets.my_work1, assets.my_work2, assets.my_work1].map((src, index) => (
                        <div key={index} className="relative w-[100%] lg:h-[18vh] xl:h-[25vh] rounded-lg overflow-hidden group border-2 shadow-lg">
                            <img className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" src={src} alt="" />
                            <div className="absolute inset-0 bg-red-800 opacity-0 transition-opacity duration-500 group-hover:opacity-75 flex flex-col items-center justify-center">
                                <img className='w-[50px]' src={assets.search_icon} alt="" />
                                <p className='text-xl mt-2'>View Details</p>
                            </div>
                        </div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className='grid max-w-[100%] px-10 sm:px-20 gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 z-20'>
                    {[assets.my_work2, assets.my_work1, assets.my_work2, assets.my_work1].map((src, index) => (
                        <div key={index} className="relative w-[100%] lg:h-[18vh] xl:h-[25vh] rounded-lg overflow-hidden group border-2 shadow-lg">
                            <img className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" src={src} alt="" />
                            <div className="absolute inset-0 bg-red-800 opacity-0 transition-opacity duration-500 group-hover:opacity-75 flex flex-col items-center justify-center">
                                <img className='w-[50px]' src={assets.search_icon} alt="" />
                                <p className='text-xl mt-2'>View Details</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
            {
                showmore ?
                    <div className='grid max-w-[100%] px-10 sm:px-20 gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10 transition-transform z-10 duration-300'>
                        {[assets.my_work2, assets.my_work1, assets.my_work2, assets.my_work1].map((src, index) => (
                            <div key={index} className="relative w-[100%] lg:h-[18vh] xl:h-[25vh] rounded-lg overflow-hidden group">
                                <img className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" src={src} alt="" />
                                <div className="absolute inset-0 bg-red-800 opacity-0 transition-opacity duration-500 group-hover:opacity-75 flex flex-col items-center justify-center">
                                    <img className='sm:w-[50px] w-[40px]' src={assets.search_icon} alt="" />
                                    <img src={assets.view} alt="" />
                                </div>
                            </div>
                        ))}
                    </div>
                    : <div></div>
            }
            <div className='w-full flex items-center justify-center mt-10'>
                <motion.button
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    onClick={() => setShowmore(!showmore)} className={`p-4 ${mode === 'light' ? 'bg-[#cd0383]' : 'bg-white'} rounded-full ${mode === 'light' ? 'text-white' : 'text-[#cd0383]'} z-10 transition-all duration-500 hover:scale-105`}>{showmore ? 'Show Less' : 'Show More'}</motion.button>
            </div>
        </div>
    )
}

export default LatesWork