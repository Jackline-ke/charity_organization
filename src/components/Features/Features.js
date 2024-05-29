import React from 'react'
import './Features.scss'
import { AttachMoney, MonetizationOn, People, VolunteerActivismRounded } from '@mui/icons-material'

const Features = () => {
  return (
    <div className='features'>
        <div className='container'>
            <div className='donation'>
                <div className='image'>
                    <img src='https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1462&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
                </div>
                <div className='overlay'></div>
               <div className='donationDetail'>
                    <div className='icon'>
                        <MonetizationOn/>
                    </div>
                    <div className='details'>
                        <h4>Donation</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button>Donate Now</button>
                    </div>
               </div>
            </div>
            <div className='volunteer'>
                <div className='image'>
                    <img src='https://images.unsplash.com/photo-1509099863731-ef4bff19e808?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D' alt=''/>
                </div>
                <div className='overlay'></div>
               <div className='volunteerDetail'>
                    <div className='icon'>
                        <People/>
                    </div>
                    <div className='details'>
                        <h4>Volunteer</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button>Became A Volunteer</button>
                    </div>
               </div>
            </div>
            <div className='fundraiser'>
                <div className='image'>
                    <img src='https://images.unsplash.com/photo-1515658323406-25d61c141a6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D' alt=''/>
                </div>
                <div className='overlay'></div>
               <div className='fundraiserDetail'>
                    <div className='icon'>
                        <VolunteerActivismRounded/>
                    </div>
                    <div className='details'>
                        <h4>Fundraiser</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button>Fundraiser Now</button>
                    </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Features