import React from 'react'
import './Footer.scss'
import logo from '../../assets/logo2.png'; 
import { ArrowRight, Email, Facebook, Instagram, LocationOn, Phone, Twitter, YouTube } from '@mui/icons-material';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='wrapper'>
                <div className='logo1'>
                    <div className='logo'>
                        <img src={logo} alt=''/>
                        <div className='logoDetails'>
                            <h4>Heartfelt<span style={{ color: '#ff6600' }}>Hands</span></h4>
                            <p>Touching Lives With Genuine Care</p>
                        </div>
                    </div>
                    <div className='details'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className='location'>
                            <LocationOn className='icon'/>
                            <p>Nairobi, Kenya</p>
                        </div>
                        <div className='phone'>
                            <Phone className='icon'/>
                            <p>(+254)711223344</p>
                        </div>
                        <div className='email'>
                            <Email className='icon'/>
                            <p>heartfelthands@gmail.com</p>
                        </div>
                        <div className='socialMedia'>
                            <div className='media'><Facebook/></div>
                            <div className='media'><Instagram/></div>
                            <div className='media'><Twitter/></div>
                            <div className='media'><YouTube/></div>
                        </div>
                    </div>
                </div>
                <div className='pages'>
                    <h2>Pages</h2>
                    <div className='link'>
                        <div className='arrow'>
                            <ArrowRight className='icon'/>
                            <p>About Us</p>
                        </div>
                        <div className='arrow'>
                            <ArrowRight className='icon'/>
                            <p>Causes</p>
                        </div>
                        <div className='arrow'>
                            <ArrowRight className='icon'/>
                            <p>Events</p>
                        </div>
                        <div className='arrow'>
                            <ArrowRight className='icon'/>
                            <p>Faq</p>
                        </div>
                        <div className='arrow'>
                            <ArrowRight className='icon'/>
                            <p>Contact Us</p>
                        </div>
                    </div>
                </div>
                <div className='news'>
                    <h2>Latest News</h2>
                    <div className='link'>
                        <div className='arrow'>
                            <ArrowRight className='icon'/>
                            <div className='newDetails'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <p>June 6, 2024</p>
                            </div>
                        </div>
                        <div className='arrow'>
                            <ArrowRight className='icon'/>
                            <div className='newDetails'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <p>June 6, 2024</p>
                            </div>
                        </div>
                        <div className='arrow'>
                            <ArrowRight className='icon'/>
                            <div className='newDetails'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <p>June 6, 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='contactForm'>
                    <h2>Contact Form</h2>
                    <form>
                        <input placeholder='Full Name'/>
                        <input placeholder='Email Address'/>
                        <input placeholder='Your Message'/>
                        <button>Send</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
