import React from 'react'
import './CSS/Home.css'
import Slider from '../Components/Slider/Slider'
import Camiones from '../Components/Camiones/Camiones'

const Home = () => {
  return (
    <div className="home-background">
      <div className="home-content">
        <Slider />
        <Camiones />
      
      </div>
    </div>
  )
}

export default Home
