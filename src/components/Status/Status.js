import React from 'react'
import './Status.scss'
import { EmojiEvents } from '@mui/icons-material'

const Status = () => {
  return (
    <div className='status'>
        <div className='container'>
            <div className='details'>
                <p>We have served for <span style={{ fontWeight: 'bold'}}>35 Years</span> to help the needy <br/> with trust and we are happy</p>
                <div className='button'>
                    <button>Be A Part Of Us</button>
                </div>
            </div>
            <div className='icons'>
                <div className='item'>
                    <div className='icon'>
                        <EmojiEvents/>
                    </div>
                    <p>365</p>
                    <p>Total Awards</p>
                </div>
                <div className='item'>
                    <div className='icon'>
                        <EmojiEvents/>
                    </div>
                    <p>365</p>
                    <p>Total Awards</p>
                </div>
                <div className='item'>
                    <div className='icon'>
                        <EmojiEvents/>
                    </div>
                    <p>365</p>
                    <p>Total Awards</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Status