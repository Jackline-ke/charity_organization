import React from 'react'
import './Gallery.scss'

const Gallery = () => {
  return (
    <div className='gallery'>
        <div className='container'>
            <div className='top'>
                <h2>Our Gallery</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/> tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className='horizontal'></div>
            </div>
            <div className='center'>
                <div className='grid'>
                    <div className='image'>
                        <img src='https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
                    </div>
                    <div className='image'>
                        <img src='https://plus.unsplash.com/premium_photo-1661962834814-2086d028cda1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D' alt=''/>
                    </div>
                    <div className='image'>
                        <img src='https://images.unsplash.com/photo-1609139003551-ee40f5f73ec0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D' alt=''/>
                    </div>
                    <div className='image'>
                        <img src='https://images.unsplash.com/photo-1620608929452-ccc05381b0f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8' alt=''/>
                    </div>
                    <div className='image'>
                        <img src='https://plus.unsplash.com/premium_photo-1661775317533-2163ba4dbc93?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
                    </div>
                    <div className='image'>
                        <img src='https://images.unsplash.com/photo-1608686207856-001b95cf60ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8' alt=''/>
                    </div>
                    <div className='image'>
                        <img src='https://images.unsplash.com/photo-1547496613-4e19af6736dc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
                    </div>
                    <div className='image'>
                        <img src='https://images.unsplash.com/photo-1473649085228-583485e6e4d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D' alt=''/>
                    </div>
                </div>
            </div>
            <div className='bottom'>
                <div className='details'>
                    <div className='content'>
                        <h3>Here is our gallery</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className='button'>
                        <button>View All Gallery</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gallery