import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Series from './pages/Series'
import TopRated from './pages/TopRated'
import MovieDetail from './pages/MovieDetail'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/top-rated' element={<TopRated/>}></Route>
        <Route path='/movies' element={<Movies/>}></Route>
        <Route path='/series' element={<Series/>}></Route>
        <Route path='/:movieTitle' element={<MovieDetail/>}></Route>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
