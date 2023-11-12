import React from 'react'
import '../css/Searchbar.css'
import { useState } from 'react'

function Searchbar() {
  const [isHovered, setIsHovered] = useState(false)
  const [style,setStyle] = useState({
    display:"none"
  })

  return (
    <div className='searchBar'>
      <input name='search' className='input-box' placeholder='Look up your favourite garage'/>
      <button className={`search-btn ${isHovered ? "hovered" : ""}`} onMouseEnter={()=>{
        setStyle({display:"block"})
        setIsHovered(true)
      }}
      onMouseLeave={() => {
        setStyle({ display: "none" });
        setIsHovered(false)
      }}
      >
        <lable className="search-lable-div">
          <span class="material-symbols-outlined search-icon">search</span>
          <label style={style}>Search</label>
        </lable>
      </button>
    </div>
  )
}

export default Searchbar