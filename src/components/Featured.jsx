import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import requests from '../../requests'
import{MdChevronLeft, MdChevronRight} from 'react-icons/md'
import CardLg from './CardLg'
import { Link } from 'react-router-dom'
const Featured = () => {
    const[movies, setMovies] = useState([])
    useEffect(() => {
     axios.get(requests.featured).then(response =>{
        setMovies(response.data.results);
     })
     }, [requests.featured])
     console.log(movies)


     const slideLeft  = () =>{
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 1000;
    }
    const slideRight  = () =>{
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 1000;
    }
    
  return (
    <div className='relative pt-20 w-[100vw] h-[75vh] px-5 pb-4 overflow-y-hidden'>
        <h1 className='text-3xl pb-3 font-bold text-green'>FEATURED</h1>
        <MdChevronLeft onClick={slideLeft} className='absolute left-0 z-30 top-[60%] text-black bg-white rounded-full cursor-pointer opacity-50 hover:opacity-100' size={40} />
        <MdChevronRight onClick={slideRight} className='absolute right-0 z-30 top-[60%] text-black bg-white rounded-full cursor-pointer opacity-50 hover:opacity-100' size={40} />
    <div id='slider' className='flex overflow-x-scroll gap-4 relative w-screen h-[55vh] '>
    {
        movies.map((item, id) => (
            <CardLg
            key={id + 1}
            title={item?.title}
            image={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
            date={item.release_date.slice(0,4)}
            rating={item.vote_average}
            />
            
    ))
    }
</div>
</div>
  )
}

export default Featured