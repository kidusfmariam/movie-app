import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import requests from '../../requests'
import CardSm from '../components/CardSm'
import { Link } from 'react-router-dom'
const Latest = ({title, fetchURL, route}) => {

    const[latest, setLatest] = useState([])
    useEffect(() => {
     axios.get(fetchURL).then(response =>{
        setLatest(response.data.results);
     })
     }, [requests.featured])
     console.log(latest)
  return (
    <>
    <div className='w-[95%] mx-auto pt-10 pb-2 my-[5rem]'>
        <div className='flex justify-between mb-3 items-center'>
        <h1 className='text-3xl font-bold text-green'>{title}</h1>
        <Link to={route}>
        <p className='font-light text-green cursor-pointer'>See All</p>
        </Link>
        </div>
    <div className='flex flex-wrap gap-3 items-center justify-center sm:justify-start w-full mx-auto'>
        {
            latest.map((item, id) => (
                <Link to={`/${item.id}`}>
                <CardSm
                key={id + 1}
                id={item.id}
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
    </>
  )
}

export default Latest