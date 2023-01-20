import React from 'react'
import requests from '../../requests'
import DisplayMovies from '../containers/DisplayMovies'
import { Link } from 'react-router-dom'
const Movies = () => {
   
  return (
    <div className='mt-20 pt-20'>
    <DisplayMovies
    fetchURL={requests.movies}
    />  
    <DisplayMovies
    fetchURL={requests.movies1}
    />
    <DisplayMovies
    fetchURL={requests.movies2}
    />
    <DisplayMovies
    fetchURL={requests.movies3}
    />
    <DisplayMovies
    fetchURL={requests.movies4}
    />
    <DisplayMovies
    fetchURL={requests.movies5}
    />

    <div className='my-5 flex items-center justify-center'>
    <p className='text-center'>Search for More movies <Link to='/search' style={{textDecoration: 'none'}}> <span className='text-green underline'>here.</span></Link></p>
    </div>
    </div>
  )
}

export default Movies