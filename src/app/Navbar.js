import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'

function Navbar() {
    return (
      <div className='navbar'>
        <div className='nav-left'>
          <div>
            <label className='lable-1'>Repair</label>
            <label className='lable-2'>mate</label>
          </div>
          <div className='logo'>
            <img src='/settings.png'/>
          </div>
        </div>
        <div className='nav-right'>
          <div className='msg'>
            Let's get your vehicle back on Track
          </div>
          <div>
            <Link to='/signin'>
              <button className='nav-btn'>Sign In</button>
            </Link>
          </div>
          <div className='setting'>
            <span className="material-symbols-outlined">
              settings
            </span>
          </div>
        </div>
      </div>
    )
}

export default Navbar