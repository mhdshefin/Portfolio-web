import React, { useEffect, useState } from 'react'
import assets from '../assets/assets'
import { motion } from 'motion/react'

const Contact = ({ mode }) => {
    const [windowSize, setWindowSize] = useState(window.innerWidth)
    const [result, setResult] = React.useState("");


    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "02384656-2e33-4e21-830a-8c3b468e45a8");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    useEffect(() => {
        const handleResize = () => setWindowSize(window.innerWidth);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div id='contact' className={`flex flex-col w-full sm:mt-20 sm:pt-20 pt-24 mt-0 ${mode === 'light' ? 'text-[#1c1c1c]' : 'text-white'}`}>
            <div className='flex items-center justify-center z-10'>
                <motion.h1
                    initial={{ y: -30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className='font-bold text-4xl sm:text-5xl transition-all duration-500 z-10 hover:text-transparent bg-clip-text bg-gradient-to-r from-[#cd0383] to-[#7729ff]'>Contact me</motion.h1>
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
            <div className='flex w-[395px] items-start sm:ml-[-10vh] ml-[-15vh] sm:mt-[-40vh] mt-[-45vh]'>
                <img className={` ${mode === 'light' ? 'opacity-[.7]' : 'opacity-[.3]'} sm:w-full w-[50vh]`} src={assets.bg_shape_bubble} alt="" />
            </div>
            <div className='flex sm:flex-row flex-col w-full sm:px-10 px-1 mt-10 sm:mt-0'>
                <form className=' sm:w-2/3 w-full' onSubmit={onSubmit}>
                    <div className='flex flex-col w-full gap-5 items-center'>
                        <motion.input
                            initial={{y:40,opacity:0}}
                            whileInView={{y:0,opacity:1}}
                            transition={{duration:.6}}
                            name='name' className={`sm:w-[60%] w-[80%] rounded-full h-12 pl-5 text-sm outline-none transition-all duration-200 hover:scale-105 hover:shadow-xl ${mode === 'light' ? 'text-black' : 'text-gray-300'} ${mode === 'light' ? 'bg-[#e9e9e9]' : 'bg-[#2c2c2c]'}`} placeholder='Name' type="text" />
                        <motion.input
                           initial={{y:40,opacity:0}}
                           whileInView={{y:0,opacity:1}}
                           transition={{duration:.6,delay:.1}}
                            name='email' className={`sm:w-[60%] w-[80%] rounded-full h-12 pl-5 text-sm outline-none transition-all duration-200 hover:scale-105 hover:shadow-xl ${mode === 'light' ? 'text-black' : 'text-gray-300'} ${mode === 'light' ? 'bg-[#e9e9e9]' : 'bg-[#2c2c2c]'}`} placeholder='Email' type="email" />
                        <motion.input
                           initial={{y:40,opacity:0}}
                           whileInView={{y:0,opacity:1}}
                           transition={{duration:.6,delay:.2}}
                            name='phone' className={`sm:w-[60%] w-[80%] rounded-full h-12 pl-5 text-sm outline-none transition-all duration-200 hover:scale-105 hover:shadow-xl ${mode === 'light' ? 'text-black' : 'text-gray-300'} ${mode === 'light' ? 'bg-[#e9e9e9]' : 'bg-[#2c2c2c]'}`} placeholder='Phone' type="number" />
                        <motion.input
                        initial={{y:40,opacity:0}}
                        whileInView={{y:0,opacity:1}}
                        transition={{duration:.6,delay:.3}}
                            name='message' className={`sm:w-[60%] w-[80%] rounded-2xl h-20 pl-5 text-sm outline-none transition-all duration-200 hover:scale-105 hover:shadow-xl ${mode === 'light' ? 'text-black' : 'text-gray-300'} ${mode === 'light' ? 'bg-[#e9e9e9]' : 'bg-[#2c2c2c]'}`} placeholder='Message' type="text" />
                        <div className='w-full flex items-start sm:pl-[20%] pl-[12%]'>
                            <motion.button
                            initial={{y:30,opacity:0}}
                            whileInView={{y:0,opacity:4}}
                            transition={{duration:.6,delay:.1}}
                            type='submit' className={`p-3 bg-[#cd0383] text-white text-sm rounded-full transition-all duration-300 hover:scale-105`}>Send message</motion.button>
                        </div>
                    </div>
                </form>
                <motion.div
                initial={window.innerWidth<420?{y:40,opacity:0}:{x:50,opacity:0}}
                whileInView={window.innerWidth<420?{y:0,opacity:1}:{x:0,opacity:1}}
                transition={{duration:1,delay:.2}}
                className='flex items-center justify-center mt-10 sm:mt-0 '>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d7822.571210373338!2d76.30224829056304!3d11.386790305205961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1735310118374!5m2!1sen!2sin" width={windowSize > 450 ? "600" : "300"} height="330" style={{ border: 0 }} className='rounded-xl' allowFullScreen loading referrerPolicy="no-referrer-when-downgrade"></iframe>
                </motion.div>
            </div>
            <hr className='w-full mt-8 border-[#3c3c3c]' />
            <div className={`flex justify-between w-full sm:px-[15vh] px-2 mt-6  ${mode === 'light' ? 'text-black' : 'text-white'}`}>
                <div className='flex flex-col gap-2  items-center justify-center text-[7px] sm:text-[12px]'>
                    <img className='w-[25px] sm:w-[40px] invert hover:invert-0 contrast-0 brightness-200 hover:brightness-100 hover:contrast-100 transition-all duration-500' src={assets.location} alt="" />
                    <p>House#4 Road#7 Block#H</p>
                    <p className='mt-[-8px]'>PALEMAD,KERALA,-123456</p>
                </div>
                <div className='flex flex-col gap-2 items-center justify-center text-[8px] sm:text-[12px]'>
                    <img className='w-[25px] sm:w-[40px] invert hover:invert-0 contrast-0 brightness-200 hover:brightness-100 hover:contrast-100 transition-all duration-500' src={assets.world} alt="" />
                    <p>muhammedshefin@gmail.com</p>
                    <p className='mt-[-8px]'>www.shefin.com</p>
                </div>
                <div className='flex flex-col gap-2 items-center justify-center text-[8px] sm:text-[12px]'>
                    <img className='w-[25px] sm:w-[40px] invert hover:invert-0 contrast-0 brightness-200 hover:brightness-100 hover:contrast-100 transition-all duration-500' src={assets.phone} alt="" />
                    <p>+91 1234567890</p>
                    <p className='mt-[-8px]'>+91 1234567890</p>
                </div>
            </div>
        </div>
    )
}

export default Contact