import React from 'react'
import '../css/Searchbar.css'
import { useState } from 'react'

function Searchbar() {
  const [style,setStyle] = useState({
    display:"none"
  })

  return (
    <div className='searchbar-container'>
      <div className='searchBar'>
        <div>
          <input name='search' className='input-box' placeholder='Look up your favourite garage'/>
        </div>
        <div>
          <button className={'search-btn'} onMouseEnter={()=>{
            setStyle({display:"block"})
          }}
          onMouseLeave={() => {
            setStyle({ display: "none" })
          }}
          >
            <lable className="search-lable-div">
              <span class="material-symbols-outlined search-icon">search</span>
              <label style={style}>Search</label>
            </lable>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Searchbar