import React,{useEffect,useState} from 'react'
import Searchbar from './Searchbar'
import Services from './Services'
import { useLocation} from "react-router-dom"
import '../css/Garage.css'

function Garage() {

  const location = useLocation();
  const { garage } = location.state;

  const services = [
    {src:'/car.png',serviceName:'Car Inspection'},
    {src:'/schedule.png',serviceName:'Periodic Service'},
    {src:'/tire.png',serviceName:'Tyre & Wheel'},
    {src:'/spray-gun.png',serviceName:'Car Painting'},
    {src:'/engine.png',serviceName:'Engine Repairing'}
  ]

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className='container'>
      <Searchbar/>
      <div className='garage col'>
        <div className='row d-flex justify-content-between align-items-center'>
          <div className='col-5'>
            <div className=''>{garage.name}</div>
          </div>
          <div className='col-2 d-flex flex-column justify-content-end align-items-center'>
            <div>
              <img className='img img-fluid' src='/medal.png' alt=""/>
            </div>
            <div>Since 1998</div>
          </div>
        </div>
        <div className='row'>
          <div className='col'>

          </div>
          <div className='col'>

          </div>
        </div>
        <div className='row'>

        </div>
        <div className='row'>
          <Services lable={"Experties"} services={services} />
        </div>
        
        <Services lable={"Experties"} services={services} />
      </div>
      {/* <Searchbar/>
      <div className='garage-details'>
        <div className='name-star-experty'>
          <div className='name-star'>
            <div className='garage-name'>{garage.name}</div>
            <div className='garage-star'>
              <div className='counted-star'>
                <span class="material-symbols-outlined">star_rate</span>
                <span class="material-symbols-outlined">star_rate</span>
                <span class="material-symbols-outlined">star_rate</span>
                <span class="material-symbols-outlined">star_rate</span>
                <span class="material-symbols-outlined">star_rate</span>
              </div>
              <div className="counted-star-no">4.9</div>
            </div>
          </div>
          <div className='experience'>
            <div><img src='/medal.png' alt=""/></div>
            <div>Since 1998</div>
          </div>
        </div>
        <hr style={{marginLeft:'1em',marginRight:'1em',color:'#DCDCDC',border:'1px solid #DCDCDC'}}/>
        <div className='overview-section'>
          <div className='detailMe'>
            <div className='detailMe-location'>
              <span class="material-symbols-outlined">home_pin</span>
              <label className='detailMe-lable'>160 Canon Jackson Dr, York, Toronto, M6M 0B6</label>
            </div>
            <div className='detailMe-call'>
              <span class="material-symbols-outlined">call</span>
              <label className='detailMe-lable'>+1 (647) 829-0551</label>
            </div>
            <div className='detailMe-hours'>
              <div className='day'>
                <lable>Monday</lable>
                <lable>6am - 10pm</lable>
                <lable></lable>
              </div>
              <div className='day'>
                <lable>Tuesday</lable>
                <lable>6am - 10pm</lable>
                <lable></lable>
              </div>
              <div className='day'>
                <lable>Wednesday</lable>
                <lable>6am - 10pm</lable>
                <lable></lable>
              </div>
              <div className='day current'>
                <lable>Thursday</lable>
                <lable>6am - 10pm</lable>
                <lable>Open</lable>
              </div>
              <div className='day'>
                <lable>Friday</lable>
                <lable>6am - 10pm</lable>
                <lable></lable>
              </div>
              <div className='day'>
                <lable>Saturday</lable>
                <lable>6am - 10pm</lable>
                <lable></lable>
              </div>
              <div className='day'>
                <lable>Sunday</lable>
                <lable>6am - 10pm</lable>
                <lable></lable>
              </div>
            </div>
            <div className='detailMe-media'>
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
              <div className='fee'>Reservation Fee: $30 CAD</div>
              <input id='sName' type='text' name='sName' placeholder='Enter your name'/>
              <input id='sCarDetail' type='text' name='sCarDetail' placeholder='Enter car name & model'/>
              <div onClick={()=>{}} className='select-day'>
                <label className='selector'>Select a day</label>
                <label className='date'>26/12/2023</label>
              </div>
              <input id='sDescription' type='text' name='sDesc' placeholder='Define your Issue with the car'/>
              <button type='submit'>Schedule</button>
            </form>
          </div>
        </div>
        <div className='service-section'>
          <Services lable={"Experties"} services={services} />
          <div className='deliverables-section'>
            <p className='deliverable-lable'>Deliverable Services</p>
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
        </div>
        <div className='review-section'></div>
      </div> */}
    </div>
  )
}

export default Garage