import React,{useEffect,useState} from 'react'
import Searchbar from './Searchbar'
import Services from './Services'
import { useLocation} from "react-router-dom"
import '../css/Garage.css'

function Garage() {

  const services = [
    {src:'/car.png',serviceName:'Car Inspection'},
    {src:'/schedule.png',serviceName:'Periodic Service'},
    {src:'/tire.png',serviceName:'Tyre & Wheel'},
    {src:'/spray-gun.png',serviceName:'Car Painting'},
    {src:'/engine.png',serviceName:'Engine Repairing'}
  ]

  return (
    <div>
      <Searchbar/>
      <div className='garage-details'>
        <div className='name-star-experty'>
          <div>Peter's Garage For Imports</div>
          <div>4.9 stars</div>
          <div>Since 1998</div>
        </div>
        <div className='overview-section'>
          <div className='detailMe'>
            <div>160 Canon Jackson Dr, York, Toronto, M6M 0B6</div>
            <div>+1 (647) 829-0551</div>
            <div>Opening Hours:</div>
            <div className='social-media'>
              <a  href='#' className='twitter'>
                <img src="/twitter.png" alt="twitter" />
              </a>
              <a href='#' className='facebook'>
                <img src="/facebook.png" alt="facebook" />
              </a>
              <a href='#' className='instagram'>
                <img src="/instagram.png" alt="instagram" />
              </a>
            </div>
          </div>
          <div className='schedule-box'>
            <form>
              <input id='sName' type='text' name='sName' placeholder='Enter your name'/>
              <input id='sCarDetail' type='text' name='sCarDetail' placeholder='Enter car name & model'/>
              <div className='select-day'>
                <label>Select a day</label>
                <label>26/12/2023</label>
              </div>
              <button type='submit'>Schedule</button>
            </form>
          </div>
        </div>
        <div className='service-section'>
          <p className='deliverable-lable'>Deliverable Services</p>
          <div className='deliverables-section'>
            <div className='deliverables'>
              <div className='deliverable'>
                <span class="material-symbols-outlined">check_circle</span>
                <label className='name'>Air & cabin filter replacement</label>
              </div>
              <div className='deliverable'>
                <span class="material-symbols-outlined">check_circle</span>
                <label className='name'>Battery</label>
              </div>
              <div className='deliverable'>
                <span class="material-symbols-outlined">check_circle</span>
                <label className='name'>Electrical</label>
              </div>
              <div className='deliverable'>
                <span class="material-symbols-outlined">check_circle</span>
                <label className='name'>Auto engine diagnostic</label>
              </div>
              <div className='deliverable'>
                <span class="material-symbols-outlined">check_circle</span>
                <label className='name'>Steering & suspension repair</label>
              </div>
              <div className='deliverable'>
                <span class="material-symbols-outlined">check_circle</span>
                <label className='name'>Tires</label>
              </div>
              <div className='deliverable'>
                <span class="material-symbols-outlined">check_circle</span>
                <label className='name'>Oil change</label>
              </div>
              <div className='deliverable'>
                <span class="material-symbols-outlined">check_circle</span>
                <label className='name'>Engine repair</label>
              </div>
            </div>
          </div>
          <Services lable={"Experties"} services={services} />
        </div>
        <div className='review-section'></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Garage