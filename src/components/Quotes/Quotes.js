import React from 'react'
import './Quotes.scss'

const Quotes = () => {
  return (
    <div className='quotes'>
        <div className='container'>
            <div className='image'>
                <img src='https://images.unsplash.com/photo-1527821468487-b724210d296a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8' alt=''/>
            </div>
            <div className='overlay'></div>
            <div className='details'>
                <h3>Save Children From Hunger</h3>
                <h2>Became a part of the world  change</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <div className='buttons'>
                    <button className=''>Donate Now</button>
                    <button className=''>Read More</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Quotes