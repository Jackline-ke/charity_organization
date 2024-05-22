import React from 'react'
import './BottomNavbar.scss'
import { Link } from 'react-router-dom'

const BottomNavbar = () => {
  return (
    <div className='bottomNavbar'>
        <div className='container'>
            <div className='links'>
                <ul>
                   <li><Link to="/">Home</Link></li>
                   <li><Link to="about">About</Link></li>
                   <li><Link to="mission">Mission</Link></li>
                   <li><Link to="volunterr">Volunteer</Link></li>
                   <li><Link to="event">Events</Link></li>
                   <li><Link to="gallery">Gallery</Link></li>
                   <li><Link to="contact">Contact</Link></li>
                </ul>
            </div>
            <div className='button'>
                <button>Donate Now</button>
            </div>
        </div>
    </div>
  )
}

export default BottomNavbar