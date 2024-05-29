import React from 'react'
import './Mission.scss'
import { School } from '@mui/icons-material'

const Mission = () => {
  return (
    <div className='mission'>
        <div className='container'>
            <div className='top'>
                <h2>Our Mission</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/> tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className='horizontal'></div>
            </div>
            <div className='bottom'>
                <div className='list'>
                    <div className='item'>
                        <div className='icon'>
                            <School/>
                        </div>
                        <div className='details'>
                            <h3>Charity For Education</h3>
                            <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p className='more'>Read More</p>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='icon'>
                            <School/>
                        </div>
                        <div className='details'>
                            <h3>Charity For Education</h3>
                            <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p className='more'>Read More</p>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='icon'>
                            <School/>
                        </div>
                        <div className='details'>
                            <h3>Charity For Education</h3>
                            <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p className='more'>Read More</p>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='icon'>
                            <School/>
                        </div>
                        <div className='details'>
                            <h3>Charity For Education</h3>
                            <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p className='more'>Read More</p>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='icon'>
                            <School/>
                        </div>
                        <div className='details'>
                            <h3>Charity For Education</h3>
                            <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p className='more'>Read More</p>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='icon'>
                            <School/>
                        </div>
                        <div className='details'>
                            <h3>Charity For Education</h3>
                            <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p className='more'>Read More</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mission