import React from 'react';
import assets from '../assets/assets';
import { motion } from 'motion/react'

const About = ({ mode }) => {
  return (
    <div id="about" className={`w-full sm:mt-20 mt-5 sm:pt-24 pt-24 overflow-x-hidden  ${mode === 'light' ? 'text-[#1c1c1c]' : 'text-white'}`}>
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: .2 }}
        className="flex items-center justify-center"><h1 className="font-bold text-4xl sm:text-5xl z-10 transition-all duration-500 hover:text-transparent bg-clip-text bg-gradient-to-r from-[#cd0383] to-[#7729ff]">About me</h1>
      </motion.div>
      <div className="sm:flex mt-20">
        <motion.div
          initial={window.innerWidth < 420 ? { y: 40, opacity: 0 } : { x: -40, opacity: 0 }}
          whileInView={window.innerWidth < 420 ? { y: 0, opacity: 1 } : { x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: .2 }}
          className="sm:w-1/3 w-full sm:pl-10 p-10 flex items-center justify-center sm:mt-0 mt-[-5vh]">
          <img
            className="rounded-xl sm:h-[50vh] h-[30vh] relative z-10 max-w-full sm:mt-[-5vh] mt-[-6vh]"
            src={assets.about_img}
            alt=""
          />
        </motion.div>
        <div className="flex flex-col gap-2 sm:w-2/3 w-full sm:p-0 p-10 sm:mt-8 mt-[-55px]">
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: .2 }}
          >
            Choose from a diverse menu featuring a delectable array of dishes crafted with the finest
            ingredients and culinary expertise.
          </motion.p>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: .2 }}
          >
            Choose from a diverse menu featuring a delectable array of dishes crafted with the finest
            ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate.
          </motion.p>
          <div className="flex flex-col w-full mt-5 gap-6 font-bold sm:text-2xl text-sm">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: .4 }}
              className="flex gap-6 items-center">
              <div className=' sm:min-w-[20%] min-w-[25%]'>
                <p>HTML & CSS</p>
              </div>
              <div className="w-[60%] bg-gradient-to-r from-[#cd0383] to-[#7729ff] sm:h-3 h-2 rounded-lg"></div>
            </motion.div>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: .6 }}
              className="flex gap-5 items-center">
              <div className='sm:min-w-[20%] min-w-[25%]'>
                <p>React JS</p>
              </div>
              <div className="w-[50%] bg-gradient-to-r from-[#cd0383] to-[#7729ff] sm:h-3 h-2 rounded-lg"></div>
            </motion.div>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: .8 }}
              className="flex gap-5 items-center">
              <div className=' sm:min-w-[20%] min-w-[25%]'>
                <p>Java Script</p>
              </div>
              <div className="w-[40%] bg-gradient-to-r from-[#cd0383] to-[#7729ff] sm:h-3 h-2 rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
