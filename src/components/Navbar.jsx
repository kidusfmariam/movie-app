import React from 'react'
import {AiOutlineMenu, AiOutlineHome, AiOutlineStar, AiOutlineSearch} from 'react-icons/ai'
import {BiMovie} from 'react-icons/bi'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [nav, setNav] = useState(false)
  return (
    <>
    <div className='w-full fixed flex justify-between z-50 px-5 py-3 bg-black'>
        <h2 className='text-xl font-light  text-white cursor-pointer'>Movie Land</h2>
        <div onClick={()=> setNav(!nav)} className='p-1 bg-darkGrey rounded-full cursor-pointer z-500'>
            <AiOutlineMenu size={28}/>
        </div>
    </div>

    <div className={`md:w-[25%] w-[65%] bg-black bg-opacity-80 fixed z-40 h-screen ${nav? 'right-0' : 'right-[-100%]'} flex flex-col justify-center px-10 gap-10 `}>
        <Link to='/' style={{textDecoration: 'none'}} onClick={() => setNav(!nav)}>
        <h2 className='text-2xl font-light opacity-70 cursor-pointer hover:opacity-100 flex items-center gap-3'>
         <AiOutlineHome size={21}/> Home</h2>
        </Link>

        <Link to='/top-rated' style={{textDecoration: 'none'}} onClick={() => setNav(!nav)}>
        <h2 className='text-2xl font-light opacity-70 cursor-pointer hover:opacity-100 flex items-center gap-3'>
          <AiOutlineStar size={21}/>Top Rated</h2>
        </Link>
        
        <Link to='/movies' style={{textDecoration: 'none'}} onClick={() => setNav(!nav)}>
        <h2 className='text-2xl font-light opacity-70 cursor-pointer hover:opacity-100 flex items-center gap-3'>
          <BiMovie size={21}/>Movies</h2>
        </Link>

        
        <h2 className='text-2xl font-light opacity-70 cursor-pointer hover:opacity-100 flex items-center gap-3'>
          <AiOutlineSearch size={21}/>Search</h2>
    </div>
    </>
  )
}

export default Navbar