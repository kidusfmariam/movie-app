import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react'
const Navbar = () => {
    const [nav, setNav] = useState(false)
  return (
    <>
    <div className='w-full fixed flex justify-between z-50 px-5 py-3'>
        <h2 className='text-xl font-light  text-green cursor-pointer'>Movie Land</h2>
        <div onClick={()=> setNav(!nav)} className='p-1 bg-darkGrey rounded-full cursor-pointer z-500'>
            <AiOutlineMenu size={28}/>
        </div>
    </div>

    <div className={`w-[35%] bg-green bg-opacity-50 fixed z-40 h-screen ${nav? 'right-0' : 'right-[-100%]'} flex flex-col justify-center px-10 gap-10 `}>
        <h2 className='text-2xl font-light border-b opacity-70 cursor-pointer hover:opacity-100'>Home</h2>
        <h2 className='text-2xl font-light border-b opacity-70 cursor-pointer hover:opacity-100'>Top Rated</h2>
        <h2 className='text-2xl font-light border-b opacity-70 cursor-pointer hover:opacity-100'>Movies</h2>
        <h2 className='text-2xl font-light border-b opacity-70 cursor-pointer hover:opacity-100'>Series</h2>
    </div>
    </>
  )
}

export default Navbar