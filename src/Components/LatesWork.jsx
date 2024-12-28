import React, { useState } from 'react'
import assets from '../assets/assets'

const LatesWork = () => {

    const [showmore, setShowmore] = useState(false)

    return (
        <div className='w-full flex flex-col'>
            <div className='flex items-center justify-center sm:text-5xl text-4xl text-white sm:mt-[-40vh] mt-[-30vh] z-10'>
                <h1 className=' font-bold transition-all duration-500 hover:text-transparent bg-clip-text bg-gradient-to-r from-[#cd0383] to-[#7729ff]'>My latest works</h1>
            </div>
            <div className='w-full text-gray-400 text-sm flex items-center justify-center mt-8'>
                <div className='sm:max-w-[60%] max-w-[80%]'>
                    <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingrediants and culinary expertise.
                        Our mission is to satisfy your cravings</p>
                </div>
            </div>
            <div className='grid max-w-[100%] px-10 sm:px-20 gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-20 z-20'>
                {[assets.my_work2, assets.my_work1, assets.my_work2, assets.my_work1,
                assets.my_work2, assets.my_work1, assets.my_work2, assets.my_work1,].map((src, index) => (
                    <div key={index} className="relative w-[100%] lg:h-[18vh] xl:h-[25vh] rounded-lg overflow-hidden group">
                        <img className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" src={src} alt="" />
                        <div className="absolute inset-0 bg-red-800 opacity-0 transition-opacity duration-500 group-hover:opacity-75 flex flex-col items-center justify-center">
                            <img className='w-[50px]' src={assets.search_icon} alt="" />
                            <p className='text-xl text-white mt-2'>View Details</p>
                        </div>
                    </div>
                ))}
            </div>
            {
                showmore ?
                    <div className='grid max-w-[100%] px-10 sm:px-20 gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10 transition-transform z-10 duration-300'>
                        {[assets.my_work2, assets.my_work1, assets.my_work2, assets.my_work1].map((src, index) => (
                            <div key={index} className="relative w-[100%] lg:h-[18vh] xl:h-[25vh] rounded-lg overflow-hidden group">
                                <img className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" src={src} alt="" />
                                <div className="absolute inset-0 bg-red-800 opacity-0 transition-opacity duration-500 group-hover:opacity-75 flex flex-col items-center justify-center">
                                    <img className='w-[50px]' src={assets.search_icon} alt="" />
                                    <p className='text-xl text-white mt-2'>View Details</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    : <div></div>
            }
            <div className='w-full flex items-center justify-center mt-10'>
                <button onClick={() => setShowmore(!showmore)} className='p-4 bg-white rounded-full text-[#cd0383] z-10 transition-all duration-500 hover:scale-105'>{showmore ? 'Show Less' : 'Show More'}</button>
            </div>
        </div>
    )
}

export default LatesWork