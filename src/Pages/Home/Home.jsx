import React from 'react'
import HomeSlider from '../../Components/HomeSlider/HomeSlider'
import CatSlider from '../../Components/CatSlider/CatSlider'
import SAdBanner from './SAdBanner'
import SingleSlider from '../../Components/SingleProSlider/SingleSlider'


const Home = () => {
  return (
    <>
      <HomeSlider />
      <CatSlider />
      <SAdBanner/>


      <SingleSlider/>


  
    </>
  )
}

export default Home