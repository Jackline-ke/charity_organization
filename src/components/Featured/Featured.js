import React from 'react'
import './Featured.scss'
import { AccessTime, LocationOn } from '@mui/icons-material'

const Featured = () => {
  return (
    <div className='featured'>
        <div className='container'>
            <div className='left'>
                <div className='title'>
                    <h3>Upcoming Events</h3>
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
                            <h4>Charity For Education</h4>
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
                            <h4>Charity For Education</h4>
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
                            <h4>Charity For Education</h4>
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
                <div className='featuredTitle'>
                    <h3>Featured Causes</h3>
                </div>
                <div className='featuredList'>
                    <div className='featuredEvent'>
                        <div className='featuredImage'>
                            <img src='https://images.unsplash.com/photo-1608555855762-2b657eb1c348?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoYXJpdHl8ZW58MHx8MHx8fDA%3D' alt=''/>
                        </div>
                        <div className='featuredDetails'>
                            <h4>Charity For Education</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                                ut aliquip ex ea commodo consequat</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured