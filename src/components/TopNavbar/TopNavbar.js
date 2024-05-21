import React from 'react'
import './TopNavbar.scss'
import logo from '../../assets/logo2.png'; 
import { Email, Phone } from '@mui/icons-material';

const TopNavbar = () => {
  return (
    <div className='topNavbar'>
       <div className='container'>
        <div className='left'>
            <div className='logo'>
                <img src={logo}/>
                <div className='logoDetails'>
                    <h4>Heartfelt<span style={{ color: '#FFB74D' }}>Hands</span></h4>
                    <p>Touching Lives with Genuine Care</p>
                </div>
            </div>
        </div>
        <div className='right'>
            <div className='email'>
                <div className='icon'>
                    <Email/>
                </div>
                <div className='emailDetails'>
                    <h5>Email</h5>
                    <p>heartfelthands@gmail.com</p>
                </div>
            </div>
            <div className='contact'>
                <div className='icon'>
                    <Phone/>
                </div>
                <div className='contactDetails'>
                    <h5>Call Now</h5>
                    <p>(+254711223344)</p>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default TopNavbar