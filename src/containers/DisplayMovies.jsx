import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import requests from '../../requests'
import { Link } from 'react-router-dom'
import CardSm from '../components/CardSm'
const DisplayMovies = ({fetchURL}) => {
    const[latest, setLatest] = useState([])
    useEffect(() => {
     axios.get(fetchURL).then(response =>{
        setLatest(response.data.results);
     })
     }, [fetchURL])
     console.log(latest)
  return (
    <div className='w-[95%] mx-auto -mt-20 my-[5rem]'>
    <div className='flex flex-wrap gap-4 items-center justify-center sm:justify-start w-full mx-auto'>
        {
            latest.slice(0,14).map((item, id) => (
                <Link to={`/${item.id}`}>
                <CardSm
                key={id + 1}
                title={item.title}
                year={item.release_date.slice(0,4)}
                adult={item.adult}
                image={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
                />
                </Link>
            ))
        }
    </div>
    </div>
  )
}

export default DisplayMovies
