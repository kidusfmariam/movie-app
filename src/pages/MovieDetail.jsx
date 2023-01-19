import { data } from 'autoprefixer';
import React from 'react'
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import {AiFillStar} from 'react-icons/ai'
import axios from 'axios';
const MovieDetail = () => {
  const { movieId } = useParams();

  const[latest, setLatest] = useState([])
    useEffect(() => {
     axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=1fe04e0ed06825cd39cd1eb75b9a25e1`).then(response =>{
        setLatest(response.data);
     })
     }, [])
     console.log(latest)
  return (
    <>
      <img src={`https://image.tmdb.org/t/p/original/${latest?.backdrop_path}`} alt={latest.title} className='absolute w-screen h-screen top-0 left-0 object-cover' />
      <div className='absolute w-screen h-screen bg-gradient-to-b from-blackOverlay to-black z-10'></div>
      <div className='sm:h-screen h-auto w-screen relative z-20 flex items-center justify-center pt-20 pb-10'>
        <div className='flex md:flex-row flex-col gap-3 items-center justify-center px-2  mx-auto h-auto'>
          
          <img src={`https://image.tmdb.org/t/p/original/${latest?.poster_path}`} alt={latest.title} className='w-[230px] h-[370px] rounded-md' />
      
          <div className='sm:w-[40%] w-[100%]'>
            <h1 className='text-4xl uppercase'>{latest.title}</h1>
            <div className='flex gap-1 text-3xl mb-3'>
              
          <AiFillStar/><h1>{latest.vote_average}<span className='text-xl'>/10</span></h1></div>
            <div className='flex gap-3 font-thin'>
            {latest.genres &&
                    latest.genres.slice(0, 5).map((genre, i) => (
                      <span key={i} className="text-sm  md:text-base">
                        {genre.name}
                      </span>
                    ))}
            </div>
            <div className='flex gap-2 text-green'>
              <p>{`Released: ${latest.release_date}`}</p>
              <p>{`${latest.runtime}m`}</p>
            </div>
              <p className='text-sm font-extralight mb-3'>{latest.overview}</p>
              <div className='flex gap-5 items-center'>
                <button className='px-2 py-1 border border-green font-extralight hover:bg-green'>Watch Trailer</button>
                <Link to='/' style={{textDecoration: 'none'}}>
                  <p className='text-green underline'>Back to Homepage</p>
                </Link>
              </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default MovieDetail
