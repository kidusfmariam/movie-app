import React from 'react'
import requests from '../../requests'
import DisplayMovies from '../containers/DisplayMovies'
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
    </div>
  )
}

export default Movies