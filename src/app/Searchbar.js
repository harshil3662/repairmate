import React,{useState} from 'react'
import '../css/Searchbar.css'

function Searchbar() {

  return (
    <div className='container d-flex justify-content-center align-items-center mt-5'>
      <div className='searchbar d-flex justify-content-center align-items-center'>
        <div className='inputbox-div col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-9'>
          <input
            name="search"
            type="text"
            className="inputbox fs-5 ps-4"
            placeholder="Look up your favourite garage"
            autocomplete="off"/>
        </div>
        <div className='search-btn-div col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3'>
          <button className='search-btn fw-bold' type='submit' onSubmit={()=>{}}>
            <div className="d-flex justify-content-center align-items-center">
              <span className="fw-bold material-symbols-outlined find">search</span> Search
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Searchbar