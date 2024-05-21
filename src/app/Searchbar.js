import React,{useState} from 'react'
import '../css/Searchbar.css'

function Searchbar() {

  return (
    <div className='container d-flex justify-content-center align-items-center mt-5'>
      <div className='searchbar d-flex justify-content-center align-items-center'>
        <div className='inputbox-div col-10'>
          <input
            name="search"
            type="text"
            className="inputbox ps-4"
            placeholder="Look up your favourite garage"
            autocomplete="off"/>
        </div>
        <div className='search-btn-div col-2'>
          <button className='search-btn' type='submit' onSubmit={()=>{}}>
            <div className="d-flex fs-5 justify-content-center align-items-center">
              <span class="material-symbols-outlined find">search</span> Search
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Searchbar