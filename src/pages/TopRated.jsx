import React from 'react'
import Latest from '../containers/Latest'
import Movies from '../containers/Movies'
import requests from '../../requests'
const TopRated = () => {
  return (
    <div className='mt-20 pt-20'>
    <Movies
    fetchURL={requests.topRated}
    />  
    <Movies
    fetchURL={requests.recommended2}
    />
    <Movies
    fetchURL={requests.recommended3}
    />
    <Movies
    fetchURL={requests.recommended4}
    />
    <Movies
    fetchURL={requests.recommended5}
    />
    <Movies
    fetchURL={requests.recommended6}
    />
    <Movies
    fetchURL={requests.recommended7}
    />
    </div>
  )
}

export default TopRated