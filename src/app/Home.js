import GarageList from './GarageList'
import 'leaflet/dist/leaflet.css'
import '../css/Home.css'
import Searchbar from './Searchbar'

function Home() {
  return (
    <div>
      <div className='container-1'>
        <Searchbar/>
      </div>

      <div className='container-2'>
        <p className='lable-services'>Car Services</p>
        <div className='service-list'>
          <div className='service'>
            <img src={process.env.PUBLIC_URL + "car.png"} alt="" />
            <div className='service-name'>Car Inspection</div>
          </div>
          <div className='service'>
            <img src={process.env.PUBLIC_URL + "schedule.png"} alt="" />
            <div className='service-name'>Periodic Service</div>
          </div>
          <div className='service'>
            <img src={process.env.PUBLIC_URL + "tire.png"} alt="" />
            <div className='service-name'>Tyre & Wheel</div>
          </div>
          <div className='service'>
            <img src={process.env.PUBLIC_URL + "spray-gun.png"} alt="" />
            <div className='service-name'>Car Painting</div>
          </div>
          <div className='service'>
            <img src={process.env.PUBLIC_URL + "engine.png"} alt="" />
            <div className='service-name'>Engine Repairing</div>
          </div>
          <div className='service'>
            <img src={process.env.PUBLIC_URL + "car-wash.png"} alt="" />
            <div className='service-name'>Car Washing</div>
          </div>
          <div className='service'>
            <img src={process.env.PUBLIC_URL + "car-battery.png"} alt="" />
            <div className='service-name'>Car Batteries</div>
          </div>
          <div className='service'>
            <img src={process.env.PUBLIC_URL + "interior.png"} alt="" />
            <div className='service-name'>Interior Issues</div>
          </div>
        </div>
      </div>
      <div className='container-3'>
        <GarageList/>
        <GarageList/>
      </div>
    </div>
  )
}

export default Home
