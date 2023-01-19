import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillStar} from 'react-icons/ai'
const CardLg = ({title, image, date, rating}) => {
  return (
    <div className='min-w-[230px] max-w-[300px] height-[350px] relative cursor-pointer rounded-lg'>
        
        <img src={image} alt={title} className='absolute w-full h-full object-cover'/>
        <div className='absolute z-20 bg-gradient-to-b from-transparent to-green opacity-0 hover:opacity-100 w-full h-full top-0 left-0 flex flex-col items-start justify-end px-2 py-2'>
        <span className='absolute text-md top-2 right-3'><AiFillStar/>{rating}</span>
        <h2>{title}</h2>
        <p className='font-thin'>{date}</p>

        </div>
      
    </div>
 
  )
}

export default CardLg