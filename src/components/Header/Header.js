import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <div className='header'>
        <div className='containerHeader'>
            <div className='bgImage'>
                <img src='https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
            </div>
            <div className='overlay'></div>
            <div className='details'>
                <div className='headerDetails'>
                    <p className='p1'>TO FEED AND EDUCATE</p>
                    <h4 className='title'>WE NEED YOUR SUPPORT</h4>
                    <div className='p2'>
                        <p className=''>Became A Part To Change The Wolrd</p>
                    </div>
                    <p className='p3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <div className='buttons'>
                        <button className='btnDonate'>Donate Now</button>
                        <button className='btnLearn'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header