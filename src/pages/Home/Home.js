import React from 'react'
import Header from '../../components/Header/Header'
import Features from '../../components/Features/Features'
import Featured from '../../components/Featured/Featured'
import Causes from '../../components/Causes/Causes'
import Quotes from '../../components/Quotes/Quotes'
import Gallery from '../../components/Gallery/Gallery'
import Mission from '../../components/Mission/Mission'
import Status from '../../components/Status/Status'
import Volunteer from '../../components/Volunteer/Volunteer'

const Home = () => {
  return (
    <div className='home'>
        <Header/>
        <Features/>
        <Featured/>
        <Causes/>
        <Quotes/>
        <Gallery/>
        <Mission/>
        <Status/>
        <Volunteer/>
    </div>
  )
}

export default Home