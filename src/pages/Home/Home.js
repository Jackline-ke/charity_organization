import React from 'react'
import Header from '../../components/Header/Header'
import Features from '../../components/Features/Features'
import Featured from '../../components/Featured/Featured'
import Causes from '../../components/Causes/Causes'
import Quotes from '../../components/Quotes/Quotes'
import Gallery from '../../components/Gallery/Gallery'

const Home = () => {
  return (
    <div className='home'>
        <Header/>
        <Features/>
        <Featured/>
        <Causes/>
        <Quotes/>
        <Gallery/>
    </div>
  )
}

export default Home