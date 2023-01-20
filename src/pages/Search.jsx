import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import CardSm from '../components/CardSm';
const Search = () => {
  const [movies, setMovies]=useState([]);
  const [query, setQuery]=useState('');

  
 

  const searchMovie = async(e)=>{
    e.preventDefault();
    console.log("Searching");
    try{
      const url=`https://api.themoviedb.org/3/search/movie/?api_key=1fe04e0ed06825cd39cd1eb75b9a25e1&query=${query}`;
      const res= await fetch(url);
      const data= await res.json();
      console.log(data);
      setMovies(data.results);
    }
    catch(e){
      console.log(e);
    }
  }

  const changeHandler=(e)=>{
    setQuery(e.target.value);
  }
  return (
    <div className='min-h-screen max-h-auto pt-20 w-[90%] mx-auto flex flex-col justify-start items-center'>
      <div className='flex items-center justify-center gap-3 max-h-[40px] mb-3 py-10'>
        <form onSubmit={searchMovie}>
        <input aria-label="search"  placeholder='Search for Movies' name="query" value={query} onChange={changeHandler} type="text" className='min-w-[300px] border-b-white border-b bg-black outline-none mr-7 sm:mb-0 mb-5' />
        <button className='hover:bg-green px-4 py-1 bg-transparent border border-green' type='submit'>Search</button>
        </form>
      </div>
      
      <div className='mt-20 flex flex-wrap gap-3 justify-center'>
      {
        movies.map((item, id) => (
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

export default Search