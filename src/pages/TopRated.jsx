import React from 'react'
import Latest from '../containers/Latest'
import DisplayMovies from '../containers/DisplayMovies'
import requests from '../../requests'
const TopRated = () => {
  return (
    <div className='mt-20 pt-20'>
    <DisplayMovies
    fetchURL={requests.topRated}
    />  
    <DisplayMovies
    fetchURL={requests.recommended2}
    />
    <DisplayMovies
    fetchURL={requests.recommended3}
    />
    <DisplayMovies
    fetchURL={requests.recommended4}
    />
    <DisplayMovies
    fetchURL={requests.recommended5}
    />
    <DisplayMovies
    fetchURL={requests.recommended6}
    />
    <DisplayMovies
    fetchURL={requests.recommended7}
    />
    </div>
  )
}

export default TopRated