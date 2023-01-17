import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import requests from '../../requests'
import CardSm from '../components/CardSm'
const Latest = () => {

    const[latest, setLatest] = useState([])
    useEffect(() => {
     axios.get(requests.latest).then(response =>{
        setLatest(response.data.results);
     })
     }, [requests.featured])
     console.log(latest)
  return (
    <div className='w-[95%] mx-auto py-4 my-10'>
        <h1 className='text-3xl font-bold text-green'>LATEST</h1>

    <div className='flex flex-wrap'>
        {
            latest.map((item, id) => (
                <CardSm
                key={id + 1}
                title={item.title}
                year={item.release_date.slice(0,4)}
                adult={item.adult}
                image={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
                />
            ))
        }
    </div>
    </div>
  )
}

export default Latest