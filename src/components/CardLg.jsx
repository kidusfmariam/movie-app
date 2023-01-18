import React from 'react'

const CardLg = ({title, image, date}) => {
  return (
    <div className='sm:min-w-[15vw] min-w-[75vw] height-[350px] relative cursor-pointer'>
        <img src={image} alt={title} className='absolute w-full h-full object-cover'/>
        <div className='absolute z-20 bg-gradient-to-b from-transparent to-green opacity-0 hover:opacity-100 w-full h-full top-0 left-0 flex flex-col items-start justify-end px-2 py-2'>
        <h2>{title}</h2>
        <p className='font-thin'>{date}</p>

        </div>
      
    </div>
  )
}

export default CardLg