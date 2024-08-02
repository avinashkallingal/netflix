import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../constants/constants'

function Banner() {

  const [movie, setMovie] = useState()
  const[count,setCounter]=useState(false)
  const[num,setNum]=useState(0)
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0])
      setMovie(response.data.results[Math.floor(Math.random() * 20)])
    }).catch((e)=>{
      alert("Network error")
    })
  },[]);
  
  return (

     <div style={{backgroundImage:`URL(${movie?imageUrl+movie.poster_path:""})`}} className='banner'>
     
      <div className='content'>
        <h1 className='title'>{movie?movie.title:""}</h1>
        <div>
            <button className='button'>Play</button>
            <button className='button'>My list</button>
       
            
        </div>
      <h1 className='description'>{movie?movie.overview:""}</h1>
      </div>
      <div className="fade-bottom"></div>
      
            
    </div>
  )
}

export default Banner
