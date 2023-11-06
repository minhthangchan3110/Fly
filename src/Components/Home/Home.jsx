/* eslint-disable no-unused-vars */
import React,{useEffect} from 'react'
import video from '../../assets/img/sky.mp4'
import aeroplane from '../../assets/img/plane.jpg' 
import Aos from 'aos'
import 'aos/dist/aos.css'
function Home() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <div className="home flex container">
      <div className="mainText">
        <h1 data-aos='fade-up' data-aos-duration='2500'>Create Ever-lasting Memories With Us</h1>
      </div>
      <div className='homeImages flex'>
        <div className=' homeImages videoDiv'>
          <video src={video} autoPlay muted loop className='video'></video>
        </div>
        <img src={aeroplane} alt="" className='plane' />
      </div>
    </div>
  )
}

export default Home