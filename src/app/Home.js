import GarageList from './GarageList'
import 'leaflet/dist/leaflet.css'
import '../css/Home.css'
import Searchbar from './Searchbar'
import Services from './Services'

function Home() {

  const services = [
    {src:'/car.png',serviceName:'Car Inspection'},
    {src:'/schedule.png',serviceName:'Periodic Service'},
    {src:'/tire.png',serviceName:'Tyre & Wheel'},
    {src:'/spray-gun.png',serviceName:'Car Painting'},
    {src:'/engine.png',serviceName:'Engine Repairing'},
    {src:'/car-wash.png',serviceName:'Car Washing'},
    {src:'/car-battery.png',serviceName:'Car Batteries'},
    {src:'/interior.png',serviceName:'Interior Issues'}
  ]

  return (
    <div>
      <Searchbar/>
      <div className='container-2'>
        <Services lable={"Popular Car Services"} services={services}/>
      </div>
      <div className='container-3'>
        <GarageList/>
        <GarageList/>
      </div>
    </div>
  )
}

export default Home
