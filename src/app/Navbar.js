import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'

function Navbar() {
    return (
      <div className='navbar'>
        <div className='nav-left'>
          <div className='name'>Repairmate</div>
          <div>
            <span class="material-symbols-outlined logo">
                build_circle
            </span>
          </div>
        </div>
        <div className='nav-right'>
          <div className='msg'>
            Let's get your vehicle running back on the road!
          </div>
          <div>
            <Link to='/signin'>
              <button>Sign In</button>
            </Link>
          </div>
          <div>
            <span className="material-symbols-outlined setting">
              settings
            </span>
          </div>
        </div>
      </div>
    )
}

export default Navbar