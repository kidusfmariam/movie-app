import { data } from 'autoprefixer';
import React from 'react'
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import {AiFillStar, AiOutlineClose} from 'react-icons/ai'
import {BsFillPlayFill} from 'react-icons/bs'
import YouTube from 'react-youtube';
import axios from 'axios';
const MovieDetail = () => {
  const { movieId } = useParams();
  const [trailer, setTrailer] = useState([])
  const [showModal, setShowModal] = useState(false)
  const[latest, setLatest] = useState([])
    useEffect(() => {
     axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${import.meta.env.VITE_API_KEY}&append_to_response=videos`).then(response =>{
        setLatest(response.data);

        const trailerid = response.data.videos.results.find(
          (vid) => vid.name === "Official Trailer"
        );

        setTrailer(trailerid ? trailerid : response.data.videos.results[0]);
     })
     }, [])
     console.log(latest)
  return (
    <>


      {/* Movie Details Page */}
      <img src={`https://image.tmdb.org/t/p/original/${latest?.backdrop_path}`} alt={latest.title} className='absolute w-screen h-screen top-0 left-0 object-cover' />
      <div className='absolute w-screen h-screen bg-gradient-to-b from-blackOverlay to-black z-10'></div>
      <div className='sm:h-screen h-auto w-screen relative z-20 flex items-center justify-center pt-20 pb-10'>
        <div className='flex md:flex-row flex-col gap-3 items-center justify-center px-2  mx-auto h-auto'>
          
          <img src={`https://image.tmdb.org/t/p/original/${latest?.poster_path}`} alt={latest.title} className='w-[230px] h-[370px] rounded-md' />
      
          <div className='sm:w-[40%] w-[100%]'>
            <h1 className='text-4xl uppercase mb-3'>{latest.title}</h1>
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
              <p>{`${latest.runtime} min`}</p>
            </div>
              <p className='text-sm font-extralight mb-5 mt-3 sm:mt-0'>{latest.overview}</p>
              <div className='flex gap-5 items-center'>
                <button onClick={() => setShowModal(!showModal)} className='px-3 py-1 border border-green font-extralight hover:bg-green flex items-center gap-2'>
                  <BsFillPlayFill/> Watch Trailer
                </button>
                <Link to='/' style={{textDecoration: 'none'}}>
                  <p className='text-green underline hover:text-white'>Back to Homepage</p>
                </Link>
              </div>
          </div>
        </div>
      </div>


    {/* Movie Trailer Overlay */}
      <div className={`fixed z-[999] w-screen h-screen flex items-center justify-center top-0 left-0 bg-black bg-opacity-80 ${showModal ? '':'translate-y-[-100%]'}`}>
        <AiOutlineClose size={32} className='text-white absolute top-3 right-4 z-[9999] cursor-pointer'
        onClick={() => setShowModal(!showModal)}
        />
        <YouTube
        videoId={trailer.key}
        className="w-[60vh] h-[50vh] md:w-[120vh] md:h-[70vh]"
        opts={{
          width: "100%",
          height: "100%",
        }}
        />
      </div>

      
    </>
  )
}

export default MovieDetail
