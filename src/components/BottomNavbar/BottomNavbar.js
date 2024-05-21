import React from 'react'
import './BottomNavbar.scss'

const BottomNavbar = () => {
  return (
    <div className='bottomNavbar'>
        <div className='container'>
            <div className='links'>
                <ul>
                    <li>Home </li>
                    <li>About </li>
                    <li>Events </li>
                    <li>Volunteer </li>
                    <li>Gallery </li>
                    <li>Mission </li>
                    <li>Contact </li>
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