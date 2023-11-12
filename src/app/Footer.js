import React from 'react'
import '../css/Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
      <div className='tile1'>
        <h4>Help center</h4>
        <a href='/#'>Lorem ipsum</a><br/>
        <a href='/#'>Lorem ipsum</a><br/>
        <a href='/#'>Lorem ipsum</a><br/>
        <a href='/#'>Lorem ipsum</a><br/>
        <a href='/#'>Lorem ipsum</a>
      </div>
      <div className='tile2'>
        <p>Hostings</p>
        <a href='/#'>Lorem ipsum</a><br/>
        <a href='/#'>Lorem ipsum</a><br/>
        <a href='/#'>Lorem ipsum</a><br/>
        <a href='/#'>Lorem ipsum</a><br/>
        <a href='/#'>Lorem ipsum</a>
      </div>
      <div className='tile3'>
        <p>Repairmate</p>
        <a href='/#'>Lorem ipsum</a><br/>
        <a href='/#'>Lorem ipsum</a><br/>
        <a href='/#'>Lorem ipsum</a><br/>
        <a href='/#'>Lorem ipsum</a><br/>
        <a href='/#'>Lorem ipsum</a>
      </div>
    </div>
  )
}

export default Footer