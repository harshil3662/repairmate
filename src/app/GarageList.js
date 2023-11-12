import React from 'react'
import {useState,useEffect} from 'react'
import '../css/GarageList.css'

function GarageList() {
  const [data,setData] = useState([])

  useEffect(()=>{
    fetch('http://localhost:8080/garages')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json()
        })
        .then((responseData) => {
          setData(responseData.list)
        })
        .catch((err) => {
          console.log(err)
        })
  },[data])

  return (
    <div className='garage-list'>
        {data.map((garage)=>{
            return (
                <div className="garage" key={garage._id}>
                    <div className='div1'>
                      <span class="material-symbols-outlined garage-icon">garage_door</span>
                      <a className='garageName' href='/#'>{garage.name}</a>
                    </div>
                    <div className='div2'>
                      <span class="material-symbols-outlined location-icon">location_on</span>
                      <a className='location' href='/#'>{garage.location}, Toronto, On</a>
                    </div>
                    <div className='div3'>
                      <span class="material-symbols-outlined mail-icon">mail</span>
                      <a className='email' href='/#'>{garage.email}</a>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default GarageList