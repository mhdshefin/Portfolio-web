import React from 'react'
import assets from '../assets/assets'

const About = () => {
    return (
        <div id='about' className='w-full sm:mt-20 mt-5 sm:pt-24 pt-24'>
            <div className='flex items-center justify-center text-white'>
                <h1 className='font-bold text-4xl sm:text-5xl transition-all duration-500 hover:text-transparent bg-clip-text bg-gradient-to-r from-[#cd0383] to-[#7729ff]'>About me</h1>
            </div>
            <div className='flex items-start sm:ml-[-10vh] ml-[-15vh] sm:mt-[-25vh] mt-[-1vh] w-full'>
                <img className='opacity-[0.3]' src={assets.bg_shape_bubble} alt="" />
            </div>
            <div className='sm:flex sm:mt-[-25vh] mt-[-35vh]'>
                <div className='sm:w-1/3 w-full sm:pl-10 p-10 flex items-center justify-center '>
                    <img className='rounded-xl sm:h-[40vh] h-[30vh] relative z-10 shadow-md ' src={assets.about_img} alt="" />
                </div>
                <div className='flex flex-col gap-2 sm:w-2/3 w-full sm:p-0 p-10 sm:mt-8 mt-[-55px] text-gray-400'>
                    <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingrediants and culinary expertise. </p>
                    <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingrediants and culinary expertise. Our mission is to satisfy your cravings and  elevate.</p>
                    <div className='flex flex-col w-full mt-5 gap-6 text-white font-bold sm:text-2xl text-sm'>
                        <div className='flex gap-5 items-center'>
                            <p>HTML & CSS</p>
                            <div className='w-[60%] bg-gradient-to-r from-[#cd0383] to-[#7729ff] sm:h-3 h-2 rounded-lg flex relative left-[-1]'></div>
                        </div>
                        <div className='flex gap-5 items-center'>
                            <p>JavaScript</p>
                            <div className='w-[45%] bg-gradient-to-r from-[#cd0383] to-[#7729ff] sm:h-3 h-2 rounded-lg flex relative left-3'></div>
                        </div>
                        <div className='flex gap-5 items-center'>
                            <p>React JS</p>
                            <div className='w-[50%] bg-gradient-to-r from-[#cd0383] to-[#7729ff] sm:h-3 h-2 rounded-lg flex relative left-9'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About