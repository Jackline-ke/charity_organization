import React from 'react'
import './Featured.scss'
import { AccessTime, Facebook, Instagram, LocationOn, Twitter, YouTube } from '@mui/icons-material'

const Featured = () => {
  return (
    <div className='featured'>
        <div className='container'>
            <div className='left'>
                <div className='title'>
                    <h1>Upcoming Events</h1>
                </div>
                <div className='list'>
                    <div className='event'>
                        <div className='item'>
                            <div className='image'>
                                <img src='https://images.unsplash.com/photo-1507427254987-7be33d0321d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8' alt=''/>
                            </div>
                            <div className='date'>
                                <span>22</span>
                                <span>MAY</span>
                            </div>
                        </div>
                        <div className='details'>
                            <h3>Charity For Education</h3>
                            <div className='timeLocation'>
                                <div className='time'>
                                    <AccessTime className='icon'/>
                                    <p>8:00 AM - 10:00 AM</p>
                                </div>
                                <div className='location'>
                                    <LocationOn className='icon'/>
                                    <p>Nairobi, Kenya</p>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                                ut aliquip ex ea commodo consequat</p>
                        </div>
                    </div>
                    <div className='event'>
                        <div className='item'>
                            <div className='image'>
                                <img src='https://images.unsplash.com/photo-1507427254987-7be33d0321d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8' alt=''/>
                            </div>
                            <div className='date'>
                                <span>22</span>
                                <span>MAY</span>
                            </div>
                        </div>
                        <div className='details'>
                            <h3>Charity For Education</h3>
                            <div className='timeLocation'>
                                <div className='time'>
                                    <AccessTime className='icon'/>
                                    <p>8:00 AM - 10:00 AM</p>
                                </div>
                                <div className='location'>
                                    <LocationOn className='icon'/>
                                    <p>Nairobi, Kenya</p>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                                ut aliquip ex ea commodo consequat</p>
                        </div>
                    </div>
                    <div className='event'>
                        <div className='item'>
                            <div className='image'>
                                <img src='https://images.unsplash.com/photo-1507427254987-7be33d0321d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8' alt=''/>
                            </div>
                            <div className='date'>
                                <span>22</span>
                                <span>MAY</span>
                            </div>
                        </div>
                        <div className='details'>
                            <h3>Charity For Education</h3>
                            <div className='timeLocation'>
                                <div className='time'>
                                    <AccessTime className='icon'/>
                                    <p>8:00 AM - 10:00 AM</p>
                                </div>
                                <div className='location'>
                                    <LocationOn className='icon'/>
                                    <p>Nairobi, Kenya</p>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                                ut aliquip ex ea commodo consequat</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='right'>
                <div className='title'>
                    <h1>Featured Causes</h1>
                </div>
                <div className='featuredList'>
                    <div className='featuredImage'>
                        <img src='https://media.istockphoto.com/id/1552699438/photo/portrait-smile-and-volunteer-group-selfie-outdoors-for-climate-change-charity-cleaning-and.webp?b=1&s=170667a&w=0&k=20&c=Uwqb5vVxHtH3BqEohO71bpWDiCEpcTu4lVZ6W19yOkQ=' alt=''/>
                    </div>
                    <div className='featuredDetails'>
                        <h3>Charity For Education</h3>
                        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className='buttons'>
                            <button className=''>Donate Now</button>
                            <button className=''>Read More</button>
                        </div>
                        <div className='socialMedia'>
                            <div className='media'><Facebook/></div>
                            <div className='media'><Instagram/></div>
                            <div className='media'><Twitter/></div>
                            <div className='media'><YouTube/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured