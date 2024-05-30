import React,{useState} from 'react'
import '../css/Searchbar.css'

function Searchbar() {

  return (
    <div className='container d-flex justify-content-center align-items-center mt-5'>
      <div className='p-2 searchbar border rounded-pill d-flex justify-content-center align-items-center'>
        <div className='inputbox-div col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-9 form-floating'>
          <input
            id='search'
            name="search"
            type="text"
            className="inputbox rounded-pill fs-5 form-control"
            placeholder="Look up your favourite garage"
            autocomplete="off"/>
            <label for='search'>Look up your favourite garage</label>
        </div>
        <div className='search-btn-div rounded-pill col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3'>
          <button className='search-btn rounded-pill fw-bold' type='submit' onSubmit={()=>{}}>
            <div className="d-flex justify-content-center align-items-center">
              <i className="bi bi-search fs-5 fw-bold"></i>
              <span className="ms-1 fw-bold">Search</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Searchbar