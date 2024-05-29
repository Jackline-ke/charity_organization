import React from 'react'
import Header from '../../components/Header/Header'
import Features from '../../components/Features/Features'
import Featured from '../../components/Featured/Featured'
import Causes from '../../components/Causes/Causes'

const Home = () => {
  return (
    <div className='home'>
        <Header/>
        <Features/>
        <Featured/>
        <Causes/>
    </div>
  )
}

export default Home