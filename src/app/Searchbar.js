import React from 'react'
import '../css/Searchbar.css'

function Searchbar() {

  return (
    <div className='container d-flex justify-content-center align-items-center mt-5'>
      <div className='searchbar d-flex justify-content-center align-items-center'>
        <div className='inputbox-div col-9'>
          <input
            name="search"
            type="text" 
            className="inputbox ps-3"
            placeholder="Look up your favourite garage"/>
        </div>
        <div className='search-btn-div col-2'>
          <button className='search-btn' type='submit' onSubmit={()=>{}}>
            <lable className="d-flex justify-content-center align-items-center">
               <span class="material-symbols-outlined">search</span> Search
            </lable>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Searchbar