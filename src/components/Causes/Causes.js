import React from 'react'
import './Causes.scss'
import { Favorite } from '@mui/icons-material'

const Causes = () => {
  return (
    <div className='causes'>
        <div className='container'>
            <div className='top'>
                <h2>Recent Causes</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/> tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className='horizontal'></div>
            </div>
            <div className='bottom'>
                <div className='list'>
                    <div className='card'>
                        <div className='image'>
                            <img src='https://images.unsplash.com/photo-1588072432733-2b6a4873b187?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0NDgwNDkyfHxlbnwwfHx8fHw%3D' alt=''/>
                        </div>
                        <div className='progress'>
                            <p>15%</p>
                        </div>
                        <div className='cardDetails'>
                            <h3>Sponsor a child today</h3>
                            <div className='contribution'>
                                <p>Raised:  $<span> 1000</span></p>
                                <p>Goal:  $<span> 1000</span></p>
                            </div>
                            <p className='information'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className='buttons'>
                                <button className=''>Donate Now</button>
                                <button className=''> <Favorite/> <span> 25 </span>Donators</button>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='image'>
                            <img src='https://images.unsplash.com/photo-1497375638960-ca368c7231e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8' alt=''/>
                        </div>
                        <div className='progress'>
                            <p>15%</p>
                        </div>
                        <div className='cardDetails'>
                            <h3>Sponsor a child today</h3>
                            <div className='contribution'>
                                <p>Raised:  $<span> 1000</span></p>
                                <p>Goal:  $<span> 1000</span></p>
                            </div>
                            <p className='information'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className='buttons'>
                                <button className=''>Donate Now</button>
                                <button className=''> <Favorite/> <span> 25 </span>Donators</button>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='image'>
                            <img src='https://images.unsplash.com/photo-1571417800906-5a5058dbd45d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8' alt=''/>
                        </div>
                        <div className='progress'>
                            <p>15%</p>
                        </div>
                        <div className='cardDetails'>
                            <h3>Sponsor a child today</h3>
                            <div className='contribution'>
                                <p>Raised:  $<span> 1000</span></p>
                                <p>Goal:  $<span> 1000</span></p>
                            </div>
                            <p className='information'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className='buttons'>
                                <button className=''>Donate Now</button>
                                <button className=''> <Favorite/> <span> 25 </span>Donators</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Causes