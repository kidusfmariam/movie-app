import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
const CardSm = ({image, title, year, adult, id}) => {
  return (

    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    viewport={{once: true}}
    layout
    transition={{duration: 1.2, delay: 0.2}}
    className='w-[170px] h-[350px] my-2 relative rounded-xl hover:shadow-3xl pb-3 cursor-pointer'>
        <div className='w-full h-[80%]'>
        <img src={image} alt={title} className="w-full h-full object-cover rounded-md" />
        </div>
        <h2 className='text-[0.75rem] font-light px-2 pt-1'>{title}</h2>
        <div className='flex gap-2 items-center px-2 pt-1'>
            <p className={`${adult? 'bg-red' : 'bg-green'} p-[2px] text-white text-sm`}>PG</p>
            <p className='text-sm opacity-70'>{year}</p>
        </div>
    </motion.div>

  )
}

export default CardSm