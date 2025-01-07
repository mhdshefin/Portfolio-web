import assets from '../assets/assets'
import { motion } from 'motion/react'

const Header = ({ mode }) => {

    return (
        <div id='header' className={`w-full flex flex-col-reverse sm:flex sm:flex-row sm:pt-24 px-[10%] h-[90vh] pt-[110vh] transition-all duration-500 ease-in-out`}>
            <div className={`flex flex-col sm:w-[50%] w-full items-center mt-10 sm:mt-0 sm:items-start justify-center ${mode === 'light' ? 'text-[#1c1c1c]' : 'text-white'} `}>
                <div className='flex flex-col'>
                    <motion.h1
                    initial={{y:-20,opacity:0}}
                    whileInView={{y:0,opacity:1}}
                    transition={{duration:1,delay:0.1}}
                    className={`font-bold text-3xl sm:text-4xl `}>Hi, my name is</motion.h1>
                    <motion.h1
                    initial={{y:-20,opacity:0}}
                    whileInView={{y:0,opacity:1}}
                    transition={{duration:1,delay:0.1}}
                    className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#cd0383] to-[#7729ff] text-4xl sm:text-5xl mt-2'>Muhammed Shefin.</motion.h1>
                </div>
                <div className='flex flex-col mt-6 min-w-20 max-w-[50vh] text-justify'>
                    <motion.p
                    initial={{y:-25,opacity:0}}
                    whileInView={{y:0,opacity:1}}
                    transition={{duration:1,delay:0.1}}
                    >Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingrediants and culinary expertise. Our mission is to satisfy your cravings and  elevate your dinning exprerience. One delicious meel at a time</motion.p>
                </div>
                <div className='w-full flex items-start'>
                    <motion.a
                     initial={{x:-20,opacity:0}}
                     whileInView={{x:0,opacity:1}}
                     transition={{duration:1,delay:0.1}}
                    href="#contact"><div className='text-white bg-gradient-to-r from-[#cd0383] to-[#7729ff] rounded-full mt-8 flex p-3 gap-3 items-center justify-center hover:scale-110 transform transition-transform duration-500'>
                        <p>Contact me</p>
                        <img className='w-5 h-3' src={assets.arrow} alt="" />
                    </div>
                    </motion.a>
                </div>
            </div>

            <motion.div
            initial={{scale:0.5}}
            whileInView={{scale:1}}
            transition={{duration:1}}
            className={`flex flex-col sm:w-[50%] w-full items-center justify-center`}>
                <img className='sm:w-[80vh] w-[35vh]' src={assets.header_img} alt="" />
            </motion.div>
        </div>
    )
}



export default Header