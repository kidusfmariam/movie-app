import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import requests from '../../requests'
const Featured = () => {
    const[movies, setMovies] = useState([])
    useEffect(() => {
     axios.get(requests.featured).then(response =>{
        setMovies(response.data.results);
     })
     }, [requests.featured])
     console.log(movies)
  return (
    <div>
    {
        movies.map((item, id) => (
    <div>        
    <img src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`} alt={item?.title} />
    <h2>{item.title}</h2>
    </div>
    ))
    }
</div>
  )
}

export default Featured