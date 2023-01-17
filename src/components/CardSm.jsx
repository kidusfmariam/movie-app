import React from 'react'

const CardSm = ({image, title, year, adult}) => {
  return (
    <div className='min-w-[9vw] min-height-[100px] relative'>
        <img src={image} alt={title} className="w-full h-[80%]object-cover" />
        <h2>{title}</h2>
        <div className='flex gap-3 items-center'>
            <p className={`${adult? 'bg-red' : 'bg-green'} p-1 text-white`}>PG</p>
            <p>{year}</p>
        </div>
    </div>
  )
}

export default CardSm