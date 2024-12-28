import React, { useEffect, useState } from 'react'
import assets from '../assets/assets'

const Header = () => {

    return (
        <div id='header' className={`w-full flex flex-col-reverse sm:flex sm:flex-row sm:pt-24 px-[10%] h-[90vh] pt-[100vh]`}>
            <div className='flex flex-col sm:w-[50%] w-full items-center mt-10 sm:mt-0 sm:items-start justify-center'>
                <div className='flex flex-col'>
                    <h1 className='font-bold text-white text-3xl sm:text-4xl'>Hi, my name is</h1>
                    <h1 className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#cd0383] to-[#7729ff] text-4xl sm:text-5xl mt-2'>Muhammed Shefin.</h1>
                </div>
                <div className='flex flex-col mt-6 text-white min-w-20 max-w-[50vh] text-justify'>
                    <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingrediants and culinary expertise. Our mission is to satisfy your cravings and  elevate your dinning exprerience. One delicious meel at a time</p>
                </div>
                <div className='w-full flex items-start'>
                    <a href="#contact"><div className='text-white bg-gradient-to-r from-[#cd0383] to-[#7729ff] rounded-full mt-8 flex p-3 gap-3 items-center justify-center hover:scale-110 transform transition-transform duration-500'>
                        <p>Contact me</p>
                        <img className='w-5 h-3' src={assets.arrow} alt="" />
                    </div></a>
                </div>
            </div>

            <div className={`flex flex-col sm:w-[50%] w-full items-center justify-center sm:mt-0 mt-10`}>
                <img className='sm:w-[80vh] w-[35vh]' src={assets.header_img} alt="" />
            </div>
        </div>
    )
}



export default Header