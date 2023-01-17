import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import requests from '../../requests'
import Featured from '../components/Featured'
import Latest from '../containers/Latest'
const Home = () => {
   
  return (
   <div>
    <Featured/>
    <Latest/>
   </div>
  )
}

export default Home